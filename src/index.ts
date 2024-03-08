import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numbersCollection = new NumbersCollection([-10, 0, 7, 9, -1, 2]);
numbersCollection.sort();
console.log(numbersCollection.data);
const stringCollection = new CharactersCollection('yusera');
stringCollection.sort();
console.log(stringCollection.data);

const linkedList = new LinkedList();
const linkedListData = [21, 89, 243, 90, 0, -1];
for (let i = 0; i < linkedListData.length; i++) {
  linkedList.add(linkedListData[i]);
}

const linkedListSorter = linkedList;
linkedListSorter.sort();
linkedList.print();
