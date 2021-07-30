// let greeting = "Hello my dear friend"
//
// console.log(greeting)

// let name = "Erzhan"
// let age = 23
// age = 30
// let data = "21.01"
// console.log(name)
// console.log(age)
// console.log(data)
//
// let a = 50
// a = a + 30
// a = a - 25
// console.log(a)
//
// let a = 50
// console.log(typeof a)
// let name = "ivan"
// console.log(typeof name)
//
// let a = 20
// let b = 15
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(a % b)
//
// let a = 20
// let b = 20
// console.log(a > b)
// console.log(a < b)
// console.log(a <= b)
// console.log(a >= b)
// console.log(a != b)
// console.log(a == b)
// console.log(a === b)
//
// let age = 20
// let name = "ivan"
// console.log(age + name)
// console.log(age - name)
// console.log(age * name)
// console.log(age / name)
//
//
// let age = 20
// let name = "20"
// console.log(age + name)
// console.log(age - name)
// console.log(age * name)
// console.log(age / name)
//
//
// let firstName = "ivan"
// let lastName = "ivanov"
//
// // let result = firstName + lastName
// let result = firstName + " " +lastName
// console.log(result)
//
// let firstName = "ivan"
// let lastName = "ivanov"
//
// let result = "Добро пожаловать, " + firstName + " " +lastName
// console.log(result)
//
//
// let secondResult = `добро пожаловать, ${firstName} ${lastName}`
// console.log(secondResult)
//
// const a = 20
// a = 40 будет ошибка
// console.log(a)
//
//
// let a = 35
// if (a % 3 === 0 && a % 5 === 0){
//     console.log("fizzbuzz")
// }else if (a % 5 === 0){
//     console.log("buzz")
// }else if (a % 3 === 0){
//     console.log(`fizz`)
// }else {
//     console.log(a)
// }
//
// //   =======================================================================================================


// let users = [`aza`, `aigerim`, `bilal`, `nurbek`]
// users[4] = `ivan`
// users[2] = `dima`
// console.log(users)
// console.log(users.length)
// console.log(users[0])
//
//
// //   ========================================================================================================
//
// let str = "lorem ipsum, dolor sit amet"
// console.log(str)
// console.log(str.length) //длина текста
// console.log(str.toLowerCase())//делают мелким
// console.log(str.toUpperCase())//делает заглавным
// console.log(str.split(""))//[' ', 'l', 'o', 'r', 'e', 'm',' ', 'i', 'p', 's', 'u', 'm',' ', 'd', 'o', 'l', 'o', 'r',' ', 's', 'i', 't', ' ', 'a','m', 'e', 't']
// console.log(str.split(" ")) //[ '', 'lorem', 'ipsum', 'dolor', 'sit', 'amet' ]
// console.log(str.split("s")) //[ ' lorem ip', 'um dolor ', 'it amet' ]
// console.log(str.substr(2, 8)) //orem ips
// console.log(str.substring(2, 4)) //re
// console.log(str.slice(2, 4)) //re
// let str2 = " wsws"
// console.log(str.concat(str2, " ivan"))
// console.log(str.indexOf("e")) //3
// console.log(str.indexOf("E")) //-1 если его там нет тогда выходит -1
// console.log(str.lastIndexOf("e")) //25
// console.log(str.indexOf(",")) //11 первое вхождение
// console.log(str.lastIndexOf(",")) //11 последная вхождение
// console.log(str.includes("amet")) //true или false
// let text = "  ivan  "
// console.log(text.trim()) // убирает пробелы с начало и конца
// let letter = "lorem ipsum dolor"
// console.log(letter.replace("o",'*')) //l*rem ipsum dolor
// console.log(letter.replace(/o/g,'*')) //l*rem ipsum d*l*r


//   ==========================================================================================

