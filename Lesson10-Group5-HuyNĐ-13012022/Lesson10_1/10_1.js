let person = {
    name:       'Bob',
    occupation: 'web developer',
    hobbies:    'painting',
};
document.getElementById("name").innerHTML=`My name is ${person["name"]}`;
document.getElementById("job").innerHTML=`My occupation is ${person.occupation}`;
document.getElementById("hobbies").innerHTML=`My hobby is ${person.hobbies} `;
console.log(person.name);
console.log(person.occupation);
console.log(person.hobbies);