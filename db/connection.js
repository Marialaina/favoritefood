require("dotenv").config();
const {MONGODB_URL} = process.env
const mongoose = require(`mongoose`);

//MONGOOSE CONFIGURATION OBJECT TO AVOID WARNINGS
const config = {
    useNewUrlParser: true,
    UseUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}

//MAKING THE DATABASE CONNECTION
mongoose.connect(MONGODB_URL, config)

//HANDLING CONNECTION EVENTS
mongoose.connection
//event for when the connection opens
.on(`open`, () => console.log(`STATUS`, `Connected to Mongo!!`))

//event when connection closes
.on(`close`, () => console.log(`STATUS`, `Disconnected to Mongo!!`))

//Event for Connection Errors

.on(`error`, error => console.log(`ERROR`, error))

module.exports = mongoose