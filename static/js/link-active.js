const links = document.querySelectorAll('.content-links-sections a');

links.forEach(link => {
  link.addEventListener('click', function () {
    // Remove a classe 'active' de todos os links
    links.forEach(l => l.classList.remove('active'));

    // Adiciona a classe 'active' no link clicado
    this.classList.add('active');
  });
});
