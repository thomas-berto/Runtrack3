var keylogger = document.getElementById('keylogger');
document.addEventListener('keydown', 
function (keys)
{
    var key = event.key;
    keylogger.value += key;
})