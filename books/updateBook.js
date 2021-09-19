const fs = require("fs/promises");
const path = require("path");
const getBooks = require("./getBooks");

const pathBook = path.join(__dirname, "..", "db", "books.json")



const updateBooks = async (title, newTitle) => {
    const allBooks = await getBooks();
    const idx = allBooks.findIndex(book => book.title === title);
    if (idx === -1) return null
    allBooks[idx] = { ...allBooks[idx], title: newTitle };
    await fs.writeFile(pathBook, JSON.stringify(allBooks));
    return true

}

module.exports = updateBooks