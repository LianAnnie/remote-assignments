function calculate(args){
	let result;
	if(args.op==="+"){
		result=args.n1+args.n2;
	}else if(args.op==="-"){
		result=args.n1-args.n2;
	}else{
		result="Not supported";
	}
	return result;
}
// Try to call calculate function correctly
/*
For example, if we have an add function like this:
function add(args){
return args.n1+args.n2;
}
We can call it by passing an object created by JSON literal:
add({n1:3, n2:4}); // your first way
You should apply constructor or class as another way to create a proper object.
add(用類別或建構式產生的物件); // your another way
*/

//First way
const args1 = {n1:1,n2:2,op:'+'}
console.log(calculate(args1)); 

//Second way
class Arges {
	constructor(n1,n2,op){
		this.n1 = Number(n1);
		this.n2 = Number(n2);
		this.op = op;
	}
}
const args2 = new Arges(5,1,'-');
console.log(calculate(args2));
