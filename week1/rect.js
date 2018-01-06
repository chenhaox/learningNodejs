module.exports=(x,y,callback)=>{
	setTimeout(()=>{callback({
		area: ()=> (x*y)
	})},2000);

}