// Mostrar/amagar la comparativa
document.getElementById('toggleComparativa').addEventListener('click', () => {
    const comparativa = document.getElementById('comparativa');
    if (comparativa.style.display === 'none' || comparativa.style.display === '') {
        comparativa.style.display = 'block';
    } else {
        comparativa.style.display = 'none';
    }
});

// Missatge emergent (alert) al fer clic o enviar
document.getElementById('alertButton').addEventListener('click', () => {
    alert('Has fet clic al botó!');
});

// Canvi de color o tema de la pàgina
document.getElementById('changeTheme').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});