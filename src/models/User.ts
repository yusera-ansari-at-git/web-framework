interface UserProps {
  [key: string]: any;
  name: string;
  age: number;
}
export class User {
  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }
}
