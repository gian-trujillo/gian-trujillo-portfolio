import aroundUsImage from '../../assets/Images/Projects/around-us.jpg';
import photographySiteImage from '../../assets/Images/Projects/photography-site.jpg';
import losChanchitosImage from '../../assets/Images/Projects/los-chanchitos.jpg';

const projects = [
  {
    title: 'Around The U.S.',
    type: 'Full-stack social media-style app',
    description:
      'A full-stack project that simulates a photo-sharing social feed. Users can register, log in, edit their profile, add photo cards, like cards, and delete only the cards they created.',
    image: aroundUsImage,
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'REST API'],
    liveUrl: 'https://www.projectarounddomain.mooo.com/',
    githubUrl: 'https://github.com/gian-trujillo/web_project_api_full.git',
  },
  {
    title: 'Photography Portfolio',
    type: 'Full-stack business website',
    description:
      'A full-stack photography website with a public portfolio, dynamic gallery content, protected admin login, Cloudinary media uploads, and backend routes for managing site content.',
    image: photographySiteImage,
    technologies: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Cloudinary',
      'JWT',
    ],
    liveUrl: 'https://skylensadventures.com/',
    githubUrl: 'https://github.com/gian-trujillo/Full-Project.git',
  },
  {
    title: 'Los Chanchitos',
    type: 'Full-stack restaurant ordering app',
    description:
      'A full-stack restaurant ordering website with a customer-facing menu, cart/order flow, backend order handling, and an admin panel for receiving and managing orders in real time.',
    image: losChanchitosImage,
    technologies: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Socket.IO',
      'JWT',
    ],
    liveUrl: 'https://loschanchitos.masdiseno.com/',
    githubUrl: 'https://github.com/gian-trujillo/Los_Chanchitos.git',
  },
];

function ProjectSection() {
  return (
    <div className="projects">
      <div className="projects__header">
        <p className="projects__eyebrow">
          Selected work
        </p>

        <h2 className="projects__title">
          Projects that show my full-stack JavaScript process.
        </h2>

        <p className="projects__intro">
          These projects focus on real application structure: responsive React
          interfaces, authentication, backend routes, database models, and
          practical user flows.
        </p>
      </div>

      <div className="projects__grid">
        {projects.map((project) => {
          return (
            <article className="projects__card" key={project.title}>
              <img
                className="projects__image"
                src={project.image}
                alt={`${project.title} website screenshot`}
              />

              <div className="projects__overlay">
                <div className="projects__card-main">
                  <p className="projects__type">
                    {project.type}
                  </p>

                  <h3 className="projects__card-title">
                    {project.title}
                  </h3>
                </div>

                <div className="projects__details">
                  <p className="projects__description">
                    {project.description}
                  </p>

                  <ul className="projects__tech-list">
                    {project.technologies.map((technology) => {
                      return (
                        <li className="projects__tech-item" key={technology}>
                          {technology}
                        </li>
                      );
                    })}
                  </ul>

                  <div className="projects__links">
                    <a
                      className="projects__link"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live site
                    </a>

                    <a
                      className="projects__link projects__link--secondary"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectSection;