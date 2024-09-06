function pesquisar() {
  // Obtém a seção HTML onde os resultados da pesquisa serão exibidos. 
  // O ID "resultados-pesquisa" deve corresponder a um elemento HTML na página.
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (!campoPesquisa) {
    section.innerHTML = "<p>Nenhum resultado foi encontrado.</p>"
    return
  };

  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar o HTML que será gerado.
  // Essa string será preenchida com os elementos HTML que representam os resultados da pesquisa.
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada objeto dentro do array 'dados'. 
  // Cada objeto representa um resultado da pesquisa e possui as propriedades: titulo, descricao e link.
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Constrói uma string de HTML para cada resultado, 
      // criando um elemento div com as classes e conteúdos necessários.
      resultados += `
        <div class="item-resultado">
          <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>`;
    };
  };

  if (!resultados) {
    resultados = "<p>Nenhum resultado foi encontrado.</p>"
  };

  // Atribui o conteúdo HTML gerado à seção HTML. 
  // Isso substitui o conteúdo anterior da seção pelos resultados da pesquisa.
  section.innerHTML = resultados;
}