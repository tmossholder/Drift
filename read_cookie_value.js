//Function to read value of a cookie, credit to https://www.quirksmode.org/js/cookies.html
function readCookie(name) {
    var cookiename = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(cookiename) == 0) return c.substring(cookiename.length,c.length);
    }
    return null;
}
//Call readCookie function to get value of user's Marketo cookie
var mkto_value = readCookie('_mkto_trk');
// you could add set user attributes below here as well
drift.on('ready', function() {
  drift.api.setUserAttributes({
    cc: 'us',
    lang: 'en',
  })
})
// 1. determine which language snippet to show
     //  a. check for some value (e.g. in a cookie, or in the url)
      // b. lookup that value's snippet ID in mapping table
      // c. return that value as the embedId that is passed into drift.load() method
  // 2. playbook targeting
      // a. could be url or could be cookie value - need to think through that with the customer's input
      // b. Demand Gen playbook from Demand Gen workspace
          // i. target to the proper thing for that playbook
