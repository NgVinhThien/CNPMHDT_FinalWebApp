import express from 'express';
import {getAll, getMainCategories, getSubCategories} from '../controller/categories.js'
const router= express.Router();

router.get('/categories', getAll);
router.get('/mainCategories', getMainCategories);
router.get('/subCategories', getSubCategories);

export default router;