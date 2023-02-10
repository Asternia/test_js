function checkStorage(available, ordered) {
  let message;
  // Change code below this line
if (available >= ordered) {
  const message = "Order is processed, our manager will contact you.";
} else {
  const message = "Not enough goods in stock!";
}
checkStorage(100, 50)
  // Change code above this line
  return message;
}

