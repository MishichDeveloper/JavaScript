/*java script*/
var money = +prompt("Ваш бюджет?");
var name = prompt("Название вашего магазина?");
var mainList; 
mainList = {
	bjudget: money,
	shopeName: name,
	shopGoods: [],
	employers: {},
	open: false
}
for(let i = 0;i < 5;i++){
var a = prompt("Какой тип товаров будем продавать?");
   if(typeof(a) === 'string' && typeof(a) !== null && a != '' && a.length < 50){
	   console.log('Все верно!');
	   mainList.shopGoods[i] = a;
   }else{
	   console.log('не верно!');
   }
}
/*
var i = 0;
     do{
	    var a = prompt("Какой тип товаров будем продавать?");
	    if(typeof(a) === 'string' && typeof(a) !== null && a != '' && a.length < 50){
		   console.log('Все верно!');
		   mainList.shopGoods[i] = a;
		}
		else{
			console.log('не верно!');
		}
	   i++;
     }while(i < 5);
*/
/*
var i = 0;
 while(i < 5){
	var a = prompt("Какой тип товаров будем продавать?"); 
	if(typeof(a) === 'string' && typeof(a) !== null && a != '' && a.length < 50){
		   console.log('Все верно!');
		   mainList.shopGoods[i] = a;
		}
		else{
			console.log('не верно!');
		}
	   i++;
 }
*/
var result = mainList.shopGoods;
console.log(result);
console.log(mainList.bjudget / 30);
/*next*/