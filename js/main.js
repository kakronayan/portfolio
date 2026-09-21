(function () {
  const {
    profile,
    skills,
    softSkills,
    experience,
    innovations,
    education,
    languages,
    interests,
  } = window.CV;

  const techMarquee = [
    "React",
    "Next.js",
    "Vue.js",
    "Nuxt.js",
    "TypeScript",
    "Spring Boot",
    "Node.js",
    "Laravel",
    "Microservices",
    "Micro-frontend",
    "AWS",
    "GCP",
    "Elasticsearch",
    "AI Studio",
  ];

  function skillRow(skill) {
    return `
      <div class="skill-row">
        <div class="skill-meta">
          <span>${skill.name}</span>
          <span>${skill.level}%</span>
        </div>
        <div class="skill-bar"><i style="width:${skill.level}%"></i></div>
      </div>`;
  }

  function timelineItem(job) {
    const isCurrent = job.current;
    return `
      <div class="timeline-item">
        <div class="timeline-dot${isCurrent ? " current" : ""}"></div>
        <article class="timeline-card${isCurrent ? " current" : ""}">
          <div class="timeline-head">
            <div>
              <h3>${job.role}</h3>
              <p class="company">${job.company}</p>
            </div>
            <span class="badge${isCurrent ? " live" : ""}">${job.period}</span>
          </div>
          <ul>${job.highlights.map((item) => `<li>${item}</li>`).join("")}</ul>
        </article>
      </div>`;
  }

  function render() {
    document.title = `${profile.name} — Portfolio`;
    document.getElementById("app").innerHTML = `
      <div class="bg-grid"></div>
      <div class="bg-glow"></div>

      <nav class="top-nav">
        <div class="nav-links">
          <a href="#experience">Experience</a>
          <a href="#innovations">Innovation</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
        <div class="nav-actions">
          <a class="back-link" href="${profile.website}">← Workspace</a>
          <button class="theme-btn" id="themeBtn" type="button" aria-label="Toggle theme">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
            </svg>
          </button>
        </div>
      </nav>

      <header class="hero">
        <div class="avatar-wrap">
          <div class="avatar-ring">
            <img src="${profile.avatar}" alt="${profile.name}" width="120" height="120">
          </div>
        </div>
        <div class="hero-content">
          <div class="hero-badge">
            <span class="pulse-dot"></span>
            Available for collaboration
          </div>
          <h1><span class="gradient-text">${profile.name}</span></h1>
          <p class="role">${profile.title}</p>
          <p class="about">${profile.about}</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="#experience">View Experience</a>
            <a class="btn btn-outline" href="${profile.github}" rel="noopener">GitHub</a>
            <a class="btn btn-outline" href="mailto:${profile.email}">Contact</a>
          </div>
        </div>
      </header>

      <div class="stats-bento">
        <div class="stat-card"><span class="num">${experience.length}</span><span class="lab">Roles</span></div>
        <div class="stat-card"><span class="num">8+</span><span class="lab">Years</span></div>
        <div class="stat-card"><span class="num">${skills.length}</span><span class="lab">Skills</span></div>
      </div>

      <div class="marquee-wrap">
        <div class="marquee-track">
          ${[...techMarquee, ...techMarquee].map((t) => `<span>${t}</span>`).join("")}
        </div>
      </div>

      <section class="section" id="experience">
        <div class="section-head">
          <h2>Work Experience</h2>
          <span>${experience.length} positions</span>
        </div>
        <div class="timeline">
          ${experience.map(timelineItem).join("")}
        </div>
      </section>

      <section class="section" id="innovations">
        <div class="section-head">
          <h2>Innovation Projects</h2>
          <span>${innovations.length} projects</span>
        </div>
        <div class="innovation-grid">
          ${innovations
            .map(
              (project) => `
            <article class="innovation-card">
              <h3>${project.title}</h3>
              <p>${project.summary}</p>
              <div class="info-panel chips">
                ${project.stack.map((item) => `<span class="chip">${item}</span>`).join("")}
              </div>
            </article>`,
            )
            .join("")}
        </div>
      </section>

      <div class="two-col section">
        <section id="skills">
          <div class="section-head"><h2>Technical Skills</h2></div>
          <div class="skill-box">${skills.map(skillRow).join("")}</div>
        </section>
        <section id="soft-skills">
          <div class="section-head"><h2>Personal Skills</h2></div>
          <div class="skill-box">${softSkills.map(skillRow).join("")}</div>
        </section>
      </div>

      <section class="section" id="education">
        <div class="section-head"><h2>Education & Training</h2></div>
        <div class="edu-list">
          ${education
            .map(
              (item) => `
            <div class="edu-card">
              <div>
                <h3>${item.title}</h3>
                <p class="institution">${item.institution}</p>
              </div>
              <span class="badge">${item.period}</span>
            </div>`,
            )
            .join("")}
        </div>
      </section>

      <section class="section" id="contact">
        <div class="section-head"><h2>Contact</h2><span>reach me</span></div>
        <div class="bento-grid">
          <div class="bento-card">
            <p class="label">Phone</p>
            <a href="tel:${profile.phone.replace(/\s/g, "")}">${profile.phone}</a>
          </div>
          <div class="bento-card">
            <p class="label">Email</p>
            <a href="mailto:${profile.email}">${profile.email}</a>
          </div>
          <div class="bento-card">
            <p class="label">Location</p>
            <span>${profile.location}</span>
          </div>
          <div class="bento-card">
            <p class="label">GitHub</p>
            <a href="${profile.github}" rel="noopener">github.com/kakronayan</a>
          </div>
          <div class="bento-card">
            <p class="label">Website</p>
            <a href="${profile.website}" rel="noopener">kakronayan.github.io</a>
          </div>
        </div>
      </section>

      <section class="section" id="personal">
        <div class="section-head"><h2>Personal</h2><span>from CV</span></div>
        <div class="bento-grid">
          ${Object.entries(profile.personal)
            .map(
              ([key, value]) => `
            <div class="bento-card">
              <p class="label">${key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase())}</p>
              <span>${value}</span>
            </div>`,
            )
            .join("")}
        </div>
      </section>

      <div class="two-col section">
        <section id="languages">
          <div class="section-head"><h2>Languages</h2></div>
          <div class="info-panel">
            ${languages
              .map(
                (lang) =>
                  `<div class="lang-row"><span>${lang.name}</span><span>${lang.level}</span></div>`,
              )
              .join("")}
          </div>
        </section>
        <section id="interests">
          <div class="section-head"><h2>Interests</h2></div>
          <div class="info-panel chips">
            ${interests.map((item) => `<span class="chip">${item}</span>`).join("")}
          </div>
        </section>
      </div>

      <footer class="foot">
        <nav class="foot-menu">
          <a href="#experience">Experience</a>
          <a href="#innovations">Innovation</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <a href="${profile.website}">Workspace</a>
        </nav>
        <div class="foot-credit">
          <div class="line1"><a href="${profile.github}">${profile.name}</a><span class="sep">·</span>© ${new Date().getFullYear()}</div>
          <div class="line2">Banker · Full Stack · Cloud · <a href="${profile.github}">Contributor</a></div>
        </div>
      </footer>
    `;

    document.getElementById("themeBtn").addEventListener("click", toggleTheme);
  }

  function toggleTheme() {
    const root = document.documentElement;
    const current = root.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  }

  const savedTheme = localStorage.getItem('theme');
  document.documentElement.setAttribute('data-theme', savedTheme || 'dark');

  render();
})();
