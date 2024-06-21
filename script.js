document.addEventListener('DOMContentLoaded', function() {
    // Datos de proyectos (puedes añadir mas)
    const projects = [
        {
            title: 'Proyecto 1',
            description: 'Descripción del proyecto 1',
            iamge: 'images/'
        },
        {
            title: 'Proyecto 2',
            description: 'Descripción del proyecto 2',
            iamge: 'images/'
        },
        {
            title: 'Proyecto 3',
            description: 'Descripción del proyecto 3',
            iamge: 'images/'
        }
    ];

    // Rellenar proyecto de forma dinamica
    const projectContainer = document.getElementById('projects');
    const projectTemplate = document.getElementById('project-template');

    projects.forEach(project => {
        const projectElement = projectTemplate.cloneNode(true);
        
        projectElement.style.display = 'block';
        projectElement.querySelector('h3').texContent = project.title;
        projectElement.querySelector('p').texContent = project.description;
        projectElement.querySelector('img').src = project.image;
        projectElement.querySelector('img').alt = project.title;
        projectContainer.appendChild(projectElement);
    });

    // Manejar el envio del formulario de contacto
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Formulario enviado');
        contactForm.reset();
    });
});