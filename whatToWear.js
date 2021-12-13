
function whatToWear(eventType, temperature){
    if(temperature < 54){
        if(eventType === "casual"){
            return `Since it is ${temperature} degrees and you are going to a ${eventType} event, you should wear something comfy and a coat`;
        } else if (eventType === "semi-formal"){
            return `Since it is ${temperature} degrees and you are going to a ${eventType} event, you should wear a polo and a coat`;
        } else if (eventType === "formal"){
            return `Since it is ${temperature} degrees and you are going to a ${eventType} event, you should wear a suit and a coat`;
        }
    }
    if(temperature > 53 && temperature < 70){
        if(eventType === "casual"){
            return `Since it is ${temperature} degrees and you are going to a ${eventType} event, you should wear something comfy and a jacket`;
        } else if (eventType === "semi-formal"){
            return `Since it is ${temperature} degrees and you are going to a ${eventType} event, you should wear a polo and a jacket`;
        } else if (eventType === "formal"){
            return `Since it is ${temperature} degrees and you are going to a ${eventType} event, you should wear a suit and a jacket`;
        }
    }
    if(temperature > 70){
        if(eventType === "casual"){
            return `Since it is ${temperature} degrees and you are going to a ${eventType} event, you should wear something comfy and no jacket`;
        } else if (eventType === "semi-formal"){
            return `Since it is ${temperature} degrees and you are going to a ${eventType} event, you should wear a polo and no jacket`;
        } else if (eventType === "formal"){
            return `Since it is ${temperature} degrees and you are going to a ${eventType} event, you should wear a suit and no jacket`;
        }
    }
}


module.exports = whatToWear;