/* eslint no-console: 0 */
const faker = require("faker");
const mongoose = require("mongoose");

const Contact = require("../model/Contact");

mongoose.connect(
  "mongodb://localhost:27017/contact-app",
  {
    useMongoClient: true
  }
);
mongoose.connection.on("error", console.error);

async function testApp() {

  try {
    await Contact.deleteMany({});
    console.log("Contacts purged!");
  } catch (err) {
    console.error(err);
  }

  const contactPromises = new Array(15).fill(null).map(() => {
    const contact = new Contact({
      first_name: faker.name.firstName(),
      telephone: faker.phone.phoneNumber()
    });
    return contact.save();
  });
  try {
    await Promise.all(contactPromises);
    console.log("Contacts seeded!");
  } catch (err) {
    console.log(err);
  }
  mongoose.connection.close();
}

testApp();




