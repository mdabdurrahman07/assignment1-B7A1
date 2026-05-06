// Problem 1

const filterEvenNumbers = (input: number[]) =>{
    const filter = input.filter((even) => even % 2 === 0)
    return filter
} 
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]))