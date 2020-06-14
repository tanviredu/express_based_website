console.log("project started");


function hi(){
	return "hello world";
}



function hello(callback){
	return callback();
}

console.log(hello(hi));