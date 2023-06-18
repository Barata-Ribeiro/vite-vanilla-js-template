# Vite Vanilla JS Template

This is a template for starting a new project with Vite.js and Vanilla Javascript. It is already setup with common development tools like ESLint and Prettier for easy code formatting and linting, and Vite for a powerful, modern build process.

## Dependencies

This template uses the following dependencies:

- **Vite:** A modern frontend build tool.
- **ESLint:** An open-source JavaScript linting utility.
- **Prettier:** An opinionated code formatter.
- **eslint-config-airbnb-base and eslint-config-prettier:** A set of ESLint configurations adhering to Airbnb's base JS style guide.
- **eslint-plugin-import and eslint-plugin-prettier:** ESLint plugins to help enforce ES2015+ import/export syntax.
- **autoprefixer and postcss:** Tools for handling CSS prefixes and transformations.
- **vite-plugin-eslint:** A Vite plugin for ESLint.
- **the-new-css-reset:** A modern CSS reset.

## Usage

To start using this template, clone the repository with this command:

```bash
git clone https://github.com/Barata-Ribeiro/vite-vanilla-js-template
cd vite-vanilla-js-template
npm install
```

or

```bash
npm install -g degit # if you don't have degit installed...
degit Barata-Ribeiro/vite-vanilla-js-template
cd vite-vanilla-js-template
npm install

#degit documentation at: https://github.com/Rich-Harris/degit
```

## Scripts

Use the following scripts for your development workflow:

```bash
# Start development server
npm run dev

# Lint your code
npm run lint

# Fix linting errors
npm run lint:fix

# Format your code
npm run format

# Build for production
npm run build

# Preview the build
npm run preview

# Build and preview the project
npm run deploy
```

## Clean Up

After cloning the template, make sure to clean up and update the following:

1. Remove the .git directory and run `git init` to clean the commit history.
2. Cleanup the README.md file.
3. Adapt the LICENSE file to your project.
4. Delete `vite.svg`, `images/javascript.svg`, and `counter.js`.
5. In the `main.js` file, leave only these import statements: `import "../styles/style.css";` and `import "the-new-css-reset/css/reset.css";`.
6. Delete the .github folder.

## Folder Structure

This is the structure of the project:

```plaintext
/
├── node_modules
├── public
│   ├── images
├── src
│   ├── js
│   │   ├── main.js
│   ├── styles
│   │   ├── style.css
│   ├── index.html
├── configuration files...
```

## License

This template was created under the [MIT License](LICENSE.md).

Happy coding!
