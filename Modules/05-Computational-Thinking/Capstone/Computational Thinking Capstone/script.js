function getDays(date1, date2) {
  //Find the time difference in millisecond
  let dateDiff = Math.abs(date1.getTime() - date2.getTime());

  //Convert the time from miiliseconds to days
  const MILLISECTODAY = 24 * 60 * 60 * 1000;

  let numOfDay = dateDiff / MILLISECTODAY;

  return numOfDay;
}

console.log(getDays(new Date("December 29,2018"), new Date("January 1,2019")));
