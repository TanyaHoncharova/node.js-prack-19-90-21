const fs = require("fs/promises");
const path = require("path");
const getBooks = require("./getBooks");

const pathBook = path.join(__dirname, "..", "db", "books.json")


const removeBook = async (title) => {
    const allBooks = await getBooks();
    const idx = allBooks.findIndex(book => book.title === title);

    allBooks.splice(idx, 1);

    await fs.writeFile(pathBook, JSON.stringify(allBooks));
    return true
}

module.exports = removeBook
