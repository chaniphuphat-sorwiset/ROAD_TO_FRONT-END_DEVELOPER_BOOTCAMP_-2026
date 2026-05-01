let x: number = 10
const pi: number = 3.14

let name: string = "Chaniphuphat"
let surname: string = "Sorwiset"
let age: number = 27
// let data: any = true

// Array
let students: string[] = ["Thanawat", "Chanan", "Ple"]
let numbers: number[] = [1, 2, 3, 4, 5]

// class Person {
//   title: string
//   age: number
//   constructor(title: string, age: number) {
//     this.title = title
//     this.age = age
//   }
// }

interface Person {
  title: string
  age: number
  address: string
}

// Object
// let person: { title: string; age: number } = {
//   title: "Somchai",
//   age: 12,
// }

// let person: Person = new Person("somechai", 50)
let person2: Person = {
  title: "Somchai",
  age: 12,
  address: "abc",
}

console.log(x)
console.log(pi)
console.log(name)
console.log(surname)
console.log(age)
console.log(students)
console.log(numbers)
console.log(person2)

function sum(x: number, y: number): number {
  // console.log(x + y)
  return x + y
}
const result: number = sum(4, 5)
console.log(result)
