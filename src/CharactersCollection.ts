import { Sortable, Sorter } from './Sorter';

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }
  get length(): number {
    return this.data.length;
  }

  compare(leftIndx: number, rightIndx: number): boolean {
    return (
      this.data[leftIndx].toUpperCase() > this.data[rightIndx].toUpperCase()
    );
  }

  swap(leftIndx: number): void {
    let characters = this.data.split('');
    let temp = characters[leftIndx];
    characters[leftIndx] = characters[leftIndx + 1];
    characters[leftIndx + 1] = temp;
    this.data = characters.join('');
  }
}
