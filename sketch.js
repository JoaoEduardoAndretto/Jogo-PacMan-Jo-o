const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var score;
var gameState = "wait";

var pacman, pacmanImg,
pacmanEsq, pacmanEsqImg,
pacmanCim, pacmanCimImg,
pacmanbaix, pacmanbaixImg;


var ghostAquaEsquerda, ghostAquaEsquerdaImg,
ghostOrangeEsquerda, ghostOrangeEsquerdaImg,
ghostPinkEsquerda, ghostPinkEsquerdaImg,
ghostRedEsquerda, ghostRedEsquerdaImg;

var ghostAquaDireita, ghostAquaDireitaImg,
ghostOrangeDireita, ghostOrangeDireitaImg,
ghostPinkDireita, ghostPinkDireitaImg,
ghostRedDireita, ghostRedDireitaImg;

var ghostAquaCima, ghostAquaCimaImg,
ghostOrangeCima, ghostOrangeCimaImg,
ghostPinkCima, ghostPinkCimaImg,
ghostRedCima, ghostRedCimaImg;

var ghostAquaBaixo, ghostAquaBaixoImg,
ghostOrangeBaixo, ghostOrangeBaixoImg,
ghostPinkBaixo, ghostPinkBaixoImg,
ghostRedBaixo, ghostRedBaixoImg;


var portaSpawn;
var rectangles = [];
var rectangles1 = [];
var rectangles2 = [];
var rectangles3 = [];
var rectangles4 = [];
var rectangles5 = [];
var rectangles6 = [];
var rectangles7 = [];
var rectangles8 = [];
var rectangles9 = [];
var rectangles10 = [];
var rectangles11 = [];
var rectangles12 = [];
var rectangles13 = [];
var rectangles14 = [];
var rectangles15 = [];
var rectangles16 = [];
var rectangles17 = [];
var rectangles18 = [];
var rectangles19 = [];
var rectangles20 = [];
var rectangles21 = [];
var rectangles22 = [];
var rectangles23 = [];
var rectangles24 = [];
var rectangles25 = [];
var rectangles26 = [];
var rectangles27 = [];
var rectangles28 = [];
var rectangles29 = [];
var rectangles30 = [];
var rectangles31 = [];
var rectangles32 = [];
var rectangles33 = [];
var rectangles34 = [];
var rectangles35 = [];
var rectangles36 = [];
var rectangles37 = [];
var rectangles38 = [];
var rectangles39 = [];
var rectangles40 = [];
var rectangles41 = [];
var rectangles42 = [];
var rectangles43 = [];
var ponto1, ponto2;

var fundopreto1, fundopreto2, fundopreto3, fundopreto4, fundopreto5,
    fundopreto6, fundopreto7, fundopreto8, fundopreto9, fundopreto10,
    fundopreto11, fundopreto12, fundopreto13, fundopreto14, fundopreto15,
    fundopreto16, fundopreto17, fundopreto18, fundopreto19, fundopreto20,
    fundopreto21, fundopreto22, fundopreto23, fundopreto24, fundopreto25,
    fundopreto26, fundopreto27;

var rect1, rect2, rect3, rect4, rect5, rect6, rect7, rect8,
    rect9, rect10, rect11, rect12, rect13, rect14, rect15, rect16,
    rect17, rect18, rect19, rect20, rect21, rect22, rect23, rect24,
    rect25, rect26, rect27, rect28, rect29, rect30, rect31, rect32,
    rect33, rect34, rect35, rect36, rect37, rect38, rect39, rect40,
    rect41, rect42, rect43, rect44, rect45, rect46, rect47, rect48;

var retângulo1, retângulo2, retângulo3, retângulo4, retângulo5,
    retângulo6, retângulo7, retângulo8, retângulo9, retângulo10,
    retângulo11, retângulo12, retângulo13, retângulo14, retângulo15,
    retângulo16, retângulo17, retângulo18, retângulo19, retângulo20,
    retângulo21, retângulo22, retângulo23, retângulo24, retângulo25,
    retângulo26, retângulo27, retângulo28, retângulo29, retângulo30;

function preload() 
{
   pacmanImg = loadImage ("./Imagens/Pac.manDireita.gif")
   pacmanEsqImg = loadImage ("/Imagens/Pac.manEsquerda.jpg")
   pacmanCimImg = loadImage ("/Imagens/Pac.manCima.jpg")

   ghostAquaEsquerdaImg = loadImage ("./Imagens/FC.esquerda.jpg")
   ghostOrangeEsquerdaImg = loadImage ("./Imagens/FL.esquerda.jpg")
   ghostPinkEsquerdaImg = loadImage ("./Imagens/FR.esquerda.jpg")
   ghostRedEsquerdaImg = loadImage ("./Imagens/FV.esquerda.jpg")

}

