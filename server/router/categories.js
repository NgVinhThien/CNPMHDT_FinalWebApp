import express from 'express';
import {getAll} from '../controller/categories.js'
const router= express.Router();

router.get('/categories', getAll);

export default router;