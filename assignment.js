function assignmentAverage(assignment1, assignment2, assignment3){
  const totalAssignment = assignment1 + assignment2+ assignment3
  const totalResult = parseFloat(totalAssignment / 3)
  return totalResult
}

const assignment1Marks = 70;
const assignment2Marks = 60;
const assignment3Marks = 60;
const total = assignmentAverage(assignment1Marks, assignment2Marks,assignment3Marks)
console.log(total)