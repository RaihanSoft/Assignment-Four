function calculateTax(income, expenses) {
    if (income >= expenses === false || income < 0 || expenses < 0) {
      return "Invalid Input";
    }
  
    const result = income - expenses;
    const tax = result * 0.2;
    return tax;
  }

  
function sendNotification(email) {
    const atIndex = email.indexOf("@");
  
    if (atIndex === -1) {
      return "Invalid Email";
    }
  
    const [userName, domainName] = email.split("@");
  
    return userName + " sent you an email from " + domainName;
  }

  
function checkDigitsInName(name) {

    if (typeof name !== 'string') {
        return "Invalid Input";
    }
    
    for (const char of name) {
        if (!isNaN(char) && char !== ' ') {
            return true; 
        }
    }
    
    return false;
}


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


function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
      return "Invalid Input";
    }
  
    let totalTime = 0;
    for (const time of waitingTimes) {
      totalTime += time;
    }
  
    const averageTime = Math.round(totalTime / waitingTimes.length);
  
    const remainingInterviews = serialNumber - waitingTimes.length - 1;
  
    const totalWaitingTime = averageTime * remainingInterviews;
  
    return totalWaitingTime;
  }
  
