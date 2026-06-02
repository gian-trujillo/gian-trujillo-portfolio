const technologies = [
  {
    name: 'JavaScript',
    label: 'Language',
    description: 'Interactive logic, data handling, and app behavior.',
  },
  {
    name: 'React',
    label: 'Frontend',
    description: 'Component-based interfaces and state-driven UI.',
  },
  {
    name: 'Node.js',
    label: 'Backend',
    description: 'Server-side JavaScript and API logic.',
  },
  {
    name: 'Express',
    label: 'API',
    description: 'Routes, middleware, validation, and backend structure.',
  },
  {
    name: 'MongoDB',
    label: 'Database',
    description: 'Document-based data storage for full-stack apps.',
  },
];

function AboutSection() {
  return (
    <div className="about">
      <div className="about__content">
        <p className="about__eyebrow">
          About me
        </p>

        <h2 className="about__title">
          I build full-stack JavaScript applications with clean interfaces and practical backend logic.
        </h2>

        <div className="about__text">
          <p className="about__paragraph">
            I’m a Full Stack JavaScript Developer focused on building responsive,
            practical web applications with React, Node.js, Express, and MongoDB.
            I enjoy turning ideas into clean user interfaces, connecting them to
            reliable backend logic, and making the final experience feel simple
            and useful for the person using it.
          </p>

          <p className="about__paragraph">
            My background in photography, video work, fitness, and self-directed
            learning has shaped the way I approach development. It trained me to
            pay attention to detail, stay consistent, solve problems patiently,
            and keep improving the quality of my work one version at a time.
          </p>
        </div>
      </div>

      <aside className="about__stack" aria-label="Technologies I use">
        {technologies.map((technology) => {
          return (
            <article className="about__card" key={technology.name}>
              <div className="about__card-header">
                <span className="about__card-icon">
                  {technology.name.slice(0, 2)}
                </span>

                <div>
                  <h3 className="about__card-title">
                    {technology.name}
                  </h3>
                  <p className="about__card-label">
                    {technology.label}
                  </p>
                </div>
              </div>

              <p className="about__card-description">
                {technology.description}
              </p>
            </article>
          );
        })}
      </aside>
    </div>
  );
}

export default AboutSection;