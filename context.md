## Defining Your Design Problem

Each concept branch should address a specific design problem or approach. When working with an LLM to create a new concept, provide a clear design brief using this structure:

```
Design Problem: [Specific problem you're trying to solve]
Example: "Users struggle to understand their monthly spending patterns"

Design Approach: [Your approach to solving the problem]
Example: "A minimalist dashboard with visual data representations"

Key Features: [Critical elements that must be included]
Example: "Interactive charts, filtering capabilities, color-coded categories"

Target Users: [Who will use this design]
Example: "Young professionals tracking personal finances"

User Goals: [What users want to accomplish]
Example: "Quickly identify spending trends, find opportunities to save"

Design Constraints: [Limitations to work within]
Example: "Must work on mobile devices, should be accessible to colorblind users"
```

For each new concept branch, provide this information to the LLM before asking it to implement the design. You can refine your design brief based on feedback from previous concepts.

Example prompt for a new concept:
```
I need a new concept branch for the following design problem:

Design Problem: Users struggle to complete multi-step checkout processes on mobile
Design Approach: A linear, distraction-free checkout flow with progress indicators
Key Features: Progress bar, collapsible sections, simplified form inputs
Target Users: Mobile shoppers making purchases on the go
User Goals: Complete purchases quickly with minimal frustration
Design Constraints: Must work on small screens, should load quickly on mobile connections

Please help me create this concept branch with appropriate HTML, CSS, and JS.
```## Troubleshooting

### GitHub Pages Not Showing Up
- Ensure GitHub Pages is enabled in repository settings
- Check that you're using the correct URL format: https://[YOUR-USERNAME].github.io/[YOUR-REPOSITORY-NAME]/
- GitHub Pages may take 5-10 minutes to deploy after pushing changes
- Verify your index.html file is in the root of the branch

### Branches Not Appearing as Separate Pages
- GitHub Pages automatically makes each branch accessible at its own URL
- You must manually link to these URLs from your main gallery
- Branch pages are available at: https://[YOUR-USERNAME].github.io/[YOUR-REPOSITORY-NAME]/[BRANCH-NAME]/
- If using non-standard branch names, ensure URLs are properly formatted

### CSS or JavaScript Not Loading
- Check for relative path issues in your file references
- Ensure all paths begin with `/` for root-relative paths
- Example: `<link rel="stylesheet" href="/styles.css">` may need to be `<link rel="stylesheet" href="./styles.css">`

### Images Not Displaying
- Verify image paths are correct relative to the HTML file
- Ensure image files are properly committed and pushed to GitHub
- Check for case-sensitivity issues in filenames

### Git Branch Management
- To see all branches: `git branch -a`
- To switch between branches: `git checkout branch-name`
- To create and switch to a new branch: `git checkout -b new-branch-name`
- Always commit changes before switching branches# UX Design Concepts Repository Guide

> **IMPORTANT**: This guide assumes you already have a local directory created for your project. The LLM should NOT create new directories or use hardcoded repository names. All references to repository names, usernames, and directories should be replaced with your actual values.

## Overview
This document describes a comprehensive GitHub repository structure for creating, managing, and presenting multiple UX design concepts. Each design concept is maintained in a separate branch and showcased via GitHub Pages. The main branch serves as a visual directory that indexes all concepts for easy navigation during design reviews.

## Purpose
- Create a streamlined workflow for developing and presenting multiple UX design concepts (similar to Figma frames)
- Provide an interactive platform for stakeholders to explore design alternatives
- Enable side-by-side comparison of different approaches during design review meetings
- Collect focused feedback on specific implementations
- Maintain a living archive of design explorations for reference

## Repository Structure

```
Repository: [YOUR-REPOSITORY-NAME]
├── main branch - Visual gallery/index of all concepts with preview images
├── concept-1 branch - First design concept implementation
├── concept-2 branch - Second design concept implementation
└── concept-N branch - Additional design concepts as needed
```

Each branch is accessible through GitHub Pages at:
- Main gallery: https://username.github.io/repository-name/
- Concept 1: https://[YOUR-USERNAME].github.io/[YOUR-REPOSITORY-NAME]/concept-1/
- Concept 2: https://[YOUR-USERNAME].github.io/[YOUR-REPOSITORY-NAME]/concept-2/

## Setup Instructions

### 1. Initial Repository Setup

