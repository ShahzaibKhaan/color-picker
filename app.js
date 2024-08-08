let color = document.getElementById("color-picker");
function updateColor( ) {
document.getElementById("display-color").style.backgroundColor= color.value;}

window.addEventListener('beforeunload', function (e){
    var message = 'are you sure?';
    e.return = message;
});