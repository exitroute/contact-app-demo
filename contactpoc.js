/* eslint no-console: 0 */

const mongoose = require("mongoose");
const Contact = require("./model/Contact");

mongoose.connect(
  "mongodb://localhost:27017/contact-app",
  {
    useMongoClient: true
  }
);
mongoose.connection.on("error", console.error);

async function testApp() {
  const testContact = new Contact({
    first_name: "Bill",
    telephone: "08981006363"
  });
  console.log(testContact);
  await testContact.save();
  console.log("test saved");
}

testApp().then(() => {
  mongoose.connection.close();
});




