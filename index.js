const express = require('express');
const exhbs = require('express-handlebars');
const session = require('express-session');
const fileStore = require('session-file-store')(session);
const flash = require('express-flash');

const app = express();

const conn = require('./db/conn');

// middlewares

conn
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
