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

var basket = {
    goods: [
        {name: 'ball', quant: 2, price: 100},
        {name: 'doll', quant: 4, price: 500},
        {name: 'bear', quant: 1, price: 200},
    ]
}
sum=0;
for (i=0; i<basket.goods.length; i++) {
    sum+=basket.goods[i].quant*basket.goods[i].price;
}
console.log('Сумма товаров в корзине:'+ sum);



