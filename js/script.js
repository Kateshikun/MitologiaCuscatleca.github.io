document.addEventListener('DOMContentLoaded', function () {
    const hasSubmenuLinks = document.querySelectorAll('.has-submenu > a');

    hasSubmenuLinks.forEach(link => {
        let firstTouch = false;

        link.addEventListener('click', function (e) {
            const parentLi = this.parentElement;
            const submenu = parentLi.querySelector('.submenu');

            // Solo para pantallas pequeñas (mobile/tablet)
            if (window.innerWidth <= 768) {
                if (!firstTouch) {
                    e.preventDefault(); // Previene la navegación
                    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
                    firstTouch = true;

                    // Resetea después de 3 segundos
                    setTimeout(() => firstTouch = false, 3000);
                }
            }
        });
    });
});
