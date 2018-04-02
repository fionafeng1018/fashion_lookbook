// JavaScript Document
"use strict";
/*
var retro_1 = ["images/tre1.jpg","images/tre3.jpg","images/tre4.jpg","images/tre2.jpg","images/tre5.jpg"];
var retro_2 = ["images/tre11.jpg","images/tre44.jpg","images/tre33.jpg","images/tre55.png","images/tre22.jpg"];
var retro_3 = ["images/tre444.jpg","images/tre111.jpg","images/tre333.jpg","images/tre555.jpg","images/tre444.jpg"];
var trending_1 = [];
var trending_2 =[];
*/
var images = document.getElementsByClassName("dynamic_image");
var count = 0;

function update_retro1(){
	images[0].src="images/tre1.jpg";
	images[1].src="images/tre3.jpg";
	images[2].src="images/tre4.jpg";
	images[3].src="images/tre2.jpg";
	images[4].src="images/tre5.jpg";
}

function update_retro2(){	
	images[0].src="images/tre11.jpg";
	images[1].src="images/tre44.jpg";
	images[2].src="images/tre33.jpg";
	images[3].src="images/tre55.png";
	images[4].src="images/tre22.jpg";
}
		
function update_retro3(){
	images[0].src="images/tre444.jpg";
	images[1].src="images/tre111.jpg";
	images[2].src="images/tre333.jpg";
	images[3].src="images/tre555.jpg";
	images[4].src="images/tre444.jpg";
}

function update_trending1(){
	images[0].src="images/retro3.jpg";
	images[1].src="images/retro6.jpg";
	images[2].src="images/retro1.jpg";
	images[3].src="images/retro2.jpg";
	images[4].src="images/retro5.jpg";
}

function update_trending2(){
	images[0].src="images/retro55.jpg";
	images[1].src="images/retro22.jpg";
	images[2].src="images/retro44.jpg";
	images[3].src="images/retro33.jpg";
	images[4].src="images/retro11.jpg";
}

