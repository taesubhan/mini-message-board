const { Router } = require('express');
const newMessagesRouter = Router();
const { renderNewMessage, pushMessageToDatabase } = require('../controllers/newMessagesController.js');

newMessagesRouter.get('/', renderNewMessage);
newMessagesRouter.post('/', pushMessageToDatabase);

module.exports = newMessagesRouter;