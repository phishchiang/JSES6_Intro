
// 建構式函式
function Line(x1,y1,x2,y2){ // 建立玩家的物件程序
	// 2-1. 建構函式自動產生"空白物件"，可使用 this 來存取
	// 目前兩個this剛好是一樣的物件
	this.x1=x1; this.y1=y1;
	this.x2=x2; this.y2=y2;

	this.m=(y2-y1)/(x2-x1);
	// 2-2. 建構函式自動回傳新建立好的物件
}


/*

// 一般的函式
function createLine(x1,y1,x2,y2){
	var line=new Object();
	line.x1=x1; line.y1=y1;
	line.x2=x2; line.y2=y2;
	line.m=(y2-y1)/(x2-x1);
	return line;
}

*/
