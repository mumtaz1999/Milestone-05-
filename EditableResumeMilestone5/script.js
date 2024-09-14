const express = require('express');
const app = express();

app.get('/resume/:username', (req, res) => {
  const username = req.params.username;
  res.send(`This is the resume for ${username}.`); // Replace with actual resume content
});

app.listen(3000, () => console.log('Server running on port 3000'));
