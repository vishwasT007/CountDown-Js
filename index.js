let timeCountDown = () => {
	//This is Future date
	let futureCountDate = new Date('August 30, 2021 00:00:00').getTime(); // Converts Day Into Milliseconds
	//Current Time or Current Day
	let currentDate = new Date().getTime();
	//Now lets Get Difference Between Future with current
	let difference = futureCountDate - currentDate;

	//Time

	let seconds = 1000;
	let minutes = seconds * 60;
	let hour = minutes * 60;
	let days = hour * 24;

	// lets Find From Difference How many days or time is there

	let daysLeft = Math.floor(difference / days);
	let hoursLeft = Math.floor((difference % days) / hour);
	let minutesLeft = Math.floor((difference % hour) / minutes);
	let secondsLeft = Math.floor((difference % minutes) / seconds);

	document.querySelector('.day').innerText = daysLeft;
	document.querySelector('.hour').innerText = hoursLeft;
	document.querySelector('.minutes').innerText = minutesLeft;
	document.querySelector('.seconds').innerText = secondsLeft;
};

setInterval(timeCountDown, 1000);
