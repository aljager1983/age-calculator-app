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
const scrSize = document.getElementById("wh");
let date = new Date();

let years = 0;
let months = 0;
let days = 0;

convert.addEventListener("click", function(event) {
    event.preventDefault(); //
    
    let currentYear = date.getFullYear();
    let currentMonth = date.getMonth() + 1;
    let currentDay = date.getDate();
    
    let enteredDay = Number(day.value);
    let enteredMonth = Number(month.value);
    let enteredYear = Number(year.value);
    
    //check if inputs are empty
    if(day.value == "" && month.value == "" && year.value == "") {
        validYr.innerHTML = "This field is required";
        validMon.innerHTML = "This field is required";
        validDay.innerHTML = "This field is required";
    }

    //below logic cc from Asif Mughal of https://www.codehim.com/date-time/javascript-calculate-age-in-years-months-days/#:~:text=How%20to%20Calculate%20Age%20in%20Years%2C%20Months%2C%20and,tag%20before%20closing%20the%20body%20tag%20and%20done.
    //start of calendear logic
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
    //end of calendar logic

    //empty entries checker
        if(day.value != "") {
            if(month.value != "") {
                if(year.value != "" ){

                }else  {
                    validMon.innerHTML = "";
                    return validYr.innerHTML = "This field is required";
                }
            }else {
                validDay.innerHTML = "";
                return validMon.innerHTML = "This field is required";
            }
        } else {
            return validDay.innerHTML = "This field is required";
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
   
    if(day.value > 0 && day.value <= 31) {
        validDay.innerHTML = "";
    } else {
        emptyRes();
        return validDay.innerHTML = "Must be valid day";
        
    }

    if(month.value == 2 && day.value <= 29) {
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

}
    
)
    function result() {
    monthsRes.innerHTML = months ;
    daysRes.innerHTML = days ;
    yearsRes.innerHTML = years ;
    }
    
    function emptyRes() {
    monthsRes.innerHTML = " --months";
    daysRes.innerHTML =  " --days";
    yearsRes.innerHTML =  " --years";
    }

    function size () {
        let h = window.innerHeight;
        let w = window.innerWidth;
        scrSize.innerHTML = w + "x" + h + " wxh";
    }