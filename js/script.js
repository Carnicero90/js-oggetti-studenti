var student = {
    'nome': 'Filippo',
    'cognome': 'Montani',
    'eta': 19
};

var studentsArr = [
    {
        'nome': 'Mario',
        'cognome': 'Balotelli',
        'eta': 400
    },
    {
        'nome': 'Cesare',
        'cognome': 'Pavese',
        'eta': 120
    },
    {
        'nome': 'Jay',
        'cognome': 'Z',
        'eta': 42
    }
];

messageWrapper('Singolo studente:\n',studentDataToSting(student));
messageWrapper('Lista studenti:\n',studentDataToSting(...studentsArr));


function studentDataToSting(...students) {
    var outputMessage = '';
    for (var item of students) {
        outputMessage += "Dati studente:\n";
        for (var prop in item) {
            outputMessage += `${prop}: ${item[prop]}\n`;
        }
        outputMessage += '*'.repeat(5) + '\n';
    }
    return outputMessage
}

function addStudent(studentsList) {
    var student = {};
    student.nome = prompt('inserire nome');
    student.cognome = prompt('inserire cognome');
    student.eta = parseInt(prompt('inserire età'));
    studentsList.push(student);
}
function messageWrapper(intro="", message) {
    console.log(intro);
    console.log('='.repeat(20));
    console.log(message);
    console.log('='.repeat(20));
    console.log('\n')
}