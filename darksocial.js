function updateURL() {
    var token = localStorage.getItem('DarkSociable');
    if (token) {
        if (history.pushState) {

            var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + token;
            window.history.pushState({ path: newurl }, '', newurl);
        }
    } else {
        if (window.location.href.indexOf("#DSCL") > -1) {
            console.log("your url contains the Token");
        } else {
            var token = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < 15; i++) {
                token += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            localStorage.setItem('DarkSociable', '#DSCL-' + token);
            var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '#DSCL-' + token;
            window.history.pushState({ path: newurl }, '', newurl);
        }
    }
}
window.onload = updateURL();