//
// let num = 10
// if (num % 5 === 0){
//     console.log("kratno")
// }else {
//     console.log("ne kratno")
// }
//
// let str = `lorem ipsum`
// if (str.includes("a")){
//     console.log("da")
// }else {
//     console.log("no")
// }
//
//
// let str1 = "it dubai"
// if (str.includes("a")){
//     console.log(str1.includes("no"))
// }else {
//     console.log("yes")
// }
//
//
// let str2 = "moscow"
// if (str2.includes("a")){
//     console.log("no")
// }else {
//     console.log("yes")
// }

// FUNCTIONS

// function sum(a, b) {
//     return a + b
// }
//
// console.log(sum(10, 20))
// console.log(sum(33, 22))
// console.log(sum(111, 33))
//
//
// function square(num) {
//     return num + num
// }
//
// console.log(square(3))
// console.log(square(4))
// console.log(square(55))
//
// function chekSymbol(str) {
//     if (str.includes('a')) {
//         return  "yes"
//     }
//         return 'no'
// }
//
// console.log(chekSymbol("it dubai"))
//
// function checkNumber(num){
//     if (num > 0){
//         return "positive"
//     }
//     else if (num < 0){
//         return "negative"
//     }
//     return "0"
// }
// console.log(checkNumber(-4))
// console.log(checkNumber(4))
//
// function greeting(name){
//     return `hello ${name}`
// }
// console.log(greeting(`ivan`))


//=======================================================================================

// let emptyArray = []
// console.log(emptyArray.length)
//
// let students = [ "jeka", "Katy", "Nuke", "Samat"]
// students[4] = "Aigerim"
// students[3] = "Bay"
//
// console.log(students)
// console.log(students.length)
//
// let  array1 = [34, 44, 54, 64]
// let array2 = [100, 200, 300, 400,]
// let sum = array1.concat(array2)
//
//
// //  SPREAD SYNTAX
// let sum2 = [...array1, ...array2]
//
// console.log(sum)
// console.log(sum2)


// референс типи не сравнивается
// let a = [55]
// let b = [55]
// console.log(a === b)


//================================

// правильно
// let a = 5
// a = 10
// console.log( a )
//
// // неправильно
// const a = 5
// a = 10
// console.log( a )

//==============================

// const array = [33, 44, 55]
// array[1] = 102
// console.log(array)

//============================Function Declaration
// function sum(a, b){
//     return a + b
// }
//
// console.log(sum (5, 10))


//Ero Function
// const sum = (a, b) => a + b
// console.log(sum(5, 10))

// const example = (num) => {
//     if (num % 2 === 0){
//         return "even"
//     }return "odd"
// }
// console.log(example(7))
// console.log(example(8))

// const example = (num) => {
//     return num % 2 === 0 ? "even" : "odd"
// }
// console.log(example(7))
// console.log(example(8))


// const example = num => num % 2 === 0 ? "even" : "odd"
// console.log(example(7))
// console.log(example(8))

// const task1 = (a) => a === 10 ? "верно" : "не верно"
//
// console.log(task1(10))
// console.log(task1(11))
//
// const task2 = (a, b) => a > b ? `${a} больше ${b}` : `${a} меньше ${b}`
//
// console.log(task2(1, 4))
// console.log(task2(6, 4))
//
// const task3 = a =>{
//     if (a > 0){
//         return `positive`
//     }else if ( a === 0){
//         return `равно`
//     }return `negative`
// }
//
//

//============================================================

// let numbers = [10, 20, 30]
// numbers[0]= numbers[0] * numbers[0]
// numbers[1]= numbers[1] * numbers[1]
// numbers[2]= numbers[2] * numbers[2]
//
// console.log(numbers)
//
// / .map()
//
// let numbers = [10, 20, 30]
//
// let newArray = numbers.map((item) => item * item)
// console.log(newArray)
//
// let numbers = [10, 20, 30]
// let newArray = numbers.map(item => item === 20 ? item * item : item)
// console.log(newArray)
//
//
// let names = ['ivan', 'dima', 'petya']
// let result = names.map((item) => item.toUpperCase())
// console.log(result)
//
//
// .filter()
//
// let numbers = [34,55, 43, 67, 98]
// let result = numbers.filter((item) => item > 40)
// console.log(result)
//
// let names = ['ivan', 'dima', 'petya']
// let result = names.filter((item) => item.length > 4)
// // console.log(result)


