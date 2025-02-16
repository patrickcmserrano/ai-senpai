# AI SENPAI

## Descrição

AI Senpai é uma aplicação web de página única (SPA) desenvolvida com React. O objetivo da aplicação é fornecer recomendações de animes com base nos gêneros preferidos pelo usuário. A aplicação consome dados da API AniList para obter informações sobre os animes, incluindo nomes, gêneros e descrições.

## Funcionalidades

- Receber do usuário os gêneros de animes de sua preferência.
- Filtrar animes com base nos gêneros selecionados.
- Retornar um anime aleatório da lista filtrada.
- Exibir informações detalhadas sobre o anime recomendado.

## Tecnologias Utilizadas

- **Frontend:**
  - React
  - React Router (para navegação SPA)
  - Axios (para requisições HTTP)
  - Material-UI (para componentes de interface)
  
- **Backend:**
  - Inicialmente, a aplicação não terá um backend dedicado. Os dados serão armazenados in-memory ou utilizando cookies.

- **APIs:**
  - AniList API

## Metodologias

- **Desenvolvimento Ágil:** Utilizaremos metodologias ágeis para o desenvolvimento do projeto, com sprints semanais e reuniões diárias de acompanhamento.
- **Testes:** Serão implementados testes unitários e de integração utilizando Jest e React Testing Library.
- **Controle de Versão:** O código será versionado utilizando Git e hospedado no GitHub.

## Estrutura do Projeto

```
ai-senpai/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── AnimeCard.js
│   │   ├── AnimeCard.md
│   │   ├── GenreSelector.js
│   │   ├── GenreSelector.md
│   │   └── ...
│   ├── services/
│   │   ├── api.js
│   │   ├── anilistService.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
```

## Como Executar o Projeto

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/ai-senpai.git
   cd ai-senpai
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```sh
   npm start
   ```

4. Acesse a aplicação em `http://localhost:3000`.

## Documentação dos Componentes

- [GenreSelector](./src/components/GenreSelector.md)
- [AnimeCard](./src/components/AnimeCard.md)

## Estado Atual da Aplicação

### Descrição Geral
A aplicação AI Senpai é uma aplicação web de página única (SPA) desenvolvida com React. O objetivo da aplicação é fornecer recomendações de animes com base nos gêneros preferidos pelo usuário. A aplicação consome dados da API AniList para obter informações sobre os animes, incluindo nomes, gêneros e descrições.

### Funcionalidades Implementadas

1. **Seleção de Gêneros:**
   - O componente `GenreSelector` permite aos usuários selecionar seus gêneros de animes preferidos. Os gêneros disponíveis incluem Ação, Aventura, Comédia, Drama, Fantasia, Terror, Mistério, Romance e Ficção Científica.

2. **Recomendação de Animes:**
   - Com base nos gêneros selecionados pelo usuário, a aplicação faz uma requisição à API AniList para buscar animes que correspondam aos gêneros selecionados. O primeiro anime da lista de resultados é exibido ao usuário.

3. **Exibição de Informações do Anime:**
   - O componente `AnimeCard` exibe informações detalhadas sobre o anime recomendado, incluindo o título, imagem, descrição e gêneros.

### Componentes Principais

1. **GenreSelector:**
   - Permite aos usuários selecionar múltiplos gêneros de animes.
   - Chama a função `onSelectGenres` com os gêneros selecionados quando o usuário clica no botão "Confirmar".

2. **AnimeCard:**
   - Exibe informações detalhadas sobre um anime, incluindo título, imagem, descrição e gêneros.

### Serviços

1. **AniList Service:**
   - O serviço `anilistService` faz requisições à API AniList para buscar animes com base nos gêneros fornecidos.
   - Utiliza GraphQL para fazer as requisições.

### Testes

1. **Testes Unitários:**
   - Foram criados testes unitários para os componentes `GenreSelector` e `AnimeCard` utilizando `@testing-library/react` e `@testing-library/jest-dom`.

2. **Testes de Integração:**
   - Foram criados testes de integração para o serviço `anilistService` para garantir que as requisições à API AniList estão funcionando corretamente.

### Dependências

- React: Biblioteca principal para construção da interface do usuário.
- React Router: Utilizado para navegação entre páginas.
- Axios: Utilizado para fazer requisições HTTP.
- GraphQL-Request: Utilizado para fazer requisições GraphQL à API AniList.
- Jest: Utilizado para testes unitários e de integração.
- Testing Library: Utilizado para testes de componentes React.
- Babel: Utilizado para transpilar o código JavaScript moderno.

## Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Faça o push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.

