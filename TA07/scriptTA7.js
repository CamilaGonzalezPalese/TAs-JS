const books = [
  {
    title: '1984',
    author: 'George Orwell'
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee'
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald'
  },
  {
    title: 'Moby-Dick',
    author: 'Herman Melville'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen'
  }
];

function getTheTitles(books) {
  let arrTitle = [];
  for (const book of books) {
    arrTitle.push({ title: book.title });
  }
  console.log(arrTitle);

} getTheTitles(books);
function getTheTitles2(books) {
  let arrTitle = books.map(book => ({ title: book.title }));
  console.log(arrTitle);
} getTheTitles2(books);