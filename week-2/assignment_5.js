function twoSum(nums, target){
	msg ='no solution';
	for(let i=0; i<nums.length-1; i++){
		for(let j=i+1; j<nums.length; j++){
			if(nums[i]+nums[j]===target){
				msg =`[${i},${j}]`

				break;
			}
		}
	}
	console.log(msg);
}

twoSum([2, 7, 11, 15], 9);