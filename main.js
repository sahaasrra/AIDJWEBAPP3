songmastaru = "";
songmehabooba = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload()
{
    song = loadSound("mastaru.mp3");
    song = loadSound("Mehabooba.mp3");


}
function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}
function modelLoaded()
{
    console.log( 'PoseNet Is Initialized' );
}
function draw()
{
    image(video,0,0,600,500);
}
function gotposes(results)
{
  if(results.length > 0)
  {
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
   
  }
}
function gotPoses()
{
  
}
