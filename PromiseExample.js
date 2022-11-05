
console.log('Person1: shows ticket');
console.log('Person2: shows ticket');

const getTicket = new Promise((resolve, reject) => {
    setTimeout(
        resolve('ticket')
        , 2000)
});

const getPopCorn = getTicket.then((i)=>{
    console.log(`wife: I got the ${i}`)
    console.log('husband: Should we go in?');
    console.log(`wife: I am hungry`);
    return new Promise((resolve,reject)=>{
        resolve('popcorn');
    })
})

const getButter = getPopCorn.then((i)=>{
    console.log(`husband: I got some ${i}, shall we go in now?`)
    console.log('wife: I need some butter on it');
    return new Promise((resolve,reject)=>{
        resolve('butter');
    }) 
})

const getColdDrink = getButter.then((i)=>{
    console.log(`husband: I got the ${i}, wait i will get some drinks as well.`);
    console.log('wife: Hurry up we will get late');
    return new Promise((resolve,reject)=>{
        resolve('Cold Drink');
    }) 
})

const showTicket = getColdDrink.then((i)=>{
    console.log(`husband: Lets go, I got the ${i} too`)
    return new Promise((resolve,reject)=>{
        resolve('shows ticket');
    }) 
})

showTicket.then((i)=>{console.log('Person3: ', i)});
