const basket = {
    basketId: document.getElementById('basket'),
    goods: [
        {name: 'ball', quant: 2, price: 100},
        {name: 'doll', quant: 4, price: 500},
        {name: 'bear', quant: 1, price: 200},
    ],

sum_goods() {
sum=0;
for (i=0; i<basket.goods.length; i++) {
    sum+=basket.goods[i].quant*basket.goods[i].price;
}
return sum;
},
number_goods() {
    number=0;
    for (i=0; i<basket.goods.length; i++) {
        number+=basket.goods[i].quant;
    }
    return number;
    },
show_goods(){ if ( this.sum_goods()===0) {
    const div = document.createElement('div');
     this.basketId.appendChild(div);
     div.innerHTML='Корзина пуста';
}
else {
    const div = document.createElement('div');
    this.basketId.appendChild(div);
    div.innerHTML='В корзине: ' + this.number_goods() + ' товаров на сумму ' + this.sum_goods() +  ' рублей'}
}
}
basket.show_goods();