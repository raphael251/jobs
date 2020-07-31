const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json');

const botsController = require('./controllers/botsController');
const chatsController = require('./controllers/chatsController');
const messagesController = require('./controllers/messagesController');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/bots', botsController);
app.use('/chats', chatsController);
app.use('/messages', messagesController);

app.listen(3000);