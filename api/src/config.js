require('dotenv').config()

export default {
  port: process.env.PORT || 80,
  secretKey: process.env.SECRET_KEY
}