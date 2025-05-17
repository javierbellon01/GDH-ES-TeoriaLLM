document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggleComparativa');
    const alertBtn = document.getElementById('alertButton');
    const themeBtn = document.getElementById('changeTheme');

    if (toggleBtn) {
        toggleBtn.textContent = 'Amaga/Mostra Taula';
        toggleBtn.addEventListener('click', () => {
            const table = document.getElementById('comparativa');
            if (table.style.display === 'none') {
                table.style.display = 'table';
            } else {
                table.style.display = 'none';
            }
        });
    }

    if (alertBtn) {
        alertBtn.textContent = 'Fes un alert';
        alertBtn.addEventListener('click', () => {
            alert('Això és una curiositat!');
        });
    }

    if (themeBtn) {
        themeBtn.textContent = 'Canvia el tema';
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
    }
});