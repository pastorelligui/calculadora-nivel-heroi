document
  .getElementById('calculateButton')
  .addEventListener('click', function () {
    const heroName = document.getElementById('heroName').value;
    const heroXP = parseInt(document.getElementById('heroXP').value);
    let heroLevel = '';

    if (heroXP < 1000) {
      heroLevel = 'Ferro';
    } else if (heroXP >= 1001 && heroXP <= 2000) {
      heroLevel = 'Bronze';
    } else if (heroXP >= 2001 && heroXP <= 5000) {
      heroLevel = 'Prata';
    } else if (heroXP >= 6001 && heroXP <= 7000) {
      heroLevel = 'Ouro';
    } else if (heroXP >= 7001 && heroXP <= 8000) {
      heroLevel = 'Platina';
    } else if (heroXP >= 8001 && heroXP <= 9000) {
      heroLevel = 'Ascendente';
    } else if (heroXP >= 9001 && heroXP <= 10000) {
      heroLevel = 'Imortal';
    } else if (heroXP >= 10001) {
      heroLevel = 'Radiante';
    }

    document.getElementById(
      'resultMessage',
    ).textContent = `O Herói de nome ${heroName} está no nível de ${heroLevel}`;
  });
