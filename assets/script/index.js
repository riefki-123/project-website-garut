document.addEventListener('DOMContentLoaded', () => {
    const modal = document.createElement('div');
    modal.id = 'imageModal';
    modal.style.display = 'none';
    modal.style.position = 'fixed';
    modal.style.zIndex = '1000';
    modal.style.left = '0';
    modal.style.top = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';

    const img = document.createElement('img');
    img.style.maxWidth = '90%';
    img.style.maxHeight = '90%';
    img.style.borderRadius = '10px';

    modal.appendChild(img);
    document.body.appendChild(modal);

    document.querySelectorAll('.featured-image').forEach(image => {
        image.addEventListener('click', (event) => {
            img.src = event.target.src;
            modal.style.display = 'flex';
        });
    });

    modal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});

// Dropdown Menu for Pariwisata
document.addEventListener('DOMContentLoaded', () => {
    const navItem = document.querySelector('nav ul li:nth-child(3)'); // Pariwisata
    const dropdown = document.createElement('ul');
    dropdown.style.listStyle = 'none';
    dropdown.style.padding = '0';
    dropdown.style.margin = '0';
    dropdown.style.position = 'absolute';
    dropdown.style.backgroundColor = '#D4EBF8';
    dropdown.style.display = 'none';

    const destinations = [
        { name: 'Gunung Papandayan', link: '#gunung' },
        { name: 'Darajat Pass', link: '#darajat' },
        { name: 'Pantai Sayang Heulang', link: '#pantai' },
    ];

    destinations.forEach(destination => {
        const item = document.createElement('li');
        item.style.padding = '10px';
        item.style.borderBottom = '1px solid #ccc';

        const link = document.createElement('a');
        link.href = destination.link;
        link.textContent = destination.name;
        link.style.color = '#0A3981';
        link.style.textDecoration = 'none';

        item.appendChild(link);
        dropdown.appendChild(item);
    });

    navItem.style.position = 'relative';
    navItem.appendChild(dropdown);

    navItem.addEventListener('mouseenter', () => {
        dropdown.style.display = 'block';
    });

    navItem.addEventListener('mouseleave', () => {
        dropdown.style.display = 'none';
    });
});

// Smooth Scroll for Navigation
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
