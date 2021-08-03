const BOOK_PRICE = 8;

interface BookInterface {
    name: string,
    part: number //part number is 0 based index
}

interface DiscountInterface {
    discount: number
} 

export const calculateBooksPrice = (books: Array<BookInterface>) => {
    /* first we make a tally of each book part in an array
    where each part would be represented by its index in the array
    here we assume that the part number would be strictly 0-4
    */
    let bookPartTally: Array<number> = [0,0,0,0,0];
    let booksTotal = 0;

    books.forEach(book => {
        bookPartTally[book.part] += 1;
        booksTotal++;
    });

    // declare bestDiscount object to be passed by reference
    let bestDiscount: DiscountInterface = {discount: 0};

    // get the best possible discount by doing all book set combinations
    setBestBookCombinationDiscount(bookPartTally, 0, bestDiscount);

    return (booksTotal * BOOK_PRICE) - (bestDiscount.discount * BOOK_PRICE);
}

// a recursive function that gets the possible discount by computing for all combinations
const setBestBookCombinationDiscount = (bookPartTally: Array<number>, currentDiscount: number, bestDiscount: DiscountInterface) => {
    bookPartTally = bookPartTally.filter((book) => book > 0);

    if(bookPartTally.filter((book) => book > 0).length == 0) {
        if(currentDiscount > bestDiscount.discount) {
            bestDiscount.discount = currentDiscount;
        }
    }
    else {
        for(let i = 1; i <= bookPartTally.length; i++){
            setBestBookCombinationDiscount(getModifiedBookPartTallyCopy(bookPartTally, i), currentDiscount + i * getDiscount(i), bestDiscount)
        }
    }
}

// returns a copy of the bookPartTally by removing one of each book depending on the parameter 'uniqueTitlesToRemove'
const getModifiedBookPartTallyCopy = (bookPartTally: Array<number>, uniqueTitlesToRemove: number) => {
    let newBookPartTally: Array<number> = [...bookPartTally];
    for(let i = 0; i < uniqueTitlesToRemove; i++){
        newBookPartTally[i]--;
    }

    return newBookPartTally;
}

const getDiscount = (uniqueTitleCount: number) => {
    switch(uniqueTitleCount) {
        case 2: return 0.05;
        case 3: return 0.1;
        case 4: return 0.2;
        case 5: return 0.25;
        default: return 0;
    }
}
