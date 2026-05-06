// Problem 1

const filterEvenNumbers = (input: number[]): number[] =>{
    const filter = input.filter((even) => even % 2 === 0)
    return filter
} 
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]))

// Problem 2

const reverseString = (input: string): string =>{
    const reverse = input.split("").reverse().join("")
    return reverse

}
console.log(reverseString("typescript"))

// Problem 3

type Input = string | number

const checkType = (input: Input) =>{
    if(typeof input === 'string'){
        return "String"
    }else{
        return "Number"
    }

}

console.log(checkType("Hello"))
console.log(checkType(42))