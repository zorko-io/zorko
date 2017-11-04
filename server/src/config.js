require('dotenv').config()

console.log(process.env)

module.exports = {
  auth: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID,
      secret: process.env.GITHUB_CLIENT_SECRET,
      calbackUrl: process.env.GITHUB_CLIENT_CALLBACK_URL
    },
    sessionSecret: process.env.SESSION_SECRET
  }
}
