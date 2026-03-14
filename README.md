const prompt = require('prompt-sync')();

function enterStudents() {
    const students = [];
    let continueInput = true;

    while (continueInput) {
        const numStudents = parseInt(prompt('Внеси број на студенти: '), 10);

        for (let i = 0; i < numStudents; i++) {
            const name = prompt(`Внеси име за студент ${i + 1}: `);
            const grades = [];
            let numSubjects = parseInt(prompt(`Колку предмети има студентот ${name}? `), 10);

            for (let j = 0; j < numSubjects; j++) {
                let valid = false;
                let grade;
                while (!valid) {
                    grade = parseFloat(prompt(`Внеси оценка за предмет ${j + 1}: `));
                    if (grade >= 1 && grade <= 10) {
                        valid = true;
                        grades.push(grade);
                    } else {
                        console.log('Оценката мора да биде помеѓу 1 и 10. Внеси повторно.');
                    }
                }
            }

            const avg = grades.reduce((a, b) => a + b, 0) / grades.length;
            const note = avg < 5 ? 'Не поминал' : '';
            students.push({ name, avg: avg.toFixed(2), note });
        }

        // Прикажи резултати
        console.log('\nРезултати:');
        students.forEach(s => {
            console.log(`Студент: ${s.name}, Просек: ${s.avg} ${s.note ? '- ' + s.note : ''}`);
        });

        // Дали да продолжи?
        const choice = prompt('\nДали сакате да продолжите со внесување нови студенти? (да/не): ').toLowerCase();
        continueInput = (choice === 'да');
    }

    console.log('Програмата е завршена.');
}

enterStudents();const prompt = require('prompt-sync')();

function enterStudents() {
    const students = [];
    let continueInput = true;

    while (continueInput) {
        const numStudents = parseInt(prompt('Внеси број на студенти: '), 10);

        for (let i = 0; i < numStudents; i++) {
            const name = prompt(`Внеси име за студент ${i + 1}: `);
            const grades = [];
            let numSubjects = parseInt(prompt(`Колку предмети има студентот ${name}? `), 10);

            for (let j = 0; j < numSubjects; j++) {
                let valid = false;
                let grade;
                while (!valid) {
                    grade = parseFloat(prompt(`Внеси оценка за предмет ${j + 1}: `));
                    if (grade >= 1 && grade <= 10) {
                        valid = true;
                        grades.push(grade);
                    } else {
                        console.log('Оценката мора да биде помеѓу 1 и 10. Внеси повторно.');
                    }
                }
            }

            const avg = grades.reduce((a, b) => a + b, 0) / grades.length;
            const note = avg < 5 ? 'Не поминал' : '';
            students.push({ name, avg: avg.toFixed(2), note });
        }

        // Прикажи резултати
        console.log('\nРезултати:');
        students.forEach(s => {
            console.log(`Студент: ${s.name}, Просек: ${s.avg} ${s.note ? '- ' + s.note : ''}`);
        });

        // Дали да продолжи?
        const choice = prompt('\nДали сакате да продолжите со внесување нови студенти? (да/не): ').toLowerCase();
        continueInput = (choice === 'да');
    }

    console.log('Програмата е завршена.');
}

enterStudents();
