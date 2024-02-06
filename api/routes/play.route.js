import express from "express";
import user_p from '../controllers/user.controller.js'

const router = express.Router();

router.get('/play', user_p);
export default play