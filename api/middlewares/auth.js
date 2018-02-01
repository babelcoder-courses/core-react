import jwt from 'jsonwebtoken'
import config from '../config'
import { Users } from '../app/users'

export default function(req, res, next) {
  const accessToken = req.cookies.accessToken

  if (!accessToken) return next()

  jwt.verify(accessToken, config.secretKey, (err, decoded) => {
    if (err) return next()

    req.user = Users.find(decoded.sub)
    next()
  })
}
