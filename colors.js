//variable used to track the hue level on hsl
var color = 0;
//tracks saturation
var s = "";
//tracks lightness
var l = "";

//creates the interval that continuously changes and updates the hue,
//as well as the toggle that turns the interval off and on again
function colorFlow() {
  //interval setup here
  //updates the style, then updates the hue level
  var colorEffect = setInterval( function() {
    resetColors();
    color = color+1;
    if(color > 360){
      color = 0
    }
  }, 200);
  //creates the toggle on the flow button
  //clears the interval, 
  //then sets the event listener back on the parent colorflow method
  //both event listeners run exactly once
  document.getElementById('flow').addEventListener('click', function() {
    clearInterval(colorEffect);
    this.addEventListener('click', colorFlow, {once: true});
  }, {once: true});
};
// colorFlow()

//changes the body style to reflect the values stored in color, s and l
//updates the webpage to display those colors
function resetColors() {
    s = document.getElementById("s").value;
    l = document.getElementById("l").value;
    document.querySelector('body').style.background = `hsl(${color}, ${s}%, ${l}%)`;
    document.querySelector('#hdisplay').innerHTML = color;
    document.querySelector('#sdisplay').innerHTML = s;
    document.querySelector('#ldisplay').innerHTML = l;
}
//
resetColors();

//adds an event listener to the toggle button
document.getElementById('flow').addEventListener('click', function(){colorFlow()}, {once: true});

//adds event listeners to the number inputs
document.getElementById('s').addEventListener('change', resetColors);
document.getElementById('l').addEventListener('change', resetColors);
