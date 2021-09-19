const getBooks = require("././getBooks");

const getOneBook = async (author) => {
    const allBooks = await getBooks();
    // console.log(allBooks);
    const book = allBooks.find(book => book.author === author);
    if (!book) return null;

    return book;

}

module.exports = getOneBook




