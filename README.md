# Flight Schedule - Skyscanner Backpack React App

This is a modern, responsive React application built as part of the Skyscanner Backpack React assignment. It provides a simple, beautiful interface for users to select their departure date for a flight schedule.

## Features

- **Backpack UI Components:** Utilizes official Skyscanner Backpack UI components, primarily `@skyscanner/backpack-web/bpk-component-calendar` and `bpk-component-button`, ensuring strict adherence to Skyscanner's design system.
- **Modern Glassmorphic UI:** Features a high-quality, premium interface with a dynamic gradient background, frosted glass card aesthetic, and subtle micro-animations for an elevated user experience.
- **Interactive Calendar:** A fully functional date picker with dynamic state handling.
- **Robust Dependencies:** Configured using the correct, unified `@skyscanner/backpack-web` package to resolve legacy React 17 dependency conflicts and Babel syntax errors.

## Project Setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and the Backpack React template (`@skyscanner/backpack-react-scripts`).

### Prerequisites

- Node.js (version 14.x or higher)
- npm

### Installation

1. Install all dependencies. This project correctly resolves all Backpack dependencies using `--legacy-peer-deps`.
   ```bash
   npm install
   ```

### Running the Application

To start the local development server:

```bash
npm start
```
The application will open in your default browser at [http://localhost:3000](http://localhost:3000).

*Note: The project includes a `.env` file with `GENERATE_SOURCEMAP=false`. This is a necessary configuration that bypasses a known broken source-map issue in the `react-transition-group` dependency, ensuring that the development server compiles flawlessly.*

### Building for Production

To create an optimized production build:

```bash
npm run build
```
The built files will be output to the `build/` directory, ready for deployment.

### Running Tests

To launch the test runner in the interactive watch mode:

```bash
npm test
```
The application maintains basic test coverage to ensure `App.js` renders without crashing.

## Architecture & Code Changes

During development, the following critical updates were made to ensure full compatibility:
- **React 17 Downgrade:** Ensured `react` and `react-dom` were pinned to `17.0.2` to support Backpack components correctly.
- **Unified Backpack Web:** Removed standalone, deprecated component packages (`bpk-component-calendar`, etc.) and replaced them with the modern, pre-compiled `@skyscanner/backpack-web` package.
- **Date-Fns Upgrade:** Upgraded `date-fns` to v4 and migrated to named imports to resolve start-of-month compilation errors.
