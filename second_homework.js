//1 
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2   префиксная форма
d = b++; alert(d);           // 1   постфиксная форма
c = (2+ ++a); alert(c);      // 5   значение a=2 на предыдущем шаге на этом а=3
d = (2+ b++); alert(d);      // 4   значение b=2 на предыдущем шаге на этом b=3, но т.к. форма постфиксная сначала происходит возращение значения,  а затем инкрементирование 
alert(a);                    // 3   объяснено выше
alert(b);                    // 3   объяснено выше
//2
var a = 2;
var x = 1 + (a *= 2);       //  x=5
//3
var z=prompt('введите первое число');
z=Number(z);
var v=prompt('введите второе число');
v=Number(v);
if (z>=0 && v>=0) alert(z-v);
else if (z<0 && v<0) alert(z*v);
else alert(z+v);
//4
var n=prompt('введите число от 0 до 15');
n=Number(n);
switch (n){
    case 0: alert(0);
    case 1: alert(1);
    case 2: alert(2);
    case 3: alert(3);
    case 4: alert(4);
    case 5: alert(5);
    case 6: alert(6);
    case 7: alert(7);
    case 8: alert(8);
    case 9: alert(9);
    case 10: alert(10);
    case 11: alert(11);
    case 12: alert(12);
    case 13: alert(13);
    case 14: alert(14);
    case 15: alert(15); break;
    default: alert('не определен');
}
//5
function sum(r,t) {
    return r+t;
}
function sub(r,t){
    return r-t;
}
function mult(r,t){
    return r*t;
}
function divis(r,t){
    return r/t;
}
//6
function mathOperation(r,t,act){
    switch (act){
        case sum: return sum(r,t);
        case sub: return sub(r,t);
        case mult: return mult(r,t);
        case divis: return divis(r,t);
    }
}
alert(mathOperation(5,6,divis));
//7
//0 - число
//null - отсутствие значения при поиске в массиве к примеру
//8
function power(val,pow){
    if (pow==1) {return val;}
    else {return val*power(val,pow-1);}
}

alert(power(2,10));