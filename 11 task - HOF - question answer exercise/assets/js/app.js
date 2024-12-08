const cl = console.log;


nums = [10, 21, 30, 41, 50, 61, 70, 81, 90, 100];
// array of sqroots
// [3.33,4.44,5.55.... , 10]
let srtNum = nums.map(ele => +(Math.sqrt(ele)).toFixed(2))
cl(srtNum)


nums = [10, 21, 30, 41, 50, 61, 70, 81, 90, 100];
// create a array of numbers which are divisible by 3 or 5
// [10,21,30,50,70,81,90,100]
let numsBy3or5 = nums.filter(ele => ele % 3 === 0 || ele % 5 ===0)
cl(numsBy3or5)


companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];
// new arr of comp who run for at least 10 years
let compRan10years = companies.filter(comp => comp.end - comp.start >= 10)
cl(compRan10years)


companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: " ReTail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "retail", start: 1981, end: 1989 }
];

// arr of comp who starts in 80s 

let compStart80s = companies.filter(comp => comp.start >= 1979 && comp.start <= 1989)
cl(compStart80s)


// array of comp whos catg is retail and run for at least 10 years

let compRetailLeast10 = companies.filter(comp => comp.category.toLowerCase().includes('retail') && comp.end - comp.start >= 10)
cl(compRetailLeast10)


// array of comp catg is Auto and starts in 80s

let compAutoStart80s = companies.filter(comp => comp.category.toLowerCase().includes('auto') && (comp.start >= 1979 && comp.start <= 1989))
cl(compAutoStart80s)


// array finance catg 

let compFinance = companies.filter(comp => comp.category.toLowerCase().includes('finance'))
cl(compFinance)


