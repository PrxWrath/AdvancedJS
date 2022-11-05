

console.log('Person1: shows ticket');
console.log('Person2: shows ticket');

const watchMovie = async () => {
    const getTicket = new Promise((resolve, reject) => { resolve('ticket') });
    const getPopCorn = new Promise((resolve, reject) => { resolve('popcorn') });
    const getButter = new Promise((resolve, reject) => { resolve('butter') });
    const getColdDrink = new Promise((resolve, reject) => { resolve('Cold Drink') });

    let ticket = await getTicket;
    console.log(`wife: I got the ${ticket}`)
    console.log('husband: Should we go in?');
    console.log(`wife: I am hungry`);

    let popcorn = await getPopCorn;
    console.log(`husband: I got some ${popcorn}, shall we go in now?`)
    console.log('wife: I need some butter on it');

    let butter = await getButter;
    console.log(`husband: I got the ${butter}, wait i will get some drinks as well.`);
    console.log('wife: Hurry up we will get late');

    let drink = await getColdDrink;
    console.log(`husband: Lets go, I got the ${drink} too`)
    console.log('Person3: shows ticket');
}

watchMovie();

