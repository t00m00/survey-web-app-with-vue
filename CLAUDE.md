# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Architecture

This is a Vue 3 survey/assessment web application that runs entirely in the browser without a backend. The application uses:

- **Vue 3** with the Composition API via CDN (not a build system)
- **Vuetify 3** for UI components
- **ES6 modules** for component organization
- **localStorage** for data persistence

### Core Architecture Pattern

The app follows a component-based architecture with these key files:

- `docs/index.html` - Entry point that loads Vue 3 and Vuetify from CDN
- `docs/js/main.js` - App initialization and Vuetify setup
- `docs/js/components/surveyPage.js` - Main container component handling name input, save/load/export functionality
- `docs/js/components/surveyPageAssessment.js` - Assessment list component with slider controls
- `docs/js/components/assessments.js` - Assessment data management 
- `docs/survey.config.js` - Default assessment configuration

### Data Flow

1. Assessment data is initialized from `survey.config.js` with default Japanese assessment items
2. User interactions update assessment scores via sliders in `surveyPageAssessment.js`
3. Data flows up to `surveyPage.js` which handles persistence to localStorage
4. Export functionality uses the File System Access API (Chromium browsers only)

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
- No build process - direct ES6 module imports
- CSS files are in `docs/css/`

### Making Changes

When modifying assessment logic, focus on:
- `surveyPageAssessment.js` for UI interactions
- `assessments.js` for data structure
- `survey.config.js` for default assessment items
- Component communication happens via props and events (Vue 3 style)

### Browser Compatibility

Export functionality requires Chromium-based browsers due to File System Access API usage. The rest of the app works in all modern browsers.