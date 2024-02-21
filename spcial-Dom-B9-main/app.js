// const price = document.getElementById("budget").innerText;
// const covertThePrice = parseInt(price);

// const cart = document.getElementById("cart").innerText;
// const covertTheCart = parseInt(cart);

// const left = document.getElementById("left").innerText;
// const covertTheLeft = parseInt(left);
// console.log(covertThePrice);
// console.log(covertTheCart);
// console.log(covertTheLeft);

function getConvertedValue(id) {
  const price = document.getElementById(id).innerText;
  const covertThePrice = parseInt(price);
  return price;
}

const result =getConvertedValue("left");
console.log(result)
