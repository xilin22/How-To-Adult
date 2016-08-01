$(document).ready(function(){
	//listening for the submit button
	//grab the values from the form when clicked
	$("#search").submit(function(event){
		event.preventDefault();
		var data = $(this).serializeArray();
		// console.log(data[0].value)
		searchWord(data[0].value);
	})

	//option 1
	//if you get the value "taxes"
		// append a div on the top with the link to the taxes the page
	// else if you get the value "bills"
		//append a div on the top with the link to the bills page
	//etc

	//option 2
	//build an object literal/dictionarhy of all the search terms that are kosher as keys, as the value
	// if the object literal has one of the search terms, then append a div with the associate link
	// else 
	// 	append a div that says "sorry, we don't have that"

	//.append()

	
})

function searchWord(searchKey) {
	console.log(searchKey);
	var searchData = {taxes:"file:///C:/Users/GWC11/Documents/How-To-Adult/taxes.html", 
	bills:"file:///C:/Users/GWC11/Documents/How-To-Adult/bills.html", 
	cars:"file:///C:/Users/GWC11/Documents/How-To-Adult/car.html", 
	car:"file:///C:/Users/GWC11/Documents/How-To-Adult/car.html", 
	interview:"file:///C:/Users/GWC11/Documents/How-To-Adult/interview.html", 
	emergency:"file:///C:/Users/GWC11/Documents/How-To-Adult/preparedness.html", 
	preparedness:"file:///C:/Users/GWC11/Documents/How-To-Adult/preparedness.html",
	apartment:"file:///C:/Users/GWC11/Documents/How-To-Adult/house.html", 
	resume:"file:///C:/Users/GWC11/Documents/How-To-Adult/resume.html"};

	for(var key in searchData) {
		if (key == searchKey){
			console.log("im here!")
			var newdiv1 = "<div id='link'><a href=\""+ searchData[key] +"\">" + searchKey + "</a></div>";
  			
  			newdiv1.href= searchData[key];
			$("#giveLink").append(newdiv1);

		}
	}
}