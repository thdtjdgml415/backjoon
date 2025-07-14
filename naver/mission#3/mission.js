const books = [
  {
    name: "Great",
    is_out_of_print: true,
    type: "Novel",
    rating: 3.1,
    count: 2,
    start_date: "197001",
    end_date: "198104",
  },
  {
    name: "Laws",
    is_out_of_print: true,
    type: "Novel",
    rating: 4.8,
    count: 3,
    start_date: "198006",
    end_date: "198507",
  },
  {
    name: "Dracula",
    is_out_of_print: true,
    type: "Drama",
    rating: 2.3,
    count: 6,
    start_date: "199105",
    end_date: "199605",
  },
  {
    name: "Mario",
    is_out_of_print: true,
    type: "Drama",
    rating: 3.8,
    count: 4,
    start_date: "200109",
    end_date: "201211",
  },
  {
    name: "House",
    is_out_of_print: false,
    type: "Magazine",
    rating: 4.4,
    count: 1,
    start_date: "198707",
    end_date: null,
  },
  {
    name: "Art1",
    is_out_of_print: true,
    type: "Design",
    rating: 4.2,
    count: 2,
    start_date: "198506",
    end_date: "199107",
  },
  {
    name: "Art2",
    is_out_of_print: true,
    type: "Design",
    rating: 3.0,
    count: 3,
    start_date: "199502",
    end_date: "200512",
  },
  {
    name: "Wars",
    is_out_of_print: true,
    type: "Novel",
    rating: 4.6,
    count: 2,
    start_date: "198204",
    end_date: "200305",
  },
  {
    name: "Solo",
    is_out_of_print: false,
    type: "Poem",
    rating: 4.9,
    count: 2,
    start_date: "200703",
    end_date: "20250626",
  },
  {
    name: "Lost",
    is_out_of_print: false,
    type: "Web",
    rating: 3.2,
    count: 8,
    start_date: "199806",
    end_date: "20250626",
  },
  {
    name: "Ocean",
    is_out_of_print: true,
    type: "Magazine",
    rating: 4.3,
    count: 1,
    start_date: "200502",
    end_date: "202006",
  },
];

/**
 * @description 구매 가능한 책을 탐색하는 함수입니다.
 * @param {string} date
 * @param {number} buyCount
end_date: '199605'
* @returns {name: 'Dracula', is_out_of_print: true, type: 'Drama', rating: 2.3, count: 6, start_date: '199105' }[]
 */
function getAvailableBooks(date, buyCount) {
  const matchedBooks = [];
  const sortedBookByRating = books.sort(
    (a, b) => Number(b.rating) - Number(a.rating)
  );

  for (let i = 0; i < sortedBookByRating.length; i++) {
    const book = sortedBookByRating[i];

    const start = book.start_date;
    const end = book.end_date;

    if (start <= date && date <= end && book.count >= buyCount) {
      matchedBooks.push(
        `${book.name}${book.is_out_of_print ? "*" : ""}(${book.type}) ${
          book.rating
        }`
      );
    }
  }

  return matchedBooks;
}

/**
 * @description 함수의 진입점으로 반환타입을 만드는 역할을 합니다.
 * @param {string} param0
 * @param {number} param1
 * @return {string}
 */
function find(param0, param1) {
  const filteredBook = getAvailableBooks(param0, param1);

  if (filteredBook.length === 0) {
    return "!EMPTY";
  } else {
    return filteredBook.join(", ");
  }
}
