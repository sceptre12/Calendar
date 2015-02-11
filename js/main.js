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
	var $monthN = $('.mName'); // months table
	var $col = $('td'); // columns 
	var $glypL = $('#gl'); // left glyp
	var $glypR = $('#gr'); // right glyp
	var $modal = $('#myModal'); // modal
	var $selection ; // current element selected by any action

	// id creation 
	var id ; // unique id for each table cell
	

	$($monthN[curr]).css('display','block');
	$glypL.find('button').click(function() {
		if(curr > 0){
			$(this).find('button').removeAttr("disabled");
			$($monthN[curr]).fadeOut('fast').delay('500');
			$($monthN[curr-1]).delay('500').fadeIn('slow');
			curr--;
		}
		if(curr === 0){
			$(this).attr('disabled','true');
		}
		$glypR.find('button').removeAttr("disabled");
	});
	$glypR.find('button').click(function() {
		if(curr < 11) {
			$($monthN[curr]).fadeOut('fast').delay('500');
			$($monthN[curr+1]).delay('500').fadeIn('slow');
			curr++;
		}
		if(curr === 11){
			$(this).attr('disabled','true');
		}
		$glypL.find('button').removeAttr("disabled");
	});

	// blocks out the empty calendar dates	
	$col.each(function(){
		if($(this).text() === ""){			
			$(this).attr('disabled','true').css('cursor','no-drop');
		}else{
			$(this).css('cursor','pointer');
		}
	}).click(function(){
		if(!($(this).text() === "")){
			// var left = $pos.left.toString().substring(0,7);
			// var top = $pos.top.toString().substring(0,7);			
			var content = $(this).text();
			var $pos = $(this).offset(); // gets the column position
			/*
				Gets the specific left and top position, grabs the first 7 indexes from each number 
				and then adds them together to create the pos variable.
			*/			
			var pos = parseFloat($pos.left.toString().substring(0,7)) + parseFloat($pos.top.toString().substring(0,7)); 
			var parent = $(this).parent().parent().parent().parent().find('h1').text(); // gets the specific month 
			id = parent.substring(0,3).concat(content,pos);
			$selection = $(this);
			$(this).attr('data-toggle','modal').attr('data-target','#myModal');
		}	 	
	});

	$modal.find('p').text('EnterEv');
	$modal.on('show.bs.modal', function(event){
		var info = localStorage.getItem(id),
		month = $selection.parent().parent().parent().parent().find('h1').text(), // gets the specific month;
		day = $selection.text(),
		pos = findCellParent(),
		weekDay = $($selection.parent().parent().parent().find('th')[pos]).text(),
		title = month + " " + weekDay + " " + day;
		$modal.find('h4').text(title);
		if(info !== null){
			$modal.find('p').text(info);			
		}else{
			$modal.find('p').text('');			
		}		
	}).find('#save').click(function(){
		var content = $modal.find('p').text();
		localStorage.setItem(id,content);
	}).find('#close').click(function(){
		$modal.find('p').text("") ;
	});
	function findCellParent(){
		var count = 0,
		pos = 0;
		$row = $selection.parent();
		$row.find('td').each(function(){
			if($(this).text() === $selection.text()){
				pos = count;
			}
			count++;
		});
		return pos;
	}
	
});
