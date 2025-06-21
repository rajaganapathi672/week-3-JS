function test(){
    var a="3";
    var b="6";
    var tem=a;
    a=b;
    b=tem;
    console.log("a is"+a);
    console.log("b is"+b);
}
console.log(test());