function Time() {
    // Creating object of the Date class
    var date = new Date();
    // Get current hour
    var hour = date.getHours();
    // Get current minute
    var minute = date.getMinutes();
    // digital Array
    const digital = [[1,1,1,1,1,1,0],[0,1,1,0,0,0,0],[1,1,0,1,1,0,1],[1,1,1,1,0,0,1],[0,1,1,0,0,1,1]
    ,[1,0,1,1,0,1,1],[0,0,1,1,1,1,1],[1,1,1,0,0,1,0],[1,1,1,1,1,1,1],[1,1,1,0,0,1,1],]
    // digital id=""
    const digitalString = ["FrameTop","RightTop","RightBottom","Bottom","LeftBottom","LeftTop","Middle"]
    var period = "";
    // Assigning AM / PM according to the current hour



    if (hour >= 12) {
    period = "PM";
    } else {
    period = "AM";
    }

    // Updating hour, minute, and second
    // if they are less than 10
    hour = update(hour);
    fristHour = hour.toString()[0];
    secondHour = hour.toString()[1];
    minute = update(minute);
    thirdMinute = minute.toString()[0];
    fourthMinute = minute.toString()[1];
    const firstArray = digital[fristHour];
    const secondArray = digital[secondHour];
    const thridArray = digital[thirdMinute];
    const fourthArray = digital[fourthMinute];
    
    var i;
    for (i = 0; i < 10; i++ )
    {
        if (firstArray[i] == 0) {
            let firstElement = document.getElementById("first" + digitalString[i]);
            firstElement.classList.add("off");
        }
        if (secondArray[i] == 0) {
            let secondHourelement = document.getElementById("second" + digitalString[i])
            secondHourelement.classList.add("off");
        } 
        if (thridArray[i] == 0) {
            let thirdElement = document.getElementById("third" + digitalString[i]);
            thirdElement.classList.add("off");
        }
        if (fourthArray[i] == 0) {
            let fourthElement = document.getElementById("fourth" + digitalString[i])
            fourthElement.classList.add("off");
        } 
    }



    // Adding time elements to the div
    //document.getElementById("digital-clock").innerText = hour + " : " + minute + " : " + second + " " + period;
    // Set Timer to 1 sec (1000 ms)
    setTimeout(Time, 10000);
   }
    // Function to update time elements if they are less than 10
    // Append 0 before time elements if they are less than 10
   function update(t) {
    if (t < 10) {
    return "0" + t;
    }
    else {
    return t;
    }
   }
   Time();