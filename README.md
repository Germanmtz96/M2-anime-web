-[CANVA](https://www.canva.com/design/DAGLYIEm8Wc/4o-wGVj2QEoiJNr0pVvAgg/view?utm_content=DAGLYIEm8Wc&utm_campaign=designshare&utm_medium=link&utm_source=editor)
-[Excalidraw](https://excalidraw.com/#json=v5ZrM9o09NAgMjKAD2ORF,uwtyznPCSZPfpjW2nvoytg)

# Project Name

This repository is a [json-server](https://github.com/Germanmtz96/M2-web-server) created to feed data into the React Application below.

#### [Client Repo here](https://github.com/Germanmtz96/M2-anime-web)

# Server Structure

## Comments

```javascript
{
  mal_id, id, name, score, comment, title;
}
```

## Used API Endpoints in the App

| HTTP Method | URL                                                           | Request Body      | Description               |
| ----------- | ------------------------------------------------------------- | ----------------- | ------------------------- |
| GET         | `/anime`                                                      |                   | Sends top 25 anime        |
| GET         | `/anime?mal_id=`                                              |                   | Sends selected anime      |
| GET         | `import.meta.env.VITE_SERVER_URL/comments/`                   |                   | Sends last 5 comments     |
| GET         | `/anime/top/`                                                 |                   | Sends all 25 of all anime |
| GET         | `/anime?page=${currentPage}&status=${status}&genres=${genre}` |                   | Sends filtered anime      |
| GET         | `import.meta.env.VITE_SERVER_URL/comments/`                   |                   | Sends all comments        |
| POST        | `import.meta.env.VITE_SERVER_URL/comments/`                   | `{newComment}`    | Creates a new review      |
| DELETE      | `import.meta.env.VITE_SERVER_URL/comments/${commentId}`       |                   | Deletes a comment         |
| PUT         | `import.meta.env.VITE_SERVER_URL/${props.selectedComment.id}` | `{editedComment}` | Edits a comment           |

## Links

### Collaborators

[Germán Martínez](https://github.com/Germanmtz96)

[Huanye Zhu](https://github.com/Huanye98)

### Project

[Repository Link Client](https://github.com/Germanmtz96/M2-anime-web)

[Repository Link Server](https://github.com/Germanmtz96/M2-web-server)

[Deploy Link](https://searchanimes.netlify.app/)

### Slides

[Slides Link](https://docs.google.com/presentation/d/1Q_grXnvRWLAdE-cKXK56BIP83YAkuwDP6dXhABMrt8g/edit?usp=sharing)
