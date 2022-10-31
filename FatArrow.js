class Student{
    
    constructor(n,a,ph,m){
        this.name = n;
        this.age = a;
        this.phone = ph;
        this.boardMarks = m;
        Student.count++;
    }

    eligibileForPlacement(minMarks){
        return (minAge)=>{
            if(this.boardMarks>minMarks && this.age>minAge){
                return true;
            }
            return false;
        }
    }
}

let s1 = new Student('Pratyush', 21, '9998887776', 99);
let s2 = new Student('Max', 20, '9958857756', 67);
let s3 = new Student('Peter', 22, '9978867756', 34);
let s4 = new Student('Lily', 21, '9992882772', 68);
let s5 = new Student('Sarah', 22, '9398387376', 95);

let candidates = [s1,s2,s3,s4,s5];
const companyMarks = 40;
const companyAge = 20;

console.log("List of eligible candidates: ");
for(let s of candidates){
    if(s.eligibileForPlacement(companyMarks)(companyAge)){
        console.log(s.name);
    }
}