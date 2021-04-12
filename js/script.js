var student = {
    'nome': 'filippo',
    'cognome': 'montani',
    'eta': 19
};

var studentsArr = [
    {
        'nome': 'mario',
        'cognome': 'balotelli',
        'eta': 400
    },
    {
        'nome': 'cesare',
        'cognome': 'pavese',
        'eta': 120
    },
    {
        'nome': 'jay',
        'cognome': 'z',
        'eta': 42
    }
];

messageWrapper(studentDataToSting(student), 'Singolo studente:\n');
messageWrapper(studentDataToSting(...studentsArr), 'Lista studenti:\n');
newStudent = addStudent();
if (!objInArr(newStudent, studentsArr)) {
    studentsArr.push(newStudent);
    alert('studente inserito in db');
    messageWrapper(studentDataToSting(...studentsArr), 'Lista studenti aggiornata:\n');
} else {
    alert('studente già presente in db')
}


function studentDataToSting(...students) {
    var outputMessage = '';
    for (var item of students) {
        outputMessage += "\nDati studente:\n\n";
        for (var prop in item) {
            propValueFormatted = item[prop].toString();
            outputMessage += `${prop}: ${capitalize(propValueFormatted)}\n\n`;
        }
        outputMessage += '*'.repeat(10) + '\n';
    }
    return outputMessage
}

function addStudent() {
    var student = {};
    student.nome = prompt('inserire nome').toLowerCase().trim();
    student.cognome = prompt('inserire cognome').toLowerCase().trim();
    student.eta = parseInt(prompt('inserire età'));
    return student
}
function messageWrapper(message, intro="", separator='='.repeat(20)) {
    
    console.log(intro);
    console.log(separator);
    console.log(message);
    console.log(separator);
    console.log('\n')
}

function objInArr(obj, arr) {
    // funzione abbastanza primitiva e soggetta a miliardi di potenziali falsi negativi, ma qua va bene
    var jsonArr = JSON.stringify(arr);
    return jsonArr.includes(JSON.stringify(obj));
}

function capitalize(word) {
    return word[0].toUpperCase()+word.slice(1)
}