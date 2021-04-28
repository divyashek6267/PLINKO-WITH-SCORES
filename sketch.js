var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var divisions=[];
var particles = [];
var plinkos = [];

var balls;

var divisionHeight=300;
var score =0;
var count = 0;
var gameState = "start";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");

  textSize(35)
  text("Score : "+score,20,40);

  textSize(35)


 text("500",10,530);
 text("500",92,530);
 text("500",170,530);
 text("500",253,530);
 text("100",331,530);
 text("100",411,530);
 text("100",490,530);
 text("200",570,530);
 text("200",650,530);
 text("200",732,530);
 
  Engine.update(engine);

  if ( gameState =="end") {

    textSize(100);
    text("GameOver", 150, 250);
    //return
  }
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   if(balls!=null)
   {
      balls.display();

       if (balls.body.position.y>760)
       {
             if (balls.body.position.x < 300) 
             {
                 score=score+500;      
                 balls=null;
                 if ( count>= 5) gameState ="end";     
             }
             
             else if (balls.body.position.x < 500 && balls.body.position.x > 331 ) 
             {
                   score = score + 100;
                   balls=null;
                   if ( count>= 5) gameState ="end";

             }
             else if (balls.body.position.x < 900 && balls.body.position.x > 570 )
             {
                   score = score + 200;
                   balls=null;
                   if ( count>= 5)  gameState ="end";

             }      

       }

     }
            
          
   
 
   
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed()
{
  if(gameState!=="end"){
    count++
    balls=new Particle(mouseX,10,10,10);
    
  }
}