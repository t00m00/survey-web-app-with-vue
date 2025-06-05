# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Architecture

This is a Vue 2 survey/assessment web application that runs entirely in the browser without a backend. The application uses:

- **Vue 2** via CDN (not a build system)
- **Vuetify 2** for UI components
- **Global script loading** (no ES6 modules or build process)
- **localStorage** for data persistence

### Core Architecture Pattern

The app follows a component-based architecture with these key files:

- `docs/index.html` - Entry point that loads Vue 2 and Vuetify from CDN
- `docs/js/main.js` - App initialization and Vuetify setup
- `docs/js/components/surveyPage.js` - Main container component handling name input, save/load/export functionality
- `docs/js/components/surveyPageAssessment.js` - Assessment list component with slider controls
- `docs/js/components/assessments.js` - Assessment data management
- `docs/js/components/appConfig.js` - Configuration wrapper for survey data
- `docs/survey.config.js` - Default assessment configuration

### Data Flow

1. Assessment data is initialized from `survey.config.js` with default Japanese assessment items
2. `appConfig.js` wraps the config data and provides access to assessments
3. `assessments.js` creates an Assessment class instance that manages the data
4. User interactions update assessment scores via sliders in `surveyPageAssessment.js`
5. Data flows up to `surveyPage.js` which handles persistence to localStorage
6. Export functionality uses the File System Access API (Chromium browsers only)

### Script Loading Order

**CRITICAL**: Scripts must be loaded in this exact order in `docs/index.html`:
1. `survey.config.js` (defines global `config`)
2. `js/components/appConfig.js` (uses `config`)
3. `js/components/assessments.js` (uses `appConfig`)
4. `js/components/surveyPageAssessment.js` (uses `assessments`)
5. `js/components/surveyPage.js` (uses `surveyPageAssessment`)
6. `js/main.js` (uses `surveyPage`)

### Key Features

- **Edit Mode**: Toggle to modify assessment perspectives and add/delete items
- **Auto-save**: Automatic localStorage persistence on data changes
- **Export**: JSON file export using browser's File System Access API
- **Responsive**: Uses Vuetify's grid system for mobile-friendly layout

## Development

### Running the Application

Since this is a static web app, simply open `docs/index.html` in a browser or serve the `docs/` directory:

```bash
# Using Python
cd docs && python -m http.server 8000

# Using Node.js
cd docs && npx serve .
```

### File Structure

- All source code is in `docs/` directory (GitHub Pages deployment ready)
- Components use template strings instead of .vue files
- No build process - global script loading (Vue 2 style)
- CSS files are in `docs/css/`

### Making Changes

When modifying assessment logic, focus on:

- `surveyPageAssessment.js` for UI interactions
- `assessments.js` for data structure
- `survey.config.js` for default assessment items
- Component communication happens via props and events (Vue 2 style)

**Important**: This project uses Vue 2 with global script loading, NOT ES6 modules. Do not use `import`/`export` statements. All components and variables must be declared as global constants that can be referenced by other scripts loaded later.

### Browser Compatibility

Export functionality requires Chromium-based browsers due to File System Access API usage. The rest of the app works in all modern browsers.

## Deployment

The app is deployed to GitHub Pages from the `docs/` directory at:
https://t00m00.github.io/survey-web-app-with-vue/

## Common Issues

**Problem**: Page displays blank/white screen
**Solution**: Check script loading order in `docs/index.html` - dependency chain must be correct

**Problem**: Import/export errors in console  
**Solution**: This is Vue 2 with global scripts, not ES6 modules - remove all `import`/`export` statements
