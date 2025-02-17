# 📜 Pokémon Explorer
Um projeto interativo para explorar informações sobre diferentes Pokémon, exibindo detalhes como estatísticas, tipos e peso. A aplicação utiliza uma API externa para buscar e exibir os dados de forma dinâmica.

<img src="public/preview.gif">

## ✨ Funcionalidades

- Exibição de uma lista de Pokémon com imagens e cores temáticas de acordo com seus tipos.
- Exibição de detalhes ao selecionar um Pokémon, incluindo estatísticas, peso e tipos.
- Alternância de tema (claro/escuro) com styled-components.
- Navegação dinâmica utilizando react-router-dom.
- Consumo de API com axios e gerenciamento de requisições assíncronas com react-query.

## 🛠️ Tecnologias Utilizadas

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="50" />
  &nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original-wordmark.svg" width="50" />
  &nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" width="50" />
</p>


| Tecnologia        | Motivação                                                |
|-------------------|----------------------------------------------------------|
| React             | Biblioteca principal para construção da interface.       |
| styled-components | Para estilização dinâmica e compatibilidade com o tema.  |
| axios             | Para realizar chamadas à API de maneira simplificada.    |
| react-router-dom  | Para navegação entre páginas sem recarregar a aplicação. |
| FontAwesome       | Ícones para melhorar a experiência visual da aplicação.  |
| Vite              | Para um ambiente de desenvolvimento rápido e eficiente.  |

## 📌 Decisões Técnicas

1. Uso de styled-components: Escolhido para facilitar a aplicação do tema dinâmico e manter os estilos encapsulados nos componentes.
2. Uso de axios: Escolhido por sua facilidade de configuração e melhor tratamento de requisições do que o fetch padrão.
3. Estrutura modularizada: Componentes foram divididos de forma reutilizável, seguindo boas práticas de organização de código.
4. Ao abrir a página, a mesma faz 2 requisições, uma com a quantidade mínima de objetos necessários e outra buscando todos os objetos. Assim deixando a página carregar mais rápido e ficando com a navegação mais fluida.
5. Ao selecionar um Pokémon você será redirecionado para outra página, na qual irá verificar as informações do Pokémon em uma variável para não precisar fazer outra busca por API.
6. Foi adicionado o número do Pokémon na URL para caso o usuário queira mudar de Pokémon sem voltar a página principal, ou simplesmente queira mandar o link para outra pessoa visualizar, a página irá verificar se as informações do Pokémon escolhido já foi buscada anteriormente, caso não, ela fará uma busca unitária via API do Pokémon selecionado.

# 🚀 Como Executar o Projeto

## 📌 Pré-requisitos
Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/pt)
- [Git](https://git-scm.com/)

## 📥 Clonar o repositório
```bash
git clone https://github.com/ViniciusG-Ribeiro/react-pokemons-challenge.git
cd react-pokemons-challenge
```

## 📦 Instalar dependências

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

```bash
npm install
# ou
yarn install
```

## ▶️ Rodar a aplicação

```bash
npm run dev
# ou
yarn dev
```

A aplicação estará disponível em http://localhost:5173 (ou outra porta informada no terminal).