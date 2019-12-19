const G=25;
class planet{
	constructor(posx,posy,velx,vely,mass){
		this.pos=createVector(posx,posy);
		this.vel=createVector(velx,vely);
		this.acc=createVector(0,0);
		this.mass=mass;
		
	}
	move(){
		
	this.vel.sub(this.acc);

		this.pos.x+=this.vel.x/1000;
		this.pos.y+=this.vel.y/1000;

	}
	display(valume=1){
	ellipse(this.pos.x,this.pos.y,this.mass/valume,this.mass/valume);
		
	}
	
	atr(body){
	//	let p= this.pos.Mag-body.pos.Mag;
		this.acc= createVector(this.pos.x-body.pos.x,this.pos.y-body.pos.y);
	
		this.acc.setMag((G*this.mass*body.mass)/this.acc.mag()^2);
		//print(this.acc);
		}
	
	
	
	
}

