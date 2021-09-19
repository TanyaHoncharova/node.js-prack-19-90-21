const getBooks = require("././getBooks");
const fs = require("fs/promises");
const path = require("path");

const pathBook = path.join(__dirname, "..", "db", "books.json")

const addBooks = async (newBook) => {
    const allBooks = await getBooks();
    const updateBooks = [...allBooks, newBook];

    await fs.writeFile(pathBook, JSON.stringify(updateBooks));
    return true

}

module.exports = addBooks
