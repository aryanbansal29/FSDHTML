// console.log("hello world");

// const a=12;
// if(a>10){
//     let b=20;
//     a=40;
//     console.log("a inside:"+a);
// }
// console.log("a outside:"+b);
// console.log("hi,inside index.js")
// function fun(a,b){
//     console.log("hiiii");
//     return a+b;
// }
// const result=fun(23,12);
// console.log(result);

const button=document.getElementById("btn");
console.log(button)
function selectLanguage(language)
{
    console.log("hi,inside selectLanguage");
    let data;
    if(language=='c'){
        function cCompiler()
        {
        return " C Compiler";
        }
    data=cCompiler();
    }
    if(language=="java"){
        function javaCompiler()
        {
        return "java Compiler";
        }
    data=javaCompiler();
    }
    return data;
}
// console.log(selectLanguage("c"))