module.exports = function getZerosCount(number, base) {
  
let maxPower = 0
let count = 0;
let reBase = base;
let reNumber;
let nullCount = Infinity;
  
for (let i = 2; i <= base; i++){ 
	if (reBase % i == 0){
			maxPower = 0;
			  while (reBase % i == 0){ 
				  maxPower++; 
				  reBase = Math.floor(reBase/i); 
			  }
			count = 0;
			reNumber = number;
			  while (reNumber/i > 0){
				  count+=Math.floor(reNumber/i);
				  reNumber = Math.floor(reNumber/i);
			  }
		if(nullCount > count/maxPower){ 
        nullCount=count/maxPower;
			} 
		}
	}
return Math.floor(nullCount); 
}