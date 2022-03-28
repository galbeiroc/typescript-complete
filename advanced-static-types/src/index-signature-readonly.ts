interface User {
  readonly id: number;
  name: string;
}

const user: User = {
  id: 5,
  name: "Rocky"
}

user.name = "Pilin";

class Person {
  readonly id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}


const person = new Person(12, "Ricki");

const weekdays: ReadonlyArray<string> = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thurday',
  'Friday',
  'Saturday'
]
