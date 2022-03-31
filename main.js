mouthX=0;
mouth=0;

function preload()
{
    lipstick_mouth = loadImage ('https://i.postimg.cc/3Jc2ySLX/Lipstick-mouth.png');
}
function setup()
{
    canvas = creatCanvas(300,300);
    canvas.center()
    video=createCapture(VIDEO);
    video.size=(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw()
{
image(video, 0, 0, 300, 300); 
fill(255,0,0);
stroke(255,0,0);
circle(mouthX,mouthY,20);
image(lipstick_mouth,mouthX,mouthY,30,30);
}


function take_snapshot()
{
    save('Me with lipstick mouth.png');
}

function modelLoaded()
{
    console.log('PoseNet is Initialized');
}

function gotPoses()
{
    if(results.length > 0)
    {
        console.log(results);
        noseX= results[0].pose.mouthX;
        noseY=results[0].pose.mouthY;
        console.log("nose x =" + results[0].pose.mouth.x);
        console.log("nose y=" + results[0].pose.mouth.y);
    }
}