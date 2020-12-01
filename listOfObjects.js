// model
const model = {
    inputName: '',
    inputAge: '',
    people: [
        { name: 'Per', age: 17, },
        { name: 'Pål', age: 18, },
        { name: 'Espen', age: 19, },
    ],
}

// view
updateView();
function updateView() {
    document.getElementById('app').innerHTML = `

        <h2>Personer</h2>
        ${createPeopleListHtml()}

        <hr/>
        Navn: <br/><input oninput="model.inputName = this.value" type="text"  /><br/>
        Alder: <br/><input oninput="model.inputAge = this.value" type="text" /><br/>
        <button onclick="addPerson()">Legg til person</button>
    
    `;
}

function createPeopleListHtml() {
    let html = '';
    for (let i = 0; i < model.people.length; i++) {
        let person = model.people[i];
        html += `
            <li>
                ${person.name} (${person.age} år)
                <button onclick="deletePerson(${i})">x</button>
            </li>                        
            `;
    }
    return html;
}

// controller
function addPerson(){
    const newPerson = { 
        name: model.inputName, 
        age: model.inputAge 
    };
    model.people.push(newPerson);
    updateView();
}

function deletePerson(index){
    model.people.splice(index, 1);
    updateView();
}
