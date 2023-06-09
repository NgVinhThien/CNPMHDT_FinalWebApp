import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import categories from './router/categories.js'
import articles from './router/articles.js'
import tags from './router/tags.js';
import _AuthMiddleWare from './common/_AuthMiddleWare.js';


const app= express();
const PORT= process.env.port || 5000;


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(cors());

app.use('/', categories);
app.use('/', articles);
app.use('/', tags);


app.use(_AuthMiddleWare.isAuth);

app.listen( PORT, ()=>{
    console.log("Running server...")
});
