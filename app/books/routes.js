const express = require('express')
const router = express.Router()
const db = require('../../lib/db')

router.get('/books', (req, res) => {
  const books = db.books.findAll().slice(0).sort((a, b) => a.name > b.name ? 1 : 0)
  res.json(books)
})

router.get('/books/:id', (req, res) => {
  const book = db.books.find(req.params.id)
  res.json(book)
})

router.post('/books', (req, res) => {
  const newBook = db.books.insert({
    "title": req.body.title,
    "subtitle": req.body.subtitle,
    "author": req.body.author,
    "published": req.body.published,
    "publisher": req.body.publisher,
    "pages": req.body.pages,
    "description": req.body.description,
    "website": req.body.website
  })
  res.json(newBook)
})

// router.patch('/books/:id', (req, res) => {
//    const book = db.books.findByIdAndUpdate(req.params.id, { title: "hello world"})
//    res.json(db.books.findAll())
// })

router.delete('/books/:id', (req, res) => {
  let selectedBook = db.books.find(req.params.id)
  db.books.delete(req.params.id)
  res.json(selectedBook)

})



module.exports = router
