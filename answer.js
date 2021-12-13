function answer(input) {
    if(input === "boredom"){
        return "code";
    } else if(input === "stress"){
        return "rest";
    } else{
        return 42;
    }
}

module.exports = answer;