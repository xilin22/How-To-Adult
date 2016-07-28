$(document).ready(function(){
	//listening for the submit button
	//grab the values from the form when clicked
	$("#search").submit(function(event){
		event.preventDefault();
		var data = $(this).serializeArray();
		console.log(data[0].value)
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