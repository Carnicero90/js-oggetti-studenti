const student = {
    nome: 'filippo',
    cognome: 'montani',
    eta: 19
};

const studentsArr = [
    {
        nome: 'mario',
        cognome: 'balotelli',
        eta: 400
    },
    {
        nome: 'cesare',
        cognome: 'pavese',
        eta: 120

    },
    {
        nome: 'jay',
        cognome: 'z',
        eta: 42
    }
];

console.log(messageWrapper(studentDataToSting(student), 'Singolo studente:\n'));
console.log(messageWrapper(studentDataToSting(...studentsArr), 'Lista studenti:\n'));


// const newStudent = addStudent();
// studentsArr.push(newStudent);
// alert('studente inserito in db');
// console.log(messageWrapper(studentDataToSting(...studentsArr), 'Lista studenti aggiornata:\n'));


function studentDataToSting(...students) {

    let output = '';

    const outputMessage = function (data) {
        return `**********\nDati studente:\n\n${data}\n**********\n`
    }

    students.forEach(student => {

        let data = '';
        for (let prop in student) {
            const propValueFormatted = student[prop].toString();
            data += `${prop}: ${capitalize(propValueFormatted)}\n`;
        }
        output += outputMessage(data);
    })
    return output
}


function addStudent() {
    const student = {};
    student.nome = prompt('inserire nome').toLowerCase().trim();
    student.cognome = prompt('inserire cognome').toLowerCase().trim();
    student.eta = parseInt(prompt('inserire età'));
    return student
}
function messageWrapper(message, intro = "", separator = '='.repeat(20)) {
    return `${intro}\n${separator}\n${message}\n${separator}`
}

function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1)
}