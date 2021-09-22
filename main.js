lsx=0;
lsy=0;
rsx=0;
rsy=0;
nakx=0;
naky=0;

function preload(){
   buttu=loadImage("https://i.postimg.cc/cJTKSPyq/butter.png");
   paro=loadImage("https://i.postimg.cc/wM6X9D3M/birdie.png");
   rabbu=loadImage("https://i.postimg.cc/JhQBT9YH/bunny-structure.png");
}

function setup(){
    canvas=createCanvas(600,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,model_loaded);
    posenet.on("pose",bring);
}

function model_loaded(){
    console.log(" PoseNet is chalu , tu ho ja shuru ");
}

function bring(results){
    if (results.length > 0) {
        console.log(results);
        console.log("right shoulder=" + results[0].pose.rightShoulder.x);
        console.log("right shoulder=" + results[0].pose.rightShoulder.y);
        console.log("left shoulder x=" + results[0].pose.leftShoulder.x);
        console.log("right shoulder y=" + results[0].pose.rightShoulder.y);
        console.log("Nose ka x=" + results[0].pose.nose.x);
        console.log("Nose ka y=" + results[0].pose.nose.y);
        nakx=results[0].pose.nose.x-220;
        naky=results[0].pose.nose.y-400;
        lsx=results[0].pose.leftShoulder.x-50;
        lsy=results[0].pose.leftShoulder.y-150;
        rsx=results[0].pose.rightShoulder.x-30;
        rsy=results[0].pose.rightShoulder.y-180;
    }
}

function draw(){
    image(video,0,0,600,400);
    image(buttu,lsx,lsy,100,100);
    image(paro,rsx,rsy,100,100);
    image(rabbu,nakx,naky,400,400);
}
 
function cutesy(){
    save("freshlynosedimage.png");
}