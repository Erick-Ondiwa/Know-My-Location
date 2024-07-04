// This is an app to include the following features:
//    Show the current time and date 
//    Show your current location 
//    Capability to retrieve weather conditions at specified places 

function getTime(){

  const currentTime = new Date();

  const dateToday = currentTime.getDate().toString().padStart(2, 0);
  let thisMonth = currentTime.getMonth();
  switch(thisMonth){
    case 0:
      thisMonth = "January";
      break;
    case 1:
      thisMonth = "February";
      break;
    case 2:
      thisMonth = "March";
      break;
    case 3:
      thisMonth = "April";
      break;
    case 4:
      thisMonth = "May";
      break;
    case 5:
      thisMonth = "June";
      break;
    case 6:
      thisMonth = "July";
      break;
    case 7:
      thisMonth = "August";
      break;
    case 8:
      thisMonth = "September";
      break;
    case 9:
      thisMonth = "October";
      break;
    case 10:
      thisMonth = "November";
      break;
    case 11:
      thisMonth = "December";
      break;
    default: "Not a month";
  }
  let thisYear = currentTime.getFullYear();

  const dateDisplay = document.getElementById('date');
  dateDisplay.textContent = `${dateToday} ${thisMonth}, ${thisYear}`;

  let hours = currentTime.getHours();
  let meridium;

  let minutes = currentTime.getMinutes().toString().padStart(2, 0);

  if(hours == 0 && minutes == 0){
    meridium = "Midnight";
  }
  if(hours == 12 && minutes == 0){
    meridium = "noon";
  }
  if(hours > 12){
    meridium = "PM";
  }
  if(hours < 12){
    meridium = "AM";
  }
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, 0);
  
  let seconds = currentTime.getSeconds().toString().padStart(2, 0);
  let timeDisplay = document.getElementById('time');

  timeDisplay.textContent = `${hours}:${minutes}:${seconds}${meridium}`;
}

setInterval(getTime, 1000);

