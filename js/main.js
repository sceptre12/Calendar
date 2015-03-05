(function(){
	var amount = 12;
	var $container = $('.mName');
	
	function loop(count){
		var table = "<div class='table-responsive'><table class='table table-striped table-bordered'>";			
			for(var a = 0; a < count ; a++){
				if(a === 0){
					table +="<thead><tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr></thead><tbody>"
				}else{
					table +="<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
				}
			}
			table += " </tbody></table></div>";
			return table;	
	}
	$container.each(function(index,element){
		if(index === 0 || index === 2 || index === 3 || index === 5 || index === 6 || index === 8 || index === 9 || index === 10 || index === 11){
			var count = 6;
			$($container[index]).append(loop(count));
		}else if(index === 1){
			var count = 5;
			$($container[index]).append(loop(count));
		}else {
			count = 7;
			$($container[index]).append(loop(count));
		}
	});	
})();

//populates the calendar.. Todo: is there a better way to implement this;
(function(){
var count =1;
var months = $('.mName');
$(months).find("h1").each(function(){
   if(($(this).text() === "January ") || ($(this).text() === "March ") || ($(this).text() === "May ") || ($(this).text() === "July ") || ($(this).text() === "August ") || ($(this).text() === "October ") || ($(this).text() === "December ")){
		var dmonth = $(this).text();
		$(this).parent().parent().find("td").each(function(index,element){
			if(dmonth ==="January "){
				if(index >3){
					if(count < 32){
						$(this).append("<h3></h3>").find("h3").text(count);
					   	count++;
					}
				}
			}
			if(dmonth ==="March "){
				if(index >=0){
					if(count < 32){
						$(this).append("<h3></h3>").find("h3").text(count);
					   	count++;
					}
				}
			}
			if(dmonth ==="May "){
				if(index >4){
					if(count < 32){
						$(this).append("<h3></h3>").find("h3").text(count);
					   	count++;
					}
				}
			}
			if(dmonth ==="July "){
				if(index >2){
					if(count < 32){
						$(this).append("<h3></h3>").find("h3").text(count);
					   	count++;
					}
				}
			}
			if(dmonth ==="August "){
				if(index >5){
					if(count < 32){
						$(this).append("<h3></h3>").find("h3").text(count);
					   	count++;
					}
				}
			}
			if(dmonth ==="October "){
				if(index >3){
					if(count < 32){
						$(this).append("<h3></h3>").find("h3").text(count);
					   	count++;
					}
				}
			}
			if(dmonth ==="December "){
				if(index >1){
					if(count < 32){
						$(this).append("<h3></h3>").find("h3").text(count);
					   	count++;
					}
				}
			}
		});
		count = 1;
	}
	if(($(this).text() === "April ") || ($(this).text() === "June ") || ($(this).text() === "September ") || ($(this).text() === "November ")){
		var dmonth = $(this).text();
		$(this).parent().parent().find("td").each(function(index,element){
		  	if(dmonth === "April "){
		  		if(index >2){
			  		if(count < 31){
						$(this).append("<h3></h3>").find("h3").text(count);
					   	count++;
					}
		  		}
		  	}
		  	if(dmonth === "June "){
		  		if(index > 0){
		  			if(count < 31){
						$(this).append("<h3></h3>").find("h3").text(count);
					   	count++;
					}
		  		}
			  		
		  	}
		  	if(dmonth === "September "){
		  		if(index >1){
			  		if(count < 31){
						$(this).append("<h3></h3>").find("h3").text(count);
					   	count++;
					}
		  		}
		  	}
		  	if(dmonth === "November "){
		  		if(index >=0){
			  		if(count < 31){
						$(this).append("<h3></h3>").find("h3").text(count);
					   	count++;
					}
		  		}
		  	}
		});
		count = 1;
	}
	if(($(this).text() === "Feburary ")){
		$(this).parent().parent().find("td").each(function(index,element){
		  	if(index>=0){
			  	if(count < 29){
					$(this).append("<h3></h3>").find("h3").text(count);
				   	count++;
				}		  	}

		});
		count = 1;
	}
});

})();
// Checks if the user is in private browsing mode in safari
// local storage dosent work in that mode.
try{
	localStorage.setItem("tester", "works");
	localStorage.removeItem("tester");
}catch(e){
	alert("This application will not display events in private browsing mode")
}
$(document).ready(function(){
	var curr =0;
	var $monthN = $('.mName'); // months table
	var $col = $('td'); // columns 
	var $glypL = $('#gl'); // left glyp
	var $glypR = $('#gr'); // right glyp
	var $modal = $('#myModal'); // modal
	var $selection ; // current element selected by any action
	var delay  = 0; // prevents button spammers
	var currDate = new Date(); // current date 
	var curr = currDate.getMonth();
	var browser = BrowserDetect.browser;
	
	$col.each(function(){
		if( !($(this).text() === "" || $(this).text() === null) ){
			$(this).append("<div class='circbox'></div>");
		}
	});
	
	if(browser === "Explorer"){
		$($monthN[curr]).css('display','inline-block');
	}else{
		$($monthN[curr]).css('display','block');
	}
	

	$glypL.find('button').click(function() {
		setTimeout(function(){
			if(curr > 0){
				$(this).find('button').removeAttr("disabled");
				$($monthN[curr]).fadeOut('fast').delay('500');
				if(browser === "Explorer"){
					$($monthN[curr-1]).delay('500').fadeIn('slow').css('display','inline-block');
				}else{
					$($monthN[curr-1]).delay('500').fadeIn('slow');
				}
				
				curr--;
			}
			if(curr === 0){
				$(this).attr('disabled','true');
			}
			$glypR.find('button').removeAttr("disabled");
		},
		delay)		
	});

	$glypR.find('button').click(function() {
		setTimeout(function(){
			if(curr < 11) {
				$($monthN[curr]).fadeOut('fast').delay('500');
				if(browser === "Explorer"){
					$($monthN[curr+1]).delay('500').fadeIn('slow').css('display','inline-block');
				}else{
					$($monthN[curr+1]).delay('500').fadeIn('slow');
				}
				
				curr++;
			}
			if(curr === 11){
				$(this).attr('disabled','true');
			}
			$glypL.find('button').removeAttr("disabled");
		},
		delay)
		
	});

	// blocks out the empty calendar dates	
	$col.each(function(){			
		var content = $(this).text(),
		parent = $(this).parent().parent().parent().parent().parent().find('h1').text(), // gets the specific month
		station = parent.substring(0,3).concat("_",content); // ommiting the pos var just to simplify the calls
		$(this).attr('key',station);
		var id = localStorage.getItem($(this).attr('key'));
		if($(this).text() === ""){			
			$(this).attr('disabled','true').css('cursor','no-drop');
		}else{
			$(this).css('cursor','pointer');
			if(id !== null && id !== ""){
				$(this).css('background-color',"#f6d56f");
			}			
		}
	}).click(function(){
		var chk =  localStorage.getItem($(this).attr('key'));
		if(($(this).text() !== "") && (chk !== "" ) && (chk  !== null)){
			$selection = $(this);
			$(this).attr('data-toggle','modal').attr('data-target','#myModal');
		}	 	
	});
	$modal.on('show.bs.modal', function(event){
		var info = localStorage.getItem($selection.attr('key')),
		month = $selection.parent().parent().parent().parent().parent().find('h1').text(), // gets the specific month;
		month = month.split(" "),
		day = $selection.text(),
		pos = findCellParent(),
		weekDay = $($selection.parent().parent().parent().find('th')[pos]).text(),
		title = weekDay + ", " + month[0] + " " + day  +", " + month[1] ;
		$modal.find('h4').text(title);
		if(info !== null){
			var items = info.split(',');
			var chk = positions(items);
			var mess = createMessage(chk, items);
			$modal.find('p').html(mess);				
		}else{
			$modal.find('p').text('');			
		}		
	})
	// makes use of the save and close buttons

	// .find('#save').click(function(){
	// 	if($modal.find('p').text() !== ""){	
	// 		if($selection.find('div').find('div').hasClass('circle') !== true){
	// 			$selection.find('div').append('<div></div>').find('div').addClass('circle');
	// 		}				
	// 	}		
	// 	var content = $modal.find('p').text();
	// 	localStorage.setItem($selection.attr('key'),content);
	// }).find('#close').click(function(){
	// 	$modal.find('p').text("") ;
	// });
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
	function positions(arr){
		var positions = [];
		for(var a = 0; a < arr.length; a++){
			if(arr[a].search(";") !== -1){
				positions.push(a);
			}
		}
		return positions;
	}
	function sanitize(item){
		var pos = item.search(";"),
		sanitize;
		if(pos !== -1){
			sanitize = item.substring(0,pos);
			return sanitize;
		}else{
			return item;
		}
	}
	function createMessage(pos,items){
		var message ;
		for(var a = 0; a < pos.length; a++){
			if(a === 0){
				message = "<h4>" + items[0] +"</h4>" +  "<ul>" ;
				for(var b = 1; b <= pos[a]; b++ ){
					message+= "<li>" + sanitize(items[b]) + "</li>";
				}
			}else{
				message+= "<h4>" +items[pos[a -1] + 1] +"</h4>" + "<ul>" ;
				for(var b = pos[a-1] + 2 ; b <= pos[a]; b++ ){
					message+= "<li>" + sanitize(items[b]) + "</li>";
				}
			}			
			message+= "</ul>";
		}
		return message;
	}	
});
function setEvents(Date,Message){
	localStorage.setItem(Date,Message);
}