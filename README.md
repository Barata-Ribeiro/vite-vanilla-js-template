# Vite Vanilla JS Template

![screenshot](/public/assets/images/screenshot.png)

Initially built for personal use, I created this template for starting a new project with Vite.js and Vanilla Javascript. It is already set up with standard development tools like ESLint and Prettier for easy code formatting and linting and Vite for a robust, modern build process.

## Dependencies

This template uses the following dependencies:

- **Vite:** A next-generation frontend build tool that offers fast dev server and optimized builds.
- **ESLint:** An open-source JavaScript linting utility that helps to maintain a consistent code style.
- **Prettier:** An opinionated code formatter that enforces a consistent code style across your project.
- **eslint-config-airbnb-base and eslint-config-prettier:** ESLint configurations adhering to Airbnb's base JS style guide and disabling stylistic rules that might conflict with Prettier.
- **eslint-plugin-import and eslint-plugin-prettier:** ESLint plugins that enforce ES2015+ import/export syntax and integrates Prettier with ESLint.
- **autoprefixer and postcss:** Autoprefixer automatically adds vendor prefixes to CSS, while PostCSS provides a way to transform CSS with JavaScript.
- **vite-plugin-eslint:** Integrates ESLint into the Vite build process for on-the-fly linting.
- **[the-new-css-reset](https://elad2412.github.io/the-new-css-reset/):** A modern, CSS reset for your styles.

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

## Post-Cloning Steps

After cloning the template, make sure to clean up and update the following:

1. Remove the .git directory and run `git init` to clean the commit history.
2. Cleanup the README.md file.
3. Adapt the LICENSE file to your project.
4. Delete `images/vite.svg`, `images/javascript.svg`, `images/screenshot.png`, and `counter.js`.
5. In the `main.js` file, leave only these import statements: `import "../styles/style.css";` and `import "the-new-css-reset/css/reset.css";`.
6. Delete the .github folder.

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

## Folder Structure

This is the structure of the project:

```plaintext
/
├── node_modules             # Node.js dependencies for the project.
├── public
│   ├── assets
│   │   ├── images           # Store your images here.
├── src
│   ├── js
│   │   ├── main.js          # Main Javascript file of your project.
│   ├── styles
│   │   ├── style.css        # Main CSS styles for your project.
│   ├── index.html           # The HTML file for your project.
├── configuration files...   # Configuration files for various tools (ESLint, Prettier, etc.).
```

## License

This template was created under the [MIT License](LICENSE.md).

**Happy coding!** 👨‍💻
