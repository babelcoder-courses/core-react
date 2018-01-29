import jwt from 'jsonwebtoken'
import config from '../config'
import { Users } from '../app/users'

export default function(req, res, next) {
  const authHeader = req.header('Authorization')

  if(!authHeader) return next()

  const accessToken = authHeader.match(/Bearer (.*)/)[1]

  jwt.verify(accessToken, config.secretKey, (err, decoded) => {
    if(err) return next()

    req.user = Users.find(decoded.sub)
    next()
  })
}