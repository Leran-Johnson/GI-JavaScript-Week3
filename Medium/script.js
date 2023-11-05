function sharePizza(x, y) {
    // Calculate the number of slices each person gets
    let slicesPerPerson = x / y;
    //takes the result of slicesPerPerson and cuts off anything after two decimal places
    let fancySlices = slicesPerPerson.toFixed(2);
    // Return message
    let message = `Each person gets ${fancySlices} slices of pizza; from our ${x} slice pizza`;
    return message;
  }
  
  console.log(sharePizza(100, 75));
  