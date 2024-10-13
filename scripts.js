// Navigation between views
function navigate(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active'); // Hide all sections
    });
    document.getElementById(sectionId).classList.add('active'); // Show the selected section
}

// Accordion functionality
const accordions = document.querySelectorAll('.accordion');
accordions.forEach(accordion => {
    accordion.addEventListener('click', function() {
        this.classList.toggle('active');
        const panel = this.nextElementSibling;
        panel.classList.toggle('show');
    });
});
