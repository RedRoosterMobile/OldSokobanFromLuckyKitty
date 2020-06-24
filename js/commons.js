const FB_APP_ID = "275023002571257";
const DEBUG = false;

var soundOn = LOCALSTORAGE.hasItem('soundOn')?LOCALSTORAGE.getItem('soundOn'):true;

//check if supports touch
//when supports touchend events take them, otherwise click
var clickEvent = 'createTouch' in document?'touchend':'click';
// if touch then use phonegap deviceready

// LIVE
var readyEvent = 'createTouch' in document?'deviceready':'ready';

var htmlFile = getHtmlFile();

if( (htmlFile != "info.html") && (htmlFile != "about.html") && (htmlFile != "help.html") ) {
	// prevent scrolling 
	try {
		document.ontouchmove = function(e) { e.preventDefault(); return false; }
	} catch (ex) {
		//don't care
		console.log(ex.toString());
	}
}

// http://stackoverflow.com/questions/914783/javascript-nodelist
// converts HTMLCollectionObject to array for faster looping on them
function array(items) {
	return Array.prototype.concat.call(items);
/*ie: 
	var i       = 0,
            len     = items.length,
            result  = Array(len);

        while (i < len) {
            result[i] = items[i];
            i++;
        }

        return result;
*/
}

function getHtmlFile() {
	return location.pathname.substr(location.pathname.lastIndexOf("/")+1,location.pathname.length);
}

function phoneGapAlert(message) {
	isPhoneGapThere()?phoneGapAlertReal(message):alert(message);
}

function phoneGapAlertReal(message) {
	navigator.notification.alert(message,null,'Latest News!');
}

// this is for debugging
function isPhoneGapThere() {
	return navigator.notification!==undefined
}

// Audio player
// http://docs.phonegap.com/en/1.3.0/phonegap_media_media.md.html#Media
//MINE start
var mediaUrlArray=[];
var mediaArray=[];

function addMediaUrl(url) {
	if ( isPhoneGapThere() ) {
		mediaUrlArray.push(url);
		mediaArray.push( new Media(url, onSuccessPlaySound, onErrorPlaySound) );
		var length= mediaArray.length;
		// HACK!!: pressing play already loads it
		setTimeout(function(){
			mediaArray[length-1].play();
			mediaArray[length-1].stop();
		},0);
	}
}

function playMyAudio(url) {
	if(isPhoneGapThere() && soundOn) {
		var idx=mediaUrlArray.indexOf(url);
		// try non-blocking
		setTimeout(function(){mediaArray[idx].play();},0);
	}
}
//NOTE: no need to media.release():  Paths are the identifier in the client backend. Handling is fine as is.


// onSuccess Callback
//
function onSuccessPlaySound() {
	//console.log("playAudio():Audio Success");
}

// onError Callback 
//
/*
Constants 

MediaError.MEDIA_ERR_ABORTED
MediaError.MEDIA_ERR_NETWORK
MediaError.MEDIA_ERR_DECODE
MediaError.MEDIA_ERR_NONE_SUPPORTED
*/
function onErrorPlaySound(error) {
	phoneGapAlert('code: '    + error.code    + '\n' + 
	'message: ' + error.message + '\n');
}

/**
 * END PHONEGAP AUDIO
 */

//random helpers
function random(min, max) {
	min = min || 0;
	max = max || 1;
	return Math.random() * (max - min) + min;
}
    
function randomInt(min, max){
	return Math.floor(this.random(min, max));
}

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

function trim (zeichenkette) {
  return zeichenkette.replace (/^\s+/, '').replace (/\s+$/, '');
}
