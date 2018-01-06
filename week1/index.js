var rect=require('./rect.js');
function square(a,b){
	console.log(`The square of $a is equal to `+a*b);
	rect(a,b,(rect)=>{
			console.log("The square of the erea is equal to ",rect.area());
	});
	console.log("I have finished");
}

square(11,12);