let todayDate = new Date();
let currYear = todayDate.getFullYear();
let currMonth = todayDate.getMonth()+1;
let currDay = todayDate.getDate();
document.write("Сьогодні: ");
document.write(currDay + "/" + currMonth + "/" + currYear);
