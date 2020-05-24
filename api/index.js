const app = require('express')()
module.exports = { path: '/api', handler: app }
app.get('/hello', (req, res) => {
    console.log('hello nuxt in text')
    setTimeout(() => {
        res.send('world')
    }, 2000)
})