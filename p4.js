function calculateFinalScore(obj) {
    if (typeof obj !== 'object') {
      return "Invalid Input";
    }

    const testScore = obj.testScore
    const schoolGrade = obj.schoolGrade
    const isFFamily = obj.isFFamily


    if (testScore === undefined || schoolGrade === undefined || isFFamily === undefined) {
      return "Invalid Input";
    }


    let finalScore = testScore + schoolGrade;
    if (isFFamily === true) {
      finalScore += 20;
    }

    return finalScore >= 80;
  }
  
  console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: true }));
  console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: false }));
  console.log(calculateFinalScore("hello"));
  console.log(calculateFinalScore({ name: "Rajib", testScore: 15, schoolGrade: 25, isFFamily: true }));