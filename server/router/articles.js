import express from 'express'
import {getHotArticle, getDetails} from '../controller/articles.js'
const router= express.Router();

router.get('/getHotArticle', getHotArticle);
router.get('/getDetails/:articleId', getDetails)
export default router;

