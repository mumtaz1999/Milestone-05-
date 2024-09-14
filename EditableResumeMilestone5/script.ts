// Wait until the DOM is fully loaded
window.onload = () => {
    const resume = document.getElementById('resume');
  
    // Ensure the resume element exists
    if (resume) {
      // Load saved content (if any) when the page loads
      loadContent();
  
      // Loop through all editable sections and attach event listeners
      resume.querySelectorAll('[contenteditable="true"]').forEach((editableElement) => {
        editableElement.addEventListener('input', () => {
          // Get the id of the section (or return if no parent or id exists)
          const sectionId = editableElement.parentElement?.id;
          if (sectionId) {
            // Store the updated content in localStorage
            const newContent = editableElement.innerHTML;
            saveContent(sectionId, newContent);
          }
        });
      });
    }
  };
  
  // Save the updated content to localStorage
  function saveContent(sectionId: string, newContent: string) {
    try {
      // Save data using the sectionId as the key
      localStorage.setItem(sectionId, newContent);
    } catch (error) {
      console.error("Error saving content to localStorage:", error);
    }
  }
  
  // Retrieve content on page load
  function loadContent() {
    document.querySelectorAll('[contenteditable="true"]').forEach((editableElement) => {
      const sectionId = editableElement.parentElement?.id;
      if (sectionId) {
        // Retrieve stored content from localStorage
        const savedContent = localStorage.getItem(sectionId);
        if (savedContent) {
          editableElement.innerHTML = savedContent;
        }
      }
    });
  }
  