
function whatToWear(eventType, temperature){
    if(temperature < 54){
        if(eventType === "casual"){
            console.log(`Since it is ${temperature} degrees and you are going to a ${eventType} event, you should wear something comfy and a coat`);
            return "something comfy a coat";
        } else if (eventType === "semi-formal"){
            console.log(`Since it is ${temperature} degrees and you are going to a ${eventType} event, you should wear a polo and a coat`);
            return "polo a coat";
        } else if (eventType === "formal"){
            console.log(`Since it is ${temperature} degrees and you are going to a ${eventType} event, you should wear a suit and a coat`);
            return "suit a coat";
        }
    }
    if(temperature > 53 && temperature < 70){
        if(eventType === "casual"){
            console.log(`Since it is ${temperature} degrees and you are going to a ${eventType} event, you should wear something comfy and a jacket`);
            return "something comfy a jacket";
        } else if (eventType === "semi-formal"){
            console.log(`Since it is ${temperature} degrees and you are going to a ${eventType} event, you should wear a polo and a jacket`);
            return "polo a jacket";
        } else if (eventType === "formal"){
            console.log(`Since it is ${temperature} degrees and you are going to a ${eventType} event, you should wear a suit and a jacket`);
            return "suit a jacket";
        }
    }
    if(temperature > 70){
        if(eventType === "casual"){
            console.log(`Since it is ${temperature} degrees and you are going to a ${eventType} event, you should wear something comfy and no jacket`);
            return "something comfy no jacket";
        } else if (eventType === "semi-formal"){
            console.log(`Since it is ${temperature} degrees and you are going to a ${eventType} event, you should wear a polo and no jacket`);
            return "polo no jacket";
        } else if (eventType === "formal"){
            console.log(`Since it is ${temperature} degrees and you are going to a ${eventType} event, you should wear a suit and no jacket`);
            return "suit no jacket";
        }
    }
}


module.exports = whatToWear;