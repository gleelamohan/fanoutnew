exports.PORT = process.env.PORT || 3001; // use heroku's dynamic port or 3001 if localhost
exports.DEBUG = true;
exports.ENVIRONMENT = 'production';


exports.CALLBACK_URL = process.ENV.CALLBACKURL;
exports.TOPIC = '/event/' + process.ENV.EVENTCHANNEL;
exports.REPLAY_ID = -1;

exports.CLIENT_ID = process.ENV.CLIENTID;
exports.CLIENT_SECRET = process.ENV.CLIENTSECRET;
exports.USERNAME = process.ENV.USERNAME;
exports.PASSWORD = process.ENV.PASSWORD;
