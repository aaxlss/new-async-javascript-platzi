const promiseFn = () => new Promise((resolve, reject)=>{
    (true)
    ?setTimeout(()=> resolve('Async'),2000)
    : reject(new Error('Async Error'));
})

const asynFn = async() => {
    const something = await promiseFn();
    console.log(something)
    console.log('Hello');
}

console.log('Before');
asynFn();
console.log('After');