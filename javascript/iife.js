//immediately invoked function expression-iife(used for immediate execution)

(function chai(){
    //named iife
    console.log(`DB Connected`);
})();
(()=>{
    console.log(`DB Connected`);
})();
((name)=>{
    console.log(`DB Connected`);
})("renu");

//execute code+call Stack
//js execution context->
//1. global execution
//function execution
//eval execution
