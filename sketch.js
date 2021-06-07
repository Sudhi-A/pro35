var dog,dogImg,happyDog,database,foodS,Foodstock

function preload()
{
  dogImg=loadImage("images/dogImg.png")
  happyDog=loadImage("images/happydogImg.png")
}

function setup() {
  database=firebase.database()
	createCanvas(500,500);
  dog=createSprite(250,250,2,2)
  dog.addImage(dogImg)
  
  Foodstock= database.ref('food')
  Foodstock.on("value",readstocks)
}


function draw() {  
  background(46,139,87)
  if (keyDown(UP_ARROW)) {
    writeStocks(foodS)
    dog.addImage(happyDog)
    
  }
  drawSprites();
  textSize(30)
  fill("black")
  stroke(3)
  text("food left:"+foodS,50,250)
  //add styles here

}
function readstocks(data) 
{
  foodS=data.val();
  
}
function writeStocks(x) {
  if (x<=0) {
    x=0
    
  }else{
    x=x-1
  }
  database.ref('/').update({
    Foodstock:x
  })
}