```bash
# Note: This assumes you're already in your desired project directory
# DO NOT create a new directory - use the existing one

# Initialize Git repository
git init

# Create main branch (if not already on main)
git checkout -b main

# Create basic files for main branch
touch index.html styles.css README.md
mkdir thumbnails

# Initial commit
git add .
git commit -m "Initial repository setup"

# Create GitHub repository (via GitHub.com UI) then connect and push
git remote add origin https://github.com/[YOUR-USERNAME]/[YOUR-REPOSITORY-NAME].git
git push -u origin main

# GitHub Pages Setup

After pushing your main branch to GitHub:

1. Go to your repository on GitHub.com
2. Click on "Settings" (tab with gear icon)
3. Scroll down to the "Pages" section in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Select "main" branch and "/" (root) folder
6. Click "Save"
7. Wait a few minutes for the site to deploy
8. Your site will be available at https://[YOUR-USERNAME].github.io/[YOUR-REPOSITORY-NAME]/

Note: Each branch will automatically be accessible at its own URL path once GitHub Pages is enabled for the repository. You do not need to enable Pages separately for each branch.
```

### 2. Main Branch Implementation

The main branch serves as a visual gallery/directory of all concepts. Implement:

#### index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UX Design Concepts</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>UX Design Concepts</h1>
        <p class="description">Interactive prototypes for design review. Select a concept to explore.</p>
    </header>
    
    <main class="concepts-grid">
        <!-- Concept cards will be added here -->
        
        <!-- Example Concept Card Template -->
        <a href="https://[YOUR-USERNAME].github.io/[YOUR-REPOSITORY-NAME]/concept-1/" class="concept-card">
            <div class="card-image">
                <img src="thumbnails/concept-1.png" alt="Concept 1 Preview">
            </div>
            <div class="card-content">
                <h2>Concept 1: Minimalist Dashboard</h2>
                <p>A clean, streamlined approach focusing on core functionality with intuitive navigation.</p>
                <span class="view-button">View Prototype</span>
            </div>
        </a>
        
        <!-- Additional concept cards would follow the same pattern -->
    </main>
    
    <footer>
        <p>UX Design Exploration by [Your Name/Team] | Last Updated: <span id="last-updated"></span></p>
    </footer>

    <script>
        // Set the last updated date
        document.getElementById('last-updated').textContent = new Date().toLocaleDateString();
    </script>
</body>
</html>
```

#### styles.css
```css
/* Base styles */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f9f9f9;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

/* Header styles */
header {
    text-align: center;
    margin-bottom: 3rem;
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    color: #222;
}

.description {
    font-size: 1.2rem;
    color: #666;
}

/* Concept grid */
.concepts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
}

/* Concept card styles */
.concept-card {
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
}

.concept-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}

.card-image {
    width: 100%;
    height: 180px;
    overflow: hidden;
}

.card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.concept-card:hover .card-image img {
    transform: scale(1.05);
}

