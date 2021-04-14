const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;


var bg = "sunrise1.png" ;
var r = 0;
function preload() {
    // create getBackgroundImg( ) here
   
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    // add condition to check if any background image is there to add


    Engine.update(engine);
    
    // write code to display time in correct format here
    //noStroke();
    fill("black");
    textSize(35);
    if(hour>=12 ){
    text("TIME: " + hour%12+"P.M.",50,100)
    }
    else if(hour = 0){
    text("TIME: 12 a.m",100,100)    
    }
    else{
    text("TIME: " + hour%12+" A.M. ",50,100)    
    }
}
async function getBackgroundImg(){

    // write code to fetch time from API
var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //change the data in JSON format
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    // write code slice the datetime

    hour = datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<=06){
    debugger;    
    bg = "sunrise1.png";
    }
    else if(hour>=06 && hour<=08){
        debugger;
    bg = "sunrise2.png"   
    }
    else if(hour>=08 && hour<=09){
        debugger;
    bg = "sunrise3.png"   
    }
    else if(hour>=09 && hour<=10){
        debugger;
    bg = "sunrise4.png"   
    }
    else if(hour>=10 && hour<=11){
        debugger;
    bg = "sunrise5.png"   
    }
    else if(hour>=11 && hour<=12){
        debugger;
    bg = "sunrise6.png"   
    }   
    else if(hour>=19 && hour<=20){
        debugger;
    bg = "sunrise7.png"   
    }   
    else if(hour>=21 && hour<=23){
        debugger;
    bg = "sunrise8.png"   
    }             
    else if(hour>=23 && hour==0){
        debugger;
    bg = "sunrise9.png"   
    }   
    else if(hour==0 && hour<=03){
        debugger;
    bg = "sunrise10.png"   
    }   
    else if(hour>=03 && hour<=04){
        debugger;
    bg = "sunrise11.png"   
    }  
    else {
        debugger;
    bg = "sunrise12.png"   
    }    
    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}

