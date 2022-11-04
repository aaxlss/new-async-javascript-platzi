function* generator (array) {
    for (const item of array) {
        yield item
    }
}

const arrayNames = ['axl','axl1','axl2','axl3','axl4','axl5','axl6',]

const result = generator(arrayNames)

console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);