function max(numbers){
// your code here, for-loop method preferred
	let max = numbers[0];
	for( let i =0; i < numbers.length; i++ ){
		if(max < numbers[i+1]){
			max = numbers[i+1];
		}
	}
	console.log(max);
}
max([1, 2, 4, 5]); // result to 5
max([5, 2, 7, 1, 6]); // result to 7