companies = [
  { name: "Company One", id: '1', category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", id: '2', category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", id: '3', category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", id: '4', category: " ReTail", start: 1989, end: 2010 },
  { name: "Company Five", id: '5', category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", id: '6', category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", id: '7', category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", id: '8', category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", id: '9', category: "retail", start: 1981, end: 1989 }
];

// arr of comp 80s 

let comp80s = companies.filter(comp => comp.start >= 1979 && comp.start <= 1989 )
cl(comp80s)


// let givenId = '5' get comp whos id is 5

let givenId = '5'
let compId5 = companies.find(comp => comp.id === givenId)
cl(compId5)



let blogsCommentsMedium = [
    {
        id: 123,
        msg: 'You are not bad at all'
    },
    {
        id: 124,
        msg: 'You are not good at teaching'
    }
    ,
    {
        id: 125,
        msg: 'You dont have value of others time'
    },
    {
        id: 126,
        msg: 'You are Dumb'
    },
    {
        id: 127,
        msg: 'I love the way you explain'
    }
]

// let commentId = 126;

let commentId = 126;
let findComment = blogsCommentsMedium.find(comm => comm.id === commentId )
cl(findComment)


nums = [10, 15, 5, 110, 20, 22, 220, 48, 556, 23, 21, 45, 86, 78];
// sort arr in decending order

let sortedNumsdec = nums.sort((a,b) => b - a)
cl(sortedNumsdec)


nums = [10, 15, 5, 110, 20, 22, 220, 48, 556, 23, 21, 45, 86, 78];
//  sort comp in assending order of there ages

let sortedNumsAscen = nums.sort((a, b) => a - b)
cl(sortedNumsAscen)


ages = [10, 15, 5, 20, 22, 48, 23, 21, 45, 86, 78];
// calcuate total age with out using forloop for each

// using for loop

let totalAge = 0;
for(i = 0; i < ages.length; i++){
  totalAge += ages[i]
}
cl(totalAge)

// using forEach

let sum = 0 

ages.forEach(age => sum += age)
cl(sum)



companies = [
    { name: "Company One", id: '1', category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", id: '2', category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", id: '3', category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", id: '4', category: " ReTail", start: 1989, end: 2010 },
    { name: "Company Five", id: '5', category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", id: '6', category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", id: '7', category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", id: '8', category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", id: '9', category: "retail", start: 1981, end: 1989 }
];

// calculate total ages of comp with out using forloop and forEach

// using for loop
let sumOfAges = 0
for(i = 0; i < companies.length; i++){
  sumOfAges += companies[i].end - companies[i].start
}
cl(sumOfAges)

// using forEach
let totalAgesComp = 0
companies.forEach(comp => totalAgesComp += comp.end - comp.start)
cl(totalAgesComp)


// give a array in below format with out using forloop and forEach
// [{compName : "Company One", lifeSpan : "1981-2003"}...]

// using for loop
let compArr = []
for(i = 0; i < companies.length; i++){
  let obj = {
    compName: companies[i].name,
    lifeSpan: `${companies[i].start} - ${companies[i].end}`
  }
  compArr.push(obj)
}
cl(compArr)

//using forEach

let companiesArr = []
companies.forEach(comp => {
  companiesArr.push({ compName: comp.name,
    lifeSpan: `${comp.start} - ${comp.end}`})
})
cl(companiesArr)

ages = [10, 15, 5, 20, 22, 48, 23, 21, 45, 86, 78];

// // creat a arr of even num  using forloop and forEach

// using for loop
let evenArr = []
for(i = 0; i < ages.length; i++){
  if(ages[i] % 2 === 0){
    evenArr.push(ages[i])
  }
}
cl(evenArr)

// using forEach
let evenNums = []
ages.forEach(age => {
  if(age % 2 === 0){
    evenNums.push(age)
  }
})
cl(evenNums)




companies = [
    { name: "Company One", id: '1', category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", id: '2', category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", id: '3', category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", id: '4', category: " ReTail", start: 1989, end: 2010 },
    { name: "Company Five", id: '5', category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", id: '6', category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", id: '7', category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", id: '8', category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", id: '9', category: "retail", start: 1981, end: 1989 }
];

// arr of comp who starts in 80s and run for at least 10 years without using forloop and forEach

let Comp80sAndAbove10 = companies.reduce((acc, cv) => {
  if((cv.start >= 1979 && cv.start <= 1989) && cv.end - cv.start >= 10){
    acc.push(cv)
  }
  return acc
}, [])
cl(Comp80sAndAbove10)

// return object like mentioned below without using forloop and forEach
// [{compName : "Company One", duraton : 22}]

let newCompArray = companies.reduce((acc, cv) => {
  acc.push({
    compName : cv.name,
    duraton : cv.end - cv.start
  })
  return acc
}, [])
cl(newCompArray)


let oldies = [25, 35, 45, 56, 86, 56, 36];
let youngins = [5, 12, 13, 14, 16, 18, 17];
ages = [10, 21, 14, 41, 110, 105, 16, 61, 11, 81, 19, 30];

// Does the oldies array contain any age greater than 80?

let isAgeAbove80 = oldies.some(age => age > 80)
cl(isAgeAbove80)

// Are there any ages in the youngins array that are divisible by 3?

let isAgeBy3 = youngins.some(age => age % 3 === 0)
cl(isAgeBy3)

// Does the ages array contain any age greater than or equal to 100?

let ageabove100 = ages.some(age => age >= 100)
cl(ageabove100)

// Are there any even numbers in the oldies array?

let isEvenAges = oldies.some(age => age % 2 === 0)
cl(isEvenAges)

// Is there any age in the youngins array less than 10?

let ageBelow10 = youngins.some(age => age > 10)
cl(ageBelow10)

// Does the ages array contain any negative numbers?

let negativeAge = ages.some(age => age === -age)
cl(negativeAge)

// Are all values in the oldies array greater than or equal to 25?
let isEveryAgeBelow25 = oldies.every(age => age >= 25)
cl(isEveryAgeBelow25)

// Is every value in the youngins array a teenager (between 13 and 19 inclusive)?

let isTeenager = youngins.every(age => age >= 13 && age <= 19)
cl(isTeenager)

// Are all values in the ages array less than 200?

let isAllagesBelow200 = ages.every(age => age < 200)
cl(isAllagesBelow200)

// Is there any age in the oldies array that is a multiple of 7?

let isAgeMultipleOf7 = oldies.some(age => age % 7 === 0)
cl(isAgeMultipleOf7)

// Are all numbers in the youngins array less than 20?

let isAgeBelow20 = youngins.every(age => age < 20)
cl(isAgeBelow20)

// Does the ages array contain any age between 15 and 25?

let isAgesHave = ages.some(age => age >= 15 && age <= 25)
cl(isAgesHave)

// Are all values in the oldies array odd numbers?

let areAgesOdd = oldies.every(age => age % 2 !== 0)
cl(areAgesOdd)


/////////////// Is there any prime number in the youngins array?/////////////////////////



// Are all ages in the ages array greater than or equal to 10?

let areAgesAbove10 = ages.every(age => age >= 10)
cl(areAgesAbove10)



companies = [
  { name: "Company One", id: '1', category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", id: '2', category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", id: '3', category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", id: '4', category: " ReTail", start: 1989, end: 2010 },
  { name: "Company Five", id: '5', category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", id: '6', category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", id: '7', category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", id: '8', category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", id: '9', category: "retail", start: 1981, end: 1989 }
];

// is there at least one comp who run for at least 12 years? 

let isCompLeast12 = companies.some(comp => comp.end - comp.start >= 12)
cl(isCompLeast12)

// is there at least one comp who run for at least 12 years and starts in 90s? 

let isComp90s = companies.some(comp => comp.end - comp.start >= 12 && (comp.start >= 1979 && comp.start <= 1989))
cl(isComp90s)

// Does the array contain any company that started before 1985?

let isCompBefore1985 = companies.some(comp => comp.start < 1985)
cl(isCompBefore1985)

// Is there any company in the "Retail" category (case-insensitive)?

let isCompInRetail = companies.some(comp => comp.category.toLowerCase().includes('retail'))
cl(isCompInRetail)

// Are there any companies that operated for more than 20 years?

let isCompAbove20 = companies.some(comp => comp.end - comp.start > 20)
cl(isCompAbove20)

// Does the array include any company with an id equal to '5'?

let anyCompHasId5 = companies.some(comp => comp.id === '5')
cl(anyCompHasId5)

// Is there any company in the "Auto" category that started after 1990?

let isCompInAuto90s = companies.some(comp => comp.category.toLowerCase().includes('auto') && comp.start > 1990)
cl(isCompInAuto90s)

// Are all companies in the "Finance" category?

let areCompFinance = companies.every(comp => comp.category.toLowerCase().includes('finance'))
cl(areCompFinance)

// Does every company in the array have a defined name property?

let isCompHasName = companies.every(comp => comp.name)
cl(isCompHasName)

// Are there any companies that ended after 2015?

let isCompEnd2015 = companies.some(comp => comp.end > 2015)
cl(isCompEnd2015)

// Do all companies have an id that is a string?

let areCompIdString = companies.every(comp => comp.id === `${comp.id}`)
cl(areCompIdString)

// Are all companies in the array active for at least 5 years?

let areCompActiveFor5 = companies.every(comp => comp.end - comp.start > 5)
cl(areCompActiveFor5)

nums = [100,200,[300,400, [500, 560, [600, 700, [900]]]]];
// give one dimensional array

let numsArr = nums.flat(Infinity)
cl(numsArr)


// in result create a array 
let n = 5;
let array = new Array(n).fill(0)
cl(array)

// if given length is 5 ans = [1,2,3,4,5]

let numsArray = array.map((_, i) => i + 1)
cl(numsArray)


// if given length is 10 ans = [1,2,3,4,5,6,7,8,9,10]

n = 5;
let newArray = new Array(n).fill(0)

let numsArray1to10 = array.map((_, i) => i + 1)
cl(numsArray1to10)