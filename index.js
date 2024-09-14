"use strict";
const form = document.getElementById('resumeForm');
const resumeDisplay = document.getElementById('resumeDisplay');
// Function to generate resume
const generateResume = (data) => {
    resumeDisplay.innerHTML = `
      <h2>${data.name}</h2>
      <p>Email: ${data.email}</p>
      
      <h3>Education</h3>
      <p>${data.school}, ${data.degree} (${data.gradYear})</p>
      
      <h3>Work Experience</h3>
      <p>${data.company}, ${data.role} (${data.workYears} years)</p>
      
      <h3>Skills</h3>
      <p>${data.skills.split(',').join(', ')}</p>
    `;
};
// Function to validate form and handle submit
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const school = document.getElementById('school').value;
    const degree = document.getElementById('degree').value;
    const gradYear = document.getElementById('gradYear').value;
    const company = document.getElementById('company').value;
    const role = document.getElementById('role').value;
    const workYears = document.getElementById('workYears').value;
    const skills = document.getElementById('skills').value;
    // Perform validation
    if (!name || !email || !school || !degree || !gradYear || !company || !role || !workYears || !skills) {
        alert("All fields must be filled out!");
        return;
    }
    generateResume({ name, email, school, degree, gradYear, company, role, workYears, skills });
});
// Real-time resume update
form.addEventListener('input', () => {
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        school: document.getElementById('school').value,
        degree: document.getElementById('degree').value,
        gradYear: document.getElementById('gradYear').value,
        company: document.getElementById('company').value,
        role: document.getElementById('role').value,
        workYears: document.getElementById('workYears').value,
        skills: document.getElementById('skills').value
    };
    generateResume(formData);
});
