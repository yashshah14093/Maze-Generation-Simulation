// Maze Generator

var cols,rows;
var w = 40;
var grid = [];

var current;


function setup(argument) {
	// body...
	createCanvas(401,401);
	cols = floor(400/w);
	rows = floor(400/w);

	for(var i=0;i<rows;i++){
		for(var j=0;j<cols;j++){
			var cell = new Cell(i,j);
			grid.push(cell);
		}
	}

	current = grid[0];
}



function draw() {
	// body...
	background(0,200,225);
	for(var i=0;i<grid.length;i++)
	{
		grid[i].show();
	}

	current.visited = true;
	var neighbour = current.checkNeighbour();
	if(neighbour){
		current.visited = true;
		current = neighbour;
	}
}

