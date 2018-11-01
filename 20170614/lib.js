// 物件的設計
// 語法的變化
// 建構函式:專門用來製造物件的函式，這是唯一的目的
/*
	1. 使用方式不一樣
		函式();
		new 建構函式();
	2. 設計的語法不一樣
*/
function Player(name,hp){ // 建立玩家的物件程序
	// 2-1. 建構函式自動產生"空白物件"，可使用 this 來存取
	// 目前兩個this剛好是一樣的物件
	this.name=name;
	this.hp=hp;
	this.fight=function(m){
		this.hp=this.hp-m.level;
		m.hp-=10;
		alert("Fight against "+m.name);
	};
	this.rest=function(){
		this.hp++;
	};
	this.report=function(){
		alert(this.name+" : "+this.hp)
	};
	// 2-2. 建構函式自動回傳新建立好的物件
}

function Monster(name,level){
	this.name=name;
	this.level=level;
}

/*
function createPlayerObject(name,hp){ // 建立玩家的物件程序
	var player=new Object();
	player.name=name; 
	player.hp=hp;
	player.fight=function(){
		this.hp=this.hp-2;
	};
	player.rest=function(){
		this.hp++;
	};
	player.report=function(){
		alert(this.name+" : "+this.hp)
	};
	return player; // 讓區域變數可以在外面使用，很重要!!
}
*/
