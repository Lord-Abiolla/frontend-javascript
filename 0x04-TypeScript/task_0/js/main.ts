// Write an interface named Student
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students from the interface
const student1: Student = {
    firstName: "Lord",
    lastName: "Abiolla",
    age: 25,
    location: "Nairobi"
}

const student2: Student = {
    firstName: "Leykum",
    lastName: "Woldesmayat",
    age: 30,
    location: "Addis Ababa"
}


// Create array of students
const studentsList = [student1, student2];

// Render a table
document.addEventListener("DOMContentLoaded", () => {
    // Create a table
    const tb = document.createElement("table");
    const tbody = document.createElement("tbody");

    const rowHeader = document.createElement("tr");
    const titles: string[] = ["First Name", "Location"]

    titles.forEach((title) => {
        const th = document.createElement("th");
        th.textContent = title;
        rowHeader.appendChild(th);
    });
    tbody.appendChild(rowHeader);

    studentsList.forEach((student) => {
        const row = document.createElement("tr");
        const tdFirstName = document.createElement("td");
        tdFirstName.textContent = student.firstName;

        const tdLocation = document.createElement("td");
        tdLocation.textContent = student.location;

        row.appendChild(tdFirstName);
        row.appendChild(tdLocation);

        tbody.appendChild(row);
    });

    tb.appendChild(tbody);
    document.body.appendChild(tb);
})