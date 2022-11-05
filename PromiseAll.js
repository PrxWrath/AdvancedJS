const posts = [
    {
        title: 'Post One',
        body: 'This is post one',
        createdAt: new Date().getTime(),
    },
    {
        title: 'Post Two',
        body: 'This is post two',
        createdAt: new Date().getTime(),
    }
]

let intervalId = 0;

function getPost() {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        let content = ''
        posts.forEach(post => {
            content += `<li>${post.title} last edited ${Math.floor((new Date().getTime()) / 1000) - Math.floor(post.createdAt / 1000)} seconds ago</li>`
        })
        document.body.innerHTML = content;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ ...post, createdAt: new Date().getTime() });
            let err = false;
            if (!err) resolve();
            else reject('Something went wrong');
        }, 1000)
    })

}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length) {
                resolve(posts.pop());
            }
            else reject('Array is empty now')
        }, 1000)
    })

}
function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let activityTime = new Date();
            resolve(activityTime);
        }, 1000);
    })
}
createPost({title:'Post Three', body:'This is post three'});

//parallely call both promises
Promise.all([createPost,updateLastUserActivityTime()])
.then(values=>{
    getPost();
    console.log('Last user activity time: ',values[1],'\nPosts : ', posts);
    
    //delete last post 
    deletePost().then(()=>{
        getPost();
        console.log('After Deletion: ', posts);
    }).catch(err=>{console.log(err)})
}).catch(([err1,err2])=>{console.log(err1,err2)});