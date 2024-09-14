document.addEventListener('DOMContentLoaded', () => {
    const toggleSkillsButton = document.getElementById('toggle-skills');
    const skillsSection = document.getElementById('skills');
    const generateLinkButton = document.getElementById('generate-link');
    const resumeLinkParagraph = document.getElementById('resume-link');
    const usernameInput = document.getElementById('username');
    const downloadPdfButton = document.getElementById('download-pdf');

    // Toggle skills section
    toggleSkillsButton.addEventListener('click', () => {
        if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
            skillsSection.style.display = 'block';
            toggleSkillsButton.textContent = 'Hide Skills Section';
        } else {
            skillsSection.style.display = 'none';
            toggleSkillsButton.textContent = 'Show Skills Section';
        }
    });

    // Generate unique URL
    generateLinkButton.addEventListener('click', () => {
        const username = usernameInput.value.trim();
        if (username) {
            const uniqueURL = `https://${username}.vercel.app/resume`;
            resumeLinkParagraph.textContent = `Your resume link: ${uniqueURL}`;
            resumeLinkParagraph.classList.remove("hidden");
        } else {
            alert("Please enter a username.");
        }
    });

    // Download as PDF
    downloadPdfButton.addEventListener('click', () => {
        const { jsPDF } = window.jspdf;

        html2canvas(document.querySelector("main")).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const doc = new jsPDF();
            const imgWidth = 210;
            const pageHeight = 295;
            const imgHeight = canvas.height * imgWidth / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;

            doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                doc.addPage();
                doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            doc.save('resume.pdf');
        });
    });
});
