const contactLinks = [
  {
    title: 'Email',
    label: 'Send me a message',
    value: 'giantrujillo98@gmail.com',
    href: 'mailto:giantrujillo98@gmail.com?subject=Portfolio%20Contact',
    icon: '✉',
    modifier: 'email',
  },
  {
    title: 'WhatsApp',
    label: 'Start a quick conversation',
    value: '+52 81 1037 9315',
    href: 'https://wa.me/528110379315',
    icon: '↗',
    modifier: 'whatsapp',
  },
];

const socialLinks = [
  {
    title: 'GitHub',
    href: 'https://github.com/gian-trujillo',
    isDownload: false,
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gian-trujillo/',
    isDownload: false,
  },
  {
    title: 'CV English',
    href: '/documents/Gian_Trujillo_CV_en.pdf',
    fileName: 'Gian_Trujillo_CV_en.pdf',
    isDownload: true,
  },
  {
    title: 'CV Spanish',
    href: '/documents/Gian_Trujillo_CV_es.pdf',
    fileName: 'Gian_Trujillo_CV_es.pdf',
    isDownload: true,
  },
];

function ContactSection() {
  return (
    <div className="contact">
      <div className="contact__content">
        <p className="contact__eyebrow">
          Contact
        </p>

        <h2 className="contact__title">
          Let’s build something clean, useful, and memorable.
        </h2>

        <p className="contact__description">
          I’m open to junior web developer opportunities, freelance projects,
          and collaborations where I can help build responsive interfaces,
          backend features, and full-stack JavaScript applications.
        </p>

        <div className="contact__meta">
          <p className="contact__meta-item">
            Based in Monterrey, México
          </p>
          <p className="contact__meta-item">
            Available for remote or local work
          </p>
        </div>
      </div>

      <div className="contact__actions" aria-label="Contact options">
        {contactLinks.map((link) => {
          return (
            <a
              className={`contact__card contact__card--${link.modifier}`}
              href={link.href}
              key={link.title}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <span className="contact__card-icon">
                {link.icon}
              </span>

              <span className="contact__card-info">
                <span className="contact__card-label">
                  {link.label}
                </span>

                <span className="contact__card-title">
                  {link.title}
                </span>

                <span className="contact__card-value">
                  {link.value}
                </span>
              </span>
            </a>
          );
        })}

        <div className="contact__socials">
          {socialLinks.map((link) => {
            return (
              <a
                className="contact__social-link"
                href={link.href}
                key={link.title}
                target={link.isDownload ? undefined : '_blank'}
                rel={link.isDownload ? link.fileName : undefined}
                download={link.isDownload ? link.fileName : undefined}
              >
                {link.title}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ContactSection;