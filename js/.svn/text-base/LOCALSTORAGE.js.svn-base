/* 
 * wrapper for localstorage
 */

var LOCALSTORAGE= function () {

	function isBoolean(value) {
		var result;
		(value=='true' || value == 'false')?result=eval(value):result=value;
		return result;
	}
			
    return {
         setItem: function(name,value) {
           localStorage.setItem(name, value);
         },
         getItem: function(name) {
           return isBoolean(localStorage.getItem(name));
         },
         removeItem: function(name) {
           localStorage.removeItem(name);
         },
         hasItem: function(name) {
        	return LOCALSTORAGE.getItem(name)!==null; 
         },
         clear: function() {
           localStorage.clear();
         }
    };
}();

