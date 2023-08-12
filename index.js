const express = require('express');
const cors = require('cors');

const { sqsSendMessage } = require('./sqs');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.send('success');
});

app.get('/test', async (req, res) => {
	const sqsRes = await sqsSendMessage(JSON.stringify({ message: 'hello world' }));
	res.send(sqsRes);
});

app.post('/sendMessage', async (req, res) => {
	const sqsRes = await sqsSendMessage(JSON.stringify(req.body));
	res.send(sqsRes);
});

app.listen(8080, () => {
	console.log('server listening on port ', 8080);
});
