
const productNames = [
  'Mace', 'Nutmeg', 'Cloves', 'Black Pepper', 'Turmeric', 'Cardamom', 'Cinnamon', 'Dried ginger', 'Vanilla', 
  'Cumin', 'Coffee', 'Fenugreek', 'Dried areca-nut', 'Star anise', 'Garcinia', 'Big Cardamon', 'Thyme', 'Basil', 
  'White pepper', 'Saffron'
];

document.addEventListener('DOMContentLoaded', () => {
  const priceTableBody = document.querySelector('#price-table tbody');
  let storedData = JSON.parse(localStorage.getItem('priceData')) || [];

  for (let i = 0; i < productNames.length; i++) {
    const row = document.createElement('tr');

    const productCell = document.createElement('td');
    productCell.textContent = productNames[i];
    row.appendChild(productCell);

    const priceCell = document.createElement('td');
    const priceInput = document.createElement('input');
    priceInput.type = 'number';
    priceInput.step = '0.01';
    priceInput.value = storedData[i]?.price || '';  
    priceCell.appendChild(priceInput);
    row.appendChild(priceCell);

    const quantityCell = document.createElement('td');
    const quantityInput = document.createElement('input');
    quantityInput.type = 'number';
    quantityInput.value = storedData[i]?.quantity || '';  
    quantityCell.appendChild(quantityInput);
    row.appendChild(quantityCell);

    const qualityCell = document.createElement('td');
    const qualityInput = document.createElement('input');
    qualityInput.type = 'text';
    qualityInput.value = storedData[i]?.quality || '';  
    qualityCell.appendChild(qualityInput);
    row.appendChild(qualityCell);

    priceTableBody.appendChild(row);
  }

  document.getElementById('price-form').addEventListener('submit', (event) => {
    event.preventDefault();
    let newData = [];

    priceTableBody.querySelectorAll('tr').forEach((row, index) => {
      const price = row.querySelector('input[type="number"]').value;
      const quantity = row.querySelectorAll('input')[1].value;
      const quality = row.querySelector('input[type="text"]').value;
      newData.push({ product: productNames[index], price, quantity,quality });
    });

    console.log(newData);  
    localStorage.setItem('priceData', JSON.stringify(newData));
    alert('Prices updated!');
  });
});
let calcScrollValue = () =>{
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.
  scrollHeight - document.documentElement.clientHeight;
  let scrollvalue = Math.round((pos * 100)/ calcHeight);
  /* console.log(scrollvalue);*/
  if(pos>100){
  scrollProgress.style.display = "grid";
  }
  else{
  scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click",()=>{
  document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = 'conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)';
  };
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;