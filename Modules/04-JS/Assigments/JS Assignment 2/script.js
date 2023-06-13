function calculateAge(date) {
  //Define the user birth Year and convert it into a number
  let userBirthYear = +date.substr(-4);
  // Get the current local date
  const currentDate = new Date();
  //Extract the current Year from the local date
  let currentYear = currentDate.getFullYear();
  //The user age will be the difference between the current year and their birth year
  let userAge = currentYear - userBirthYear;
  return userAge;
}

console.log(calculateAge("20/7/2002"));
console.log(calculateAge("1/1/1979"));