//         .reduce()         ==========================================================================

// const task1 = array => {
//     return array.reduce((acc, item) => acc + item, 0)
// }
// console.log(task1([5,15,315,2,13,20,9]))
//
//

// const task2 = array => {
//     return array.reduce((acc, item) => {
//         if (item % 2 === 0){
//             return acc + item
//         }
//         return acc
//     }, 0)
// }
// console.log(task2([5,15,315,2,13,20,9]))

//
// const task5 = array => {
//     return array.reduce((acc, item) => acc + item, '').length
// }
// console.log(task5( ['Аскар', 'Баяман', 'Калмамат']))

//  =================== .revers() зеркальное отражение

// let  names = ["Aybek", "Nurbek", "Mirbek"]
// let result = names.reverse()
//
// console.log(result)
// console.log(names)

// ================== .join() соеденяет строку

// let  names = ["Aybek", "Nurbek", "Mirbek"]
// // let  result = names.join("")
// let  result = names.join("*")
// console.log(result)

// ========================= .sort()  сортирует

// let numbers = [33, 2, 43, 4, 5, 222, 1, 3]
// let result = numbers.sort((a, b) => a - b)
//
// console.log(result)

// let names = ["Aybek", "Nurbek", "Mirbek"]
// let result = names.sort((a, b) => a > b ? 1 : -1)
//
// console.log(result)
//
// let task1 = Pal =>{
//     return Pal.split('').reverse().join("") === Pal
// }
// console.log(task1('MADAM1'))
// console.log(task1('MADAM'))
//
// let isAnagram = (str1, str2) => {
// return str1.split('').sort((a, b) => a > b ? 1 : -1).join('') === split('').sort((a, b) => a > b ? 1 : -1).join('')
// //     //==========================
//     let word1 = str1.split('').sort((a, b) => a > b ? 1 : -1).join('')
//     let word2 = str2.split('').sort((a, b) => a > b ? 1 : -1).join('')
//     return word1 === word2
// }
// console.log(isAnagram('банка', 'кабан'))
// console.log(isAnagram('банка', 'кабанw'))


// let a = 35
// if (a % 3 === 0 && a % 5 === 0){
//     console.log("fizzbuzz")
// }else if (a % 5 === 0){
//     console.log("buzz")
// }else if (a % 3 === 0){
//     console.log(`fizz`)
// }else {
//     console.log(a)
// }

// const task = array =>{
//     return array.map((item) =>{
//         if (item % 3 === 0 && item % 5 === 0){
//             return "fizzbuzz"
//         }else if (item % 3 === 0){
//             return "buzz"
//         }else if (item % 5 === 0){
//             return "fizz"
//         }
//         return item
//     })
// }
// console.log(task([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]))

// самая маленкая число //Напишите функцию, которая принимает массив и возвращает наименьшее число в массиве.
// const task1 = array =>{
//     return array.reduce((acc, item) =>{
//         if (item < acc){
//             return item
//         }
//         return acc
//     }, array[0])
// }
// console.log(task1([3,4,5,55,6]))

//Напишите функцию, которая принимает строку и возвращает строку в алфавитном порядке."Hello"
// const task2 = str =>{
//     return str.split("").sort((a, b) => a < b ? 1 : -1).join("")
// }
// console.log(task2("Hello"))

//Напишите функцию, которая принимает массив чисел и возвращает массив только с четными числами.
//1
// const task3 = num =>{
// return num.map((item) => item % 2 === 0)
// }
// console.log(task3( [1, 2, 3, 4, 5, 6]))


//Напишите функцию, которая принимает массив чисел и возвращает массив только с четными числами.[2, 4, 6]
// const task4 = num => {
// return num.filter(item => item % 2 === 0)
// }
// console.log(task4( [1, 2, 3, 4, 5, 6]))

