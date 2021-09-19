const fs = require("fs/promises");
const path = require("path");

const pathBook = path.join(__dirname, "..", "db", "books.json")

const getBooks = async () => {
    // console.log("path.join", path.join());
    // console.log("path.resolve", path.resolve());
    // console.log("all books");
    console.log(pathBook);
    const data = await fs.readFile(pathBook, "utf-8");
    return JSON.parse(data);
}

module.exports = getBooks
