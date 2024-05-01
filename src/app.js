require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const session = require('express-session');
const mainRouter = require('./routes/main');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(methodOverride('_method'));
app.use(session({
  secret : 'booksChallenge',
  saveUninitialized : true,
  resave : true
}));

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use('/', mainRouter);

app.listen(3000, () => {
  console.log('listening in http://localhost:3000');
});