//Напишите функцию, которая принимает массив чисел значений и возвращает только числовые данные.//3,7,13
// const task5 = array =>{
//     return array.filter( item => +item )
// }
// console.log(task5( ['text', 3, 7, 'github', 13, 'dev']))

//
//Напишите функцию, которая принимает строку и повторяем каждый ее символ 2 раза.//tteesstt
//1
// const task6 = str =>{
//     return str.split('').map((item) => item + item).join('')
// }
//
// console.log(task6("test"))
//2
// const  task6 = str => {
//     return str.split('').reduce((acc, item) => acc + item + item, '')
// }
// console.log(task6('test'))


//Напишите функцию, которая принимает массив чисел и возвращает первое четное число. //88
// const task9 = arr =>{
// return arr.reduce((acc, item) => {
//     if (acc % 2 === 0){
//         return acc
//     }
//     return item
// }, arr[0])
// }
// console.log(task9([5, 7, 33, 88, 92]))

///   Объект =============================
// let user = {
//     name: "Kunduz",
//     age: 18,
//     "happy birthday": "today"
// }
//
// console.log(user.age)//Точечное обращение
// console.log(user["happy birthday"])//Обращение через скобки


// const car ={
//     model: "Tesla",
//     year: 2021,
//     color: "red"
// }
// console.log(car)
// car.wheels = 4// изменит ключ
// car.color = "magenta"
// delete car.color// удалит ключ
// console.log(car)


// const book = {
//     name: "Romeo and Julieta",
//     author: "William Shakespeare"
// }
// let item = "name"
// console.log(book[item])

// let item = "name"
//
// const book = {
//     [item]: "Romeo and Julieta",
//     author: "William Shakespeare"
// }
// // console.log(book)
//
// const user ={
//     name: "Kate",
//     age: 23,
//     address:{
//         email: "kate@gmail.com",
//         website: "kate.com",
//         phone: "+999500500050"
//     }
// }
// console.log(user.address.website)

// const movie ={
//     title: "Avatar",
//     year: 2009,
//     actors: ["Mirba", "Jake", "Tuke"]
// }
// console.log(movie.actors[2])


// const user ={
//     name: "Kate",
//     age: 43,
//     job: "doctor"
// }
// console.log(Object.keys(user)) // ключи
// console.log(Object.values(user)) // значение
// console.log(Object.entries(user)) //

// const task11 = array => {
//     return array.reduce((acc, item, index) => {
//         return {...acc, [`field${index + 1}`]: item}
//     }, {})
// }
// console.log(task11([true, 1, 'wow', 'you are smart, bro']))
//
// //12 Напишите функцию, которая принимает объект, как аргумент и возвращает новый объект. Только с полями, у которых тип значения - строка; //{ name: 'Baha' }
//
// const task12 = obj => {
//     return Object.keys(obj).reduce((acc, item) =>{
//         if(typeof obj[item] === "string"){
//             return {...acc, [item]: obj[item]}
//         }
//         return acc
//     }, {})
// }
// console.log(task12({name: 'Baha', isAdmin: true}))

// //13 Напишите функцию, которая принимает объект, как аргумент и возвращает новый массив с именами ключей - значение, которых false

// const task13 = obj =>{
//     return Object.keys(obj).reduce((acc, item) => {
//         if(obj[item]){
//             return acc
//         }
//         return [...acc, item]
//     }, [])
// }
// console.log(task13({ isAdmin: false, isBaha: true }))


// const task1 = arr => {
//     return arr.reduce((acc, item) =>{
//         if(acc[item] === undefined){
//             return {...acc, [item]: 1}
//         }return {...acc, [item]: acc[item] +1}
//     }, {})
// }
//
// console.log(task1(["a", "b", "a" ,"a", "c"]))

// const task1 = array =>{
//     return array.reduce((acc, item) => {
//         return {...acc, [item]: (acc[item] || 0) +1}
//     },{})
// }
// //
// console.log(task1(["a", "b", "a" ,"a", "c"]))
//
// { a: 3, b: 1, c: 1 }

