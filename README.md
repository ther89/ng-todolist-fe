# Angular Todo List Frontend

This is a learning project to get familiar with Angular, Visual Studio Code and developer containers. 

The project can be run inside a *Node.js & Typescript* docker developer container. This way you don't need to install anything else (such as `node` or `npm`) in order to start the project, everything that is needed for the development is already described in the `Dockerfile` and `devcontainer.json`. Your terminal commands are running inside the container.
 
## Prerequisites

- [Visual Studio Code](https://code.visualstudio.com/) 
- [Docker](https://www.docker.com/)
- [Remote - Containers](vscode:extension/ms-vscode-remote.remote-containers) VS Code extension (If you open the workspace you will be prompted to install this. More information about it can be found [here](https://code.visualstudio.com/docs/remote/containers-tutorial))
- This frontend is communicating with a backend API, the source code and running insturctions for that can be found at https://github.com/tomhudak/go-todolist-api

## Opening the project

Visual Studio Code: You can open the project by navigating to the root folder and open `ng-todolist-fe.code-workspace`.

## Development server

On you first start, run `npm install` first to get the required packages.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
