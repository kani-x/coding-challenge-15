// Task 1: Base Structure Setup
const riskDashboard = document.getElementById('riskDashboard');
console.log('Risk Dashboard Loaded');

// Task 2: Adding Risk Items
function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement('div');
    riskCard.className = 'riskCard';
    riskCard.innerHTML = `
        <h3>${riskName}</h3>
        <p><strong>Level:</strong> ${riskLevel}</p>
        <p><strong>Department:</strong> ${department}</p>
    `;
    riskDashboard.appendChild(riskCard);
}

// Test Cases
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");

function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement('div');
    riskCard.className = 'riskCard';
    riskCard.innerHTML = `
        <h3>${riskName}</h3>
        <p><strong>Level:</strong> ${riskLevel}</p>
        <p><strong>Department:</strong> ${department}</p>
        <button class="resolveBtn">Resolve</button>
    `;
    riskCard.querySelector('.resolveBtn').addEventListener('click', () => {
        riskDashboard.removeChild(riskCard);
    });
    riskDashboard.appendChild(riskCard);
}