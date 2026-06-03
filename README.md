# Gian Trujillo | Full-Stack JavaScript Developer Portfolio

A personal web developer portfolio built with React and Vite. The site presents my profile, projects, technical skills, and contact information through a horizontal full-screen navigation experience.

## Live Site

[View Portfolio](https://your-portfolio-url.com)

## Overview

This portfolio was designed to be more than a static personal page. It uses a horizontal section-based layout where users can move through the site by scrolling, swiping, using keyboard navigation, or clicking the navigation indicators.

The goal of the project is to showcase my ability to build a polished, responsive, and interactive React application while presenting my work as a Full-Stack JavaScript Developer.

## Features

* Full-screen horizontal section navigation
* Smooth animated transitions using Motion for React
* Responsive design for desktop, tablet, and mobile
* Vertical scrolling inside sections when content exceeds screen height
* Interactive project cards with screenshot backgrounds
* Skills section with animated category reveal cards
* Contact section with email, WhatsApp, GitHub, LinkedIn, and CV download links
* SEO-friendly title, meta description, favicon, Open Graph tags, robots file, and sitemap
* Accessible navigation with keyboard support

## Sections

### Hero

Introduces my name, profile image, and role as a Full-Stack JavaScript Developer.

### About Me

Briefly describes my web development focus, technical background, and personal qualities such as discipline, creativity, and attention to detail.

### Projects

Showcases two main projects:

#### Around The U.S.

A full-stack social media-style application where users can register, log in, edit their profile, add photo cards, like cards, and delete only the cards they created.

#### Photography Portfolio Website

A full-stack photography website with a public portfolio, dynamic gallery content, protected admin login, Cloudinary media uploads, and backend routes for managing site content.

### Skills

Organizes my technical skills into categories such as frontend, backend, database, tools, deployment, and workflow.

### Contact

Provides direct links to contact me by email, WhatsApp, GitHub, LinkedIn, and download my CV in English or Spanish.

## Technologies Used

* React
* Vite
* JavaScript
* CSS
* BEM methodology
* Motion for React
* Git
* GitHub

## Project Structure

```txt
src/
  assets/
    images/
      projects/
  components/
    AboutSection/
    ContactSection/
    Hero/
    PortfolioLayout/
    ProjectSection/
    SectionControls/
    SkillsSection/
  utils/
    sections.js
  App.jsx
  index.css
  main.jsx

public/
  documents/
    gian-trujillo-cv-en.pdf
    gian-trujillo-cv-es.pdf
  favicon.png
  og-image.png
  robots.txt
  sitemap.xml
```

## Installation and Setup

Clone the repository:

```bash
git clone https://github.com/giantrujillo98/your-repository-name.git
```

Navigate into the project folder:

```bash
cd your-repository-name
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build the project for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Responsive Behavior

The site uses horizontal navigation as the main experience. On smaller screens or shorter viewports, sections can also scroll vertically so users can view all content without breaking the horizontal navigation concept.

## Navigation

Users can move through the portfolio using:

* Mouse wheel
* Touch swipe
* Arrow keys
* Section navigation buttons
* Bottom section indicators
* Escape key to return to the Hero section

## SEO and Metadata

The project includes:

* Custom page title
* Meta description
* Favicon
* Open Graph metadata
* Twitter card metadata
* `robots.txt`
* `sitemap.xml`
* Structured data for personal portfolio information

## Future Improvements

* Add more projects as my portfolio grows
* Improve project case studies with technical challenges and solutions
* Add real technology icons
* Add a language toggle between English and Spanish
* Add a contact form connected to a backend or email service
* Improve animation details while preserving accessibility and performance

## Author

**Gian Trujillo**
Full-Stack JavaScript Developer

* GitHub: [@giantrujillo98](https://github.com/giantrujillo98)
* LinkedIn: [Gian Trujillo](https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME)
* Email: [giantrujillo98@gmail.com](mailto:giantrujillo98@gmail.com)
