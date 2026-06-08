document.addEventListener('DOMContentLoaded', () => {
    const hiddenElements = document.querySelectorAll('.hidden');
    const year = document.getElementById('year');
    const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    const revealAll = () => {
        hiddenElements.forEach((element) => element.classList.add('show'));
    };

    if (reduceMotionQuery.matches || !('IntersectionObserver' in window)) {
        revealAll();
        return;
    }

    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                entry.target.classList.add('show');
                obs.unobserve(entry.target);
            });
        },
        {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        }
    );

    hiddenElements.forEach((element) => observer.observe(element));

    const handleMotionPreference = (event) => {
        if (!event.matches) return;

        revealAll();
        observer.disconnect();
    };

    if (typeof reduceMotionQuery.addEventListener === 'function') {
        reduceMotionQuery.addEventListener('change', handleMotionPreference);
    } else {
        reduceMotionQuery.addListener(handleMotionPreference);
    }
});
