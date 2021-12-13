
function whatToWear(eventType, temperature){
    if(temperature < 54){
        if(eventType === "casual"){
            console.log(`Since it is ${temperature} degrees and you are going to a ${eventType} event, you should wear something comfy and a coat`);
            return `${eventType} ${temperature}`;
        } else if (eventType === "semi-formal"){
            console.log(`Since it is ${temperature} degrees and you are going to a ${eventType} event, you should wear a polo and a coat`);
            return `${eventType} ${temperature}`;
        } else if (eventType === "formal"){
            console.log(`Since it is ${temperature} degrees and you are going to a ${eventType} event, you should wear a suit and a coat`);
            return `${eventType} ${temperature}`;
        }
    }
    if(temperature > 53 && temperature < 70){
        if(eventType === "casual"){
            console.log(`Since it is ${temperature} degrees and you are going to a ${eventType} event, you should wear something comfy and a jacket`);
            return `${eventType} ${temperature}`;
        } else if (eventType === "semi-formal"){
            console.log(`Since it is ${temperature} degrees and you are going to a ${eventType} event, you should wear a polo and a jacket`);
            return `${eventType} ${temperature}`;
        } else if (eventType === "formal"){
            console.log(`Since it is ${temperature} degrees and you are going to a ${eventType} event, you should wear a suit and a jacket`);
            return `${eventType} ${temperature}`;
        }
    }
    if(temperature > 70){
        if(eventType === "casual"){
            console.log(`Since it is ${temperature} degrees and you are going to a ${eventType} event, you should wear something comfy and no jacket`);
            return `${eventType} ${temperature}`;
        } else if (eventType === "semi-formal"){
            console.log(`Since it is ${temperature} degrees and you are going to a ${eventType} event, you should wear a polo and no jacket`);
            return `${eventType} ${temperature}`;
        } else if (eventType === "formal"){
            console.log(`Since it is ${temperature} degrees and you are going to a ${eventType} event, you should wear a suit and no jacket`);
            return `${eventType} ${temperature}`;
        }
    }
}


module.exports = whatToWear;