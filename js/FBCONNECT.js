// USAGE:
// init
// set post obj
// startPostAttempt does the rest


var FBCONNECT= function () {
	// stuff to post comes in here 
	//message,picture,link,name,caption,description ,source
	var _postObj= {};
	
    return {
		 init: function(appId) {
			//pass app-id
			FB.init({ appId: appId, nativeInterface: PG.FB });
		 },
		 setPostObj: function (message,picture,link,name,caption,description,source) {
            _postObj = {};
			
			if (message!==undefined) _postObj.message = message;
			if (picture!==undefined) _postObj.picture = picture;
			if (link!==undefined) _postObj.link = link;
			if (name!==undefined) _postObj.name = name;
			if (caption!==undefined) _postObj.caption = caption;
			if (description!==undefined) _postObj.description = description;
			if (source!==undefined) _postObj.source = source;
			
			// maybe call startPostAttempt immediately
		 },
		 
         startPostAttempt: function() {
			// this is asynchonous!
			FB.getLoginStatus(function(response) {
                    if (response.status == 'connected') {
                        if(DEBUG) phoneGapAlert('logged in');
						// goto do post
						FBCONNECT.postSth();
                    } else {
                        if(DEBUG) phoneGapAlert('not logged in');
						// goto login
						FBCONNECT.login();
                    }
            });
         },
		 // TODO: make private?
		 login: function () {
                FB.login(
                    function(response) {
                        if (response.session) {
                            if(DEBUG) phoneGapAlert('logged in');
							// Post
							FBCONNECT.postSth();
                        } else {
							// permission error?
                            phoneGapAlert("Sad that you don't want to share... But you can try again!");
                        }
                    },
                    { perms: "email,publish_stream" }
                );
         },
		 postSth: function () {
                FB.api('/me/feed', 'post',_postObj,function(response) {
                       if (response.error) {
							// NETWORK ERROR?
							phoneGapAlert('ERROR: '+JSON.stringify(response.error));
                       } else {
							// STUFF POSTED
							phoneGapAlert('Post Successful! '+ response.id);
                       }
                });
         },
		 getSession: function () {
            return JSON.stringify(FB.getSession());
         },
		 logout: function () {
            FB.logout(function(response) {
                //phoneGapAlert('logged out');
            });
         }
    };
}();
// Object.size(PostObj);

var postObj = {
                    message:'Message here',
                    picture:'http://ftp.uni-erlangen.de/pub/mirrors/gentoo/distfiles/oneko-1.2-cat.png',
                    link:'http://redroostermobile.com',
                    name:'Whatsmaname?',
                    caption:'caption',
                    description:'Lorem ipsum describum'
                };
if ( (typeof FB != 'undefined') && isPhoneGapThere() ) {
			// TODO: trigger custom events
			FB.Event.subscribe('auth.login', function(response) {
                if(DEBUG) phoneGapAlert('auth.login event');
            });
            
            FB.Event.subscribe('auth.logout', function(response) {
                if(DEBUG) phoneGapAlert('auth.logout event');
            });
            
            FB.Event.subscribe('auth.sessionChange', function(response) {
                if(DEBUG) phoneGapAlert('auth.sessionChange event');
            });
            
            FB.Event.subscribe('auth.statusChange', function(response) {
                if(DEBUG) phoneGapAlert('auth.statusChange event');
            });
}