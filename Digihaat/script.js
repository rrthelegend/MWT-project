
document.querySelector('.cta-button')?.addEventListener('click', () => {
    window.scrollTo({
        top: document.querySelector('.content').offsetTop,
        behavior: 'smooth'
    });
});


document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const formId = form.getAttribute('id'); 
        const email = form.querySelector('#email')?.value.trim();
        const password = form.querySelector('#password')?.value.trim();
        const confirmPassword = form.querySelector('#confirm-password')?.value?.trim();
        const name = form.querySelector('#name')?.value?.trim();

        if (!email || !password || (formId === 'signup-form' && (!name || !confirmPassword))) {
            alert("Please fill in all required fields.");
            return;
        }

        if (!email.endsWith("@muj.manipal.edu")) {
            alert("Only MUJ emails are allowed.");
            return;
        }

        if (formId === 'signup-form') {
            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }

            alert("Signup successful (demo only). Redirecting to login...");
            setTimeout(() => {
                window.location.href = "login.html";
            }, 1200);
        } else if (formId === 'login-form') {
            
            alert("Login successful (demo only). Redirecting...");
            setTimeout(() => {
                window.location.href = "index.html";
            }, 1000);
        }
    });
});


document.querySelectorAll('.social-icons a img').forEach(icon => {
    icon.addEventListener('click', (e) => {
        e.preventDefault();
        icon.style.transform = 'scale(1.3)';
        icon.style.transition = 'transform 0.2s ease-in-out';
        setTimeout(() => {
            icon.style.transform = 'scale(1)';
        }, 200);
    });
});


document.querySelectorAll('.section-content img').forEach(img => {
    img.style.transition = "transform 0.3s ease-in-out";
    img.addEventListener('mouseover', () => {
        img.style.transform = "scale(1.05)";
    });
    img.addEventListener('mouseout', () => {
        img.style.transform = "scale(1)";
    });
});
