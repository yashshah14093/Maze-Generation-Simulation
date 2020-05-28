function index(i,j) {
			// body...
	if(i < 0 || i>rows-1 || j<0 || j>cols-1){
		return -1;
	}
	return (i+j*cols);
}







function Cell(i,j) {
	// body...
	this.i = i;
	this.j = j;
	this.wall = [true,true,true,true]
	this.visited = false;

	this.show = function(){
		var x = this.i*w;
		var y = this.j*w;
		
		stroke(255);

		if(this.wall[0]){
			line(x,y,x+w,y); 	 	// Top line of a cell
		}
		if(this.wall[1]){
			line(x+w,y,x+w,y+w);	// Right line of a cell
		}
		if(this.wall[2]){
			line(x,y+w,x+w,y+w);	// Bottom line of a cell
		}
		if(this.wall[3]){
			line(x,y,x,y+w);		// left line of a cell 
		}

		if(this.visited){
			fill(255,220,0);
			rect(x,y,w,w);
		}
	}


	Cell.prototype.checkNeighbour = function() {
		// body...

		var neighbour = [];

		var top    = grid[index(i,j-1)];
		var bottom = grid[index(i,j+1)];
		var right  = grid[index(i+1,j)];
		var left   = grid[index(i-1,j)];

		if(top && !top.visited){
			neighbour.push(top);
		}
		if(bottom && !bottom.visited){
			neighbour.push(bottom);
		}
		if(right && !right.visited){
			neighbour.push(right);
		}
		if(left && !left.visited){
			neighbour.push(left);
		}

		if(neighbour.length>0){
			var r = floor(random(0,neighbour.length));
			return neighbour[r];
		}
		else{
			return undefined;
		}


	};

}