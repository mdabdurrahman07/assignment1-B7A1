// Problem 1

const filterEvenNumbers = (input: number[]): number[] => {
  const filter = input.filter((even) => even % 2 === 0);
  return filter;
};
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// Problem 2

const reverseString = (input: string): string => {
  const reverse = input.split("").reverse().join("");
  return `"${reverse}"`;
};
console.log(reverseString("typescript"));

// Problem 3

type Input = string | number;

const checkType = (input: Input) => {
  if (typeof input === "string") {
    return `"String"`;
  } else {
    return `"Number"`;
  }
};

console.log(checkType("Hello"));
console.log(checkType(42));

// Problem 4

const getProperty = <T>(obj: T, key: keyof T) => {
  return `"${obj[key]}"`;
};
const user = { id: 1, name: "John Doe", age: 21 };
const result = getProperty(user, "name");
console.log(result);

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

console.log(
  toggleReadStatus({
    title: "TypeScript Guide",
    author: "Jane Doe",
    publishedYear: 2024,
  }),
);
