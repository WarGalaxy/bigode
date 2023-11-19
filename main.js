noseX=0;
noseY=0;

function preload(){
  narizP = loadImage('https://i.postimg.cc/8PMcvfwW/Bigode.png')

}

function setup(){
  canvas = createCanvas(300,300);
  canvas.position(807,423);
  video = createCapture(VIDEO);
  video.size(300,300);
  video.hide()

  poseNet = ml5.poseNet(video, modelLoaded)
  poseNet.on('pose', gotPoses)

}

function gotPoses(results){
  if(results.length >0){
    console.log(results)
    noseX = results[0].pose.nose.x -30
    noseY = results[0].pose.nose.y +5
    console.log("Nariz X = "+noseX);
    console.log("Nariz Y = "+noseY);
  }
}

function modelLoaded(){
  console.log('Carregado')
}

function draw(){
  image(video, 0,0, 300,300);

  fill(255, 0,0);
  stroke(255,0,0);
  

  image(narizP, noseX, noseY, 60,40);
}

function takeSnapshot(){
  save('imagem.png')
}