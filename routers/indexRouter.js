const { Router } = require('express');
const indexRouter = Router();
const { renderIndex } = require('../controllers/indexController');

indexRouter.get('/', renderIndex);

module.exports = indexRouter;

