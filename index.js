let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-El");
let costEl = document.getElementById("cost-el");
let count = 0;
let totalCost = 0; 
const precioTicket = 2; 

function increment() {
    count += 1;
    countEl.textContent = count;
    costEl.textContent = "Costo total: " + (totalCost + (count * precioTicket)) + " €"; 
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr; 
    totalCost += count * precioTicket; 
    countEl.textContent = 0; 
    count = 0;
    costEl.textContent = "Costo total: " + totalCost + " €"; 
}

function pagar() {
    let codigoRandom = Math.round(100000+Math.random()*80000);
    alert('Total a pagar: ' + totalCost + ' €. Su código de confirmación es: ' + codigoRandom + '\n' + 
    'Puede acercarse a la estación de metro más cercana y pagar por medio de su código de confirmación');
    
    
    count = 0;
    totalCost = 0;
    countEl.textContent = count;
    saveEl.textContent = "Personas registradas: ";
    costEl.textContent = "Costo total: 0 €";
}