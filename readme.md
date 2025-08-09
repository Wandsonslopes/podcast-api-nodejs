# 🎙️ Podcast Manager

Um aplicativo no estilo Netflix, projetado para centralizar episódios de podcasts em vídeo, organizados por categorias como saúde, bodybuilder, mentalidade e humor.

## 📖 Descrição

O **Podcast Manager** é uma plataforma que permite:

* Listar episódios de podcasts organizados em sessões de categorias.
* Filtrar episódios pelo nome do podcast.
* Visualizar informações como capa, título, categorias e link para assistir.

Foco: **podcasts em vídeo**

## 🚀 Funcionalidades

✅ Listar episódios de podcasts em sessões por categoria.
✅ Filtrar episódios pelo nome do podcast.

### Exemplos de categorias:

* 🏋️‍♂️ Bodybuilder
* ❤️ Saúde
* 🧠 Mentalidade
* 😂 Humor

---

## 📡 Endpoints da API

### **1. Listar todos os episódios**

**GET** `/list`
Retorna todos os episódios de podcasts cadastrados.

**Exemplo de resposta**:

```json
[
  {
    "podcastName": "flow",
    "episode": "CBUM - Flow #319",
    "videoId": "pQSuQmUfS30",
    "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
    "categories": ["saúde", "esporte", "bodybuilder"]
  },
  {
    "podcastName": "flow",
    "episode": "RUBENS BARRICHELLO - Flow #339",
    "videoId": "4KDGTdiOV4I",
    "cover": "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=4KDGTdiOV4I",
    "categories": ["esporte", "corrida"]
  }
]
```

---

### **2. Filtrar episódios por nome do podcast**

**GET** `/episode?podcastName=flow`

**Exemplo de resposta**:

```json
[
  {
    "podcastName": "flow",
    "episode": "CBUM - Flow #319",
    "videoId": "pQSuQmUfS30",
    "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
    "categories": ["saúde", "esporte", "bodybuilder"]
  }
]
```

---

## 🛠️ Tecnologias Utilizadas

* **Node.js**
* **TypeScript**
* **HTTP nativo do Node.js**

---

## 📂 Estrutura do Projeto

```
src/
├── controllers/
│   └── podcasts-controller.ts
├── routes/
│   └── routes.ts
├── utils/
│   └── http-methods.ts
├── app.ts
└── server.ts
```

---

## ▶️ Como Rodar o Projeto

1. **Clonar o repositório**

```bash
git clone https://github.com/seu-usuario/podcast-manager.git
cd podcast-manager
```

2. **Instalar dependências**

```bash
npm install
```

3. **Rodar em modo desenvolvimento**

```bash
npm run start:dev
```

4. **Rodar em produção**

```bash
npm run build
npm start
```

---

## 📜 Licença

Este projeto está sob a licença MIT.