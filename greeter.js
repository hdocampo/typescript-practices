var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var colorSolid = Color[1];
function greeter(person, happyStatus, age, hobbies) {
    var hobbiesList = "";
    for (var i = 0, j = hobbies.length; i < j; i++) {
        hobbiesList += "<li>" + hobbies[i] + "</li>";
    }
    return "<h1>Hello, " + person.firstName + " " + person.lastName + "</h1> \n    \n    <p>I see that you are <strong>" + (happyStatus ? 'happy' : 'sad') + "</strong> because you are going to have " + (age + 1) + " years old on the next year...</p>\n    \n    <span style='border-bottom: 1px solid " + colorSolid + "'>Tus intereses son</span>:\n    <ul>\n        " + hobbiesList + "\n    </ul>\n    ";
}
var user = new Student("Hugo", "D.", "Ocampo");
var isHapppy = false;
var personAge = 37;
var hobbies = [
    'futbol',
    'videojuegos',
    'películas',
    'dibujar'
];
document.body.innerHTML = greeter(user, isHapppy, personAge, hobbies);
