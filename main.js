function Time() {
    // Creating object of the Date class
    var date = new Date();
    // Get current hour
    var hour = date.getHours().toString();
    // Get current minute
    var minute = date.getMinutes().toString();
    // Get current second
    var second = date.getSeconds().toString();

    // digital Array
    const digital = [[1,1,1,1,1,1,0],[0,1,1,0,0,0,0],[1,1,0,1,1,0,1],[1,1,1,1,0,0,1],[0,1,1,0,0,1,1]
    ,[1,0,1,1,0,1,1],[0,0,1,1,1,1,1],[1,1,1,0,0,1,0],[1,1,1,1,1,1,1],[1,1,1,0,0,1,1],]
    // digital id=""
    const digitalString = ["FrameTop","RightTop","RightBottom","Bottom","LeftBottom","LeftTop","Middle"]
 
    // Assigning AM / PM according to the current hour
    hour = update(hour);
    minute = update(minute);
    second = update(second);
    // time array to string 
    let timeArray = [hour[0],hour[1],minute[0],minute[1],second[0],second[1]]

    //digital Log Array
    let firstArray = digital[timeArray[0]];
    let secondArray = digital[timeArray[1]];
    let thridArray = digital[timeArray[2]];
    let fourthArray = digital[timeArray[3]];
    let fifthArray = digital[timeArray[4]];
    let sixthArray = digital[timeArray[5]];


    if (hour >= 12) {
    period = "PM";
    } else {
    period = "AM";
    }

    // Updating hour, minute, and second
    // if they are less than 10
   
    async function runClick(fristHour,secondHour,thirdMinute,fourthMinute,fifthSec,sixthSec) {
        let firstArray = await digital[fristHour];
        let secondArray = await digital[secondHour];
        let thridArray = await digital[thirdMinute];
        let fourthArray = await digital[fourthMinute];
        let fifthArray = await digital[fifthSec];
        let sixthArray = await digital[sixthSec];


        async function circuit(firstArray) {
        let result = firstArray.reduce((previousPromise, nextId) => {
            return previousPromise.then(() => {
                return circuit(nextId)
            })
        })
        }
    }



    for (var i = 0; i < 10; i++ ) {
        {
            if (firstArray[i] == 0) {
                let firstElement = document.getElementById("first" + digitalString[i]);
                firstElement.classList.add("off");
            }
            if (firstArray[i] == 1) {
                document.getElementById("first" + digitalString[i]).classList.remove("off");
                }
            }
            if (secondArray[i] == 0) {
                let secondHourelement = document.getElementById("second" + digitalString[i])
                secondHourelement.classList.add("off");
            } 
            if (secondArray[i] == 1) {
                document.getElementById("second" + digitalString[i]).classList.remove("off");
            }
            if (thridArray[i] == 0) {
                let thirdElement = document.getElementById("third" + digitalString[i]);
                thirdElement.classList.add("off");
            }
            if (thridArray[i] == 1) {
                document.getElementById("third" + digitalString[i]).classList.remove("off");
            }
            if (fourthArray[i] == 0) {
                let fourthElement = document.getElementById("fourth" + digitalString[i])
                fourthElement.classList.add("off");
            } 
            if (fourthArray[i] == 1) {
                document.getElementById("fourth" + digitalString[i]).classList.remove("off");
            }
            if (fifthArray[i] == 0) {
                let fifthElement = document.getElementById("fifth" + digitalString[i])
                fifthElement.classList.add("off");
            } 
            if (fifthArray[i] == 1) {
                document.getElementById("fifth" + digitalString[i]).classList.remove("off");
            }
            if (sixthArray[i] == 0) {
                let fifthElement = document.getElementById("sixth" + digitalString[i])
                fifthElement.classList.add("off");
            } 
            if (sixthArray[i] == 1) {
                document.getElementById("sixth" + digitalString[i]).classList.remove("off");
            }
    }

    // Adding time elements to the div
    //document.getElementById("digital-clock").innerText = hour + " : " + minute + " : " + second + " " + period;
    // Set Timer to 1 sec (1000 ms)
    setTimeout(Time, 1000);
    // Function to update time elements if they are less than 10
    // Append 0 before time elements if they are less than 10
   function update(t) {
    if (t < 5) {
    return "0" + t;
    }
    else {
    return t;
    }
}
}
   Time();