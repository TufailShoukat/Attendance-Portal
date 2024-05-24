const studentData = [
    {
        name: 'John Doe',
        fatherName: 'Richard Doe',
        age: 16,
        rollNo: '101',
        class: '10th Grade',
    },
    {
        name: 'John Doe',
        fatherName: 'Richard Doe',
        age: 16,
        rollNo: '101',
        class: '10th Grade',
    },
    {
        name: 'Jane Smith',
        fatherName: 'Robert Smith',
        age: 15,
        rollNo: '102',
        class: '9th Grade',
    },
    {
        name: 'Michael Johnson',
        fatherName: 'James Johnson',
        age: 17,
        rollNo: '103',
        class: '11th Grade',
    },
    {
        name: 'Emily Davis',
        fatherName: 'William Davis',
        age: 14,
        rollNo: '104',
        class: '8th Grade',
    },
    {
        name: 'Jessica Brown',
        fatherName: 'Charles Brown',
        age: 16,
        rollNo: '105',
        class: '10th Grade',
    },
    {
        name: 'Daniel Wilson',
        fatherName: 'Thomas Wilson',
        age: 15,
        rollNo: '106',
        class: '9th Grade',
    },
    {
        name: 'Sarah Taylor',
        fatherName: 'Andrew Taylor',
        age: 17,
        rollNo: '107',
        class: '11th Grade',
    },
    {
        name: 'David Lee',
        fatherName: 'George Lee',
        age: 14,
        rollNo: '108',
        class: '8th Grade',
    },
    {
        name: 'Laura Martin',
        fatherName: 'Paul Martin',
        age: 16,
        rollNo: '109',
        class: '10th Grade',
    },
    {
        name: 'Kevin White',
        fatherName: 'Mark White',
        age: 15,
        rollNo: '110',
        class: '9th Grade',
    },
    {
        name: 'Anna Harris',
        fatherName: 'Steven Harris',
        age: 17,
        rollNo: '111',
        class: '11th Grade',
    },
    {
        name: 'Brian Clark',
        fatherName: 'Edward Clark',
        age: 14,
        rollNo: '112',
        class: '8th Grade',
    },
    {
        name: 'Sophia Lewis',
        fatherName: 'Henry Lewis',
        age: 16,
        rollNo: '113',
        class: '10th Grade',
    },
    {
        name: 'Christopher Walker',
        fatherName: 'Frank Walker',
        age: 15,
        rollNo: '114',
        class: '9th Grade',
    },
    {
        name: 'Grace Hall',
        fatherName: 'Peter Hall',
        age: 17,
        rollNo: '115',
        class: '11th Grade',
    },
    {
        name: 'Justin Allen',
        fatherName: 'Patrick Allen',
        age: 14,
        rollNo: '116',
        class: '8th Grade',
    },
    {
        name: 'Olivia Young',
        fatherName: 'Bruce Young',
        age: 16,
        rollNo: '117',
        class: '10th Grade',
    },
    {
        name: 'Nathan Hernandez',
        fatherName: 'Larry Hernandez',
        age: 15,
        rollNo: '118',
        class: '9th Grade',
    },
    {
        name: 'Mia King',
        fatherName: 'Joe King',
        age: 17,
        rollNo: '119',
        class: '11th Grade',
    },
    {
        name: 'Ethan Wright',
        fatherName: 'Stanley Wright',
        age: 14,
        rollNo: '120',
        class: '8th Grade',
    },
    {
        name: 'Ava Lopez',
        fatherName: 'Timothy Lopez',
        age: 16,
        rollNo: '121',
        class: '10th Grade',
    },
    {
        name: 'Jacob Scott',
        fatherName: 'Chris Scott',
        age: 15,
        rollNo: '122',
        class: '9th Grade',
    },
    {
        name: 'Samantha Green',
        fatherName: 'Shawn Green',
        age: 17,
        rollNo: '123',
        class: '11th Grade',
    },
    {
        name: 'Andrew Adams',
        fatherName: 'Jason Adams',
        age: 14,
        rollNo: '124',
        class: '8th Grade',
    },
    {
        name: 'Ella Baker',
        fatherName: 'Ryan Baker',
        age: 16,
        rollNo: '125',
        class: '10th Grade',
    },
];

let allAttendanceArray = [];

function updateAttendanceList() {
    const listElement = document.getElementById('todo_list');
    listElement.innerHTML = "";

    allAttendanceArray.forEach(record => {
        const listItem = document.createElement('li');
        listItem.textContent = `${record.name} (Roll No: ${record.rollNo}, Father: ${record.fatherName}) - ${record.status} - Minutes: ${record.minutes} - Class: ${record.class}`;
        listElement.appendChild(listItem);
    });
}

function updateAllAttendanceData() {
    const attendanceDataElement = document.getElementById('attendanceData');
    attendanceDataElement.innerHTML = "";

    allAttendanceArray.forEach(record => {
        const recordDiv = document.createElement('div');
        recordDiv.textContent = `${record.name} (Roll No: ${record.rollNo}, Father: ${record.fatherName}) - ${record.status} - Minutes: ${record.minutes} - Class: ${record.class}`;
        attendanceDataElement.appendChild(recordDiv);
    });
}

document.getElementById('presentBtn').addEventListener('click', () => {
    updateAttendance('PRESENT');
});

document.getElementById('absentBtn').addEventListener('click', () => {
    updateAttendance('ABSENT');
});

document.getElementById('leaveBtn').addEventListener('click', () => {
    updateAttendance('LEAVE');
});

function updateAttendance(status) {
    const studentName = prompt("Enter student's name:");
    if (studentName.trim() !== "") {
        const student = studentData.find(student => student.name === studentName);
        if (student) {
            const minutes = parseInt(prompt("Enter minutes (if any):")) || 0;
            const existingRecordIndex = allAttendanceArray.findIndex(record => record.name === student.name);
            if (existingRecordIndex !== -1) {
                allAttendanceArray[existingRecordIndex].status = status;
                allAttendanceArray[existingRecordIndex].minutes += minutes;
            } else {
                allAttendanceArray.push({ ...student, status, minutes });
            }
            updateAttendanceList();
            updateAllAttendanceData();
        } else {
            alert("Student not found.");
        }
    } else {
        alert("Please enter a valid student name.");
    }
}
