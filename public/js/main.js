$( document ).ready(function() {
  	
	$("#submit_zip").click(function(){

		var data = {
			"zip":$("#zip").val(),
		};
		$.ajax({
			type: "POST",
			url: "index.php?action=search_zip",
			data: data, 
			dataType:"Json",	
			success: function(response){

				if(response.success == false){
					
				}else{

					// clear out the weather box div if there is already something insid eof it. 

					$(".weather_box").empty();
					// // clear out the heading if there is already something inside of it. 
					

					var title_string = '<span class="wTitle">'+response[1]+'</span>';
					// // append title to div
					$(".weather_box").append(title_string);
				

					//loop through the objects and put contents on the screen
					for(var obj in response[0]){
						var my_string = 
						'<div class="yweather_div">'+
							'<img class="wIcon" src="images/solid_black/'+response[0][obj].code+'.png" alt="'+"weather Code = "+response[0][obj].code+'">'+
							'<div class="wData">'+
								'<span class="wDate">'+response[0][obj].date+'</span>'+
								'<span class="wDay">'+response[0][obj].day+'</span>'+
								'<span class="label">High</span>'+
								'<span class="wHigh">'+response[0][obj].high+'</span>'+
								'<span class="label">Low</span>'+
								'<span class="wLow">'+response[0][obj].low+'</span>'+
								'<div class="bot_container"'+
									'<span class="wText">'+response[0][obj].text+'</span>'+
								'</div>'+
							'</div><!-- End wData Div -->'+
						'</div><!-- End of a forcast -->'
						;

						// append to the div when done with parsing. 
						$(".weather_box").append(my_string);
					}// end for loop 
				}// end else 
			}// end success function 
		});// End Submit Ajax Function
	});// End Submit Click FUnction
	//========================================================

});// end doc ready function