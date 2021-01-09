const catalog = {
    
    init(){
        this.render_catalog();
        this.addToBasket();
        
    },
    catalogId: document.getElementById('catalog'),
    goods: [
        {id: 123, name: 'ball', quant: 2, price: 100},
        {id: 234, name: 'doll', quant: 4, price: 500},
        {id: 345, name: 'bear', quant: 1, price: 200},
    ],
    //рендер каталога
    render_catalog(){
        for (i=0; i<catalog.goods.length; i++) {
            const div1 = document.createElement('div1');
            this.catalogId.appendChild(div1);
            div1.innerHTML='Название ' + this.goods[i].name +' ';
            
            const div2 = document.createElement('div2');
            this.catalogId.appendChild(div2);
            div2.innerHTML='Количество ' + this.goods[i].quant +' ';

            const div3 = document.createElement('div3');
            this.catalogId.appendChild(div3);
            div3.innerHTML='Цена ' + this.goods[i].price +' ';

            const button = document.createElement('button');
            this.catalogId.appendChild(button);
            button.innerHTML='купить';
            button.id=this.goods[i].id;
            button.style.background = 'red';
            const br = document.createElement('br');
            this.catalogId.appendChild(br);
            br.innerHTML= '';
        }
    },

  
     //Метод добавления в корзину
    addToBasket() {
        for (i=0; i<catalog.goods.length; i++) {
        const id = this.goods[i].id;
        var el = document.getElementById(id);
        el.addEventListener("click", function find() {
        this.catalog.find_element(id);
        });
        
        }
    },
    //Метод поиска элементов
    find_element(id) {
        for (i=0; i<catalog.goods.length; i++) { 
            alert(id);
        if (id===this.goods[i].id) {
            goods_basket.push(this.goods[i]);
            alert('fgg');}
            else alert('ЭЛЕМЕНТ НЕ НАЙДЕН');
    }
    },
    }
    

const basket = {
    basketId: document.getElementById('basket'),
    goods_basket: [
        {id: 1234,name: 'ball', quant: 2, price: 100},
    ],
    
//Подсчет стоимости товаров
sum_goods() {
sum=0;
for (i=0; i<basket.goods_basket.length; i++) {
    sum+=basket.goods_basket[i].quant*basket.goods_basket[i].price;
}
return sum;
},
//Подсчет количества товаров
number_goods() {
    number=0;
    for (i=0; i<basket.goods_basket.length; i++) {
        number+=basket.goods_basket[i].quant;
    }
    return number;
    },
//Вывод на экран
show_goods(){ if ( this.sum_goods()===0) {
    const div = document.createElement('div');
     this.basketId.appendChild(div);
     div.innerHTML='Корзина пуста';
}
else {
    const div = document.createElement('div');
    this.basketId.appendChild(div);
    div.innerHTML='В корзине: ' + this.number_goods() + ' товаров на сумму ' + this.sum_goods() +  ' рублей'}
},
//Рендер корзины
render_basket(){
    
    basketId: document.getElementById('basket');
    for (i=0; i<basket.goods_basket.length; i++) {
        const div4 = document.createElement('div4');
        this.basketId.appendChild(div4);
        div4.innerHTML='Название ' + this.goods_basket[i].name +' ';
        
        const div5 = document.createElement('div5');
        this.basketId.appendChild(div5);
        div5.innerHTML='Количество ' + this.goods_basket[i].quant +' ';

        const div6 = document.createElement('div6');
        this.basketId.appendChild(div6);
        div6.innerHTML='Цена ' + this.goods_basket[i].price +' ';
        
        const br = document.createElement('br');
        this.basketId.appendChild(br);
        br.innerHTML= '';
    }
}
}
catalog.init();
basket.show_goods();
basket.render_basket();
