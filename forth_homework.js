//1
var a = prompt('введите число от 0 до 999');
    a =Number(a);
function prov(a) {
    if (a<0) {return console.log('число не в диапазоне')}
    else if(a>999){ return num_to_obj(0)}
    else return num_to_obj(a);
}
function num_to_obj(a) {
    var numb = {
        sot: (a-a%100)/100,
        des: (a%100-a%10)/10,
        ed: a%10
    }
     return console.log('сотни:'+ numb.sot+ ' десятки:'+ numb.des+' единицы:'+ numb.ed);
}
prov(a);
//2

var thing1 = {
    price: 100,
    quant: 2,
}
var thing2 = {
    price: 200,
    quant: 3,
}
sum = thing1.price*thing1.quant;
alert(sum);


