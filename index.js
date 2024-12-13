

function calculateAge() {
var day = parseInt(document.getElementById('day').value);
var month = parseInt(document.getElementById('month').value) - 1; 
var year = parseInt(document.getElementById('year').value);

const birthDate = new Date(year, month, day);
const today = new Date()

let ageYears = today.getFullYear() - birthDate.getFullYear();
let ageMonths = today.getMonth() - birthDate.getMonth();
let ageDays = today.getDate() - birthDate.getDate();

if (ageDays < 0) {
  ageMonths--;
  ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); 
}

if (ageMonths < 0) {
  ageYears--;
  ageMonths += 12;
}


  document.getElementById('years').innerHTML = `<p>${ageYears} years</p>`;
  document.getElementById('months').innerHTML = `<p>${ageMonths} months</p>`;
  document.getElementById('days').innerHTML = `<p>${ageDays} days</p>`;


}
