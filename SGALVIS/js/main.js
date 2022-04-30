let d = new Date();
document.getElementById('hora').innerHTML = "la hora es:  " + d.getHours() + ":" + d.getMinutes();

var time = new Date();
console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());

$(document).ready(function() {

    $('.scrollToBottom').click(function() {
        $('html, body').animate({ scrollTop: $(document).height() }, 1000);

        return false;

    });

});