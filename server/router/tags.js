import express from 'express';
import {getAllTags} from '../controller/tags.js'
const router= express.Router();

router.get('/tags', getAllTags);


export default router;