# sqs-lambda-restapi



* Create SQS queue using AWS console and copy the ARN
* paste SQS ARN to serverless file at function events section.
* delploy lambda function using "$ sls deploy" 
* add sqs queue url to "sqs.js" file
* run the API server "npm start"

* Following API will send request body data in SQS queue

    curl --location --request POST 'localhost:8080/sendMessage' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "id": "vbsdovcbsdobvs",
        "email": "test@gmail.com",
        "status": "inactive"
    }'