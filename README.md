# Your Project Name

A project using `isomorphic-git` to initialize a Git repository, commit changes, and display commit logs.

## Description

This project demonstrates how to use the `isomorphic-git` library to perform basic Git operations such as initializing a repository, committing changes, and displaying commit logs. The project is set up to work with Node.js.

## Prerequisites

- Node.js installed on your machine
- Basic understanding of Git

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-project-name.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-project-name
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

1. Run the application:

   ```bash
   npm start
   ```

2. The application will initialize a Git repository in the `my-git-repo` directory, commit changes, and display the commit log in the console.

## Code Overview

- **Repository Initialization**: The repository is initialized using the `initRepo` function.
  ```javascript:app.js
  startLine: 8
  endLine: 32
  ```

- **Committing Changes**: Changes are staged and committed using the `commitChanges` function.
  ```javascript:app.js
  startLine: 36
  endLine: 65
  ```

- **Logging Commits**: After each commit, the commit history is printed to the console.
  ```javascript:app.js
  startLine: 54
  endLine: 62
  ```

## Configuration

- Update the `user.name` and `user.email` in `app.js` to your own Git user information.
- Modify the commit message in the `commitChanges` function as needed.

## License

This project is licensed under the ISC License.

## Author

Your Name