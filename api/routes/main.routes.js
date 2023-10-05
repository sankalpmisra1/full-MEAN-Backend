var express = require('express');
var router = express.Router();
const mainController = require('../controllers/main.controller');

//HTTP Verbs: POST, GET, PUT, DELETE

//Post /api/provider
router.post('/providers', mainController.create);

//GET /api/provider
router.get('/providers', mainController.readAll);

//GET One /api/provider/123
router.get('/providers/:id', mainController.readOne);

//PUT /api/provider/123
router.put('/providers/:id', mainController.update);

//Delete /api/provider/123
router.delete('/providers/:id', mainController.deleteOne);

//Delete All /api/provider
router.delete('/providers', mainController.deleteAll);

module.exports = router;