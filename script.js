let morning = 7;
let noon = 12;
let evening = 18;

// Getting it to show the current time on the page
let showCurrentTime = function()
{
    // display the string on the webpage
    let clock = document.getElementById('clock');
 
    let currentTime = new Date();
 
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridian = "AM";
 
    // Set hours
	  if (hours >= noon)
	  {
		  meridian = "PM";
	  }

	  if (hours > noon)
	  {
		  hours = hours - 12;
	  }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    let clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

// Getting the clock to increment on its own and initialize background
let updateClock = function() 
{
  let time = new Date().getHours();
  let videobg = document.getElementById("videobg");

  
  showCurrentTime();
};
updateClock();


// Getting the clock to increment once a second
let oneSecond = 1000;
setInterval( updateClock, oneSecond);
//Change background
let updateBg = function(){
    let time = new Date().getHours();
    if (time < noon)
    {
      image = "oceansunrise.mp4";
      
    }
    else if (time >= evening)
    {
      image = "nightlapse.mp4";
      
    }
    else
    {
      image = "oceansunrise.mp4";
      
    }
  
    videobg.src = image;
}
updateBg();


 
//Day and Night buttons
let morningbutton = document.querySelector("button:nth-child(1)");

let eveningbutton = document.querySelector("button:nth-child(2)");

let morningclick = function(){
    videobg.src = "oceansunrise.mp4";
}

let eveningclick = function(){
    videobg.src = "nightlapse.mp4";
}

morningbutton.addEventListener('click', morningclick);

eveningbutton.addEventListener('click', eveningclick);
