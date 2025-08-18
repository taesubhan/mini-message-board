const messages = require('../messages.js');

const renderMessageDetail = (req, res) => {
    const id = req.params.id;
    const message = messages[id];

    res.render('messageInfo', {user: message.user, text: message.text, added: message.added});
}

module.exports = { renderMessageDetail }