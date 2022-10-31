let studentObj = {
	'Pratyush': 21,
	'Rahul': 24,
	'Sarah' : 25
	}

function findAverageAge(obj){
    let count = 0;
    let sum = 0;
    let averageAge;

    Object.keys(obj).forEach(key=>{
        count++;
        sum+=obj[key];
    })
    averageAge = parseInt(sum/count);
    return averageAge;
}
    
console.log("Average age is: ",findAverageAge(studentObj));
    
