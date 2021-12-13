const { createTestScheduler } = require("jest");
const whatToWear = require("./whatToWear")

describe("What to wear", function(){
    // test("when to wear 'something comfy'", function(){
    //     expect(whatToWear("casual")).toEqual("something comfy");
    // });
    // test("when to wear 'a polo'", function(){
    //     expect(whatToWear("semi-formal")).toEqual("a polo");
    // });
    // test("when to wear 'a suit'", function(){
    //     expect(whatToWear("formal")).toEqual("a suit");
    // });
    test("when to wear something comfy and a coat", function(){
        expect(whatToWear("casual", 53)).toEqual("something comfy a coat");
    })
    test("when to wear a polo and a coat", function(){
        expect(whatToWear("semi-formal", 53)).toEqual("polo a coat");
    })
    test("when to wear 'a suit' and a coat", function(){
        expect(whatToWear("formal", 52)).toEqual("suit a coat");
    });
    test("when to wear something comfy and a jacket", function(){
        expect(whatToWear("casual", 55)).toEqual("something comfy a jacket");
    })
    test("when to wear a polo and a jacket", function(){
        expect(whatToWear("semi-formal", 68)).toEqual("polo a jacket");
    })
    test("when to wear only'a suit' and a jacket", function(){
        expect(whatToWear("formal", 60)).toEqual("suit a jacket");
    });
    test("when to wear something comfy and 'no jacket'", function(){
        expect(whatToWear("casual", 71)).toEqual("something comfy no jacket");
    })
    test("when to wear a polo and 'no jacket'", function(){
        expect(whatToWear("semi-formal", 79)).toEqual("polo no jacket");
    })
    test("when to wear 'a suit' and 'no jacket'", function(){
        expect(whatToWear("formal", 100)).toEqual("suit no jacket");
    });
})
