 /**
 * 
 *  GET TOTAL AVERAGE 
 * 
 **/
 function getAverage(scores) {

    let sum = 0;

    for(let i = 0; i < scores.length; i++) {
       sum += scores[i];
    }

    let totalAvegrage = sum / scores.length;
    
    return totalAvegrage;
    
}

// console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
// console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

/**
 * 
 *  GET GRADE
 * 
 **/
function getGrade(score) {
    if (score === 100) {
        return "A++";
    } else if(score >= 90) {
        return "A";
    } else if(score >= 80) {
        return "B";
    } else if(score >= 70) {
        return "C";
    } else if(score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// console.log(getGrade(100)); 
// console.log(getGrade(96));
// console.log(getGrade(82));
// console.log(getGrade(72));
// console.log(getGrade(56));

/**
 * 
 *  GET PASSING GRADE
 * 
 **/


function hasPassingGrade(score) {
    
    if (getGrade(score) === "F") {
        return false;
    } else {
        return true;
    }
}


// console.log(hasPassingGrade(100));
// console.log(hasPassingGrade(53));
// console.log(hasPassingGrade(87));


/**
 * 
 *  GET PASSING GRADE
 * 
 **/

function studentMsg(totalScores, studentScore) {
    // PASSED
    // Class average: average-goes-here. Your grade: grade-goes-here. You passed the course.

    // FAILED
    // Class average: average-goes-here. Your grade: grade-goes-here. You failed the course.

    let average = getAverage(totalScores);
    let score = getGrade(studentScore);

    if (score === "F" ) {
        return "Class average: " + average + ". " + "Your grade: " + score + ". " + "You failed the course."
    } else {
        return "Class average: " + average + ". " + "Your grade: " + score + ". " + "You passed the course."
    }

}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));

function getAverage(scores) {
    let sum = 0;

    for (const score of scores) {
        sum += score;
    }

    return sum / scores.length;
}
  
function getGrade(score) {
    if (score === 100) {
      return "A++";
    } else if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "F";
    }
}
  
function hasPassingGrade(score) {
    return getGrade(score) !== "F";
}
  
function studentMsg(totalScores, studentScore) {
    let average = getAverage(totalScores);
      let score = getGrade(studentScore);
  
      if (score === "F" ) {
          return "Class average: " + average + ". " + "Your grade: " + score + ". " + "You failed the course."
      } else {
          return "Class average: " + average + ". " + "Your grade: " + score + ". " + "You passed the course."
      }
}
  console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
  