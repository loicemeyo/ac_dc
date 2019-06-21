const bookshop = {
  authors: [
    {
      id: 1,
      name: "Micha Norman",
      age: 39,
      country: "Ghana"
    },
    {
      id: 2,
      name: "Grace Aba",
      age: 45,
      country: "USA"
    },
    {
      id: 3,
      name: "Joseph Corel",
      age: 67,
      country: "Kenya"
    }
  ],
  books: [
    {
      id: 1,
      authorId: 3,
      title: "Things fall apart",
      genre: "Science Fiction",
      year: "1995"
    },
    {
      id: 2,
      authorId: 2,
      title: "`Journey to the other side`",
      genre: "Mysteries",
      year: "2007"
    },
    {
      id: 3,
      authorId: 2,
      title: "Grace 2 Grace",
      genre: "Fantasy",
      year: "2002"
    },
    {
      id: 4,
      authorId: 2,
      title: "Fresh Prince from Belarus",
      genre: "Fantasy",
      year: "1874"
    },
    {
      id: 5,
      authorId: 1,
      title: "The unwritten rule",
      genre: "Fantasy",
      year: "2019"
    }
  ],
  bookGenre: ["Mysteries", "Science Fiction", "Fantasy"]
};

module.exports = bookshop;
