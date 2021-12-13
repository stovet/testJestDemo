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
        expect(whatToWear("casual", 53)).toEqual(`Since it is 53 degrees and you are going to a casual event, you should wear something comfy and a coat`);
    })
    test("when to wear a polo and a coat", function(){
        expect(whatToWear("semi-formal", 53)).toEqual(`Since it is 53 degrees and you are going to a semi-formal event, you should wear a polo and a coat`);
    })
    test("when to wear 'a suit' and a coat", function(){
        expect(whatToWear("formal", 53)).toEqual(`Since it is 53 degrees and you are going to a formal event, you should wear a suit and a coat`);
    });
    test("when to wear something comfy and a jacket", function(){
        expect(whatToWear("casual", 55)).toEqual(`Since it is 55 degrees and you are going to a casual event, you should wear something comfy and a jacket`);
    })
    test("when to wear a polo and a jacket", function(){
        expect(whatToWear("semi-formal", 68)).toEqual(`Since it is 68 degrees and you are going to a semi-formal event, you should wear a polo and a jacket`);
    })
    test("when to wear only'a suit' and a jacket", function(){
        expect(whatToWear("formal", 60)).toEqual("Since it is 60 degrees and you are going to a formal event, you should wear a suit and a jacket");
    });
    test("when to wear something comfy and 'no jacket'", function(){
        expect(whatToWear("casual", 71)).toEqual(`Since it is 71 degrees and you are going to a casual event, you should wear something comfy and no jacket`);
    })
    test("when to wear a polo and 'no jacket'", function(){
        expect(whatToWear("semi-formal", 79)).toEqual(`Since it is 79 degrees and you are going to a semi-formal event, you should wear a polo and no jacket`);
    })
    test("when to wear 'a suit' and 'no jacket'", function(){
        expect(whatToWear("formal", 100)).toEqual(`Since it is 100 degrees and you are going to a formal event, you should wear a suit and no jacket`);
    });
})
