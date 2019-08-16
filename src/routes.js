const express = require('express');
const devController = require('./controllers/devController');
const LikesController = require('./controllers/LikesController');
const DislikesController = require('./controllers/DislikesController');

const routes = express.Router();

routes.get('/devs', devController.index)
routes.post('/devs', devController.store);

routes.post('/devs/:devId/likes', LikesController.store);
routes.post('/devs/:devId/dislikes', DislikesController.store);

module.exports = routes;
