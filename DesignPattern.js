class Student{
    static count = 0;
    constructor(n,a,ph,m){
        this.name = n;
        this.age = a;
        this.phone = ph;
        this.boardMarks = m;
        Student.count++;
    }

    eligibility(){
        if(this.boardMarks>40){
            console.log('Eligible')
        }
        else console.log('Not Eligible');
    }
}

let s1 = new Student('Pratyush', 21, '9998887776', 99);
let s2 = new Student('Max', 21, '9958857756', 67);
let s3 = new Student('Peter', 22, '9978867756', 34);
let s4 = new Student('Lily', 21, '9992882772', 88);
let s5 = new Student('Sarah', 22, '9398387376', 95);

console.log('Number of students: ', Student.count);

s3.eligibility();