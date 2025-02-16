# AI SENPAI

## Descrição

AI Senpai é uma aplicação web de página única (SPA) desenvolvida com React. O objetivo da aplicação é fornecer recomendações de animes com base nos gêneros preferidos pelo usuário. A aplicação irá consumir dados de APIs como MyAnimeList, IMDb ou AniList para obter informações sobre os animes, incluindo nomes, gêneros e notas.

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
  - MyAnimeList API
  - IMDb API
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

## Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Faça o push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.

