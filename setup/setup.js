require("dotenv").config({ path: __dirname + "/../.env" });
const fs = require("fs");

const mongoose = require("mongoose");
const { db } = require("../models/Admin");
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises

// import all of our models - they need to be imported only once

const products = JSON.parse(
  fs.readFileSync(__dirname + "/product.json", "utf-8")
);

//console.log(products);
// async function deleteData() {
//   console.log("😢😢 Goodbye Data...");
//   await admin.remove();
//   console.log(
//     "Data Deleted. To load sample data, run\n\n\t npm run sample\n\n"
//   );
//   process.exit();
// }

async function loadData() {
  try {
    await db.collection('products').insertMany(products);
    console.log("👍👍👍👍👍👍👍👍 Done!");
    process.exit();
  } catch (e) {
    console.log(
      "\n👎👎👎👎👎👎👎👎 Error! The Error info is below but if you are importing sample data make sure to drop the existing database first with.\n\n\t npm run blowitallaway\n\n\n"
    );
    console.log(e);
    process.exit();
  }
}

async function createAdmin() {
  try {
    const Admin = require("../models/Admin");
    var newAdmin = new Admin();
    const passwordHash = newAdmin.generateHash("123456");
    //console.log(passwordHash);

    await new Admin({
      email: "john@email.com",
      password: passwordHash,
      name: "admin",
      surname: "demo",
    }).save();
    console.log("👍👍👍👍👍👍👍👍 Admin created : Done!");
    process.exit();
  } catch (e) {
    console.log("\n👎👎👎👎👎👎👎👎 Error! The Error info is below");
    console.log(e);
    process.exit();
  }
}

//createAdmin();
loadData();
//  if (process.argv.includes("--delete")) {
//   deleteData();
//  } else {
//   deleteData();

//   //   loadData();
//  }
