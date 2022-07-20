function Convert(){
    const valueInDollar = document.querySelector("input");
    let filteredValue = parseInt(valueInDollar.value.replace(/[^0-9]/g, "") * 100);
    
    /* type of coins */
    let quarter = 0;
    let dime = 0;
    let nickel = 0;
    let penny = 0;

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