function outer(){
    var a=5;

    return function inner(){
        a++;
        console.log(a);
    }
}
const fun = outer();
fun();
fun();
fun();

//array methods and a funny meme (HW)
let a = [1,2,4];
let i;
for (i in a){

}