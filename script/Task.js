let Buttons = document.getElementById('b1');
Buttons.onclick = runner;

let start = 0;
let clickok = -1;
var integer;
var flag = 0;
const scores = document.getElementById('sc');
const hscore = document.getElementById('hs');

var last = localStorage.getItem("highscore");
if(last != NaN && last != null){
integer = parseInt(last);
hscore.innerHTML=integer;}
if(last == NaN)
hscore.innerHTML = 0;

function runner(){
if (start == 0) {
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'black';

ctx.fillRect(0, 150, 1525, 80);

ctx.fillRect(0, 440, 1525, 80);

ctx.fillStyle = 'blue';
ctx.fillRect(570, 390, 50, 50);

ctx.moveTo(0, 150);
ctx.lineTo(0, 440);
ctx.stroke();

ctx.moveTo(1525, 150);
ctx.lineTo(1525, 440);
ctx.stroke();

clickok=1;
flag = 1;
start =1;
loop();
scores.innerHTML = '0';
setInterval( increment, 200);

var last = localStorage.getItem("highscore");
integer = parseInt(last);
if(last == NaN || last == null)
hscore.innerHTML = 0;
else
hscore.innerHTML=integer;
}
}

function increment(){
  if(start==1)
  scores.innerHTML++;

  if(integer < (scores.innerHTML)){
    localStorage.setItem("highscore", scores.innerHTML);
    hscore.innerHTML=scores.innerHTML;
    }
}

var body = document.getElementById('canvas');

body.addEventListener("click", function () {
    clicked();
}, false);

document.body.onkeyup = function(e){
  if(e.key === ' '){
      clicked();
  }
}

function clicked () {
  if(clickok == 1)
  {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'blue';
    ctx.fillRect(570, 230, 50, 50);

    ctx.clearRect(570, 390, 51, 50);
    clickok = 0;
  }

  else if(clickok == 0)
  {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'blue';
    ctx.fillRect(570, 390, 50, 50);

    ctx.clearRect(570, 230, 51, 50);
    clickok = 1;
  }
}

function loop(){
  if(start==1){
  var rand = 500+Math.round(Math.random() * (1000 - 400));
  setTimeout(function() {
    nothing();
    var delayInMilliseconds = 400;
    setTimeout(function() {
      loop();
    }, delayInMilliseconds);
  },rand);
}
}

function nothing(){
  var abc = Math.floor(Math.random() * 2);

  if(abc == 0)
  {  var i = 0;  
    setInterval(holes1, 10);
    
    function holes1() {
      if(flag == 1){
      if (i<1605) {
      const canvas = document.getElementById('canvas');
      const ctx = canvas.getContext('2d');
    
      ctx.fillStyle = 'red';
      ctx.clearRect(1525-i,150,80,80);
      ctx.fillRect(1525-i,150,80,80);
      ctx.fillStyle = 'black';
      ctx.fillRect(1605-i,150,80,80);
  
      if(clickok == 0 && i> 908 && i< 1034 )
      gameover();

      if(start == 0){
      ctx.clearRect(1525-i,150,160,80);
      i = 2000;
    }
      i += 4;
  }}}}

  else if(abc == 1 )
  {    var j = 0;
    setInterval(holes2, 10);
    
    function holes2() {
      if(flag == 1){
      if (j<1605 && start == 1) {
      const canvas = document.getElementById('canvas');
      const ctx = canvas.getContext('2d');
  
      ctx.fillStyle = 'red';
      ctx.clearRect(1525-j,440,80,80);
      ctx.fillRect(1525-j,440,80,80);
      ctx.fillStyle = 'black';
      ctx.fillRect(1605-j,440,80,80);
      
      if(clickok == 1 && j> 908 && j< 1034 && start==1)
      gameover();

      if(start == 0){
      ctx.clearRect(1525-j,440,160,80);
      j = 2000;
      }
      j += 4;
  }}}}
}
 
function gameover(){
  alert("GAME OVER"+  "\n" + "Your score is:" + (scores.innerHTML) );

  start=0;
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 1525, 520);
  clickok=-1;
}