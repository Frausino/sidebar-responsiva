// JavaScript para alternar a visibilidade da sidebar
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const content = document.getElementById("content"); // Seleciona o conteúdo principal

menuToggle.addEventListener("click", () => {
  // Alterna a classe "open" na sidebar e no conteúdo principal
  sidebar.classList.toggle("open");
  content.classList.toggle("open");

  // Atualiza o atributo aria-expanded para acessibilidade
  const isExpanded = sidebar.classList.contains("open");
  menuToggle.setAttribute("aria-expanded", isExpanded);
});
