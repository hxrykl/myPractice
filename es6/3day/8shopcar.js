//购物车
let shopCar = new Map();
let line = {
    productId:1,
    productName:"可口可乐",
    productPrice:2.5,
    number:3
}
function addShopcar(item){
    //根据item.productId判断shopcar是否具有该产品，如果有，更新数量，否则直接添加
    if(shopCar.has(item.productId)){
        shopCar.get(item.productId).number += item.number;
    }else{
    shopCar.set(item.productId,item);
    }
}

addShopcar(line);
//
addShopcar({productId:2,productName:"北京方便面",productPrice:1.0,number:2});
//
addShopcar({productId:2,productName:"北京方便面",productPrice:1.0,number:1});

console.log(shopCar);




