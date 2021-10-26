var stopw=0;
var start=false;
var cps=0;
var clrize;
var c1=["black"],c2=["white"],c3=["white"];
function setup() {
  createCanvas(400, 400);
  clrize=createButton("colorize");
}

function draw(){
   rectMode(CENTER);
  colorMode(HSB)
  background(c3);
  textSize(30)
  fill(c1)
  text("time(s): "+Math.round(stopw),20,35)
    text("clicks: "+cps,200,35)
  fill(c2);
  rect(200,200,360,200)
  if(c2[2]<255){
    c2[2]+=20
  }
  if(c2[2]<0){
    c2[2]=0
  }
  if(start==true){
    stopw+=1/frameRate();
  }
  if(stopw>=5){
  start=false
    stopw=0
    prompt("u clicked "+cps+" times,"+"you got "+cps/5+" cps")
    cps=0
  }    
  clrize.mouseClicked(gogo)
       }          

function mouseReleased(){
 var x=200,y=200,width=360,height=200
  if(mouseX>x-width/2&&mouseX<x+width/2&&mouseY>200-100&&mouseY<200+100){
    cps+=1
  start=true
    c2[2]=20
  }
}
function gogo(){
  c1[0]=Math.round(random(0,255))
  c1[1]=Math.round(random(0,255))
  c1[2]=Math.round(random(0,255))
  c2[0]=Math.round(random(0,255))
  c2[1]=Math.round(random(0,255))
  c2[2]=Math.round(random(0,255))
  c3[0]=Math.round(random(0,255))
  c3[1]=Math.round(random(0,255))
  c3[2]=Math.round(random(0,255))
}