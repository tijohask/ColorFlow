var color = 0;
var s = "";
var l = "";

function colorFlow() {
  var colorEffect = setInterval( function() {
    resetColors();
    color = color+1;
    if(color > 360){
      color = 0
    }
    //console.log(color)
  }, 200);
  document.getElementById('flow').addEventListener('click', function() {
    clearInterval(colorEffect);
    this.addEventListener('click', colorFlow, {once: true});
  }, {once: true});
};
// colorFlow()

function resetColors() {
    s = document.getElementById("s").value;
    l = document.getElementById("l").value;
    document.querySelector('body').style.background = `hsl(${color}, ${s}%, ${l}%)`;
    document.querySelector('#hdisplay').innerHTML = color;
    document.querySelector('#sdisplay').innerHTML = s;
    document.querySelector('#ldisplay').innerHTML = l;
}
// no idea why this bit doesn't work...
// returns a reference error, even though it works fine elsewhere
document.getElementById('flow').addEventListener('click', function(){colorFlow()}, {once: true});  

document.getElementById('s').addEventListener('change', resetColors);
document.getElementById('l').addEventListener('change', resetColors);