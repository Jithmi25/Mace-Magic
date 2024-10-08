
const scriptURL = "https://script.google.com/macros/s/AKfycby43UnPhiOrEWtpx6ZBPDpdeRXYNApzFXNKbb1hko4HYV2POHNVU4isg-cILNbGsiLvuA/exec";
const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
  e.preventDefault();
  
  fetch(scriptURL, { 
    method: 'post', 
    body: new FormData(form) 
  })
  .then(response => {
    alert("Thank you! Your form submitted successfully. Our team will contact you soon!");
  })
  .then(() => {
    window.location.reload();
  })
  .catch(error => console.error('Error!', error.message));
});

document.addEventListener('DOMContentLoaded', () => {
  const priceTableBody = document.querySelector('#user-price-table tbody');
  let storedData = JSON.parse(localStorage.getItem('priceData')) || [];

  console.log(storedData); 
  
  if (storedData.length === 0) {
    priceTableBody.innerHTML = '<tr><td colspan="3">No price data available</td></tr>';
  } else {
    for (let i = 0; i < storedData.length; i++) {
      const row = document.createElement('tr');

      const productCell = document.createElement('td');
      productCell.textContent = storedData[i]?.product || `Product ${i + 1}`;
      row.appendChild(productCell);

      const priceCell = document.createElement('td');
      priceCell.textContent = storedData[i]?.price || 'N/A';
      row.appendChild(priceCell);

      const quantityCell = document.createElement('td');
      quantityCell.textContent = storedData[i]?.quantity || 'N/A';
      row.appendChild(quantityCell);

      priceTableBody.appendChild(row);
    }
  }
});

/*function toggleContent(id) {
  var content = document.getElementById('content' + id);
  var allContents = document.querySelectorAll('.content');
  
  allContents.forEach(function(item) {
      item.style.display = 'none';
  });
  
  if (content.style.display === 'block') {
      content.style.display = 'none';
  } else {
      content.style.display = 'block';
  }
}*/
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