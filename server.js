const express = require('express');
const path = require('path');
const app = express();
const port = 8080; // Bạn có thể đổi port khác nếu muốn

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Quiz App đang chạy tại: http://localhost:${port}`);
});
