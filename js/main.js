(function(){
	var count =1;
var months = $('.mName');
$(months).find("h1").each(function(){
   if(($(this).text() === "January") || ($(this).text() === "March") || ($(this).text() === "May") || ($(this).text() === "July") || ($(this).text() === "August") || ($(this).text() === "October") || ($(this).text() === "December")){
		var dmonth = $(this).text();
		$(this).parent().parent().find("td").each(function(index,element){
			if(dmonth ==="January"){
				if(index >2){
					if(count < 32){
						$(this).text(count);
					   	count++;
					}
				}
			}
			if(dmonth ==="March"){
				if(index >5){
					if(count < 32){
						$(this).text(count);
					   	count++;
					}
				}
			}
			if(dmonth ==="May"){
				if(index >3){
					if(count < 32){
						$(this).text(count);
					   	count++;
					}
				}
			}
			if(dmonth ==="July"){
				if(index >1){
					if(count < 32){
						$(this).text(count);
					   	count++;
					}
				}
			}
			if(dmonth ==="August"){
				if(index >4){
					if(count < 32){
						$(this).text(count);
					   	count++;
					}
				}
			}
			if(dmonth ==="October"){
				if(index >2){
					if(count < 32){
						$(this).text(count);
					   	count++;
					}
				}
			}
			if(dmonth ==="December"){
				if(index >0){
					if(count < 32){
						$(this).text(count);
					   	count++;
					}
				}
			}
		});
		count = 1;
	}
	if(($(this).text() === "April") || ($(this).text() === "June") || ($(this).text() === "September") || ($(this).text() === "November")){
		var dmonth = $(this).text();
		$(this).parent().parent().find("td").each(function(index,element){
		  	if(dmonth === "April"){
		  		if(index >1){
			  		if(count < 31){
						$(this).text(count);
					   	count++;
					}
		  		}
		  	}
		  	if(dmonth === "June"){
			  		if(count < 31){
						$(this).text(count);
					   	count++;
					}
		  	}
		  	if(dmonth === "September"){
		  		if(index >0){
			  		if(count < 31){
						$(this).text(count);
					   	count++;
					}
		  		}
		  	}
		  	if(dmonth === "November"){
		  		if(index >5){
			  		if(count < 31){
						$(this).text(count);
					   	count++;
					}
		  		}
		  	}
		});
		count = 1;
	}
	if(($(this).text() === "Feburary")){
		$(this).parent().parent().find("td").each(function(index,element){
		  	if(index>5){
			  	if(count < 29){
					$(this).text(count);
				   	count++;
				}		  	}

		});
		count = 1;
	}
});
})();
$(document).ready(function(){
	var curr =0;
	var len = $('.mName').length;
	$($('.mName')[curr]).css('display','block');
	$('#gl').find('button').click(function() {
		if(curr > 0){
			$('#gl').find('button').removeAttr("disabled");
			$($('.mName')[curr]).fadeOut('fast').delay('500');
			$($('.mName')[curr-1]).delay('500').fadeIn('slow');
			curr--;
		}
		if(curr === 0){
			$(this).attr('disabled','true');
		}
		$('#gr').find('button').removeAttr("disabled");
	});
	$('#gr').find('button').click(function() {
		if(curr < 11) {
			$($('.mName')[curr]).fadeOut('fast').delay('500');
			$($('.mName')[curr+1]).delay('500').fadeIn('slow');
			curr++;
		}
		if(curr === 11){
			$(this).attr('disabled','true');
		}
		$('#gl').find('button').removeAttr("disabled");
	});

	// blocks out the empty calendar dates	
	$('td').each(function(){
		if($(this).text() === ""){			
			$(this).attr('disabled','true').css('cursor','no-drop');
		}else{
			$(this).css('cursor','pointer');
		}
	}).click(function(){
		if(!($(this).text() === "")){			
			$(this).attr('data-toggle','modal').attr('data-target','#myModal');
		}	 	
	});
	
});