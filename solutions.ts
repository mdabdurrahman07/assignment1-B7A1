// Problem 1

const filterEvenNumbers = (input: number[]): number[] => {
  const filter = input.filter((even) => even % 2 === 0);
  return filter;
};


// Problem 2

const reverseString = (input: string): string => {
  const reverse = input.split("").reverse().join("");
  return `"${reverse}"`;
};


// Problem 3

type Input = string | number;

const checkType = (input: Input) => {
  if (typeof input === "string") {
    return `"String"`;
  } else {
    return `"Number"`;
  }
};



// Problem 4

const getProperty = <T>(obj: T, key: keyof T) => {
  return `"${obj[key]}"`;
};


// Problem 5

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (book: Book) => {
  return {
    ...book,
    isRead: true,
  };
};



// Problem 6

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails() {
    return `"Name:${this.name}, Age:${this.age}, Grade:${this.grade}"`;
  }
}

// Problem 7

const getIntersection = (value1: number[], value2: number[]): number[] => {
  return value1.filter((value) => value2.includes(value));
};
