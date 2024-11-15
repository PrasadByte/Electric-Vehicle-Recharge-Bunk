const express = require('express');
const { createBunk, getBunks, getBunkById } = require('../controllers/bunkController');

const router = express.Router();

router.post('/', createBunk); // Admin creates bunk
router.get('/', getBunks); // User fetches all bunks
router.get('/:id', getBunkById); // User fetches a specific bunk

module.exports = router;
