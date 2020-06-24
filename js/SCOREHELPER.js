/* 
 * wrapper for scores in localstorage
 */

var SCOREHELPER = function () {
	// TODO:
	// define all cats here
	var _cats = [
		'acat_normal',
		'bcat_normal',
		'ccat_normal',
		'dcat_normal',
		'ecat_normal',
		'fcat_normal',
		'gcat_normal',
		'hcat_normal'
	];
	var _backgrounds = [
		'redStar',
		'paperMountain',
		'moonShine',
		'japaneseSunset',
		'blueRainbow',
		'redSun',
		'blueCircles',
		'purpleHaze'
	];
	
	
			
    return {
		 //working
		 getCatsScore: function () {
			var score = parseInt(SCOREHELPER.getSavedScore());
			//odd
			if ( (score%2) === 1) {
				score = (score/2) - 0.5;
			} else {
				score = (score/2);
			}
			return score;
		 },
		 //working
		 getBackgroundScore: function () {
			var score = parseInt(SCOREHELPER.getSavedScore());
			if ( (score%2) === 1) {
				score = (score/2) + 0.5;
			} else {
				score = (score/2);
			}
			return score;
		 },
		 getDaysToNewCat: function () {
			return getDaysToNewBackground()+7;
		 },
		 getDaysToNewBackground: function () {
			//8
			return 8;
		 },
		 getAvailableCats: function() {
			var result=[];
			for(var i=1;i<=SCOREHELPER.getCatsScore();i++) {
				result.push(_cats[i-1]);
			}
			//add cats depending on stars
			return result;
		 },
		 // done
		 getAvailableBackgrounds: function() {
			var result=[];
			for(var i=1;i<=SCOREHELPER.getBackgroundScore();i++) {
				result.push(_backgrounds[i-1]);
			}
			//add backgrounds depending on stars
			return result;
		 },
		 //done
		 hasScoredToday: function (day) {
			if (day==undefined) {
				day = (new Date()).getDate();
			}
			// lastScored has the same date
			// irrelevat after one month..
			return SCOREHELPER.getLastScoreDay()==day?true:false;
		 },
		 //done
		 setLastScoreDay: function(day) {
			LOCALSTORAGE.setItem('lastscoreday',day);
		 },
		 getLastScoreDay: function() {
			if (!LOCALSTORAGE.hasItem('lastscoreday') ) {
				return -1;
			} else {
				return LOCALSTORAGE.getItem('lastscoreday') ;
			}
		 },
		 // herzen sind geflogen
		 setFullScoreDay: function ( day ) {
			var now = day;
		 
			// do nothing if already scored today
			if ( SCOREHELPER.hasScoredToday(now.getDate()) ) {
				return;
			}
			if ( !SCOREHELPER.hasSavedScore() ) {
				// four because it already has 2 cats and two backgrounds
				SCOREHELPER.setSavedScore(4);
			}

			var raisedScore = parseInt(SCOREHELPER.getSavedScore()) + 1;
			SCOREHELPER.setSavedScore(raisedScore);
			//SCOREHELPER.setSavedDate(now);
			SCOREHELPER.setLastScoreDay(now.getDate());
		 },
		 //date.getTime()/1000/60/60/24/365 years unix timestamp
		 // done
		 hasSavedDate: function() {
		   //var date = new Date(parseInt(jsonDate.substr(6)));
			return LOCALSTORAGE.getItem('date')!==null;
		 },
		 /*
		 // done
		 getSavedDate: function() {
			// set true to parse as JavaScript Date Object
			return jQuery.parseJSON( LOCALSTORAGE.getItem('date'),true );
		 },
		 //done
		 setSavedDate: function(date) {
			LOCALSTORAGE.setItem( 'date',jQuery.toJSON(date) );
		 },
		 */
		 // done
		 hasSavedScore: function() {
			return LOCALSTORAGE.getItem('score')!==null;
		 },
		 getSavedScore: function() {
			return LOCALSTORAGE.getItem('score');
		 },
		 setSavedScore: function(score) {
			LOCALSTORAGE.setItem('score',score);
		 }
    };
}();

//working like so: var d1 = new Date();
//var d2 = new Date(2004,8,19);
//alert(d1.dayDiff(d2));
/*
Date.prototype.dayDiff = function(d2) {
	var d= Math.abs(this-d2);
	return Math.ceil(d/(24*60*60*1000));
}
*/




