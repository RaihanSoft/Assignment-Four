function sendNotification(email) {
  const atIndex = email.indexOf('@');

  if (atIndex === -1) {
    return "Invalid Email";
  }


  const [userName, domainName] = email.split('@');



  return userName + " sent you an email from " + domainName;
}

console.log(sendNotification("zihad@gmail.com"));
console.log(sendNotification("farhan34@yahoo.com"));
console.log(sendNotification("nadim.naem5@outlook.com"));
console.log(sendNotification("fahim234.hotmail.com"));
console.log(sendNotification("sadia8icloud.com"));