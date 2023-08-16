const mongoose = require("mongoose");

const connectToDb = async (url) => {
  try {
    const connect = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ssl: true,
      tlsAllowInvalidCertificates: true,
    });
    console.log("connected successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToDb;
