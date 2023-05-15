const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const SITE_NAME = 'VukMaric';

// Serve static files from the 'public' directory
const sitePath = "D:/VS Code Vuk/Web Dev/Personal Site";
app.use(express.static(sitePath));

// Set the view engine to use HTML files
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Route for the home page
app.get('/', (req, res) => {
  res.render('index', { siteName: SITE_NAME });
});

const directoryPath = path.join(__dirname, 'resources','certificates');

app.use(express.static('images'));

app.get('/resources/certificates', (req, res) => {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }
    res.json(files);
  });
});

// Middleware function to handle 404 errors
app.use((req, res, next) => {
  res.status(404).sendFile('D:/VS Code Vuk/Web Dev/Personal Site/404.html');
});


// Start the server
app.listen(PORT, () => {
  console.log(`${SITE_NAME} running at http://localhost:${PORT}`);
});
