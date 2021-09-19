const { getBooks, addBook, updateBook, removeBook, getOneBook } = require("./books");
const asyncHandler = require("./utils/asyncHandler");



// console.log(booksOperation);
// (async () => {
//     try {
//         const books = await getBooks();
//         console.log(books);
//     } catch {
//         error => console.log(error.messege)
//     }
// })();

(async () => {
    // const books = await asyncHandler(getBooks());
    // console.log(books);

    // const book = await asyncHandler(getOneBook("Charles Dickens"));
    // console.log(book)

    // const newBook = {
    //     id: "1234",
    //     author: 'Charles ',
    //     country: 'Kingdom',
    //     imageLink: 'images/great-expectations.jpg',
    //     language: 'English',
    //     link: 'https://en.wikipedia.org/wiki/Great_Expectations\n',
    //     pages: 345,
    //     title: 'Expectations',
    //     year: 1234
    // };
    // await asyncHandler(addBook(newBook));

    // await asyncHandler(removeBook("The Divine Comedy"));

    await asyncHandler(updateBook("The Divine Comedy", "Comedy"));

})();


