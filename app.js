function canVote(){

    if (age.value >= 18){
        // yes 
        result.textContent = "You can vote"
    }else{
        //no
         result.textContent = "You can't vote"
    }

}

function areaRectangle(){


   let area = parseFloat(lengthRectangle.value) * parseFloat(widthRectangle.value);

   //console.log(`The area is ${area}`)
    result.textContent = `The area is ${area}`
}

function clothing(){

    if(tempC.value >= 25){
        //yes
        
        result.textContent= "Use light Clothing";
    }else{
        //no
        if (tempC.value < 10){
            //yes
          
           result.textContent= "Use warm Clothing";
        }else{
            //no
            
            result.textContent= "Use moderate Clothing";
        }

    }

}