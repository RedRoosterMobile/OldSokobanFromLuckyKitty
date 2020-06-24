
	var animating;
			
	function fillWithCards(cardlist,cardSelector) {
		var $cardlist = $(cardlist);
		// 12 cardtypes
		var cardtype_count = [0,0,0,0,0,0,0,0];
		var i = 0;
		for(i=0;i<16;i++) {
			var card_selected = false;
			var card;
			while ( card_selected==false ) {
				card = Math.floor(randomInt(0,799)/100);
				if (cardtype_count[card] < 2) {
					//current_card = c;
					cardtype_count[card] =  cardtype_count[card] +  1;
					card_selected = true;
				}
			}
			var lastClass = (randomInt(0,99)>50)?" card-alt":""; 
			var listElement='<li id="card-'+i+'" class="card card-'+(card+1)+' '+lastClass+'"><span></span><span class="back"></span></li>\r\n';
			$cardlist.append(listElement);
		}
		$(cardSelector).bind(clickEvent, selectCard);
	}
	
	
	function selectCard() {
		$(".card:not(.card-selected)").removeClass('card-selected');
		
		if(!animating)
			$(this).addClass('card-selected');
		
		if($(".card-selected").length >= 2)
		{
			checkCards();
		}
	}
	
	function checkCards() {
	
		var found = 0;
	
		for(i=1; i<=8; i++)
		{
			if(found > 0)
				continue;
		
			if($(".card-selected.card-"+i).length > 1)
			{
				found = i;
				continue;
			} else {
			}
		}
		
		if(found > 0)
			foundCards(found);
		
		animating = true;
		setTimeout(function () { $(".card").removeClass('card-selected'); animating = false; }, 750);
	}
	
	function foundCards(type) {
		$(".card-"+type).delay(250).animate(
			{ 
				opacity: 0 
			}, 500,
			function() {
				$(this).addClass("card-found");
			
				if($(".card:not(.card-found)").length == 0) {
					$("body").addClass("epic-win");
					$(".win").fadeIn(250);
					playMyAudio(soundSuccess);
					setTimeout(resetBoard, 2500);
				}
				else {
					setTimeout(turnBoard, 1000);
				}
			}
		);
		
	}
	
	// board is gonna be turned 
	function turnBoard() {
		// TODO: on different levels: increase chance by 25% up to always
		if(Math.random() < 0.25) // 25% chance that magic is going to happen.
		{
			$(".gameboard").attr("class", "gameboard gameboard-alt"+Math.ceil(Math.random()*2));;
		}
	}
	
	//TODO: delete and rebuild list items
	function resetBoard() {
		$(".card").removeClass("card-found");
		$(".gameboard").animate({ opacity: 0 }, 400,
			function()
			{
				$(".win").fadeOut(250);
				$(".card").css("opacity", 1);
				$(".gameboard").animate({ opacity: 1 }, 400);
			}
		);
	}
