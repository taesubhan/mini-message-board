const messages = require('../messages.js');

const renderNewMessage = (req, res) => {
    res.render('form');
}

const pushMessageToDatabase = (req, res) => {
    const {messageText, sendFrom} = req.body;
    messages.push({text: messageText, user: sendFrom, added: new Date()});
    res.redirect('/');
}

module.exports = { renderNewMessage, pushMessageToDatabase };