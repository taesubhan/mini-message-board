const messages = require('../messages.js');

const renderIndex = (req, res) => {
    res.render('index', {messages: messages});
}

module.exports = { renderIndex };