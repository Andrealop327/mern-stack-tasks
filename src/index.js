const express = require('express');
const morgan = require('morgan');
const path = require('path');
//conectar a la base de datos mongo
const {mongoose} = require('./database');


const app = express();
//settings

app.set('port',  process.env.PORT || 3000);

// middleware
app.use(morgan('dev'));
app.use(express.json());  


//routes
app.use('/api/tasks',require('./routes/task.route'));

//static files
app.use(express.static(path.join(__dirname, 'public')));


// s tarting the sever

app.listen(app.get('port'), ()=>{
   console.log(`server on port ${app.get('port')}`)
});