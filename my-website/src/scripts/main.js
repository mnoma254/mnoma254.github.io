document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('nav a');
    const mainParagraph = document.querySelector('main p');
    const footer = document.querySelector('footer');
    const backToTopButton = document.getElementById('back-to-top');

    themeToggle.addEventListener('click', function() {
        const isDarkTheme = body.classList.contains('dark-theme');
        if (isDarkTheme) {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            header.classList.remove('dark-theme');
            header.classList.add('light-theme');
            navLinks.forEach(link => {
                link.classList.remove('dark-theme');
                link.classList.add('light-theme');
            });
            mainParagraph.classList.remove('dark-theme');
            mainParagraph.classList.add('light-theme');
            footer.classList.remove('dark-theme');
            footer.classList.add('light-theme');
        } else {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            header.classList.remove('light-theme');
            header.classList.add('dark-theme');
            navLinks.forEach(link => {
                link.classList.remove('light-theme');
                link.classList.add('dark-theme');
            });
            mainParagraph.classList.remove('light-theme');
            mainParagraph.classList.add('dark-theme');
            footer.classList.remove('light-theme');
            footer.classList.add('dark-theme');
        }
    });

    // Set initial theme based on prefers-color-scheme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('dark-theme');
        header.classList.add('dark-theme');
        navLinks.forEach(link => link.classList.add('dark-theme'));
        mainParagraph.classList.add('dark-theme');
        footer.classList.add('dark-theme');
    } else {
        body.classList.add('light-theme');
        header.classList.add('light-theme');
        navLinks.forEach(link => link.classList.add('light-theme'));
        mainParagraph.classList.add('light-theme');
        footer.classList.add('light-theme');
    }

    // Copy link functionality
    const copyLinkButton = document.getElementById('copy-link');
    copyLinkButton.addEventListener('click', function() {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            alert('Link copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy link: ', err);
        });
    });

    // Show/hide back-to-top button
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Scroll to top functionality
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});