function setup() {

    createCanvas (750,700);

    pacman = createSprite (390,497,10,10);
    pacman.addImage (pacmanImg); 
    pacman.addAnimation ("esquerda",pacmanEsqImg); 
    pacman.addAnimation ("cima",pacmanCimImg); 
    pacman.scale = 0.2;

    ghostAquaEsquerda = createSprite (357,335,10,10);
    ghostAquaEsquerda.addImage (ghostAquaEsquerdaImg); 
    ghostAquaEsquerda.scale = 0.6;

    ghostOrangeEsquerda = createSprite (387,335,10,10);
    ghostOrangeEsquerda.addImage (ghostOrangeEsquerdaImg); 
    ghostOrangeEsquerda.scale = 0.6;

    ghostPinkEsquerda = createSprite (417,335,10,10);
    ghostPinkEsquerda.addImage (ghostPinkEsquerdaImg); 
    ghostPinkEsquerda.scale = 0.6;

    ghostRedEsquerda = createSprite (327,288,10,10);
    ghostRedEsquerda.addImage (ghostRedEsquerdaImg); 
    ghostRedEsquerda.scale = 0.6;

    pacmanEsq = createSprite (pacman.position.x, pacman.position.y);
    pacmanEsq.addImage (pacmanEsqImg);  
    pacmanEsq.visible = false;

    engine = Engine.create();
    world = engine.world;

    var rectangle_options =
    {
        isStatic: true,
        chamfer: { radius: 90 },
    };

    /* Da linha 37 até a linha 179 é só a parte estrutural do jogo, 
    sem os retângulos no meio*/

    rect1 = Bodies.rectangle(55, 60, 645, 1, rectangle_options);
    World.add(world, rect1);

    rect2 = Bodies.rectangle(60, 65, 320, 1, rectangle_options);
    World.add(world, rect2);

    rect3 = Bodies.rectangle(395, 65, 295, 1, rectangle_options);
    World.add(world, rect3);

    rect4 = Bodies.rectangle(380, 66, 1, 70, rectangle_options);
    World.add(world, rect4);

    rect5 = Bodies.rectangle(395, 66, 1, 70, rectangle_options);
    World.add(world, rect5);

    rect6 = Bodies.rectangle(380, 136, 15, 1, rectangle_options);
    World.add(world, rect6);

    rect7 = Bodies.rectangle(55, 60, 1, 200, rectangle_options);
    World.add(world, rect7);

    rect8 = Bodies.rectangle(695, 60, 1, 200, rectangle_options);
    World.add(world, rect8);

    rect9 = Bodies.rectangle(60, 65, 1, 190, rectangle_options);
    World.add(world, rect9);

    rect10 = Bodies.rectangle(690, 65, 1, 190, rectangle_options);
    World.add(world, rect10);

    rect11 = Bodies.rectangle(60, 255, 100, 1, rectangle_options);
    World.add(world, rect11);

    rect12 = Bodies.rectangle(600, 255, 100, 1, rectangle_options);
    World.add(world, rect12);

    rect13 = Bodies.rectangle(55, 260, 90, 1, rectangle_options);
    World.add(world, rect13);

    rect14 = Bodies.rectangle(605, 260, 90, 1, rectangle_options);
    World.add(world, rect14);

    rect15 = Bodies.rectangle(145, 260, 1, 50, rectangle_options);
    World.add(world, rect15);

    rect16 = Bodies.rectangle(605, 260, 1, 50, rectangle_options);
    World.add(world, rect16);

    rect17 = Bodies.rectangle(150, 255, 1, 60, rectangle_options);
    World.add(world, rect17);

    rect18 = Bodies.rectangle(600, 255, 1, 60, rectangle_options);
    World.add(world, rect18);

    rect19 = Bodies.rectangle(55, 315, 95, 1, rectangle_options);
    World.add(world, rect19);

    rect20 = Bodies.rectangle(600, 315, 95, 1, rectangle_options);
    World.add(world, rect20);

    rect21 = Bodies.rectangle(55, 310, 90, 1, rectangle_options);
    World.add(world, rect21);

    rect22 = Bodies.rectangle(605, 310, 90, 1, rectangle_options);
    World.add(world, rect22);

    rect23 = Bodies.rectangle(55, 355, 95, 1, rectangle_options);
    World.add(world, rect23);

    rect24 = Bodies.rectangle(600, 355, 95, 1, rectangle_options);
    World.add(world, rect24);

    rect25 = Bodies.rectangle(55, 360, 90, 1, rectangle_options);
    World.add(world, rect25);

    rect26 = Bodies.rectangle(605, 360, 90, 1, rectangle_options);
    World.add(world, rect26);

    rect27 = Bodies.rectangle(145, 360, 1, 50, rectangle_options);
    World.add(world, rect27);

    rect28 = Bodies.rectangle(605, 360, 1, 50, rectangle_options);
    World.add(world, rect28);

    rect29 = Bodies.rectangle(150, 355, 1, 60, rectangle_options);
    World.add(world, rect29);

    rect30 = Bodies.rectangle(600, 355, 1, 60, rectangle_options);
    World.add(world, rect30);

    rect31 = Bodies.rectangle(55, 410, 90, 1, rectangle_options);
    World.add(world, rect31);

    rect32 = Bodies.rectangle(605, 410, 90, 1, rectangle_options);
    World.add(world, rect32);

    rect33 = Bodies.rectangle(60, 415, 90, 1, rectangle_options);
    World.add(world, rect33);

    rect34 = Bodies.rectangle(600, 415, 90, 1, rectangle_options);
    World.add(world, rect34);

    rect35 = Bodies.rectangle(55, 410, 1, 300, rectangle_options);
    World.add(world, rect35);

    rect36 = Bodies.rectangle(695, 410, 1, 230, rectangle_options);
    World.add(world, rect36);

    rect37 = Bodies.rectangle(60, 415, 1, 90, rectangle_options);
    World.add(world, rect37);

    rect38 = Bodies.rectangle(690, 415, 1, 110, rectangle_options);
    World.add(world, rect38);

    rect39 = Bodies.rectangle(60, 535, 1, 110, rectangle_options);
    World.add(world, rect39);

    rect40 = Bodies.rectangle(690, 535, 1, 110, rectangle_options);
    World.add(world, rect40);

    rect41 = Bodies.rectangle(60, 515, 40, 1, rectangle_options);
    World.add(world, rect41);

    rect42 = Bodies.rectangle(650, 515, 40, 1, rectangle_options);
    World.add(world, rect42);

    rect43 = Bodies.rectangle(100, 515, 20, 1, rectangle_options);
    World.add(world, rect43);

    rect44 = Bodies.rectangle(650, 515, 20, 1, rectangle_options);
    World.add(world, rect44);

    rect45 = Bodies.rectangle(60, 535, 40, 1, rectangle_options);
    World.add(world, rect45);

    rect46 = Bodies.rectangle(650, 535, 40, 1, rectangle_options);
    World.add(world, rect46);

    rect47 = Bodies.rectangle(55, 640, 640, 1, rectangle_options);
    World.add(world, rect47);

    rect48 = Bodies.rectangle(60, 635, 630, 1, rectangle_options);
    World.add(world, rect48);

    //Até aqui foi feita só a estrutura de fora do jogo!




    /*A partir desta linha, começo a escrever o código dos retângulos da parte
    de dentro*/

    //portaSpawn, retângulo1 e retângulo2 são o centro onde nasce os ghosts!
    portaSpawn = Bodies.rectangle(373, 306.5, 30, 1, rectangle_options);
    World.add(world, portaSpawn);

    retângulo1 = Bodies.rectangle(338, 310, 100, 50, rectangle_options);
    World.add(world, retângulo1);

    retângulo2 = Bodies.rectangle(333, 305, 110, 60, rectangle_options);
    World.add(world, retângulo2);


    //retângulos de 3 á 6 são os retangulos da parte de cima 
    retângulo3 = Bodies.rectangle(115, 100, 90, 40, rectangle_options);
    World.add(world, retângulo3);

    retângulo4 = Bodies.rectangle(555, 100, 90, 40, rectangle_options);
    World.add(world, retângulo4);

    retângulo5 = Bodies.rectangle(240, 100, 90, 40, rectangle_options);
    World.add(world, retângulo5);

    retângulo6 = Bodies.rectangle(435, 100, 90, 40, rectangle_options);
    World.add(world, retângulo6);


    /*o retângulo7 é o retângulo abaixo do retângulo1. O retângulo8 é o 
    retângulo abaixo do retângulo2*/
    retângulo7 = Bodies.rectangle(115, 185, 90, 25, rectangle_options);
    World.add(world, retângulo7);

    retângulo8 = Bodies.rectangle(555, 185, 90, 25, rectangle_options);
    World.add(world, retângulo8);

    retângulo9 = Bodies.rectangle(322, 185, 130, 25, rectangle_options);
    World.add(world, retângulo9);


    //O fundopreto1, fundopreto2 e fundopreto3 faz parte do retângulo10
    retângulo10 = Bodies.rectangle(376, 210, 25, 55, rectangle_options);
    World.add(world, retângulo10);

    fundopreto1 = Bodies.rectangle(378, 210, 21, 1, rectangle_options);
    World.add(world, fundopreto1);

    fundopreto2 = Bodies.rectangle(378, 210, 21, 1, rectangle_options);
    World.add(world, fundopreto2);

    fundopreto3 = Bodies.rectangle(378, 210, 21, 1, rectangle_options);
    World.add(world, fundopreto3);
    //Aqui termina o fundo do retângulo10


    retângulo11 = Bodies.rectangle(240, 185, 25, 130, rectangle_options);
    World.add(world, retângulo11);


    //o fundopreto4, fundopreto5 e fundopreto6 faz parte do retângulo12
    retângulo12 = Bodies.rectangle(265, 240, 65, 25, rectangle_options);
    World.add(world, retângulo12);

    fundopreto4 = Bodies.rectangle(265, 242, 1, 21, rectangle_options);
    World.add(world, fundopreto4);

    fundopreto5 = Bodies.rectangle(265, 242, 1, 21, rectangle_options);
    World.add(world, fundopreto5);

    fundopreto6 = Bodies.rectangle(265, 242, 1, 21, rectangle_options);
    World.add(world, fundopreto6);
    //aqui termina o fundo preto do retângulo12


    retângulo13 = Bodies.rectangle(500, 185, 25, 130, rectangle_options);
    World.add(world, retângulo13);


    //o fundopreto7, fundopreto8 e fundopreto9 faz parte do retângulo14
    retângulo14 = Bodies.rectangle(435, 240, 65, 25, rectangle_options);
    World.add(world, retângulo14);

    fundopreto7 = Bodies.rectangle(500, 242, 1, 21, rectangle_options);
    World.add(world, fundopreto7);

    fundopreto8 = Bodies.rectangle(500, 242, 1, 21, rectangle_options);
    World.add(world, fundopreto8);

    fundopreto9 = Bodies.rectangle(500, 242, 1, 21, rectangle_options);
    World.add(world, fundopreto9);
    //aqui termina o fundo preto do retângulo14


    retângulo15 = Bodies.rectangle(240, 355, 25, 60, rectangle_options);
    World.add(world, retângulo15);

    retângulo16 = Bodies.rectangle(500, 355, 25, 60, rectangle_options);
    World.add(world, retângulo16);

    retângulo17 = Bodies.rectangle(322, 390, 130, 25, rectangle_options);
    World.add(world, retângulo17);


    //o fundopreto10, fundopreto11 e fundopreto12 faz parte do retângulo18
    retângulo18 = Bodies.rectangle(376, 415, 25, 65, rectangle_options);
    World.add(world, retângulo18);

    fundopreto10 = Bodies.rectangle(378, 415, 1, 21, rectangle_options);
    World.add(world, fundopreto10);

    fundopreto11 = Bodies.rectangle(378, 415, 1, 21, rectangle_options);
    World.add(world, fundopreto11);

    fundopreto12 = Bodies.rectangle(378, 415, 1, 21, rectangle_options);
    World.add(world, fundopreto12);
    //aqui termina o fundo preto do retângulo18


    retângulo19 = Bodies.rectangle(250, 455, 80, 25, rectangle_options);
    World.add(world, retângulo19);

    retângulo20 = Bodies.rectangle(440, 455, 80, 25, rectangle_options);
    World.add(world, retângulo20);

    retângulo21 = Bodies.rectangle(115, 455, 90, 25, rectangle_options);
    World.add(world, retângulo21);

    retângulo22 = Bodies.rectangle(555, 455, 90, 25, rectangle_options);
    World.add(world, retângulo22);


    //o fundopreto13, fundopreto14 e fundopreto15 faz parte do retângulo23
    retângulo23 = Bodies.rectangle(180, 480, 25, 55, rectangle_options);
    World.add(world, retângulo23);

    fundopreto13 = Bodies.rectangle(182, 480, 1, 21, rectangle_options);
    World.add(world, fundopreto13);

    fundopreto14 = Bodies.rectangle(182, 480, 1, 21, rectangle_options);
    World.add(world, fundopreto14);

    fundopreto15 = Bodies.rectangle(182, 480, 1, 21, rectangle_options);
    World.add(world, fundopreto15);
    //aqui termina o fundo preto do retângulo23


    //o fundopreto16, fundopreto17 e fundopreto18 faz parte do retângulo24
    retângulo24 = Bodies.rectangle(555, 480, 25, 55, rectangle_options);
    World.add(world, retângulo24);

    fundopreto16 = Bodies.rectangle(557, 480, 1, 21, rectangle_options);
    World.add(world, fundopreto16);

    fundopreto17 = Bodies.rectangle(557, 480, 1, 21, rectangle_options);
    World.add(world, fundopreto17);

    fundopreto18 = Bodies.rectangle(557, 480, 1, 21, rectangle_options);
    World.add(world, fundopreto18);
    //aqui termina o fundo preto do retângulo24


    retângulo25 = Bodies.rectangle(322, 510, 130, 25, rectangle_options);
    World.add(world, retângulo25);


    //o fundopreto19, fundopreto20 e fundopreto21 faz parte do retângulo26
    retângulo26 = Bodies.rectangle(376, 535, 25, 65, rectangle_options);
    World.add(world, retângulo26);

    fundopreto19 = Bodies.rectangle(378, 535, 1, 21, rectangle_options);
    World.add(world, fundopreto19);

    fundopreto20 = Bodies.rectangle(378, 535, 1, 21, rectangle_options);
    World.add(world, fundopreto20);

    fundopreto21 = Bodies.rectangle(378, 535, 1, 21, rectangle_options);
    World.add(world, fundopreto21);
    //aqui termina o fundo preto do retângulo26


    retângulo27 = Bodies.rectangle(115, 575, 210, 25, rectangle_options);
    World.add(world, retângulo27);


    //o fundopreto22, fundopreto23 e fundopreto24 faz parte do retângulo28
    retângulo28 = Bodies.rectangle(250, 510, 25, 65, rectangle_options);
    World.add(world, retângulo28);

    fundopreto22 = Bodies.rectangle(252, 575, 1, 21, rectangle_options);
    World.add(world, fundopreto22);

    fundopreto23 = Bodies.rectangle(252, 575, 1, 21, rectangle_options);
    World.add(world, fundopreto23);

    fundopreto24 = Bodies.rectangle(252, 575, 1, 21, rectangle_options);
    World.add(world, fundopreto24);
    //aqui termina o fundo preto do retângulo27


    retângulo29 = Bodies.rectangle(440, 575, 210, 25, rectangle_options);
    World.add(world, retângulo29);


    //o fundopreto25, fundopreto26 e fundopreto27 faz parte do retângulo30
    retângulo30 = Bodies.rectangle(495, 510, 25, 65, rectangle_options);
    World.add(world, retângulo30);

    fundopreto25 = Bodies.rectangle(497, 575, 1, 21, rectangle_options);
    World.add(world, fundopreto25);

    fundopreto26 = Bodies.rectangle(497, 575, 1, 21, rectangle_options);
    World.add(world, fundopreto26);

    fundopreto27 = Bodies.rectangle(497, 575, 1, 21, rectangle_options);
    World.add(world, fundopreto27);
    //aqui termina o fundo preto do retângulo30

    ponto1 = Bodies.rectangle(80,98, 15,15.1, rectangle_options);
    World.add(world, ponto1);

    ponto2 = Bodies.rectangle(660,98, 15,15.1, rectangle_options);
    World.add(world, ponto2);


    for (var i = 4.5; i < 18; i++) 
     {
        var x = i * 19; // 50 pixels de espaço entre os retângulos
        var y = 80;
        var rect = Bodies.rectangle(x, y, 5, 5, rectangle_options);
        rectangles.push(rect);
        World.add(world, rect);
     }

        for (let o = 5.4; o < 12; o++) 
     {
        var x = 85; 
        var y = o * 20 // 50 pixels de espaço entre os retângulos
        var rect = Bodies.rectangle(x, y, 5, 5, rectangle_options);
        rectangles1.push(rect);
        World.add(world, rect);
     }

        for (var a = 5.5; a < 11; a++) 
     {
        var x = a * 19; // 50 pixels de espaço entre os retângulos
        var y = 158;
        var rect = Bodies.rectangle(x, y, 5, 5, rectangle_options);
        rectangles2.push(rect);
        World.add(world, rect);
     }

        for (var b = 12.6; b < 18; b++) 
     {
        var x = b * 19; // 50 pixels de espaço entre os retângulos
        var y = 158;
        var rect = Bodies.rectangle(x, y, 5, 5, rectangle_options);
        rectangles3.push(rect);
        World.add(world, rect);
     }

        for (var c = 5.5; c < 11; c++) 
     {
        var x = c * 19; // 50 pixels de espaço entre os retângulos
        var y = 228;
        var rect = Bodies.rectangle(x, y, 5, 5, rectangle_options);
        rectangles4.push(rect);
        World.add(world, rect);
     }

        for (var d = 22.9; d < 35; d++) 
     {
        var x = d * 19; // 50 pixels de espaço entre os retângulos
        var y = 80;
        var rect = Bodies.rectangle(x, y, 5, 5, rectangle_options);
        rectangles5.push(rect);
        World.add(world, rect);
     }

        for (let e = 5.4; e < 12; e++) 
     {
        var x = 665; // 50 pixels de espaço entre os retângulos
        var y = e * 20;
        var rect = Bodies.rectangle(x, y, 5, 5, rectangle_options);
        rectangles6.push(rect);
        World.add(world, rect);
     }

        for (let f = 5.25; f < 27; f++) 
     {
        var x = 219; // 50 pixels de espaço entre os retângulos
        var y = f * 21;
        var rect = Bodies.rectangle(x, y, 5, 5, rectangle_options);
        rectangles7.push(rect);
        World.add(world, rect);
     }

        for (let g = 3.9; g < 8; g++) 
     {
        var x = 351; // 50 pixels de espaço entre os retângulos
        var y = g * 20;
        var rect = Bodies.rectangle(x, y, 5, 5, rectangle_options);
        rectangles8.push(rect);
        World.add(world, rect);
     }

        for (let h = 3.9; h < 8; h++) 
     {
        var x = 416; // 50 pixels de espaço entre os retângulos
        var y = h * 20;
        var rect = Bodies.rectangle(x, y, 5, 5, rectangle_options);
        rectangles9.push(rect);
        World.add(world, rect);
     }

        for (let j = 3.9; j < 8; j++) 
     {
        var x = 416; // 50 pixels de espaço entre os retângulos
        var y = j * 20;
        var rect = Bodies.rectangle(x, y, 5, 5, rectangle_options);
        rectangles10.push(rect);
        World.add(world, rect);
     }

     for (let k = 21.55; k < 24; k++) 
     {
        var x = k * 17; // 50 pixels de espaço entre os retângulos
        var y = 158;
        var rect = Bodies.rectangle(x, y, 5, 5, rectangle_options);
        rectangles11.push(rect);
        World.add(world, rect);
     }

     for (let l = 20.6; l < 25; l++) 
     {
        var x = l * 21; // 50 pixels de espaço entre os retângulos
        var y = 158;
        var rect = Bodies.rectangle(x, y, 5, 5, rectangle_options);
        rectangles12.push(rect);
        World.add(world, rect);
     }

     for (let m = 5.25; m < 27; m++) 
     {
        var x = 537; // 50 pixels de espaço entre os retângulos
        var y = m * 21;
        var rect = Bodies.rectangle(x, y, 5, 5, rectangle_options);
        rectangles13.push(rect);
        World.add(world, rect);
     }

     for (let n = 26.6; n < 31; n++) 
     {
        var x = n * 21; // 50 pixels de espaço entre os retângulos
        var y = 158;
        var rect = Bodies.rectangle(x, y, 5, 5, rectangle_options);
        rectangles14.push(rect);
        World.add(world, rect);
     }

     for (var p = 26.6; p < 31; p++) 
     {
        var x = p * 21; // 50 pixels de espaço entre os retângulos
        var y = 227;
        var rect = Bodies.rectangle(x, y, 5, 5, rectangle_options);
        rectangles15.push(rect);
        World.add(world, rect);
     }

     for (var q = 9; q < 12; q++) 
     {
        var x = 288; // 50 pixels de espaço entre os retângulos
        var y = q * 20;
        var rect = Bodies.rectangle(x, y, 5, 5, rectangle_options);
        rectangles16.push(rect);
        World.add(world, rect);
     }

     for (var r = 9; r < 12; r++) 
     {
        var x = 475; // 50 pixels de espaço entre os retângulos
        var y = r * 20;
        var rect = Bodies.rectangle(x, y, 5, 5, rectangle_options);
        rectangles17.push(rect);
        World.add(world, rect);
     }

     for (var s = 15.4; s < 18; s++) 
     {
        var x = s * 20; // 50 pixels de espaço entre os retângulos
        var y = 220.2;
        var rect = Bodies.rectangle(x, y, 5, 5, rectangle_options);
        rectangles18.push(rect);
        World.add(world, rect);
     }

     for (var t = 21; t < 24; t++) 
     {
        var x = t * 20; // 50 pixels de espaço entre os retângulos
        var y = 220.2;
        var rect = Bodies.rectangle(x, y, 5, 5, rectangle_options);
        rectangles19.push(rect);
        World.add(world, rect);
     }

     for (var u = 4.2; u < 10; u++) 
     {
        var x = u * 21; // 50 pixels de espaço entre os retângulos
        var y = 433;
        var rect = Bodies.rectangle(x, y, 5, 5, rectangle_options);
        rectangles20.push(rect);
        World.add(world, rect);
     }

     for (var v = 11.65; v < 17; v++) 
     {
        var x = v * 21; // 50 pixels de espaço entre os retângulos
        var y = 433;
        var rect = Bodies.rectangle(x, y, 5, 5, rectangle_options);
        rectangles21.push(rect);
        World.add(world, rect);
     }

     for (var w = 21.7; w < 23; w++) 
     {
        var x = 88; // 50 pixels de espaço entre os retângulos
        var y = w * 21;
        var rect = Bodies.rectangle(x, y, 5, 5, rectangle_options);
        rectangles22.push(rect);
        World.add(world, rect);
     }

     for (var z = 21.7; z < 23; z++) 
     {
        var x = 350; // 50 pixels de espaço entre os retângulos
        var y = z * 21;
        var rect = Bodies.rectangle(x, y, 5, 5, rectangle_options);
        rectangles23.push(rect);
        World.add(world, rect);
     }

     for (var a1 = 20; a1 < 25; a1++) 
     {
        var x = a1 * 21; // 50 pixels de espaço entre os retângulos
        var y = 433;
        var rect = Bodies.rectangle(x, y, 5, 5, rectangle_options);
        rectangles24.push(rect);
        World.add(world, rect);
     }

     for (var b1 = 21.7; b1 < 23; b1++) 
     {
        var x = 420; // 50 pixels de espaço entre os retângulos
        var y = b1 * 21;
        var rect = Bodies.rectangle(x, y, 5, 5, rectangle_options);
        rectangles25.push(rect);
        World.add(world, rect);
     }

     for (var c1 = 26.7; c1 < 32; c1++) 
     {
        var x = c1 * 21; // 50 pixels de espaço entre os retângulos
        var y = 433;
        var rect = Bodies.rectangle(x, y, 5, 5, rectangle_options);
        rectangles26.push(rect);
        World.add(world, rect);
     }

     for (var d1 = 21.7; d1 < 23; d1++) 
     {
        var x = 666; // 50 pixels de espaço entre os retângulos
        var y = d1 * 21;
        var rect = Bodies.rectangle(x, y, 5, 5, rectangle_options);
        rectangles27.push(rect);
        World.add(world, rect);
     }

     for (var e1 = 11.5; e1 < 25; e1++) 
     {
        var x = e1 * 21; // 50 pixels de espaço entre os retângulos
        var y = 492;
        var rect = Bodies.rectangle(x, y, 5, 5, rectangle_options);
        rectangles28.push(rect);
        World.add(world, rect);
     }

     for (var f1 = 5.8; f1 < 7; f1++) 
     {
        var x = f1 * 21; // 50 pixels de espaço entre os retângulos
        var y = 497;
        var rect = Bodies.rectangle(x, y, 5, 5, rectangle_options);
        rectangles29.push(rect);
        World.add(world, rect);
     }

     for (var g1 = 29.2; g1 < 31; g1++) 
     {
        var x = g1 * 21; // 50 pixels de espaço entre os retângulos
        var y = 497;
        var rect = Bodies.rectangle(x, y, 5, 5, rectangle_options);
        rectangles30.push(rect);
        World.add(world, rect);
     }

     for (var h1 = 25.6; h1 < 28; h1++) 
     {
        var x = 295; // 50 pixels de espaço entre os retângulos
        var y = h1 * 20;
        var rect = Bodies.rectangle(x, y, 5, 5, rectangle_options);
        rectangles31.push(rect);
        World.add(world, rect);
     }

     for (var i1 = 25.6; i1 < 28; i1++) 
     {
        var x = 472; // 50 pixels de espaço entre os retângulos
        var y = i1 * 20;
        var rect = Bodies.rectangle(x, y, 5, 5, rectangle_options);
        rectangles32.push(rect);
        World.add(world, rect);
     }

     for (var j1 = 14.5; j1 < 16; j1++) 
     {
        var x = j1 * 22; // 50 pixels de espaço entre os retângulos
        var y = 552;
        var rect = Bodies.rectangle(x, y, 5, 5, rectangle_options);
        rectangles33.push(rect);
        World.add(world, rect);
     }

     for (var k1 = 18.5; k1 < 21; k1++) 
     {
        var x = k1 * 23; // 50 pixels de espaço entre os retângulos
        var y = 552;
        var rect = Bodies.rectangle(x, y, 5, 5, rectangle_options);
        rectangles34.push(rect);
        World.add(world, rect);
     }

     
     for (var l1 = 25.6; l1 < 27; l1++) 
     {
        var x = 143; // 50 pixels de espaço entre os retângulos
        var y = l1 * 20;
        var rect = Bodies.rectangle(x, y, 5, 5, rectangle_options);
        rectangles35.push(rect);
        World.add(world, rect);
     }


     for (var m1 = 25.6; m1 < 27; m1++) 
     {
        var x = 613; // 50 pixels de espaço entre os retângulos
        var y = m1 * 20;
        var rect = Bodies.rectangle(x, y, 5, 5, rectangle_options);
        rectangles36.push(rect);
        World.add(world, rect);
     }

     for (var n1 = 4; n1 < 10; n1++) 
     {
        var x = n1 * 22; // 50 pixels de espaço entre os retângulos
        var y = 551.5;
        var rect = Bodies.rectangle(x, y, 5, 5, rectangle_options);
        rectangles37.push(rect);
        World.add(world, rect);
     }

     for (var p1 = 26.5; p1 < 32; p1++) 
     {
        var x = p1 * 21; // 50 pixels de espaço entre os retângulos
        var y = 551.5;
        var rect = Bodies.rectangle(x, y, 5, 5, rectangle_options);
        rectangles38.push(rect);
        World.add(world, rect);
     }

     for (var q1 = 27.3; q1 < 29; q1++) 
     {
        var x = 88; 
        var y = q1 * 21; // 50 pixels de espaço entre os retângulos
        var rect = Bodies.rectangle(x, y, 5, 5, rectangle_options);
        rectangles39.push(rect);
        World.add(world, rect);
     }

     for (var r1 = 27.3; r1 < 29; r1++) 
     {
        var x = 342; 
        var y = r1 * 21; // 50 pixels de espaço entre os retângulos
        var rect = Bodies.rectangle(x, y, 5, 5, rectangle_options);
        rectangles40.push(rect);
        World.add(world, rect);
     }

     for (var s1 = 27.3; s1 < 29; s1++) 
     {
        var x = 419; 
        var y = s1 * 21; // 50 pixels de espaço entre os retângulos
        var rect = Bodies.rectangle(x, y, 5, 5, rectangle_options);
        rectangles41.push(rect);
        World.add(world, rect);
     }

     for (var t1 = 27.3; t1 < 29; t1++) 
     {
        var x = 666; // 50 pixels de espaço entre os retângulos
        var y = t1 * 21;
        var rect = Bodies.rectangle(x, y, 5, 5, rectangle_options);
        rectangles42.push(rect);
        World.add(world, rect);
     }

     for (var u1 = 4.3; u1 < 34; u1++) 
     {
        var x = u1 * 20; // 50 pixels de espaço entre os retângulos
        var y = 615;
        var rect = Bodies.rectangle(x, y, 5, 5, rectangle_options);
        rectangles43.push(rect);
        World.add(world, rect);
     }
   





}





