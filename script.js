function Convert(){
    const valueInDollar = document.querySelector("input");
    let filteredValue;
    
    /* type of coins */
    let quarter = 0;
    let dime = 0;
    let nickel = 0;
    let penny = 0;

    
    if(valueInDollar.value.indexOf(",") > -1){
        
        filteredValue = valueInDollar.value.replace(",", "");
        console.log("entrou no teste da virgula");
        
    }

    else{
        
        filteredValue = valueInDollar.value * 100;
        console.log(`entrou no teste de não ter a virgula: ${filteredValue}`);
        
    }
    
    if(filteredValue.value.indexOf(".") > -1){
    
        filteredValue = filteredValue.value.replace(".", "");
        console.log("entrou no teste do ponto");
    
    }


    while (filteredValue > 0){
        
        if (filteredValue >= 25){
            
            filteredValue -= 25;
            quarter += 1;
        }

        else if (filteredValue >= 10){
            filteredValue -= 10;
            dime += 1;
        }

        else if (filteredValue >= 5){
            filteredValue -= 05;
            nickel += 1;
        }

        else if (filteredValue >= 0){
            filteredValue -= 01;
            penny += 1;
        }
    }
    

    document.querySelector("td.quarter").innerHTML = quarter;
    document.querySelector("td.dime").innerHTML = dime;
    document.querySelector("td.nickel").innerHTML = nickel;
    document.querySelector("td.penny").innerHTML = penny;
    document.querySelector("td.total").innerHTML = quarter + dime + nickel + penny;

    valueInDollar.value = '';
}