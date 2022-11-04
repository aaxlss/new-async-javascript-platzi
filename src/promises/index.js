const promise = new Promise((resolve, reject) => {
    resolve('correct');
});

const cows = 15;

const countCowns = new Promise((resolve, reject) => {
    if (cows > 10){
        return resolve(`We have ${cows} in the farm`);
    } else {
        return reject(`Not enought cows`);
    }
});

countCowns
.then(response => console.log(response))
.catch(err => console.log(err))
.finally(() => console.log('Finally'));