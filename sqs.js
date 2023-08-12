const AWS = require('aws-sdk');

AWS.config.update({ region: 'ap-south-1' });

const queueURL = 'https://sqs.ap-south-1.amazonaws.com/<account-id>/test-queue-sqs';

const sqsSendMessage = async (data) => {
	const sqs = new AWS.SQS({ apiVersion: '2012-11-05' });

	const params = {
		MessageBody: data,
		QueueUrl: queueURL
	};

	return await new Promise((res, rej) => {
		sqs.sendMessage(params, function(err, data) {
			if (err) {
				console.log('Error', err);
				rej(err);
			} else {
				console.log('Success', data.MessageId);
				res(data);
			}
		});
	});
};

module.exports = {
	sqsSendMessage
};
