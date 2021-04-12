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

messageWrapper(studentDataToSting(student), 'Singolo studente:\n');
messageWrapper(studentDataToSting(...studentsArr), 'Lista studenti:\n');


function studentDataToSting(...students) {
    var outputMessage = '';
    for (var item of students) {
        outputMessage += "\nDati studente:\n\n";
        for (var prop in item) {
            outputMessage += `${prop}: ${item[prop]}\n\n`;
        }
        outputMessage += '*'.repeat(10) + '\n';
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
function messageWrapper(message, intro="", separator='='.repeat(20)) {
    
    console.log(intro);
    console.log(separator);
    console.log(message);
    console.log(separator);
    console.log('\n')
}