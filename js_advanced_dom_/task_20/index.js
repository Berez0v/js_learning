let Input = document.querySelector('#nameInput');
let button = document.querySelector('#add');

function deleteRow() {
    this.parentNode.parentNode.removeChild(this.parentNode);
}


button.addEventListener('click', () => {
    if (!Input.value) {
        return 0;
    } else {
        let myTable = document.querySelector('#main');
        let tableRow = document.createElement('tr');
        let newName = document.createElement('td');
        let deleteButton = document.createElement('td');
        
        newName.innerText = Input.value;
        deleteButton.innerText = 'X';
        
        deleteButton.addEventListener('click', deleteRow);
        
        
        tableRow.appendChild(newName);
        tableRow.appendChild(deleteButton);
        myTable.appendChild(tableRow);
        
        Input.value = "";
    }
});