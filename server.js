// let express = require("express");
// let colors = require("colors");
// let books = require("./db/books.json");
// const { create } = require("domain");
// const { read } = require("fs");
// let app = express();

// // console.log(express);

// app.get("/", (req, res, next) => {
//     console.log("Home page");
// });

// app.get("/about", (req, res, next) => {
//     // console.log("About");
//     // console.log(req.url);
//     // console.log(req.method);
//     console.log(res);
//     // res.json({
//     //     title: "Page about",
//     // });
//     // res.send("This is about page");
//     res.send("<h1>About Page</h1>");
// });

// app.post("/about", (req, res, next) => {
//     // console.log("About");
//     console.log(req.url);
//     console.log(req.method);
// });

// app.get("/contacts", (req, res, next) => {
//     console.log("Contacts");
//     res.send("<h1>Contacts</h1>");
// });

// app.get("/books", (req, res, next) => {
//     res.json(books);
// });

// // CRUD
// // C - create
// // R - read
// // U - update
// // U - delete

// app.listen(5000, () => {
//     console.log("Server is running...".bold.cyan);
// });

// function sayHello(name) {
//     console.log(`Hello ${name}`);
// }

// sayHello("Vova");

// IIEF
(function (name, age) {
    console.log(`Hello ${name}, ${age}`);
})("Vova", "25");

// (() => {
//     console.log(`Hello`);
// })();

let invoceAction = async () => {
    await console.log("Test");
};

(async function () {
    await invoceAction();
})();