//Для проверки массив или нет

// let array = [34,56,78,2]
// console.log(Array.isArray(array))
//
//Для проверки NaN или нет

// let num = NaN
// console.log(isNaN(num))

//
//-------------------- ЦИКЛЫ (LOOPS) --------------------//

// let number = [33,34,44,66]
// for(let i = 0 ; i < number.length; i++){
//     console.log(number[i])
// }
//
// let numbers = [32,54,66,88]
// for (let i = numbers.length -1; i >= 0; i--){
//     console.log(numbers[i])
// }


// let numbers = [44, 55, 5,99, 3,6,8,6,2,7,4]
// let sum = 0
//
// for (let i = 0; i < numbers.length; i++){
//     if (numbers[i] % 2 === 0){
//         sum = sum + numbers[i]
//     }
// }
// console.log(sum)

// let numbers = [44, 55, 5,99, 3,6,8,6,2,7,4]
// let result = []
//
// for (let i = 0; i < numbers.length; i++){
// result = [...result, numbers[i] * 2]
// }
// console.log(result)

// let array = ['K', 'a', 't', 'e']
// let str = ""
// for (let i = 0; i < array.length; i++){
//     str = str + array[i]
// }
// console.log(str)

// let array = [3,4,5,96,7,8,9]   //96
// let max = array[0]
// for (let i = 0; i < array.length; i++){
//     if(array[i] > max){
//         max = array[i]
//     }
// }
// console.log(max)

// let array = [3,4,5,96,7,8,9]
// for (let i = 0; i < Math.floor(array.length / 2); i++){
//     let temp = array[i]
//     array[i] = array[array.length -1 -i]
//     array[array.length - 1 - i] = temp
// }
// console.log(array)

