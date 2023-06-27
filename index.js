const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const convert = document.getElementById("arrow");
const yearsRes = document.getElementById("yearsRes");
const monthsRes = document.getElementById("monthsRes");
const daysRes = document.getElementById("daysRes");
const validDay = document.getElementById("validDay");
const validMon = document.getElementById("validMon");
const validYr = document.getElementById("validYr");

let date = new Date();
let maxDay = 31;
let daysOfFeb = 0;

let years = 0;
let months = 0;
let days = 0;
let m = 0;

convert.addEventListener("click", function(event) {
    event.preventDefault();
    // let str = "28-04-1991"; --old format
    let str = day.value + "-" + month.value + "-" + year.value;
    let d = new Date(...prepareDate(str));
    
    let currentYear = date.getFullYear();
    let currentMonth = date.getMonth() + 1;
    let currentDay = date.getDate();
    
    let enteredDay = Number(day.value);
    let enteredMonth = Number(month.value);
    let enteredYear = Number(year.value);

    let diffTime = Date.now() - d.getTime();
    
    

	
    //convert millisecs
    let msToSec = diffTime / 1000;          //to seconds
    let secToMin = msToSec / 60;        //to minutes
    let minToHr = secToMin / 60;        //to hour
    let hrToDay = minToHr / 24;         //to day
    // let dayToYr = hrToDay / 365.25;
    let dayToMo = hrToDay / 31;         //to month
    let moToYe  = dayToMo / 12;         //to year
    
    let dayToYr = diffTime / (1000 * 60 * 60 * 24 * 365.25);

    // years = Math.trunc( dayToYr);
    
    
    //check if inputs are empty
    if(day.value == "" && month.value == "" && year.value == "") {
        validYr.innerHTML = "Year must not be empty";
        validMon.innerHTML = "Month must not be empty";
        validDay.innerHTML = "Day must not be empty";
    }

    let daysUntrunc = (currentMonth - months) * 31;
    // days = Math.trunc(daysUntrunc);

    // if(month.value <= currentMonth) {
    // months = currentMonth - month.value;
    // } else {
    //     months = 12 - Math.abs(Number(month.value) - currentMonth);
    // }


    // if(day.value <= currentDay) {
    //     days = currentDay - day.value;
    //     if(month.value <= currentMonth) {
    //         months = currentMonth - month.value;
    //         if(month.value == currentMonth && day.value == currentDay) {
    //             years += 1;
    //         }
    //     } else {
    //         months = 12 - Math.abs(Number(month.value) - currentMonth);
    //     }
    // } else {
    //     days = 31 - Math.abs(Number(day.value) - currentDay);
    // }

    // if(day.value <= currentDay && currentMonth >= month.value) {
    //     months = currentMonth - month.value;
    //     days = currentDay - day.value;
    // } else {
    //     months = 12 - Math.abs(Number(month.value) - currentMonth);
    //     days = 31 - Math.abs(Number(day.value) - currentDay);
    // }

    //below logic cc from captain anonymous of https://codepen.io/pen/?editors=0010
    if (currentDay < enteredDay) {
		days = (currentDay - enteredDay + 31);
		currentMonth -=  1;
	} else {
		days = (currentDay - enteredDay);
	}

	if (currentMonth < enteredMonth) {
		months = (currentMonth - enteredMonth + 12) ;
		currentYear -=  1;
	} else {
		months = (currentMonth - enteredMonth);
	}

    years = currentYear - enteredYear;

        if(day.value != "") {
            if(month.value != "") {
                if(year.value != "" ){

                }else  {
                    validMon.innerHTML = "";
                    return validYr.innerHTML = "Year must not be empty";
                }
            }else {
                validDay.innerHTML = "";
                return validMon.innerHTML = "Month must not be empty";
            }
        } else {
            return validDay.innerHTML = "Day must not be empty";
        }
   

    //year, month, day validator
    if(year.value <= date.getFullYear() && year.value != 0) {
            validYr.innerHTML = "";
    } else {
        emptyRes();
        return validYr.innerHTML = "Must be in the Past";
    }

    if(month.value > 0 && month.value < 13) {
        validMon.innerHTML = "";
    } else {
        emptyRes();
        return validMon.innerHTML = "Must be a valid Month";
    }
   
    if(day.value > 0 && day.value < maxDay) {
        validDay.innerHTML = "";
    } else {
        emptyRes();
        return validDay.innerHTML = "Must be valid day";
        
    }

    if(month.value == 2 && daysOfFeb == 29 && day.value <= 29) {
        console.log("month of february and its leap year");
        result();
    } else if(day.value <= 31 && (month.value == 0 || month.value == 1 || month.value == 3 )) {
        result();
    } else if(day.value <= 30) {
        result();
    }else 
     {
        validDay.innerHTML = "Must be valid day";
    }

    console.log("Month " + months);
    console.log("day " + days);
    
}
    
)


    function prepareDate(d) {
        [d, m, y] = d.split("-"); //Split the string
        return [y, m - 1, d]; //Return as an array with y,m,d sequence
    }
    
    function result() {
    monthsRes.innerHTML = months + " Months";
    daysRes.innerHTML = days + " Days";
    yearsRes.innerHTML = years + " Years";
    }
    
    function emptyRes() {
    monthsRes.innerHTML = " --months";
    daysRes.innerHTML =  " --days";
    yearsRes.innerHTML =  " --years";
    }

    