function draw() {
    background(0);

    for (var i = 0; i < rectangles.length; i++) {
        stroke("0");
        fill(255);
        rect(rectangles[i].position.x, rectangles[i].position.y, 5, 5);
    }
    for (var o = 0; o < rectangles1.length; o++) {
        stroke("0");
        fill(255);
        rect(rectangles1[o].position.x, rectangles1[o].position.y, 5, 5);
    }
    for (var a = 0; a < rectangles2.length; a++) {
        stroke("0");
        fill(255);
        rect(rectangles2[a].position.x, rectangles2[a].position.y, 5, 5);
    }
    for (var b = 0; b < rectangles3.length; b++) {
        stroke("0");
        fill(255);
        rect(rectangles3[b].position.x, rectangles3[b].position.y, 5, 5);
    }
    for (var c = 0; c < rectangles4.length; c++) {
        stroke("0");
        fill(255);
        rect(rectangles4[c].position.x, rectangles4[c].position.y, 5, 5);
    }
    for (var d = 0; d < rectangles5.length; d++) {
        stroke("0");
        fill(255);
        rect(rectangles5[d].position.x, rectangles5[d].position.y, 5, 5);
    }
    for (var e = 0; e < rectangles6.length; e++) {
        stroke("0");
        fill(255);
        rect(rectangles6[e].position.x, rectangles6[e].position.y, 5, 5);
    }
    for (var f = 0; f < rectangles7.length; f++) {
        stroke("0");
        fill(255);
        rect(rectangles7[f].position.x, rectangles7[f].position.y, 5, 5);
    }
    for (var g = 0; g < rectangles8.length; g++) {
        stroke("0");
        fill(255);
        rect(rectangles8[g].position.x, rectangles8[g].position.y, 5, 5);
    }
    for (var h = 0; h < rectangles9.length; h++) {
        stroke("0");
        fill(255);
        rect(rectangles9[h].position.x, rectangles9[h].position.y, 5, 5);
    }
    for (var j = 0; j < rectangles10.length; j++) {
        stroke("0");
        fill(255);
        rect(rectangles10[j].position.x, rectangles10[j].position.y, 5, 5);
    }
    for (var k = 0; k < rectangles11.length; k++) {
        stroke("0");
        fill(255);
        rect(rectangles11[k].position.x, rectangles11[k].position.y, 5, 5);
    }
    for (var l = 0; l < rectangles12.length; l++) {
        stroke("0");
        fill(255);
        rect(rectangles12[l].position.x, rectangles12[l].position.y, 5, 5);
    }
    for (var m = 0; m < rectangles13.length; m++) {
        stroke("0");
        fill(255);
        rect(rectangles13[m].position.x, rectangles13[m].position.y, 5, 5);
    }
    for (var n = 0; n < rectangles14.length; n++) {
        stroke("0");
        fill(255);
        rect(rectangles14[n].position.x, rectangles14[n].position.y, 5, 5);
    }
    for (var p = 0; p < rectangles15.length; p++) {
        stroke("0");
        fill(255);
        rect(rectangles15[p].position.x, rectangles15[p].position.y, 5, 5);
    }
    for (var q = 0; q < rectangles16.length; q++) {
        stroke("0");
        fill(255);
        rect(rectangles16[q].position.x, rectangles16[q].position.y, 5, 5);
    }
    for (var r = 0; r < rectangles17.length; r++) {
        stroke("0");
        fill(255);
        rect(rectangles17[r].position.x, rectangles17[r].position.y, 5, 5);
    }    
    for (var s = 0; s < rectangles18.length; s++) {
        stroke("0");
        fill(255);
        rect(rectangles18[s].position.x, rectangles18[s].position.y, 5, 5);
    }  
    for (var t = 0; t < rectangles19.length; t++) {
        stroke("0");
        fill(255);
        rect(rectangles19[t].position.x, rectangles19[t].position.y, 5, 5);
    }    
    for (var u = 0; u < rectangles20.length; u++) {
        stroke("0");
        fill(255);
        rect(rectangles20[u].position.x, rectangles20[u].position.y, 5, 5);
    }    
    for (var v = 0; v < rectangles21.length; v++) {
        stroke("0");
        fill(255);
        rect(rectangles21[v].position.x, rectangles21[v].position.y, 5, 5);
    }    
    for (var w = 0; w < rectangles22.length; w++) {
        stroke("0");
        fill(255);
        rect(rectangles22[w].position.x, rectangles22[w].position.y, 5, 5);
    }    
    for (var z = 0; z < rectangles23.length; z++) {
        stroke("0");
        fill(255);
        rect(rectangles23[z].position.x, rectangles23[z].position.y, 5, 5);
    }    
    for (var a1 = 0; a1 < rectangles24.length; a1++) {
        stroke("0");
        fill(255);
        rect(rectangles24[a1].position.x, rectangles24[a1].position.y, 5, 5);
    }    
    for (var b1 = 0; b1 < rectangles25.length; b1++) {
        stroke("0");
        fill(255);
        rect(rectangles25[b1].position.x, rectangles25[b1].position.y, 5, 5);
    }    
    for (var c1 = 0; c1 < rectangles26.length; c1++) {
        stroke("0");
        fill(255);
        rect(rectangles26[c1].position.x, rectangles26[c1].position.y, 5, 5);
    }    
    for (var d1 = 0; d1 < rectangles27.length; d1++) {
        stroke("0");
        fill(255);
        rect(rectangles27[d1].position.x, rectangles27[d1].position.y, 5, 5);
    }    
    for (var e1 = 0; e1 < rectangles28.length; e1++) {
        stroke("0");
        fill(255);
        rect(rectangles28[e1].position.x, rectangles28[e1].position.y, 5, 5);
    }    
    for (var f1 = 0; f1 < rectangles29.length; f1++) {
        stroke("0");
        fill(255);
        rect(rectangles29[f1].position.x, rectangles29[f1].position.y, 5, 5);
    }    
    for (var g1 = 0; g1 < rectangles30.length; g1++) {
        stroke("0");
        fill(255);
        rect(rectangles30[g1].position.x, rectangles30[g1].position.y, 5, 5);
    }    
    for (var h1 = 0; h1 < rectangles31.length; h1++) {
        stroke("0");
        fill(255);
        rect(rectangles31[h1].position.x, rectangles31[h1].position.y, 5, 5);
    }    
    for (var i1 = 0; i1 < rectangles32.length; i1++) {
        stroke("0");
        fill(255);
        rect(rectangles32[i1].position.x, rectangles32[i1].position.y, 5, 5);
    }    
    for (var j1 = 0; j1 < rectangles33.length; j1++) {
        stroke("0");
        fill(255);
        rect(rectangles33[j1].position.x, rectangles33[j1].position.y, 5, 5);
    }    
    for (var k1 = 0; k1 < rectangles34.length; k1++) {
        stroke("0");
        fill(255);
        rect(rectangles34[k1].position.x, rectangles34[k1].position.y, 5, 5);
    }    
    for (var l1 = 0; l1 < rectangles35.length; l1++) {
        stroke("0");
        fill(255);
        rect(rectangles35[l1].position.x, rectangles35[l1].position.y, 5, 5);
    }    
    for (var m1 = 0; m1 < rectangles36.length; m1++) {
        stroke("0");
        fill(255);
        rect(rectangles36[m1].position.x, rectangles36[m1].position.y, 5, 5);
    }    
    for (var n1 = 0; n1 < rectangles37.length; n1++) {
        stroke("0");
        fill(255);
        rect(rectangles37[n1].position.x, rectangles37[n1].position.y, 5, 5);
    }    
    for (var p1 = 0; p1 < rectangles38.length; p1++) {
        stroke("0");
        fill(255);
        rect(rectangles38[p1].position.x, rectangles38[p1].position.y, 5, 5);
    }    
    for (var q1 = 0; q1 < rectangles39.length; q1++) {
        stroke("0");
        fill(255);
        rect(rectangles39[q1].position.x, rectangles39[q1].position.y, 5, 5);
    }    
    for (var r1 = 0; r1 < rectangles40.length; r1++) {
        stroke("0");
        fill(255);
        rect(rectangles40[r1].position.x, rectangles40[r1].position.y, 5, 5);
    }    
    for (var s1 = 0; s1 < rectangles41.length; s1++) {
        stroke("0");
        fill(255);
        rect(rectangles41[s1].position.x, rectangles41[s1].position.y, 5, 5);
    }    
    for (var t1 = 0; t1 < rectangles42.length; t1++) {
        stroke("0");
        fill(255);
        rect(rectangles42[t1].position.x, rectangles42[t1].position.y, 5, 5);
    }    
    for (var u1 = 0; u1 < rectangles43.length; u1++) {
        stroke("0");
        fill(255);
        rect(rectangles43[u1].position.x, rectangles43[u1].position.y, 5, 5);
    }   





    if (gameState === "play") 
    {
     ghostAquaEsquerda.velocityY = -2;
     ghostOrangeEsquerda.velocityX = -2;
     ghostPinkEsquerda.velocityY = 2;
     ghostRedEsquerda.velocityX = 2;
    }



    Engine.update(engine);

    stroke("#00008B");
    noFill("#00008B");
    rect(rect1.position.x, rect1.position.y, 640, 1);
    rect(rect2.position.x, rect2.position.y, 320, 1);
    rect(rect3.position.x, rect3.position.y, 295, 1);
    rect(rect4.position.x, rect4.position.y, 1, 70);
    rect(rect5.position.x, rect5.position.y, 1, 70);
    rect(rect6.position.x, rect6.position.y, 15, 1);
    rect(rect7.position.x, rect7.position.y, 1, 200);
    rect(rect8.position.x, rect8.position.y, 1, 200);
    rect(rect9.position.x, rect9.position.y, 1, 190);
    rect(rect10.position.x, rect10.position.y, 1, 190);
    rect(rect11.position.x, rect11.position.y, 90, 1);
    rect(rect12.position.x, rect12.position.y, 90, 1);
    rect(rect13.position.x, rect13.position.y, 90, 1);
    rect(rect14.position.x, rect14.position.y, 90, 1);
    rect(rect15.position.x, rect15.position.y, 1, 50);
    rect(rect16.position.x, rect16.position.y, 1, 50);
    rect(rect17.position.x, rect17.position.y, 1, 60);
    rect(rect18.position.x, rect18.position.y, 1, 60);
    rect(rect19.position.x, rect19.position.y, 95, 1);
    rect(rect20.position.x, rect20.position.y, 95, 1);
    rect(rect21.position.x, rect21.position.y, 90, 1);
    rect(rect22.position.x, rect22.position.y, 90, 1);
    rect(rect23.position.x, rect23.position.y, 95, 1);
    rect(rect24.position.x, rect24.position.y, 95, 1);
    rect(rect25.position.x, rect25.position.y, 90, 1);
    rect(rect26.position.x, rect26.position.y, 90, 1);
    rect(rect27.position.x, rect27.position.y, 1, 50);
    rect(rect28.position.x, rect28.position.y, 1, 50);
    rect(rect29.position.x, rect29.position.y, 1, 60);
    rect(rect30.position.x, rect30.position.y, 1, 60);
    rect(rect31.position.x, rect31.position.y, 90, 1);
    rect(rect32.position.x, rect32.position.y, 90, 1);
    rect(rect33.position.x, rect33.position.y, 90, 1);
    rect(rect34.position.x, rect34.position.y, 90, 1);
    rect(rect35.position.x, rect35.position.y, 1, 230);
    rect(rect36.position.x, rect36.position.y, 1, 230);
    rect(rect37.position.x, rect37.position.y, 1, 100);
    rect(rect38.position.x, rect38.position.y, 1, 100);
    rect(rect39.position.x, rect39.position.y, 1, 100);
    rect(rect40.position.x, rect40.position.y, 1, 100);
    rect(rect41.position.x, rect41.position.y, 40, 1);
    rect(rect42.position.x, rect42.position.y, 40, 1);
    rect(rect43.position.x, rect43.position.y, 1, 20);
    rect(rect44.position.x, rect44.position.y, 1, 20);
    rect(rect45.position.x, rect45.position.y, 40, 1);
    rect(rect46.position.x, rect46.position.y, 40, 1);
    rect(rect47.position.x, rect47.position.y, 640, 1);
    rect(rect48.position.x, rect48.position.y, 630, 1);

    //A partir daqui são códigos dos retângulo de dentro
    stroke('white');
    rect(portaSpawn.position.x, portaSpawn.position.y, 30, 1);
    stroke("#00008B")
    rect(retângulo1.position.x, retângulo1.position.y, 100, 50);
    rect(retângulo2.position.x, retângulo2.position.y, 110, 60);
    rect(retângulo3.position.x, retângulo3.position.y, 90, 40);
    rect(retângulo4.position.x, retângulo4.position.y, 90, 40);
    rect(retângulo5.position.x, retângulo5.position.y, 90, 40);
    rect(retângulo6.position.x, retângulo6.position.y, 90, 40);
    rect(retângulo7.position.x, retângulo7.position.y, 90, 25);
    rect(retângulo8.position.x, retângulo8.position.y, 90, 25);
    rect(retângulo9.position.x, retângulo9.position.y, 130, 25);
    rect(retângulo10.position.x, retângulo10.position.y, 25, 55);
    rect(retângulo11.position.x, retângulo11.position.y, 25, 130);
    rect(retângulo12.position.x, retângulo12.position.y, 65, 25);
    rect(retângulo13.position.x, retângulo13.position.y, 25, 130);
    rect(retângulo14.position.x, retângulo14.position.y, 65, 25);
    rect(retângulo15.position.x, retângulo15.position.y, 25, 60);
    rect(retângulo16.position.x, retângulo16.position.y, 25, 60);
    rect(retângulo17.position.x, retângulo17.position.y, 130, 25);
    rect(retângulo18.position.x, retângulo18.position.y, 25, 65);
    rect(retângulo19.position.x, retângulo19.position.y, 80, 25);
    rect(retângulo20.position.x, retângulo20.position.y, 80, 25);
    rect(retângulo21.position.x, retângulo21.position.y, 90, 25);
    rect(retângulo22.position.x, retângulo22.position.y, 90, 25);
    rect(retângulo23.position.x, retângulo23.position.y, 25, 55);
    rect(retângulo24.position.x, retângulo24.position.y, 25, 55);
    rect(retângulo25.position.x, retângulo25.position.y, 130, 25);
    rect(retângulo26.position.x, retângulo26.position.y, 25, 65);
    rect(retângulo27.position.x, retângulo27.position.y, 210, 25);
    rect(retângulo28.position.x, retângulo28.position.y, 25, 65);
    rect(retângulo29.position.x, retângulo29.position.y, 210, 25);
    rect(retângulo30.position.x, retângulo30.position.y, 25, 65);

    // fundopreto1, fundopreto2, fundopreto3 são do retângulo10
    stroke(0);
    rect(fundopreto1.position.x, fundopreto1.position.y, 21, 1);
    rect(fundopreto2.position.x, fundopreto2.position.y, 21, 1);
    rect(fundopreto3.position.x, fundopreto3.position.y, 21, 1);

    //fundopreto4, fundopreto5, fundopreto6 são do retângulo12
    rect(fundopreto4.position.x, fundopreto4.position.y, 1, 21);
    rect(fundopreto5.position.x, fundopreto5.position.y, 1, 21);
    rect(fundopreto6.position.x, fundopreto6.position.y, 1, 21);

    //fundopreto7, fundopreto8, fundopreto9 são do retângulo14
    rect(fundopreto7.position.x, fundopreto7.position.y, 1, 21);
    rect(fundopreto8.position.x, fundopreto8.position.y, 1, 21);
    rect(fundopreto9.position.x, fundopreto9.position.y, 1, 21);

    //fundopreto10, fundopreto11, fundopreto12 são do retângulo18
    rect(fundopreto10.position.x, fundopreto10.position.y, 21, 1);
    rect(fundopreto11.position.x, fundopreto11.position.y, 21, 1);
    rect(fundopreto12.position.x, fundopreto12.position.y, 21, 1);

    //fundopreto13, fundopreto12, fundopreto13 são do retângulo23
    rect(fundopreto13.position.x, fundopreto13.position.y, 21, 1);
    rect(fundopreto14.position.x, fundopreto14.position.y, 21, 1);
    rect(fundopreto15.position.x, fundopreto15.position.y, 21, 1);

    //fundopreto16, fundopreto17, fundopreto18 são do retângulo24
    rect(fundopreto16.position.x, fundopreto16.position.y, 21, 1);
    rect(fundopreto17.position.x, fundopreto17.position.y, 21, 1);
    rect(fundopreto18.position.x, fundopreto18.position.y, 21, 1);

    //fundopreto19, fundopreto20, fundopreto21 são do retângulo26
    rect(fundopreto19.position.x, fundopreto19.position.y, 21, 1);
    rect(fundopreto20.position.x, fundopreto20.position.y, 21, 1);
    rect(fundopreto21.position.x, fundopreto21.position.y, 21, 1);

    //fundopreto22, fundopreto23, fundopreto24 são do retângulo28
    rect(fundopreto22.position.x, fundopreto22.position.y, 21, 1);
    rect(fundopreto23.position.x, fundopreto23.position.y, 21, 1);
    rect(fundopreto24.position.x, fundopreto24.position.y, 21, 1);

    //fundopreto25, fundopreto26, fundopreto27 são do retângulo30
    rect(fundopreto25.position.x, fundopreto25.position.y, 21, 1);
    rect(fundopreto26.position.x, fundopreto26.position.y, 21, 1);
    rect(fundopreto27.position.x, fundopreto27.position.y, 21, 1);

    fill(255)
    rect(ponto1.position.x, ponto1.position.y, 15,15.3);
    rect(ponto2.position.x, ponto2.position.y, 15,15.3);

 
    drawSprites ();
    bounceOffEdges(pacman);
  
}

