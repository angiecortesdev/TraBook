const express = require('express') ;
const morgan = require('morgan');
const exphbs = require('express-handlebars')



require('dotenv').config();
require ('colors')

//Initialization
const app = express();


//Settings
app.set('port', process.env.PORT || 4120);
app.engine('.hbs',exphbs({
    extname: '.hbs'
}));






//Middlewares
app.use(morgan('dev')); //Logs every request to the console in a pretty

//Global Variables

//Routes
app.use(require('./routes/index.js'));


// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server is running on port'.rainbow, app.get('port').rainbow)
}) 