//----------------- //---------- js 23.07.21 -------//
//4G4K1L1D1S2D
// const task1 = str => {
//     let counter = 1
//     let result = ""
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === str[i + 1]) {
//             counter = counter + 1
//         } else {
//             result = result + counter + str[i]
//             counter = 1
//         }
//     }
//     return result
// }
// console.log(task1("GGGGKKKKLDSDD"))


//////////////////////////////////////////
// let  sum = 0
// for (let i = 0; i < 1001; i++){
//     if (i % 3 === 0 || i % 5 === 0){
//         sum = sum + i
//     }
// }
// console.log(sum)


////////////////////////////////////////////////

//19. Вам дан массив [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21].Создайте цикл,
// который выводит нечетные числа, которые больше 10.

// let number = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
// for (let i = 0)


//Вам дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций,
// необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.

// let n = 1000
// let counter = 0
// while (n > 50) {
//     n = n / 2
//     counter = counter + 1
// }
// console.log(counter)


// const fib = n => {
//     let prev = 0, next = 1
//     for (let i = 0; i < n; i++) {
//         next = prev + next
//         prev = next - prev
//     }
//     return prev
// }
// console.log(fib( 8))
//
// let obj = {
//     a : 1
// }
// console.log(obj.hasOwnProperty('a'))

// const task1 = (str) => {
//     let a = ''
//     for (let i = 0; i < str.length; i++) {
//        // a = a + str[i].charAt(i % 2 !== 0).toLowerCase() + str[i].charAt(i % 2 === 0).toUpperCase()
//        короткий вариант// a += i % 2 !== 0 ? str[i].toUpperCase() : str[i]
//     }
//     return a
// }
// console.log(task1('javzszrzpz'))


//// kerimTask ///2579
// const kerimTask = array => {
//     let sum = 0
//     for (let i = 0; i < array.length; i++){
//         sum = sum + array[i] ** 2
//     }
//     return sum
// }
// console.log(kerimTask([45, 23,5]))


// дву мерний массив [ 23, 54,  65, 76, 54, 3, 45, 356,  3 ]
// let array = [[23,54,65],[76,54,3],[45,356,3]]
// let result = []
//
// for (let i = 0; i < array.length; i++){
//     for (let j = 0; j < array[i].length; j++){
//         result = [...result, array[i][j]]
//     }
// }
// console.log(result)

//// obj

// const movie ={
//     title: "Brigada",
//     actors: ["Sasha Belyi", "Kosmos" ,"Pchela"],
//     year: 1999
// }
//
// let key = Object.keys(movie)
//
// result


/////////////------------------- codewars kata ------------////////////

// const multiTable = (num) =>{
//  return `1 * ${num} = ${1 * num}
//  2 * ${num} = ${2 * num}
//  3 * ${num} = ${3 * num}
//  4 * ${num} = ${4 * num}
//  5 * ${num} = ${5 * num}
//  6 * ${num} = ${6 * num}
//  7 * ${num} = ${7 * num}
//  8 * ${num} = ${8 * num}
//  9 * ${num} = ${9 * num}
//  10 * ${num} = ${10 * num}`
// }
//
// console.log(multiTable(5))
//
// const multiTable = (num) => {
//     let result = ""
//     for (let i = 1; i < 11; i++) {
//         result += `${i} * ${num} = ${i * num} \n`
//     }
//     return result.slice(0, -1)
// }
//
// console.log(multiTable(5))

//2
// function getRealFloor(n) {
//     if(n > 0 && n < 13){
//         return n - 1
//     }else if (n > 13){
//         return n - 2
//     }
//     return n
// }
//
// console.log(getRealFloor(18))

//3
// function mouthSize(animal) {
//     return animal.toLowerCase() === "alligator" ? "small" : "wide"
// }
//
// console.log()

//4
// function digitize(n) {
//     return n.toString().split('').map(item => +item).reverse()
// }
//
// console.log(digitize(348597))

//5
// let replaceDots = function(str) {
//     return str.replace(/\./g, '-')
// }
// console.log(replaceDots("one.two.three"))

//6
// function squareSum(numbers){
//     return numbers.reduce((acc, item) =>{
//         return acc + (item * item)
//     },0)
// }
//
// console.log(squareSum([0, 3, 4, 5]))

//7
// function countBy(x, n) {
//     let z = []
//     let a = x
//     for (let i = 0; i < n; i++) {
//         z[i] = x
//         x += a
//         // z[i] = x = [2,2,2,2,2]
//         // x += a = [ 2, 4, 6, 8, 10 ]
//     }
//     return z
// }
//
// console.log(countBy(1, 10))
// console.log(countBy(2, 5))

//
// const quarterOf = (month) => {
// if (month >= 1 && month <= 3){
// return 1
// }else if(month >= 4 && month <= 6){
//     return 2
// }else if(month >= 7 && month <= 9){
//     return 3
// }else if(month >= 10 && month <= 12){
//     return 4
// }
// }
//
// const quarterOf = (month) => Math.ceil(month / 3)

// console.log(quarterOf(1))

//
// function reverseWords(str){
// return  str.split(" ").reverse().join(" ")
// }
//
// console.log(reverseWords("should work for some examples"))

///
// const flip = (d, a) => {
//     if (d === "R") {
//         return a.sort((a, b) => a - b)
//     } else if (d === "L") {
//         return a.sort((a, b) => b - a)
//     }
// }
// console.log(flip("R", [3, 2, 1, 2]))
// console.log(flip( "L", [1, 4, 5, 3, 5]))

// //
// function checkAlive (health) {
//     if (health <= 0 && health <= 10) {
//         return false
//     } else if(health > 0 && health >= -10) {
//         return true
//     }
// }
//

// function checkAlive(health) {
//     /// н.з. как работает
//     return health > 0;
// }
//
// console.log(checkAlive(5))
// console.log(checkAlive(0))


//
// const humanYearsCatYearsDogYears = function(humanYears) {
//     let catYears = 0
//     let dogYears = 0
//     if(humanYears === 1) {
//         return [1, 15, 15]
//     }
//     else if(humanYears === 2) {
//         return [2, 24, 24]
//     }
//     else if(humanYears > 2){
//         catYears = 24 + (humanYears - 2) * 4
//         dogYears = 24 + (humanYears - 2) * 5
//     }
//     return [humanYears,catYears,dogYears];
// }
//
// console.log(humanYearsCatYearsDogYears(1))

// function greet(name){
// return `Hello, ${name} how are you doing today?`
// }
//
// console.log(greet("Aidana"))


// function sumStr(a,b) {
// return `${+a + +b}`
// }
//
// console.log(sumStr("5", "4"))

// function repeatStr (n, s) {
//     return s.repeat(n)
// }
//
// console.log(repeatStr(6, "I"))
// console.log(repeatStr(5, "Hello"))

// function removeChar(str){
// return str.slice(1, -1)
// }
//
// console.log(removeChar("Hello"))

// function bmi(weight, height) {
//     let index = weight / height **2
//     if (index <= 18.5){return "Underweight"}
//     else if(index <= 25.0){return "Normal"}
//     else if(index <= 30.0){return "Overweight"}
//     else if(index > 30){return "Obese"}
// }
//
// console.log(bmi(80, 1,80))

// function firstNonConsecutive(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i - 1] + 1 !== arr[i]) {
//             return arr[i]
//         }
//     }
//     return null
// }
//
// console.log(firstNonConsecutive([1,2,3,4,6,7,8]))

// function removeExclamationMarks(s) {
//     return s.replace(/!/g, "")
// }
//
// console.log(removeExclamationMarks("Hello World!"))














/// инкримент
// let a = 5
// let b = a++
// console.log(a)   /// пост инкримент
// console.log(b)

// let a = 5
// let b = ++a
// console.log(a) // брет инкримен
// console.log(b)

// сокрешение значений ключей в объекте
// let fruit = "Banana"
// let animal = "Monkey"
//
// let obj = {
//     fruit,
//     animal
// }
// console.log(obj)

//"Adyl" 1
//{name: "Adyl" , id: 1}

// const generatorUser = (name, id) =>{
//     return {name, id}
// }
// console.log(generatorUser("Adyl", 18))

//Деструктуризация

// const user = {
//     name: "Aza",
//     age: 43,
//     job: "Developer",
//     address: {
//         city: "Bishkek",
//         street: "Panfilio"
//     }
// }
//
// console.log(user.name)
// console.log(user.age)

// const user = {
//     name: "Aza",
//     age: 43,
//     job: "Developer",
//     address: {
//         city: "Bishkek",
//         street: "Panfilio"
//     }
// }
//
// const {name, age, job , address: {city, street}} = user
// console.log(name,job)
// console.log(city)

// Деструризация массива
//  const animal = ["bear", "fox", "chicken", "rabbit"]
// const [first, second, three] = animal
// console.log(second)

//...Spread
// const names = ["Era", "Aza"]
// const cities = ["Biskek", "Osh"]
// // const result = names.concat(cities) //первый вариат
// // const result = [...names, ...cities] //второй вариат метод spread
//
//
// console.log(result)

// =========== Rest
// const sum = (a, b, ...others) => {
//     console.log(others) ///<= это и rest остаток
//     return a + b
// }
// console.log(sum(10, 20, 33, 44, 55))

// Деструризация массива rest
// const names = ["Era", "Aza", "Aidana", "Aigerim"]
// const [first, second, ...others] = names
// console.log(first)
// console.log(second)
// console.log(others)


// ========  Object.assign()
// const obj1 = {
//     username: "Erzhan",
//     age: 23
// }
//
// const obj2 = {
//     name: "Aidana",
//     car: "Tesla"
// }
//
// // const composeObj = {...obj1, ...obj2} ///копированте двух содиржимое первый вариат
// // const composeObj = Object.assign(obj1, obj2) ///копированте двух содиржимое второй вариат
//
// console.log(composeObj)

// Lazy inisilizing // Ленивая инициализация
//  const sum = (a, b = 0) =>{
//     return a + b
//  }
// console.log(sum(5))
// console.log(sum(5, 10))
//
// const greeting = (name = "fread") =>{
//     return `Hello, ${name}!`
// }
// console.log(greeting("Ben"))
// console.log(greeting())

// Деструризация объекта внутри функции
// const example = ({a, b}) =>{
//     return a + b
// }
// console.log(example({a:10, b:20}))

//---------DOM-----------//

// alert("Привет")
//
// const answer = confirm("А тебе есть 18?")
// if(answer){
//     alert("Кури на здороье")
// }else {
//     alert("Сначала молоко!")
// }
//
// const age = prompt("Сколько тебе лет?")
// alert(`Тебе ${age} лет!`)
//
// console.log(window.document)
// console.dir(window.document)
//
// // обрашение по классу
// const desc = document.getElementsByClassName("description")
//
// console.log(desc)
// console.dir(desc[0])
// console.dir(desc[1])
//
//
// // обрашение по тегу
// const descByName = document.getElementsByTagName("p")
// console.log(descByName)
//
//
// // обрашение по id
// const input = document.getElementById("name")
//
// //
// const example1 = document.querySelectorAll(".description")
// console.log(example1)
//
// const example2 = document.querySelectorAll("p")
// console.log(example1)
//
// const example3 = document.querySelectorAll("#name")
// console.log(example1)

//конкретно элемент
// const example4 = document.querySelector(".description")
// console.log(example4)
//
// const example5 = document.querySelector("#name")
// console.log(example5)
//
// const example6 = document.querySelector("h1")
// console.log(example6)


//изминение элемента
// const title = document.querySelector(".title")
// // // title.textContent = "Курить - это зло"
// // // title.innerText = "<S>Курить - это зло</S>"
// title.innerHTML = "<S>Курить - это зло</S>"
// console.dir(title.textContent)
//
// const input = document.querySelector("#name")
// input.value = "писать здесь"
//
// const btn = document.querySelector(".btn")
// btn.addEventListener("click", () => {
//     console.log("Boom!")
// })


//calculator

// вызов
// const num1 = document.querySelector(".num1")
// const num2 = document.querySelector(".num2")
// const out = document.querySelector(".out")
// const sumBtn = document.querySelector(".sum")
// const minusBtn = document.querySelector(".minus")
// const multiBtn = document.querySelector(".multiplication")
// const divideBtn =  document.querySelector(".divide")
// const clearBtn = document.querySelector(".clear")

//вариант короткий запис

// const buttons = document.querySelectorAll(".btn")
// buttons.forEach(btn => {
//     btn.addEventListener("click", () => {
//         let sumbol = btn.textContent
//         let answer = 0
//         if (sumbol === "+") {
//             answer = Number(num1.value) + Number(num2.value)
//         } else if (sumbol === "-") {
//             answer = Number(num1.value) - Number(num2.value)
//         } else if (sumbol === "*") {
//             answer = Number(num1.value) * Number(num2.value)
//         } else if (sumbol === "/") {
//             answer = Number(num1.value) / Number(num2.value)
//         }
//         out.textContent = `Result: ${answer}`
//         num1.value = ''
//         num2.value = ''
//     })
// })
//вариант для наглядгости

// sumBtn.addEventListener("click", ()=>{
//     let sum = Number(num1.value) + Number(num2.value)
//     out.textContent = `Result: ${sum}`
//
// })
//
// minusBtn.addEventListener( "click", () =>{
//     let sum = Number(num1.value) - Number(num2.value)
//     out.textContent = `Result: ${sum}`
//
// })
//
// multiBtn.addEventListener( "click", () =>{
//     let sum = Number(num1.value) * Number(num2.value)
//     out.textContent = `Result: ${sum}`
//
// })
//
// divideBtn.addEventListener( "click", () =>{
//     let sum = Number(num1.value) / Number(num2.value)
//     out.textContent = `Result: ${sum}`
//
// })

// clearBtn.addEventListener('click',()=>{
//     num1.value = ''
//     num2.value = ''
// })


// const items = Array.from(document.querySelectorAll("li"))
// let newArray = items.map((item) => item.textContent)
//
// console.log(newArray)

