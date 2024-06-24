document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: 'Proyecto 1',
            description: 'Descripción del proyecto 1',
            image: 'images/logo-personal.png'
        },
        {
            title: 'Proyecto 2',
            description: 'Descripción del proyecto 2',
            image: 'images/logo-personal.png'
        },
        {
            title: 'Proyecto 3',
            description: 'Descripción del proyecto 3',
            image: 'images/logo-personal.png'
        },
        {
            title: 'Proyecto 4',
            description: 'Descripción del proyecto 4',
            image: 'images/logo-personal.png'
        }
    ];

    const projectContainer = document.getElementById('projects');
    const projectTemplateOriginal = document.getElementById('project-template');

    projects.forEach(project => {
        const projectTemplate = projectTemplateOriginal.cloneNode(true);
        projectTemplate.removeAttribute('id'); // Eliminar el ID del template clonado
        projectTemplate.style.display = 'block'; // Hacer visible el template

        projectTemplate.querySelector('h3').textContent = project.title;
        projectTemplate.querySelector('p').textContent = project.description;
        projectTemplate.querySelector('img').src = project.image;
        projectTemplate.querySelector('img').alt = 'Imagen de ' + project.title;
        projectContainer.appendChild(projectTemplate);
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Formulario enviado');
        contactForm.reset();
    });
});

// Funcionalidad para redes sociales
document.querySelectorAll('.icono-social').forEach(icon => {
    icon.addEventListener('mouseover', () => {
        document.querySelector('.redes-sociales').style.animationPlayState = 'paused';
    });

    icon.addEventListener('mouseout', () => {
        document.querySelector('.redes-sociales').style.animationPlayState = 'running';
    });
});


// Funcionalidad para menú fijo
document.addEventListener('DOMContentLoaded', (event) => {
    window.addEventListener('scroll', function() {
        var heroSection = document.getElementById('hero');
        var menuSection = document.getElementById('seccion-menu');
        var heroHeight = heroSection.offsetHeight; // Altura de la sección #hero

        if (window.pageYOffset > heroHeight) {
            menuSection.classList.add('fixed-menu');
        } else {
            menuSection.classList.remove('fixed-menu');
        }
    });
});
