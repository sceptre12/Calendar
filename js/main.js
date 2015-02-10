(function(){
	var count =1;
var months = $('.mName');
$(months).find("h1").each(function(){
   if(($(this).text() === "January") || ($(this).text() === "March") || ($(this).text() === "May") || ($(this).text() === "July") || ($(this).text() === "August") || ($(this).text() === "October") || ($(this).text() === "December")){
		var dmonth = $(this).text();
		$(this).parent().find("td").each(function(index,element){
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
		$(this).parent().find("td").each(function(index,element){
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
		$(this).parent().find("td").each(function(index,element){
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
