  function mostrarSurpresa() {
      const surpresa = document.getElementById('surpresa-container');
      if (surpresa.style.display === 'block') {
        surpresa.style.display = 'none';
      } else {
        surpresa.style.display = 'block';
      }
    }