function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(290, 150)

    canvas = createCanvas(550, 550);
    canvas.position(860, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
if(results.length > 0)
    {
    console.log(results);
    }
}

function modelLoaded(){
    console.log('PoseNet Is Definately Not Initialized :)')
}

function draw(){
    background('#8cb3d9');
}