const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  console.log(height)

  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
console.log(results)
  if (height === '' || height <= 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // toFixed is used to adjust a decimal value
    //show the result
    if(bmi < 18.6){
        results.innerHTML = `<span>${bmi}</span> <span>It's under Weight</span>`;
        
    }
    else if(bmi >= 18.6 && bmi <= 24.9){
        results.innerHTML = `<span>${bmi}</span> <span>It's Normal Range</span>`;
    }
   else if(bmi > 24.9){
        results.innerHTML = `<span>${bmi}</span> <span>It's OverWeight</span>`;
        
    }
  }
});

