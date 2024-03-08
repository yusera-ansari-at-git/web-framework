export interface Sortable {
  compare(leftIndx: number, rightIndx: number): boolean;
  swap(leftIndx: number): void;
  length: number;
}
export abstract class Sorter {
  abstract compare(leftIndx: number, rightIndx: number): boolean;
  abstract swap(leftIndx: number): void;
  abstract get length(): number;

  sort(): void {
    const { length } = this;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j);
        }
      }
    }
  }
}
