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
        expect(whatToWear("casual", 53)).toEqual("casual " + 53);
    })
    test("when to wear a polo and a coat", function(){
        expect(whatToWear("semi-formal", 53)).toEqual("semi-formal " + 53);
    })
    test("when to wear 'a suit' and a coat", function(){
        expect(whatToWear("formal", 52)).toEqual("formal " + 52);
    });
    test("when to wear something comfy and a jacket", function(){
        expect(whatToWear("casual", 55)).toEqual("casual " + 55);
    })
    test("when to wear a polo and a jacket", function(){
        expect(whatToWear("semi-formal", 68)).toEqual("semi-formal " + 68);
    })
    test("when to wear only'a suit' and a jacket", function(){
        expect(whatToWear("formal", 60)).toEqual("formal " + 60);
    });
    test("when to wear something comfy and 'no jacket'", function(){
        expect(whatToWear("casual", 71)).toEqual("casual " + 71);
    })
    test("when to wear a polo and 'no jacket'", function(){
        expect(whatToWear("semi-formal", 79)).toEqual("semi-formal " + 79);
    })
    test("when to wear 'a suit' and 'no jacket'", function(){
        expect(whatToWear("formal", 100)).toEqual("formal " + 100);
    });
})
