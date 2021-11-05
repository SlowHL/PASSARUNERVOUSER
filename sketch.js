const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var caxa1, caxa2, caxa3, caxa4, caxa5;
var xao;
var peg1, peg2;
var tronco1, tronco2, tronco3, tronco4;
var passaru;
var fundo;
var plataforma;

function preload(){
fundo= loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    xao = new Xao(600,400,1200,20);
    plataforma = new Xao(150,305,300,170);
    
    caxa1 = new Caxa(700,320,70,70);
    caxa2 = new Caxa(920,320,70,70);
    peg1 = new Peg(810,350);
    tronco1 = new Tronco(810,260,300,PI/2);

    caxa3 = new Caxa(700,240,70,70);
    caxa4 = new Caxa(920,240,70,70);
    peg2 = new Peg(810,220);
    tronco2 = new Tronco(810,180,300,PI/2);

    caxa5 = new Caxa(810,160,70,70);
    tronco3 = new Tronco(760,120,150,PI/7);
    tronco4 = new Tronco(870,120,150,-PI/7);

    passaru = new Passaru(100, 100);
}

function draw(){
    background(fundo);
    Engine.update(engine);
    caxa1.display();
    caxa2.display();
    caxa3.display();
    caxa4.display();
    caxa5.display();
    xao.display();
    peg1.display();
    peg2.display();
    tronco1.display();
    tronco2.display();
    tronco3.display();
    tronco4.display();
    passaru.display();
    plataforma.display();
}