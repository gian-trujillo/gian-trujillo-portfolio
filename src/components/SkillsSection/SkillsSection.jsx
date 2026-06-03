const skillGroups = [
  {
    title: 'Frontend',
    number: '01',
    description:
      'Building responsive interfaces, reusable components, and interactive user experiences.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'BEM'],
  },
  {
    title: 'Backend',
    number: '02',
    description:
      'Creating server logic, protected routes, middleware, validation, and REST APIs.',
    technologies: ['Node.js', 'Express', 'JWT', 'bcrypt', 'Celebrate', 'Joi'],
  },
  {
    title: 'Database',
    number: '03',
    description:
      'Modeling application data, connecting APIs to persistent storage, and working with documents.',
    technologies: ['MongoDB', 'Mongoose', 'Schemas', 'CRUD', 'NoSQL'],
  },
  {
    title: 'Tools',
    number: '04',
    description:
      'Using professional development tools to write, organize, debug, and version code.',
    technologies: ['Git', 'GitHub', 'VS Code', 'Postman', 'ESLint', 'npm'],
  },
  {
    title: 'Deployment',
    number: '05',
    description:
      'Preparing projects for production and connecting frontend, backend, domains, and servers.',
    technologies: ['Google Cloud', 'PM2', 'Nginx', 'Cloudinary', 'Vercel'],
  },
  {
    title: 'Workflow',
    number: '06',
    description:
      'Working with branches, reusable components, clean structure, and step-by-step iteration.',
    technologies: ['Feature branches', 'Component structure', 'Responsive design', 'Code review'],
  },
];

function SkillsSection() {
  return (
    <div className="skills">
      <div className="skills__header">
        <p className="skills__eyebrow">
          Technical skills
        </p>

        <h2 className="skills__title">
          I work across the full JavaScript stack.
        </h2>

        <p className="skills__intro">
          My current focus is building complete web applications: clean React
          interfaces, organized backend logic, database models, authentication,
          deployment, and a maintainable development workflow.
        </p>
      </div>

      <div className="skills__list">
        {skillGroups.map((group) => {
          return (
            <article className="skills__item" key={group.title} tabIndex="0">
              <div className="skills__item-main">
                <span className="skills__number">
                  {group.number}
                </span>

                <h3 className="skills__item-title">
                  {group.title}
                </h3>
              </div>

              <div className="skills__item-details">
                <p className="skills__description">
                  {group.description}
                </p>

                <ul className="skills__tech-list">
                  {group.technologies.map((technology) => {
                    return (
                      <li className="skills__tech-item" key={technology}>
                        {technology}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default SkillsSection;