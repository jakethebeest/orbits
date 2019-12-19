let p;

let s,s2;
let u;
function setup(){
	createCanvas(800,800);
p=new planet(400,500,10,0,50);
s=new planet(200,300,2000,0,200);
s2=new planet(500,400,1000,0,100);
u= new universe(100);
angleMode(DEGREES);
//for(let j=0;j<10000;j++){
	//p.atr(s);
	//s.atr(p);

	
	p.move();
	s.move();
	s2.move();
//frameRate(10);
	}
	let camy=0;
	let camx=0;
	let camr=0;
	let sc=.1;
	function draw(){
	
	background(0,255,255);
	scale(sc);
	
	u.atr();
	u.move();
//u.remove();
	push();
//translate
translate(camx-u.avx()+2500,camy-u.avy()+2500);
rotate(camr);

//draw center point

	//display planets

	u.display();
	a();
	pop();
	}
	class universe{
		constructor(amount){
			this.p=[];
			this.mass=[];
			this.velx=[];
			this.vely=[];
			this.valume=[];
			
			for(let j=0;j<amount;j++){
				this.mass[j]=random(200);
				this.velx[j]=random(100);
				this.vely[j]=random(100);
				this.valume[j]=random(.5,2);
	this.p[j]=new planet(j*5+1000,floor(j/(amount/10))*10+1000,this.velx[j],this.vely[j],this.mass[j]);
			
			}
		}
		atr(){
			for(let j=0;j<this.p.length;j++){
				for(let k=0;k<this.p.length;k++){
					if(j!=k){
					this.p[j].atr(this.p[k]);
        	}
		  }	
		 }
		}
		move(){
			for(let j=0;j<this.p.length;j++){
			this.p[j].move();
			}
		}
		display(){
			for(let j=0;j<this.p.length;j++){
				fill(this.mass[j]*10,this.valume[j]*100,j*10);
			this.p[j].display(this.valume[j]);
			}
		}
		avx(){
			let x=0;
			
			for(let j=0;j<this.p.length;j++){
			//	print(this.p[j].pos.x);
				x+=this.p[j].pos.x;
				
			}
			//print(x);
			return x/this.p.length;
		}
		avy(){
			let y=0;
			for(let j=0;j<this.p.length;j++){
				y+=this.p[j].pos.y;
			}
			return y/this.p.length;
		}
		remove(){
			for(let j=0;j<this.p.length;j++){
				if(this.p[j].pos.x>this.avx()+1000000*sc||
				this.p[j].pos.y>this.avy()+1000000*sc){
			this.p.splice(j,1);
			this.mass.splice(j,1);
			this.velx.splice(j,1);
			this.vely.splice(j,1);
			this.valume.splice(j,1);
				}
			}
		}
		
		
	}
	
	
	
	
	function a(){
		if(key=="w") camy+=1/sc;
		if(key=="s") camy-=1/sc;
		if(key=="a") camx+=1/sc;
		if(key=="d") camx-=1/sc;
		if(key=="d") camx-=sc*2;
		if(key=="q") camr+=10;
		if(key=="e") camr-=10;
		if(key=="r") sc*=1.01;
		if(key=="f") sc/=1.01;
	}