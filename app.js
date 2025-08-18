const express = require('express');
const app = express();
const indexRouter = require('./routers/indexRouter.js');
const newMessagesRouter = require('./routers/newMessagesRouter.js');
const messageDetailRouter = require('./routers/messageDetail.js');
const path = require('path');
const stylePath = path.join(__dirname, 'styles');

app.use(express.static(stylePath));
app.use(express.urlencoded({ extended: true }));

app.use('/new', newMessagesRouter);
app.use('/message', messageDetailRouter);
app.use('/', indexRouter);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on localhost server in port ${PORT}`);
})