/*1. In the following shopping cart add, remove, and edit items
    => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
      add 'Meat' in the beginning of your shopping cart if it has not been already addeJ
      add Sugar at the end of you shopping cart if it has not been already addeJ
      remove 'Honey' if you are allergic to hone
      modify Tea to 'Green Tea'*/
let shoppingCart = ['Milk','Coffee','Tea','Honey'];
if(!shoppingCart.includes('Meat')){
    shoppingCart.unshift('Meat');
}
if(!shoppingCart.includes('Sugar')){
    shoppingCart.push('Sugar');
}
const allergicToHoney = true;
if(allergicToHoney){
    const honeyIndex = shoppingCart.indexOf('honey');
    if(honeyIndex!==-1){
        shoppingCart.splice(honeyIndex,1);
    }
}
const teaIndex = shoppingCart.indexOf('Tea');
if(teaIndex!==-1){
    shoppingCart[teaIndex] = 'Green Tea';
}
console.log(shoppingCart);