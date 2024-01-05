function preload(){

}

function setup(){
 canvas = createCanvas(350,350);
 canvas.position(750,150);
 video = createCapture(VIDEO);
 video.size(350,350);
 poseNet = ml5.poseNet(video,ML);
 poseNet.on("pose",gotposes)
}

function draw(){
 background("pink");
}

function ML(){
    console.log("I am ready to poseNet!")
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
    }
}