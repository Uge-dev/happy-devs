

   function myResult(){
    for(let dest = 0; dest < 100;  dest++){
       
        if (dest % 3 === 0 && dest % 5  === 0) {
           document.write("FizzBuz");  
        }else if (dest % 3 === 0) {
            document.write("Fizz"); 
        }else if (dest % 5 === 0) {
            document.write("Buzz"); 
            }else{
                document.write(dest);
        }
    }
   }
    myResult();
    


