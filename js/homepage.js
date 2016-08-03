var JSONURL = "https://spreadsheets.google.com/feeds/list/1_SgcM1KC0ZobhL_8f7xgsQ7vUB1Xxlg7hCHB6XkPNc4/1/public/basic?alt=json";

function readData(data){
    var rows = [];
    console.log(data)
	var cells = data.feed.entry;
	for (var i = 0; i < cells.length; i++){
	  var rowObj = {};
	  rowObj.timestamp = cells[i].title.$t;
	  var rowCols = cells[i].content.$t.split(',');
	  for (var j = 0; j < rowCols.length; j++){
	    var keyVal = rowCols[j].split(':');
	    rowObj[keyVal[0].trim()] = keyVal[1].trim();
	  }
	  rows.push(rowObj);
	}
    
   console.log(rows);

   //this where your appending logic will go
   appending(rows);
  
}

function appending(rows) {
	for (var i = 0; i < rows.length; i++) {
   		var comment = rows[i];
   		var headerName = "<h3 class='comment-name'>" + comment.name + "</h3>";
   		var userComment = "<p class='comment'>" + comment.comment + "</p>";
   		$("#my-comments").append(headerName + userComment);
   	}
}




$(document).ready(function(){

	$.ajax({
		url: "https://spreadsheets.google.com/feeds/list/1_SgcM1KC0ZobhL_8f7xgsQ7vUB1Xxlg7hCHB6XkPNc4/1/public/basic?alt=json",
		success: function(data){
			readData(data);

		}
	})
	//listening for the submit button
	//grab the values from the form when clicked
	$("#search").submit(function(event){
		event.preventDefault();
		var data = $(this).serializeArray();
		searchWord(data[0].value);
	})


	$("#post").submit(function(event){
		event.preventDefault();
		var data = $(this).serialize();
		var formattedData = $(this).serializeArray();
		console.log(formattedData)


		$.ajax({
			url: "https://script.google.com/macros/s/AKfycbwLEi4t1ZlcwxMezDcxiVZzeRAhXiwbH_v-jrBm5YURlBrroRs/exec",
			type: "POST",
			data: data
		})

		var reformattedData = makeObject(formattedData);
		appending(reformattedData);
		// document.getElementById("submit").reset();

		$(this).trigger("reset");

	
	})

	
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



function makeObject(data){
	var result = {};

	for (var i = 0; i < data.length; i++) {
		result[data[i].name] = data[i].value;
	}

	result = [result]
	return result;
}