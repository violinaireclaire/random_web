$(document).ready(function(){

	var ones=0;
	var nums = ["1","1","1","1","1","1","1","1","1","1",
				"1","1","1","1","1","1","1","1","1","1",
				"1","1","1","1","1","1","1","1","1","1",
				"1","1","1","1","1","1","1","1","1","1",
				"1","1","1","1","1","1","1","1","1","1",
				"1","1", "1"]

	$("#submitButton").click(function(){

		//check each box
		var allValid = 1
		$("input").each(function(i) {

			if(this.value.localeCompare(nums[i])===0) {
				console.log("goodstuff");
			}
			else{
				allValid=0
			}

		});

		//if all valid, then print 
		if(allValid===1){
			alert("goodstuff!!");
		}
		else{
			alert("noooo :(");
		}

	});

})
