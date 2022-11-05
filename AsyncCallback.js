const posts = [
    {
        createdAt: new Date().getTime(),
        title:'Post One',
        body: 'This is post one'
    },
    {
        createdAt: new Date().getTime(),
        title:'Post Two',
        body: 'This is post two'
    }
]

let intervalId = 0;

function getPost(){
    clearInterval(intervalId);
    intervalId = setInterval(()=>{
        let content = ''
        posts.forEach(post=>{
            content+=`<li>${post.title} last edited ${Math.floor((new Date().getTime())/1000) - Math.floor(post.createdAt/1000)} seconds ago</li>`
        })
        document.body.innerHTML = content;
    }, 1000);
}

function createPost(post, callback){
    setTimeout(()=>{
        posts.push({...post, createdAt:new Date().getTime()})
        callback();
    },2000)
}

function create4thPost(post, callback){
    setTimeout(()=>{
        callback(post, getPost);
    },5000)
}

getPost();
createPost({title:'Post Three', body:'This is post three'}, getPost);
create4thPost({title:'Post Four', body:'This is post four'}, createPost);
