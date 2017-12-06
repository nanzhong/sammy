const fs = require('fs');
const express = require('express')
const morgan = require('morgan')
const app = express()

const mountFolder = '/sammy'
const sammies = [
  'sammy-oo',
  'sammy-aa',
  'sammy-hockey',
  'sammy-pizza',
  'sammy-ama',
  'sammy-giants',
  'sammy-jets',
  'sammy-bootcamp',
  'sammy-unicorn',
  'sammy-punk',
  'sammy-xray',
  'sammy-dino',
  'sammy-bootcamp'
]

app.use(morgan('combined'))
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
  let mount = null
  if (fs.existsSync(mountFolder)) {
    mount = []
    fs.readdirSync(mountFolder).forEach(file => {
      mount.push(file)
    })
  }

  res.render('index', {
    sammyImg: sammies[Math.floor(Math.random()*sammies.length)],
    env: process.env,
    mount: mount
  })

  console.log()
})

app.listen(80, () => console.log('Hello from Sammy!\nHTTP Server running on port 80!'))
