import AWS from 'aws-sdk';

const ses = new AWS.SES({ region: 'ap-south-1' });

async function sendMail(event, context) {
  // const record = event.Records[0];
  // console.log('record processing', record);

  // const email = JSON.parse(record.body);
  // const { subject, body, recipient } = email;

  const params = {
    Source: 'rawyelll@gmail.com',
    Destination: {
      ToAddresses: ['rawyelll@gmail.com'],
    },
    Message: {
      Body: {
        Text: {
          Data: 'HEYY',
        },
        Html: {
          Data: `<html><head><title>Your Token</title><style>h1{color:#f00;}</style></head><body><h1>Hello ROyal,</h1><div>Your Device Validation Token is bleh<br/>Simply copy this token and paste it into the device validation input field.</div></body></html>`,
        },
      },
      Subject: {
        Data: 'sss',
      },
    },
  };

  try {
    const result = await ses.sendEmail(params).promise();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export const handler = sendMail;
