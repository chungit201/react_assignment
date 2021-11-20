const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config/config');



mongoose.connect(config.mongoose.url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log('Connected to MongoDB');
  app.listen(config.port, () => {
    console.log(`Listening to port ${config.port}`);
  });
}).catch(e => {
  console.log(e)
});




