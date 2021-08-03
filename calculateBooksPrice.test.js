import { calculateBooksPrice } from "./calculateBooksPrice"

describe('When there are no books', () => {
   test('0 book/s', () => {
      const books = []; 
      const price = calculateBooksPrice(books);
      expect(price).toBe(0);
   });
});

describe('When there is only 1 unique title', () => {
   test('1 book', () => {
      const books = [
         {
            name: "Sorcerer's Stone",
            part: 0
         },
      ]; 
      const price = calculateBooksPrice(books);
      expect(price).toBe(8);
   });
 });

 describe('When there are 2 unique titles', () => {
   test('2 books, 1 of each title', () => {
      const books = [
         {
            name: "Sorcerer's Stone",
            part: 0
         },
         {
            name: "Chamber of Secrets",
            part: 1
         }
     ];
     const price = calculateBooksPrice(books);
     expect(price).toBe(15.2);
   });
   test('3 books, 2 of the 1st title and 1 of the 2nd title', () => {
      const books = [
         {
            name: "Sorcerer's Stone",
            part: 0
         },
         {
            name: "Sorcerer's Stone",
            part: 0
         },
         {
            name: "Chamber of Secrets",
            part: 1
         },
      ]; 
      const price = calculateBooksPrice(books);
      expect(price).toBe(23.2);
   });
});

describe('When there are 3 unique titles', () => {
   test('3 books, 1 of each title', () => {
      const books = [
         {
            name: "Sorcerer's Stone",
            part: 0
         },
         {
            name: "Chamber of Secrets",
            part: 1
         },
         {
            name: "Prisoner of Azkaban",
            part: 2
         }
     ];
     const price = calculateBooksPrice(books);
     expect(price).toBe(21.6);
   });
   test('4 books, 2 of the 1st, 1 of the 2nd title, 1 of the 3rd title', () => {
      const books = [
         {
            name: "Sorcerer's Stone",
            part: 0
         },
         {
            name: "Sorcerer's Stone",
            part: 0
         },
         {
            name: "Chamber of Secrets",
            part: 1
         },
         {
            name: "Prisoner of Azkaban",
            part: 2
         }
     ];
     const price = calculateBooksPrice(books);
     expect(price).toBe(29.6);
   });
   test('6 books, 3 of the 1st title and 2 of the 2nd title and 1 of the 3rd title', () => {
      const books = [
         {
            name: "Sorcerer's Stone",
            part: 0
         },
         {
            name: "Sorcerer's Stone",
            part: 0
         },
         {
            name: "Sorcerer's Stone",
            part: 0
         },
         {
            name: "Chamber of Secrets",
            part: 1
         },
         {
            name: "Chamber of Secrets",
            part: 1
         },
         {
            name: "Prisoner of Azkaban",
            part: 2
         }
      ]; 
      const price = calculateBooksPrice(books);
      expect(price).toBe(44.8);
   });
});

describe('When there are 4 unique titles', () => {
   test('4 books, 1 of each title', () => {
      const books = [
         {
            name: "Sorcerer's Stone",
            part: 0
         },
         {
            name: "Chamber of Secrets",
            part: 1
         },
         {
            name: "Prisoner of Azkaban",
            part: 2
         },
         {
            name: "Goblet of Fire",
            part: 3
         }
     ];
     const price = calculateBooksPrice(books);
     expect(price).toBe(25.6);
   });
   test('10 books, 4 of the 1st title and 3 of the 2nd title and 2 of the 3rd title and 1 of the 4th title', () => {
      const books = [
         {
            name: "Sorcerer's Stone",
            part: 0
         },
         {
            name: "Sorcerer's Stone",
            part: 0
         },
         {
            name: "Sorcerer's Stone",
            part: 0
         },
         {
            name: "Sorcerer's Stone",
            part: 0
         },
         {
            name: "Chamber of Secrets",
            part: 1
         },
         {
            name: "Chamber of Secrets",
            part: 1
         },
         {
            name: "Chamber of Secrets",
            part: 1
         },
         {
            name: "Prisoner of Azkaban",
            part: 2
         },
         {
            name: "Prisoner of Azkaban",
            part: 2
         },
         {
            name: "Goblet of Fire",
            part: 3
         }
      ]; 
      const price = calculateBooksPrice(books);
      expect(price).toBe(70.4);
   });
});

describe('When there are 5 unique titles', () => {
   test('5 books, 1 of each title', () => {
      const books = [
         {
            name: "Sorcerer's Stone",
            part: 0
         },
         {
            name: "Chamber of Secrets",
            part: 1
         },
         {
            name: "Prisoner of Azkaban",
            part: 2
         },
         {
            name: "Goblet of Fire",
            part: 3
         },
         {
            name: "Order of the Phoenix",
            part: 4
         }
     ]; 
     expect(calculateBooksPrice(books)).toBe(30);
   });
   test('8 books, 2 of the 1st title, 2 of the 2nd title, 2 of the 3rd title, 1 of the 4th title, 1 of the 5th title', () => {
      const books = [
         {
            name: "Sorcerer's Stone",
            part: 0
         },
         {
            name: "Sorcerer's Stone",
            part: 0
         },
         {
            name: "Chamber of Secrets",
            part: 1
         },
         {
            name: "Chamber of Secrets",
            part: 1
         },
         {
            name: "Prisoner of Azkaban",
            part: 2
         },
         {
            name: "Prisoner of Azkaban",
            part: 2
         },
         {
            name: "Goblet of Fire",
            part: 3
         },
         {
            name: "Order of the Phoenix",
            part: 4
         }
     ]; 
     expect(calculateBooksPrice(books)).toBe(51.2);
   });
   test('15 books, 5 of the 1st title and 4 of the 2nd title and 3 of the 3rd title and 2 of the 4th title and 1 of the 5th title', () => {
      const books = [
         {
            name: "Sorcerer's Stone",
            part: 0
         },
         {
            name: "Sorcerer's Stone",
            part: 0
         },
         {
            name: "Sorcerer's Stone",
            part: 0
         },
         {
            name: "Sorcerer's Stone",
            part: 0
         },
         {
            name: "Sorcerer's Stone",
            part: 0
         },
         {
            name: "Chamber of Secrets",
            part: 1
         },
         {
            name: "Chamber of Secrets",
            part: 1
         },
         {
            name: "Chamber of Secrets",
            part: 1
         },
         {
            name: "Chamber of Secrets",
            part: 1
         },
         {
            name: "Prisoner of Azkaban",
            part: 2
         },
         {
            name: "Prisoner of Azkaban",
            part: 2
         },
         {
            name: "Prisoner of Azkaban",
            part: 2
         },
         {
            name: "Goblet of Fire",
            part: 3
         },
         {
            name: "Goblet of Fire",
            part: 3
         },
         {
            name: "Order of the Phoenix",
            part: 4
         }
      ]; 
      const price = calculateBooksPrice(books);
      expect(price).toBe(100);
   });
});