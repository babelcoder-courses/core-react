import path from 'path'
import React from 'React'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import express from 'express'
import httpProxy from 'http-proxy'
import Loadable from 'react-loadable'
import { getBundles } from 'react-loadable/webpack'
import { matchRoutes, renderRoutes } from 'react-router-config'

import stats from '../../dist/react-loadable.json'
import routes from '../shared/routes'
import { configureStore } from '../shared/store'
import renderHtml from './renderHtml'
import App from '../shared/features/ui/components/App'

const PORT = process.env.PORT || 8080
const app = express()
const targetUrl = process.env.API_URL
const proxy = httpProxy.createProxyServer({
  target: targetUrl
})

app.use('/dist', express.static(path.join(__dirname, '../..', 'dist')))

app.use('/api', (req, res) => {
  proxy.web(req, res, { target: `${targetUrl}/api` })
})

app.get('*', (req, res) => {
  const store = configureStore()
  const branch = matchRoutes(routes, req.url)
  const promises = branch.map(({ route, match }) => {
    let fetchData = route.fetchData
    return fetchData instanceof Function
      ? fetchData(store.dispatch, match.params)
      : Promise.resolve(null)
  })

  return Promise.all(promises).then(data => {
    let context = {}
    let modules = []
    const content = (
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
    )

    const html = ReactDOMServer.renderToString(
      <Loadable.Capture report={moduleName => modules.push(moduleName)}>
        {content}
      </Loadable.Capture>
    )
    const bundles = getBundles(stats, modules)

    res.status(200).send(renderHtml(html, store.getState(), bundles))
  })
})

app.listen(PORT, error => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> Listening on port ${PORT}.`)
  }
})
