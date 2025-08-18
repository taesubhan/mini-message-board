const { Router } = require('express');
const messageDetailRouter = Router();
const { renderMessageDetail } = require('../controllers/messageDetailController.js');

messageDetailRouter.get('/:id', renderMessageDetail);

module.exports = messageDetailRouter;