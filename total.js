const products = [
    {name: 'shampoo', price: 100},
    {name: 'chiruni', price: 200},
    {name: 'shirt', price: 900},
    {name: 'pant', price: 1300},
]

function getShopingTotal(products){
  let total = 0;
    for(const product of products){
        total = total + product.price;
    }
    return total;

}

const total = getShopingTotal(products);
console.log('total cost Is:', total);