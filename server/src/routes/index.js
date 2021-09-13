const router = require('express').Router();

const CharacterController = require('../controllers/CharacterController');

router.get('/characters', CharacterController.list) 

module.exports = router;