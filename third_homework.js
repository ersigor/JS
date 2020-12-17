//1
x=0;

while (x<=99) {
    ++x;
    l=1;
    koldel=0;
    while  (l<=x) {
        
        if (x%l===0){
            koldel++;
        }
        l++;
    }
    if (koldel<=2) {
    alert(x)}
}
//2

const thing = [
    ['thing1',3, 100],
    ['thing2',2, 200],
    ['thing3',4, 300],
];
sum=0;
function countBasketPrice() {
    for (z=0; z<thing.length; z++){
        sum+=thing[z][1] * thing[z][2];
    }
    return sum;
}
alert(countBasketPrice());
//4
var count = 0;
for (;count <= 9;) 
    console.log(count++);
//5
z='x';
const arr=[20];
for (a=0;a<=20;a++) {
    arr[a]=z;
    z=z+'x';
    console.log(arr[a]);
}
