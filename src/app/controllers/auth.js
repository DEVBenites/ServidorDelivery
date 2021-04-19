const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

var TeleSignSDK = require('telesignsdk');
const customerId = "6B13645B-C7B9-4CE9-B22B-6174B1D7C943";
const apiKey = "fx2030VjTXdRQMX/TGR6NBMAQ2x5u10SEWOONQYLaHd7+Rmca+sAaj2u7US098qie9/EeYBC8RVpAu3kY1iiGQ==";
const rest_endpoint = "https://rest-api.telesign.com";
const timeout = 10*1000; // 10 secs

const client = new TeleSignSDK( customerId,
  apiKey,
  rest_endpoint,
  timeout // optional
  // userAgent
);

const phoneNumber = "5518996588116";
const message = "Olá tudo bom ? seu nome é gabriel";
const messageType = "ARN";
function messageCallback(error, responseBody) {
  if (error === null) {
      console.log(`Messaging response for messaging phone number: ${phoneNumber}` +
          ` => code: ${responseBody['status']['code']}` +
          `, description: ${responseBody['status']['description']}`);
  } else {
      console.error("Unable to send message. " + error);
  }
}
function voiceCallback(error, responseBody) {
  if (error === null) {
      console.log(`Messaging response for messaging phone number: ${phoneNumber}` +
          ` => code: ${responseBody['status']['code']}` +
          `, description: ${responseBody['status']['description']}`);
  } else {
      console.error("Unable to send message. " + error);
  }
}
const Controller = { 


    number: async (req,res) => {
      client.voice.call(voiceCallback, phoneNumber, message, messageType);
    },


}

module.exports = Controller