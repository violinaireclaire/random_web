$(document).ready(function(){

	var ones=0;
	var nums = ["4","9","6","5","1","3","2","1","9","2",
				"5","5","3","4","6","1","8","7","5","2",
				"1","3","8","1","6","5","8","3","7","9",
				"3","7","9","4","1","3","9","6","2","8",
				"5","1","8","1","9","2","2","4","1","7",
				"9","6","8"]
	$("#submitButton").click(function(){

		//check each box
		var allValid = 1
		var count=0;
		$("input").each(function(i) {

			if(this.value.localeCompare(nums[i])===0) {
			}
			else{
				allValid=0
			}
			if (i == 51)
			{
				if(allValid===1){
					alert("goodstuff!!");
				}
				else{
					alert("noooo :(");
				}

			}

		});

	});

})
