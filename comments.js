// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Add body-parser middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Add comments data
let comments = [
  { id: 1, author: 'user1', content: 'comment1' },
  { id: 2, author: 'user2', content: 'comment2' },
  { id: 3, author: 'user3', content: 'comment3' },
];

// Add GET /comments route to return all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Add POST /comments route to create a new comment
app.post('/comments', (req, res) => {
  const { author, content } = req.body;
  const id = comments.length + 1;
  const newComment = { id, author, content };
  comments.push(newComment);
  res.json(newComment);
});

// Add GET /comments/:id route to return the comment with the given id
app.get('/comments/:id', (req, res) => {
  const id = Number(req.params.id);
  const comment = comments.find(comment => comment.id === id);
  res.json(comment);
});

// Add PUT /comments/:id route to update the comment with the given id
app.put('/comments/:id', (req, res) => {
  const id = Number(req.params.id);
  const { author, content } = req.body;
  const comment = comments.find(comment => comment.id === id);
  comment.author = author;
  comment.content = content;
  res.json(comment);
});

// Add DELETE /comments/:id route to delete the comment with the given id
app.delete('/comments/:id', (req, res) => {
  const id = Number(req.params.id);
  comments = comments.filter(comment => comment.id !== id);
  res.json({ message: `Comment ${id} has been deleted` });
});

// Start web server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});