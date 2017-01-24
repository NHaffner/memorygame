var nameSpace={}; //anytime you should var you use namespace instead 
nameSpace.rightAnswerMemory = 0;
nameSpace.numberorcolums = 4;
nameSpace.numberofrows = 3;
nameSpace.selectedTile = 0;
nameSpace.tileFlipped = 0;
nameSpace.firstCard=""; //no need to make array because only one thing 
nameSpace.secondCard ="";
nameSpace.play =true;


var firstDiv = document.createElement("div");
firstDiv.textContent = "welcome to memory game!";
firstDiv.classList.add("firstDiv");

//creating a new game button
var btn = document.createElement("button");
btn.classList.add("btn");
var t = document.createTextNode("new game");
btn.appendChild(t);
firstDiv.appendChild(btn);
btn.onclick = (now);
document.body.appendChild(firstDiv);

function now (){
	location.reload(true);
}


var container = document.createElement("div");
container.classList.add("initial");


for (var i = 0; i<nameSpace.numberofrows; i++){
var row = document.createElement("div");
row.classList.add("row");


	for (var j = 0; j< nameSpace.numberorcolums; j++){
		var column = document.createElement("img");
		column.src = "./images/texture.jpg" 
		column.classList.add("col-xs-12");
		column.classList.add("col-sm-4");
		column.classList.add("column");
		//column.style.width="200px";
		//column.style.height="200px";
		row.appendChild(column);
	}
	container.appendChild(row); //you need to append properly ! if you were to append under your first for loop then you would be appending too early 
}


document.body.appendChild(container);


nameSpace.imgArray = ['./pics/1.jpg', './pics/2.jpg', './pics/3.jpg', './pics/4.jpg', './pics/5.jpg', './pics/6.jpg','./pics/1.jpg', './pics/2.jpg', './pics/3.jpg', './pics/4.jpg', './pics/5.jpg', './pics/6.jpg'];

nameSpace.selectTile = function(e){ 

 	if(nameSpace.play){
 	if (nameSpace.tileFlipped === 0){
		nameSpace.firstCard = e.target;
 		console.log("first card",nameSpace.firstCard);
 		nameSpace.firstCard.src = nameSpace.imgArray[e.target.id]; 
 		nameSpace.tileFlipped ++;
 	}

	else if (nameSpace.tileFlipped === 1){
 		nameSpace.secondCard = e.target;
 		console.log("second card",nameSpace.secondCard);
		nameSpace.secondCard.src = nameSpace.imgArray[e.target.id]; 
 		nameSpace.tileFlipped = 0;

 		if (nameSpace.firstCard.src === nameSpace.secondCard.src){
 		console.log("match");
 		nameSpace.firstCard.removeEventListener("click", nameSpace.selectTile);
 		nameSpace.secondCard.removeEventListener("click", nameSpace.selectTile);
 		nameSpace.rightAnswerMemory ++;
 		console.log(nameSpace.rightAnswerMemory);

 	
 	}

 	else{
 		nameSpace.play = false;
 		setTimeout(function(){
 		nameSpace.firstCard.src = "./images/texture.jpg";
 		nameSpace.secondCard.src = "./images/texture.jpg";
 		nameSpace.play = true;

 	}, 1000)
 	}

 	} 
 	 	if (nameSpace.rightAnswerMemory === 6){
 			setTimeout(function(){ alert("congratulations! you won!"); },500);
 		}
 	
 	}
 	
}


//drawing all of the tiles facedown
nameSpace.card = document.getElementsByClassName("column"); //looping through all the cards with class column
for(var i = 0; i < nameSpace.card.length; i++){
			nameSpace.card[i].id = i ;

	nameSpace.card[i].addEventListener("click", nameSpace.selectTile);
}



//randomly pick an image from the array of pictures, shuffle 

nameSpace.shuffle = function(a) {

    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}
nameSpace.shuffle(nameSpace.imgArray);














 

