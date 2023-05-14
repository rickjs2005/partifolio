let menuIcon = document.querySelector ('#menu-icon');
let  navbar = document.querySelector ('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle ('bx-x');
  navbar.classList.toggle ('active');
}

// Seleciona todas as seções do documento
let sections = document.querySelectorAll('section');
// Seleciona todos os links da barra de navegação
let navLinks = document.querySelectorAll('header nav a');

// Adiciona um listener para o evento scroll da janela
window.onscroll = () => {
  // Para cada seção, verifica se ela está na posição visível da janela
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    // Se a seção estiver visível, adiciona a classe 'active' no link correspondente na barra de navegação
    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      document.querySelector('header nav a[href*="'+id+'"]').classList.add('active');

      sec.classList.add ('show-animate');
    }

    else {
      sec.classList.remove ('show-animate');
    }
  });

  // Verifica se a janela foi rolada mais de 100px e adiciona a classe 'sticky' no cabeçalho
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  menuIcon.classList.remove ('bx-x');
  navbar.classList.remove ('active');

  const footer = document.querySelector('footer');
  const isFooterVisible = window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight;

  if (isFooterVisible) {
    footer.classList.add('show-animate');
  } else {
    footer.classList.remove('show-animate');
  }
};
