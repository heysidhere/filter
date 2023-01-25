function preload() {
mustache = loadImage('https://i.postimg.cc/HLvvcdV7/mustache.jpg');
}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet('pose', gotPoses);
}

function modelLoaded(){
    console.log('poseNet is initialized');
}
function draw() {
    image(video, 0, 0, 300, 300);
    fill(255,0,0);
    stroke(255,0,0);
    circle(mustacheX,mustacheY,20);
    image(mustache, mustacheX,mustacheY,30,30);
}


function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log('results')
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose x =" + results[0].pose.nose.y + 10);
        mustacheX = results[0].pose.nose.x;
        mustacheY = results[0].pose.nose.y;
        console.log("nose x = "+noseX);
        console.log("nose y = "+noseY);
    }
}