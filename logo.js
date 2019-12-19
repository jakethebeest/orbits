class logo{

constructor(x,y,as){this.xs=x;this.ys=y;this.xf=x;this.yf=y;this.angle=as;}
//constructor(){this.xs=0;this.ys=0;this.xf=0;this.yf=0;this.angle=0;}

  fd(len) {this.xf=this.xs+len*cos(PI*this.angle/180)
  this.yf=this.ys+len*sin(PI*this.angle/180)
  line(this.xs,this.ys,this.xf,this.yf)
  this.xs=this.xf;this.ys=this.yf;
  }

 bk(len) {this.xf=this.xs-len*cos(PI*this.angle/180)
  this.yf=this.ys-len*sin(PI*this.angle/180)
  line(this.xs,this.ys,this.xf,this.yf)
  this.xs=this.xf;this.ys=this.yf;
  }

 set1(x,y, an){this.xs=x;this.ys=y;this.angle=an;}

 rt(an){this.angle=this.angle+an;
 if(this.angle<0){this.angle=this.angle%360+360;}
	  if(this.angle>=360){this.angle=this.angle%360;}
	 }
 
 lt(an){this.angle=this.angle-an;
 if(this.angle<0){this.angle=this.angle%360+360;}
	  if(this.angle>=360){this.angle=this.angle%360;}
	 }

 xpos(){return this.xf;}
 ypos(){return this.yf;}
 dir(){return this.angle;}

sketch(l,a,senten){
let news="";//sentence="A+A--A+A";
  for(let j=0;j<senten.length;j++){
    news=senten.charAt(j);
    switch(news){
      case "A":this.fd(l);break;
      case "B":this.fd(l);break;
      case "+":this.lt(a);break;
      case "-":this.rt(a);break;
}
  }}
  
poly(len,n){
for(let j=0;j<n;j++){
	this.fd(len);this.rt(360/n);
}}	
  
}
