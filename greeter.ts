class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

enum Color {Red, Green, Blue}
let colorSolid: string = Color[1];

function greeter(person : Person, happyStatus : boolean, age: number, hobbies : string[]) {
    let hobbiesList : string = "";

    for (var i = 0, j = hobbies.length; i < j; i++) {
        hobbiesList += `<li>${hobbies[i]}</li>`
    }

    return `<h1>Hello, ${person.firstName} ${person.lastName}</h1> 
    
    <p>I see that you are <strong>${happyStatus ? 'happy' : 'sad'}</strong> because you are going to have ${age + 1} years old on the next year...</p>
    
    <span style='border-bottom: 1px solid ${colorSolid}'>Tus intereses son</span>:
    <ul>
        ${hobbiesList}
    </ul>
    `;
}

let user = new Student("Hugo", "D.", "Ocampo");
let isHapppy: boolean = false;
let personAge: number = 37;
let hobbies: string[] = [
    'futbol',
    'videojuegos',
    'películas',
    'dibujar'
]

document.body.innerHTML = greeter(user, isHapppy, personAge, hobbies);