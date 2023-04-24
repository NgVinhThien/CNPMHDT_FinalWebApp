import express from 'express'
import {getHotArticle} from '../controller/articles.js'
const router= express.Router();

router.get('/getHotArticle', getHotArticle);

export default router;

