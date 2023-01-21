var stats = "";
var img = "";
object = [];
objectdetector = "";

function preload(){
    img = loadImage("Kitchen-wallpaper-3.jpg");
}



function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}
 function start(){
    objectdetector = ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML = "Status : Detection Objects";
 }

function modelloaded(){
    console.log("Model Loaded");
    var stats = true;
    objectdetector.detect(img,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        object = results ;
        console.log(object);
    }
}

function draw(){
    image(img,0,0,500,450);

    if(stats = true){
        for(var i = 0;i<object.length;i++ ){
            document.getElementById("status").innerHTML = "Status : Model Loadded"

            percent = Maths.floor(object[i].confidence*100);
            console.log(percent + "%");

            fill("#FF0000");
            label = object[i].label + " " + percent + "%";
            console.log(label);
            text(label,object[i].x+15,object[i].y+15);
            nofill();
            stroke("#FF0000");
            rect(object[i].x,object[i].y,object[i].width,object[i].height);
        }

    }
}