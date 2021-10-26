const token = localStorage.getItem('token');
const newBillForm = document.getElementById('new-bill-form');
const newAmountElement = document.getElementById('new-amount');
const newDescriptionElement = document.getElementById('new-description');
const billRowContainerElement = document.getElementById('bill-row-container');
const selectedGroup = localStorage.getItem('selectedGroup');

billRowContainerElement.innerText = "Currently, no bills here.";

fetchBillsData().then(data => {
  if (data.length > 0) {
    billRowContainerElement.innerText = "";
    data.forEach(bill => {
      generateBillRows(bill._id, bill.description, bill.amount)
    });
  }
});

newBillForm.onsubmit = async (event) => {
  event.preventDefault();
  if (newAmountElement.value <= 0 || newDescriptionElement.value.length < 3) {
    alert("Bad input.");
    return;
  }
  await fetchNewBill().then(bill => {
    generateBillRows(bill._id, bill.description, bill.amount);
  });

}

function generateBillRows(id, desc, amount) {
  const billRowElement = document.createElement('div');
  const idElement = document.createElement('div');
  const descriptionElement = document.createElement('div');
  const amountElement = document.createElement('div');

  billRowElement.className = 'group-bills-container__row';
  idElement.className = 'smaller';
  amountElement.className = 'money';

  idElement.innerText = id;
  descriptionElement.innerText = desc;
  amountElement.innerText = amount;

  billRowElement.appendChild(idElement);
  billRowElement.appendChild(descriptionElement);
  billRowElement.appendChild(amountElement);
  billRowContainerElement.appendChild(billRowElement);
}

async function fetchBillsData() {
  const response = await fetch('http://localhost:3001/bills/' + selectedGroup);
  return response.json();
}

async function fetchNewBill() {
  const body = {
    description: newDescriptionElement.value,
    amount: newAmountElement.value,
    groupId: selectedGroup
  }
  const response = await fetch('http://localhost:3001/bills/', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  return response.json();
}