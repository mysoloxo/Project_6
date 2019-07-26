//Creating requirement variables
const path = require('path');
const express = require('express');
const jdata = require('./data.json');


//storing express inside a variable app to be used in application 
const app = express();

// app.use(express.bodyParser());

//storing port in variable to be used in application
const port = 3000;

//Set view engine to pug
app.set('view engine', 'pug');

//adding static files
app.use('/static', express.static(path.join(__dirname, 'public')));

//Index Home page route
app.get('/', (req, res) => {
  res.render('index', {projects: jdata.projects});
});

//About page route
app.get('/about', (req, res) => {
  res.render('about');
});


//Projects page routes
app.get('/projects/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  const ids = [];
  for(let project of jdata.projects) {
    ids.push(parseInt(project.id));
  }
  
  if(ids.includes(id)) {
  res.render('project', {project: jdata.projects[id]});
 
  } else {
   const error = new Error('Oops Project File Does Not Exist');
   error.status = 500;
  next(error);
   }
  
});



//creating default 404 error route handler
app.use((req, res, next) => {
  const error = new Error('Oops Page Not Found');
  error.status = 404;
  next(error);
});

//Creating Error handler
app.use((err, req, res, next) => {
  res.render('error', {error: err});
  console.log(err);
});

//Listen statement
app.listen(port, () => console.log(` The application is listening on port ${port}`));