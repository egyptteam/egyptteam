     var mydate = new Date();
     var year = mydate.getYear() + 1900;
     var day = mydate.getDay();  
     var month = mydate.getMonth(); 
     var daym = mydate.getDate();
     // Preparing to spit on the document :)
                
     var dayarray = new Array("Sunday,","Monday,","Tuesday,", "Wednesday,", "Thursday," , "Friday,", "Saturday");
     var montharray = new Array ("January","February","March", "April", "May" , "June", "July","August,", "September", "October" , "November", "December");
    document.write(""+dayarray[day] + " "  +montharray[month]+ " " +daym+  " , " +year+ "");
	document.getElementById("MyDateDisplay").innerText = date;
	document.getElementById("MyDateDisplay").textContent = date;
