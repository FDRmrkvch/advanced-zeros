module.exports = function getZerosCount(number, base) {
  
  let max = 0
  let count = 0;
	let nullCount = Infinity;
	let reBase = base;
	let reNumber;
  
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
				count += Math.floor(reNumber/i);
				reNumber = Math.floor(reNumber/i);
			}
		
			} 
		}
	}
	return Math.floor(nullCount); 
}