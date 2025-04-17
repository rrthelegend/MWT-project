
document.querySelector('.cta-button').addEventListener('click', () => {
    window.scrollTo({
        top: document.querySelector('.content').offsetTop,
        behavior: 'smooth'
    });
});


const loginForm = document.querySelector('form');
if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        if (!email || !password) {
            alert("Please fill in all fields.");
            return;
        }

        if (!email.endsWith("@muj.manipal.edu")) {
            alert("Only MUJ emails are allowed.");
            return;
        }

        
        alert("Login successful (demo only). Redirecting...");
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);
    });
}


const icons = document.querySelectorAll('.social-icons a img');
icons.forEach(icon => {
    icon.addEventListener('click', (e) => {
        e.preventDefault();
        icon.style.transform = 'scale(1.3)';
        icon.style.transition = 'transform 0.2s ease-in-out';
        setTimeout(() => {
            icon.style.transform = 'scale(1)';
        }, 200);
    });
});


const sectionImages = document.querySelectorAll('.section-content img');
sectionImages.forEach(img => {
    img.style.transition = "transform 0.3s ease-in-out";
    img.addEventListener('mouseover', () => {
        img.style.transform = "scale(1.05)";
    });
    img.addEventListener('mouseout', () => {
        img.style.transform = "scale(1)";
    });
});
