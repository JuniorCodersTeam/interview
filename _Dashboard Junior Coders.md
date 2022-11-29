# Meetings
- [[Interview 07-11-22]]
# Ideas
- create a function, that checks if the number is square of number 2
	```javascript
	function powerOfTwo(num) {  
    if (num === 2) return true;  
    if (num % 2 === 0) {  
        return powerOfTwo(num / 2)  
    }    return false;  
	}  
	```
	```javascript
	function powerOfTwo2(num) {  
    if (num < 1) {  
        return false;  
    }  
    return (num & (num - 1)) === 0;  
	}
	```
- 




- [[Interview 15-11-22]]

---
tags: #juniorCoders 
