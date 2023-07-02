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

//for the countdown animations
    let countsYrs = 0;
    let countsMons = 0;
    let countsDays = 0;
    let uptoYrs = 0;
    let uptoMos = 0;
    let uptoDays = 0;


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
   
                
    //year, month, day entries validator
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

    //leap year checker
    if ((0 == enteredYear % 4) && (0 != enteredYear % 100) || (0 == enteredYear % 400)) {
        console.log(enteredYear + ' is a leap year');
        if(month.value == 2 && day.value <= 29) {
            result();
            return;
        }
    } else {
        console.log(enteredYear + ' is not a leap year');
        if(month.value == 2 && day.value <= 28) {
            result();
            return;
        } else {
            emptyRes();
            validDay.innerHTML = "Must be valid day";
            return;
        }
        
    }

    

}
    
)
    function result() {
    // monthsRes.innerHTML = months ;
    // daysRes.innerHTML = days ;
    // yearsRes.innerHTML = years ;
    uptoYrs = 0;
    uptoMos = 0;
    uptoDays = 0;
    countsYrs = setInterval(updateYrs, 75);
    countsMons = setInterval(updateMnts, 75);
    countsDays = setInterval(updateDays, 75);

    }
    
    function emptyRes() {
    monthsRes.innerHTML = "--";
    daysRes.innerHTML =  "--";
    yearsRes.innerHTML =  " --";
    }

    //screenschecking
    function size () {
        let h = window.innerHeight;
        let w = window.innerWidth;
        scrSize.innerHTML = w + "x" + h + " wxh";
    }


    function updateYrs() {
        if(uptoYrs == years) {
            return;
        } else {
        yearsRes.innerHTML = ++uptoYrs;
        if (uptoYrs == years) {
            clearInterval(countsYrs);
            }
        }
        
    }

    function updateMnts() {
        if(uptoMos == months) {
            return;
        } else {
         monthsRes.innerHTML = ++uptoMos;
        if (uptoMos == months) {
            clearInterval(countsMons);
            }
        }
    }

    function updateDays() {
        if(uptoDays == days) {
            return;
        } else {
            daysRes.innerHTML = ++uptoDays;
        if (uptoDays == days) {
            clearInterval(countsDays);
            }
        }
    }