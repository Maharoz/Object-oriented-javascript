//students score , total possible score
//15/20--> You got a C (75%)!
//A 90-100 , B 80-89 , c 70-79 , D 60-69 ,f 0-59


let gradeCalc = function(score,totalScore){
    let percent = (score / totalScore) * 100
    let letterGrade = ''

    if(percent>=90){
        letterGrade = 'A'
       // return `You got a A (${percent})!`
    }
    else if(percent>=80){
        //return `You got a B (${percent})!`
        letterGrade = 'B'
    }else if(percent>=70){
        letterGrade = 'C'
    }else if(percent>=60){
        letterGrade = 'D'
    }else{
        letterGrade = 'F'
    }
    return `You got a ${letterGrade} (${percent}%)!`

}

let result = gradeCalc(5,20);

console.log(result);