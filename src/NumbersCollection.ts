import { Sortable, Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }
  compare(leftIndx: number, RightIndx: number): boolean {
    return this.data[leftIndx] > this.data[RightIndx];
  }
  swap(leftIndx: number): void {
    let temp = this.data[leftIndx];
    this.data[leftIndx] = this.data[leftIndx + 1];
    this.data[leftIndx + 1] = temp;
  }
  get length(): number {
    return this.data.length;
  }
}
