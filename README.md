-[CANVA](https://www.canva.com/design/DAGLYIEm8Wc/4o-wGVj2QEoiJNr0pVvAgg/view?utm_content=DAGLYIEm8Wc&utm_campaign=designshare&utm_medium=link&utm_source=editor) 
-[Excalidraw](https://excalidraw.com/#json=v5ZrM9o09NAgMjKAD2ORF,uwtyznPCSZPfpjW2nvoytg)

# Project Name
SearchAnime
## [See the App!](https://searchanimes.netlify.app/)

![App Logo](/src/assets/logo-1.png)

## Description

**NOTE -** Anime database to search and comment animes

#### [Client Repo ](https://github.com/Germanmtz96/M2-anime-web)

#### [Server Repo ](https://github.com/Germanmtz96/M2-web-server)

## Technologies, Libraries & APIs used

**NOTE -** HTML, CSS, Javascript, React, axios, Bootstrap, React-router.

## Backlog Functionalities

**NOTE -** More optimized performance, login and logout system, improved UX UI.

# Client Structure

## User Stories

**NOTE -** 

- **404** - As a user, I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault.
- **500** - As a user, I want to see a nice error page when the server encounters an issue so that I know it is not my fault.
- **homepage** - As a user, I want to be able to access the homepage so that I see what the app is about and can log in and sign up.
- **comment edit** - As a user, I want to be able to edit existing comments so that I can correct or update my previous feedback.
- **comment create** - As a user, I want to create a new comment so that I can provide my feedback or input.
- **comment delete** - As a user, I want to delete a comment so that I can remove my feedback if needed.
- **Filter anime** - As a user, I want to filter anime based on different criteria so that I can find anime that matches my preferences.
- **Search anime** - As a user, I want to search for anime by title or keyword so that I can quickly find specific anime.
- **Random anime** - As a user, I want the page to find me a random anime i possibly have not heard about.

## Client Routes

## React Router Routes (React App)

| Path              | Page          | Components                                             | Behavior                                     |
| ----------------- | ------------- | ------------------------------------------------------ | -------------------------------------------- |
| `/`               | Home          | tendencias,ultimos comentarios                         | Home page, shows top anime and last comments |
| `/anime-list`     | anime-list    | Animecard,buscador,formulario                          | Shows all anime                              |
| `/anime-list/:id` | Anime-Details | addComment,animeDetailsCard,ComentarioCard,editComment | Shows details of selected anime              |
| `/about`          | About         |                                                        | About                                        |
| `/error`          | error 404     |                                                        | error 404                                    |
| `/error2`         | error 500     |                                                        | error 500                                    |

## Other Components

- Navbar
- Footer

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
