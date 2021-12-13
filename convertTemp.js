// (F -32) * 5/9 = C
// C * 9/5 + 32 = F
function convertTemp(temperature, unit){
    if(unit === "C"){
        return temperature * (9/5) + 32;
    }
    return (temperature-32)*(5/9);
}


module.exports = convertTemp;
