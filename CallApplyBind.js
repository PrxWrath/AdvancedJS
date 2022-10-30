let student = {
    name: 'Max',
    age: 20
}

const getDetails = function(){
    console.log(this.age);
}

const changeDetails = function(n,a){
    this.name += n;
    this.age = a;
}

getDetails.call(student);
changeDetails.apply(student,['Conners', 21]);

let bound = getDetails.bind(student);
bound();