
	function check_leapyear(){
		
		var year;
 
		 
		year = document.getElementById("year").value;
 
		if( (0 == year % 4) || (0 == year % 400) && (0 != year % 100) )
		{
			alert(year+" is a leap year");  
		}
		else
		{
			alert(year+" is not a leap year");  
		}
	}