module.exports = function getZerosCount(number, base) {
  
  let max = 0
  let count = 0;
	let nullCount;
	// let reBase = base;
	// let reNumber;
  
	for (let i = 2; i <= base; i++){ 
		if (base % i == 0){
  
			maxPower = 0;
			while (base % i == 0){ 
				maxPower++; 
				base = Math.floor(base/i); 
			}
  
			count = 0;
			// reNumber = number;
			while (number/i > 0){
				count += Math.floor(number/i);
				number = Math.floor(number/i);
			}
		
			if(nullCount > count/max){ 
		  		nullCount=count/max;
			} 
		}
	}
	return Math.floor(nullCount); 
}