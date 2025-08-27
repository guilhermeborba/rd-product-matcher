# RD Product Matcher

Este projeto é a implementação do desafio técnico para a vaga de desenvolvedor front-end na RD Station. Trata-se de um motor de recomendação de produtos construído em uma aplicação React, que sugere soluções da RD Station com base nas preferências e funcionalidades selecionadas pelo usuário.

## Tech Stack

-   **Frontend:** React.js, Tailwind CSS
-   **Backend:** `json-server` para simular uma API REST
-   **Gerenciamento:** Lerna (Monorepo), Yarn Workspaces
-   **Testes:** Jest, React Testing Library

## Funcionalidades Implementadas

-   **Motor de Recomendação:** Um serviço com lógica de pontuação (`scoring`) que avalia o "fit" de cada produto com as seleções do usuário.
-   **Modos de Recomendação:** Suporte para os modos `SingleProduct` (retorna apenas o melhor resultado) e `MultipleProducts` (retorna uma lista ordenada de todos os produtos compatíveis).
-   **Regra de Desempate:** Em caso de empate na pontuação, o serviço prioriza o **último** produto da lista original, conforme especificado nos critérios de aceite.
-   **Interface Reativa:** A lista de recomendações é atualizada em tempo real após a submissão do formulário.
-   **Testes Unitários:** A lógica de negócio no serviço de recomendação possui cobertura de testes > 90%, validando todos os cenários, incluindo empates e casos de borda.

## Decisões de Arquitetura

-   **Monorepo:** A estrutura foi mantida com Lerna para gerenciar os pacotes `frontend` e `backend` de forma isolada, mas dentro de um único repositório, facilitando o desenvolvimento e a manutenção.
-   **Gerenciamento de Estado:** Foi utilizada a abordagem nativa do React com os hooks `useState` e `useEffect`. Para a complexidade da aplicação, esta solução é mais do que suficiente, evitando a necessidade de bibliotecas externas como Redux ou Zustand e mantendo o projeto leve.
-   **Serviço de Recomendação (`recommendation.service.js`):** A lógica de negócio foi centralizada em uma função pura, que recebe os produtos e as preferências e retorna um resultado, sem causar efeitos colaterais. Isso torna a lógica determinística e fácil de testar isoladamente.
-   **Componentização:** A UI foi dividida em componentes pequenos e reutilizáveis (ex: `ProductCard`, `Checkbox`), seguindo as melhores práticas do React para garantir a manutenibilidade.

## Como Executar o Projeto

### Pré-requisitos

-   Node.js (versão >= v18.3)
-   Yarn (v1.22.x)

### 1. Instalação

Clone o repositório e, na pasta raiz, execute o script de instalação. Ele cuidará de instalar as dependências da raiz, do frontend e do backend.

```bash
# Clone o repositório
git clone [https://github.com/guilhermeborba/rd-product-matcher.git](https://github.com/guilhermeborba/rd-product-matcher.git)

# Entre na pasta do projeto
cd rd-product-matcher

# Rode o script de instalação
./install.sh
```

### 2. Executando a Aplicação

Para iniciar o ambiente de desenvolvimento (frontend + backend), execute o seguinte comando na raiz do projeto:

```bash
yarn dev
```

-   O backend (`json-server`) estará disponível em `http://localhost:3001`.
-   O frontend (React) abrirá automaticamente em `http://localhost:3000`.

### 3. Rodando os Testes

Para executar os testes unitários do frontend, navegue até a pasta `frontend` e rode o comando de teste:

```bash
cd frontend
yarn test
