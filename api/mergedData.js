import { getAuthorBooks } from "./authorData";
import { getSingleBook, getSingleAuthor } from "./bookData";

const getBookDetails = (firebaseKey) => new Promise((resolve, reject) => {
    getSingleBook(firebaseKey).then((bookObj) => {
      getSingleAuthor(bookObj.author_id)
        .then((authorObj) => resolve({ ...bookObj, authorObj }));
    }).catch(reject);
  });

const getAuthorDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleAuthor(firebaseKey).then((authorObj) => {
    getAuthorBooks(authorObj.firebaseKey)
  })
})

  export {getBookDetails, getAuthorDetails}
