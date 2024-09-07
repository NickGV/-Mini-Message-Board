const express = require('express')

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

const router = express.Router()

router.get('/', (req, res) => {
  res.render('index', {title: "Mini Message Board", messages: messages})
})

router.get('/new', (req, res) => {
  res.render('form', {title: "Add a new Message"})
})

router.post('/new', (req, res) => {
  console.log(req.body)
  const message = {
    user: req.body.user,
    text: req.body.text,
    added: new Date()
  }
  messages.push(message)
  res.redirect('/')
})

module.exports = router