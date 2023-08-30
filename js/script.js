const selectElement = document.getElementById('dynamicSelect');
const loadedContentElement = document.getElementById('loadedContent');

selectElement.addEventListener('change', () => {
  const selectedOptionValue = selectElement.value;

  if (selectedOptionValue) {
    loadContent(selectedOptionValue);
  }
});

function loadContent(url) {
  loadedContentElement.style.opacity = 0; // Define a opacidade como 0 imediatamente

  fetch(url)
    .then(response => response.text())
    .then(data => {
      // Aguarde um curto período de tempo antes de atualizar o conteúdo e definir a opacidade para 1
      setTimeout(() => {
        loadedContentElement.innerHTML = data;
        loadedContentElement.style.opacity = 1;
      }, 400);
    })
    .catch(error => {
      console.error('Erro ao carregar o conteúdo:', error);
    });
}

// Ordenar as opções do select alfabeticamente
function ordenar() {
  var select = document.getElementById('dynamicSelect');
  // var placeholderOption = select.querySelector('[value=""]'); // Opção de placeholder

  // Remove a opção de placeholder temporariamente
  // select.removeChild(placeholderOption);

  // Obtém as opções restantes e ordena
  var options = Array.from(select.options);
  options.sort(function(a, b) {
      return a.text.localeCompare(b.text);
  });

  // Adiciona as opções de volta ao select, incluindo a opção de placeholder
  select.innerHTML = ''; // Remove todas as opções existentes
  // select.appendChild(placeholderOption); // Adiciona o placeholder de volta

  options.forEach(function(option) {
      select.appendChild(option);
  });
}