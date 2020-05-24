import {Grocerystore} from './Grocerystore.js';
import {Candystore} from './Candystore.js';

const Grocerystore = new Grocerystore();
const Candystore = new Candystore();

Candystore.getSupermarketName();
Grocerystore.getGrocerystoreName();
Candystore.getCandystoreName();
console.log(Candystore.getprice());
