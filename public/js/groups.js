const groupsItemContainer = document.getElementById('group-item-container');
const newGroupForm = document.getElementById('new-group-form');
const newGroupNameInput = document.getElementById('new-group-name');

groupsItemContainer.innerText = 'You are in no groups at this moment.';

populateGroups();

newGroupForm.onsubmit = (event) => {
  event.preventDefault();
  fetchNewGroup(newGroupNameInput.value);
  populateGroups();
}

function generateGroupItem(id, name) {
  const groupItemElement = document.createElement('div');
  const groupIdElement = document.createElement('div');
  const groupNameElement = document.createElement('div');

  groupItemElement.className = 'group-item';
  groupIdElement.className = 'group-id';
  groupNameElement.className = 'group-name';

  groupIdElement.innerText = id;
  groupNameElement.innerText = name;

  groupItemElement.onclick = () => {
    localStorage.setItem('selectedGroup', id);
    window.location.href = 'http://localhost:3001/bills/';
  }

  groupItemElement.appendChild(groupIdElement);
  groupItemElement.appendChild(groupNameElement);
  groupsItemContainer.appendChild(groupItemElement);
}

async function populateGroups() {
  await fetchGroupsData()
    .then(data => {
      if (data.length > 0) {
        groupsItemContainer.innerText = "";
        data.forEach(item => generateGroupItem(item._id, item.groupName));
      }
    });
}

async function fetchGroupsData() {
  return await postCheckToken().then(async (data) => {
    const response = await fetch('http://localhost:3001/groups/' + data.tokenData._id, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({token: token})
    });
    return response.json();
  });
}

async function fetchNewGroup(groupName) {
  const body = {
    token: token,
    groupName: groupName
  }
  const response = await fetch('http://localhost:3001/groups/', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  return response.json();
}