function bounceOffEdges(pacman) 
{
   // verifica se o sprite colidiu com as bordas laterais
   if (pacman.position.x < 95 || pacman.position.x > 670) {
      pacman.velocity.x = 0; // inverte a direção horizontal
   }
   
   // verifica se o sprite colidiu com as bordas superior ou inferior
   if (pacman.position.y < 85 || pacman.position.y > 615) {
      pacman.velocity.y = 0; // inverte a direção vertical
   }
 
    if (keyIsDown(RIGHT_ARROW)) 
    {
      gameState = "play";
      pacman.velocityX = 3;
      pacman.velocityY = 0;
      pacman.visible = true;
  
    }

    if (keyIsDown(LEFT_ARROW)) 
    {
      gameState = "play";
      pacman.velocityX = -3;
      pacman.velocityY = 0;
      pacman.visible = false;
      pacmanEsq.visible = true;
      pacmanEsq.velocityX = -3;
      pacmanEsq.position.x = pacman.position.x; 
      pacmanEsq.position.y = pacman.position.y;
      pacmanEsq.scale = 0.08;
     
    } else 
    {
      pacman.visible = true;
      pacmanEsq.visible = false;
      
    }

    if (keyIsDown(UP_ARROW)) 
    {
      gameState = "play";
      pacman.velocityY = -3;
      pacman.velocityX = 0;

    }

    if (keyIsDown(DOWN_ARROW)) 
    {
      gameState = "play";
      pacman.velocityY = 3;
      pacman.velocityX = 0;
    }
}
