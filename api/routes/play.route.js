import express from "express";
import play from '../controllers/play.controller.js'

const router = express.Router();

router.get('/play', play);
export default play