const express = require('express');
const morgan = require('morgan');
const app = express();
//settings

app.set ('port',  process.env.PORT || 3000);

// middleware
app.use(morgan('dev'));
app.use(express.json());  
//routes


app.use(require('./routes/task.route'));
//satatic files

// s tarting the sever

app.listen(app.get('port'), ()=>{
   console.log(`server on port ${app.get('port')}`)
});