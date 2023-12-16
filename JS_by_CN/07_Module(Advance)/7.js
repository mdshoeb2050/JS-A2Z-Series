/**********************\
 * More on Closures
\**********************/

// definition- closure is a concept where inner fun preserves scope chains  of outer fun.

var i=10;
function outer() {
    var j=20;      
    console.log(i,j);  // here for  'i' - reference to outer context

    //you can use fun exp and return it 
    var inner = function (){
        var k=30;
        console.log(j,k); // here for 'j' - reference to outer context
    }
    return inner;
}
var inner = outer();
inner();
`Jab jab aapko aisa code structure dekhne ko mile samajh lena closure concept is working behind the scene`

`
Agar sahi me dekha jaye to varible 'j' delete ho jana chahiye jaise hi outer fun ka call finish hota h, 
Lekin due to Closure concept ab bhi 'j' exist karega memory so that outer fun ke andar jitne bhi inner fun h usko use kar paye kyuki unke pass outer fun ke scope ka  Reference hai.
Isiliye jab inner fun call karte h to global context me outer fun call finish hone par uske varible exist karenge so that inner fun usko access kar paye . 
`