.card-content {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.card-content h2 {
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
    color: #222;
}

.card-content p {
    color: #666;
    margin-bottom: 1.5rem;
    flex-grow: 1;
}

.view-button {
    display: inline-block;
    background-color: #0366d6;
    color: white;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    text-align: center;
    transition: background-color 0.2s;
}

.view-button:hover {
    background-color: #0255b3;
}

/* Footer styles */
footer {
    margin-top: 4rem;
    text-align: center;
    color: #666;
    font-size: 0.9rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    body {
        padding: 1.5rem;
    }
    
    .concepts-grid {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1.5rem;
    }
}

@media (max-width: 480px) {
    body {
        padding: 1rem;
    }
    
    .concepts-grid {
        grid-template-columns: 1fr;
    }
}
```

#### README.md
```markdown
# UX Design Concepts

This repository contains multiple interactive UX design concepts for [Project Name]. Each concept is implemented as a separate branch and deployed via GitHub Pages.

## How to Use

Visit the [main gallery](https://[YOUR-USERNAME].github.io/[YOUR-REPOSITORY-NAME]/) to browse all available design concepts.

## Structure

- **Main Branch**: Visual directory of all concepts
- **Concept Branches**: Individual design implementations
  - `concept-1`: [Brief description]
  - `concept-2`: [Brief description]
  - [Additional concepts as needed]

## Development

Each concept is developed in its own branch. To add a new concept:

1. Create a new branch from main
2. Implement the design concept
3. Update the main branch's index to include the new concept

## Feedback

Please use the GitHub Issues feature to provide feedback on specific concepts.
```

### 3. Creating Concept Branches

For each new design concept:

```bash
# Create a new branch from main
git checkout main
git checkout -b concept-1

# Create basic files for the concept
mkdir -p assets/images
mkdir -p assets/icons
touch index.html styles.css script.js

# Implement the concept (HTML, CSS, JS)
# ... (concept implementation)

# Commit the concept
git add .
git commit -m "Implement concept 1: [Brief description]"
git push -u origin concept-1

# Return to main branch to create thumbnail
git checkout main
```

#### Concept Branch Template (index.html)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Concept 1: [Concept Name] | UX Design Concepts</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="concept-header">
        <div class="header-content">
            <h1>Concept 1: [Concept Name]</h1>
            <p class="concept-description">[Brief description of this design approach]</p>
        </div>
        <nav class="navigation">
            <a href="https://[YOUR-USERNAME].github.io/[YOUR-REPOSITORY-NAME]/" class="back-link">← All Concepts</a>
        </nav>
    </header>
    
    <main class="prototype-container">
        <!-- Concept implementation goes here -->
        
        <!-- Example elements -->
        <section class="dashboard">
            <!-- Your interactive UI elements here -->
        </section>
    </main>
    
    <footer class="concept-footer">
        <div class="footer-content">
            <p>Concept by [Your Name/Team]</p>
            <div class="feedback-section">
                <a href="https://github.com/[YOUR-USERNAME]/[YOUR-REPOSITORY-NAME]/issues/new?title=Feedback for Concept 1&body=I have feedback about Concept 1:" class="feedback-button">Leave Feedback</a>
            </div>
        </div>
    </footer>
    
    <script src="script.js"></script>
</body>
</html>
```

#### Concept Branch Style Template (styles.css)
```css
/* Base styles */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f9f9f9;
}

/* Header styles */
.concept-header {
    background-color: #ffffff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 100;
}

.header-content h1 {
    font-size: 1.5rem;
    color: #222;
}

.concept-description {
    color: #666;
    max-width: 600px;
}

.navigation {
    display: flex;
    align-items: center;
}

.back-link {
    display: inline-block;
    color: #0366d6;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;
}

.back-link:hover {
    color: #0255b3;
    text-decoration: underline;
}

/* Main prototype container */
.prototype-container {
    max-width: 1400px;
    margin: 2rem auto;
    padding: 0 2rem;
    min-height: calc(100vh - 200px);
}

/* Footer styles */
.concept-footer {
    background-color: #ffffff;
    border-top: 1px solid #eee;
    padding: 1.5rem 2rem;
    margin-top: 2rem;
}

.footer-content {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.feedback-button {
    display: inline-block;
    background-color: #0366d6;
    color: white;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    text-decoration: none;
    transition: background-color 0.2s;
}

.feedback-button:hover {
    background-color: #0255b3;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .concept-header {
        flex-direction: column;
        align-items: flex-start;
        padding: 1rem;
    }
    
    .navigation {
        margin-top: 1rem;
    }
    
    .prototype-container {
        padding: 0 1rem;
        margin: 1rem auto;
    }
    
    .footer-content {
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
    }
}
```

#### Concept Branch JavaScript Template (script.js)
```javascript
// Main script for the concept prototype

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the prototype
    initializePrototype();
    
    // Set up any event listeners
    setupEventListeners();
});

function initializePrototype() {
    console.log('Prototype initialized');
    // Add any initialization code here
}

function setupEventListeners() {
    // Add event listeners for interactive elements
    // Example:
    // document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);
}

// Add your custom functions below
// Example functions:

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('menu-open');
}

// Add any animations, transitions, or other interactive elements
// ...
```

### 4. Updating Main Branch Gallery

After creating a new concept branch:

1. Create a thumbnail of the concept
2. Save it to `thumbnails/concept-N.png` in the main branch
3. Update the `index.html` file to include the new concept card:

```bash
## Creating Thumbnails

For each concept, you'll need a thumbnail image for the main gallery:

1. After implementing your concept branch:
   - Take a screenshot of the concept using your browser's screenshot tool or OS screenshot capability
   - Or create a mockup image in a design tool like Figma
   - Aim for dimensions around 600×400 pixels
   - Focus on capturing the most distinctive elements of your design

2. Image formats:
   - PNG is preferred for screenshots (.png)
   - JPG works well for photos (.jpg)
   - Keep file sizes under 300KB for fast loading

3. Save thumbnails:
   - Name: `thumbnails/concept-1.png` (replacing number as needed)
   - Ensure all thumbnails have consistent dimensions
   - Consider adding a subtle branded overlay or concept number

4. Adding to main branch:
```bash
git checkout main
# Add thumbnail to thumbnails directory
git add thumbnails/concept-1.png
git commit -m "Add thumbnail for concept 1"
git push origin main
```
```

## GitHub Pages Interactivity Capabilities

GitHub Pages supports fully interactive front-end implementations, including:

### Supported Features
- Complete HTML, CSS, and JavaScript
- Modern ES6+ JavaScript features
- CSS animations, transitions, and effects
- Client-side rendering frameworks (React, Vue, etc.)
- Any JavaScript library loaded via CDN
- Interactive elements (clicks, hover effects, etc.)
- Form displays and validations (but not submissions)
- Responsive designs for all devices
- Canvas and SVG graphics
- Local storage for persisting state during the session

### Limitations
- No server-side processing (PHP, Node.js, etc.)
- No database connections
- No authentication systems
- No form submission processing (would need external services)
- 1GB repository size limit
- 100GB bandwidth limit per month

For UX design concepts, these limitations rarely matter as you're focusing on the interface and interactions, not backend functionality.

## Working with LLM Code Agents

When working with an LLM-based code agent to develop concepts:

### Initial Setup
```
"Please read the context.md file and help me set up a UX design concepts repository in the current directory. I already have the folder created, so don't create any new directories. Just help me initialize git, set up the main branch with the gallery template, and prepare for concept branches."
```

### Creating a New Concept
```
"I need to create a new concept branch for [design problem]. The concept should follow [design approach/principles]. Please help me:
1. Create the branch structure
2. Implement the HTML, CSS, and JavaScript
3. Create a thumbnail for the main gallery
4. Update the main branch to include this concept"
```

### Implementing Specific Interactions
```
"For concept-2, I need to implement [specific interaction] that demonstrates [design principle]. Please provide the HTML, CSS, and JavaScript needed, focusing on smooth animations and intuitive behavior."
```

### Updating Multiple Concepts
```
"I need to apply a consistent header design across all concept branches. Please help me update each branch with the new design while preserving their unique features."
```

## Best Practices for UX Concept Branching

1. **Naming Convention**:
   - Use descriptive names: `concept-minimal`, `concept-gamified`, etc.
   - Or use numbered concepts for simple tracking: `concept-1`, `concept-2`

2. **Branch Organization**:
   - Keep main branch clean and focused on the gallery
   - Maintain separate assets per concept branch
   - Don't merge concept branches into each other

3. **Consistent Navigation**:
   - Include a link back to the main gallery in each concept
   - Consider adding pagination between concepts for easy comparison

4. **Thumbnail Creation**:
   - Use consistent dimensions for all thumbnails (e.g., 600x400)
   - Capture the most distinctive aspect of each concept
   - Add visual indicators if concepts target different devices

5. **Feedback Collection**:
   - Link each concept to a GitHub Issue template
   - Or integrate with external feedback tools via links
   - Consider adding annotation capabilities if needed

## Example Workflows

### Basic Workflow
1. Use existing directory and initialize repository
2. Implement main branch gallery
3. Create first concept branch
4. Add concept thumbnail to main branch
5. Update gallery to include first concept
6. Repeat steps 3-5 for additional concepts

### Advanced Workflow with Shared Components
1. Use existing directory and initialize repository with main branch
2. Create a `shared` branch for common components
3. For each concept:
   - Branch from `shared`
   - Implement unique concept features
   - Create thumbnail
   - Update main branch gallery

### Iteration Workflow
1. Receive feedback on a concept
2. Create a new iteration branch: `concept-1-iteration-2`
3. Implement changes based on feedback
4. Add new thumbnail to main branch
5. Update gallery to include the iteration
6. Optionally archive the previous iteration

## Final Notes

- This repository structure is designed for UX design concept exploration and presentation
- It's optimized for GitHub Pages to enable interactive prototypes without backend requirements
- The structure supports both individual designers and teams
- It creates a living archive of design explorations and iterations

---

Created by [Your Name] | Last Updated: [Date]
```
