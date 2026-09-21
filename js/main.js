(function () {
  const { profile, skills, softSkills, experience, education, languages, interests } = window.CV;
  const bootTime = Date.now();

  function pad(n) {
    return String(n).padStart(2, '0');
  }

  function tickClock() {
    const now = new Date();
    const clock = document.getElementById('clock');
    const uptime = document.getElementById('uptime');
    if (clock) {
      clock.textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
    }
    if (uptime) {
      const s = Math.floor((Date.now() - bootTime) / 1000);
      uptime.textContent = `${pad(Math.floor(s / 3600))}:${pad(Math.floor((s / 60) % 60))}:${pad(s % 60)}`;
    }
  }

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

  function render() {
    document.title = `${profile.name} — Portfolio`;
    document.getElementById('app').innerHTML = `
      <div class="top-nav">
        <a href="https://github.kakronayan.dev/">← Workspace</a>
        <button class="theme-btn" id="themeBtn" type="button">Theme</button>
      </div>

      <div class="console-bar">
        <div class="seg"><span class="blink"></span><span class="live">PORTFOLIO ONLINE</span></div>
        <div class="seg" id="clock">--:--:--</div>
        <div class="seg">UPTIME <span id="uptime">00:00:00</span></div>
      </div>

      <header class="hero">
        <div>
          <p class="role">${profile.title.toUpperCase()}</p>
          <h1>${profile.name}</h1>
          <p class="about">${profile.about}</p>
        </div>
        <div class="stat-strip">
          <div><span class="num">${experience.length}</span><span class="lab">Roles</span></div>
          <div><span class="num">8+</span><span class="lab">Years</span></div>
          <div><span class="num">${skills.length}</span><span class="lab">Skills</span></div>
        </div>
      </header>

      <div class="section-head" id="contact">
        <h2><span class="dot"></span>Contact</h2>
        <span>reach me</span>
      </div>
      <div class="panel-grid cols-3">
        <div class="panel">
          <p class="label">Phone</p>
          <a href="tel:${profile.phone.replace(/\s/g, '')}">${profile.phone}</a>
        </div>
        <div class="panel">
          <p class="label">Email</p>
          <a href="mailto:${profile.email}">${profile.email}</a>
        </div>
        <div class="panel">
          <p class="label">Location</p>
          <span>${profile.location}</span>
        </div>
        <div class="panel">
          <p class="label">GitHub</p>
          <a href="${profile.github}" rel="noopener">github.com/kakronayan</a>
        </div>
      </div>

      <div class="section-head" id="personal">
        <h2><span class="dot"></span>Personal</h2>
        <span>from CV</span>
      </div>
      <div class="panel-grid cols-3">
        ${Object.entries(profile.personal)
          .map(
            ([key, value]) => `
          <div class="panel">
            <p class="label">${key.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase())}</p>
            <span>${value}</span>
          </div>`
          )
          .join('')}
      </div>

      <div class="section-head" id="experience">
        <h2><span class="dot"></span>Work Experience</h2>
        <span>${experience.length} positions</span>
      </div>
      <div class="card-list">
        ${experience
          .map(
            (job) => `
          <article class="card">
            <div class="card-head">
              <div>
                <h3>${job.role}</h3>
                <p class="company">${job.company}</p>
              </div>
              <span class="badge">${job.period}</span>
            </div>
            <ul>${job.highlights.map((item) => `<li>${item}</li>`).join('')}</ul>
          </article>`
          )
          .join('')}
      </div>

      <div class="two-col">
        <div>
          <div class="section-head" id="skills">
            <h2><span class="dot"></span>Technical Skills</h2>
          </div>
          <div class="skill-box">${skills.map(skillRow).join('')}</div>
        </div>
        <div>
          <div class="section-head" id="soft-skills">
            <h2><span class="dot"></span>Personal Skills</h2>
          </div>
          <div class="skill-box">${softSkills.map(skillRow).join('')}</div>
        </div>
      </div>

      <div class="section-head" id="education">
        <h2><span class="dot"></span>Education & Training</h2>
      </div>
      <div class="card-list">
        ${education
          .map(
            (item) => `
          <div class="card card-head">
            <div>
              <h3>${item.title}</h3>
              <p class="company" style="color:var(--text-dim)">${item.institution}</p>
            </div>
            <span class="badge">${item.period}</span>
          </div>`
          )
          .join('')}
      </div>

      <div class="two-col">
        <div>
          <div class="section-head" id="languages">
            <h2><span class="dot"></span>Languages</h2>
          </div>
          <div class="panel" style="border:1px solid var(--line);border-radius:var(--radius)">
            ${languages
              .map((lang) => `<div class="lang-row"><span>${lang.name}</span><span>${lang.level}</span></div>`)
              .join('')}
          </div>
        </div>
        <div>
          <div class="section-head" id="interests">
            <h2><span class="dot"></span>Interests</h2>
          </div>
          <div class="panel chips" style="border:1px solid var(--line);border-radius:var(--radius)">
            ${interests.map((item) => `<span class="chip">${item}</span>`).join('')}
          </div>
        </div>
      </div>

      <footer class="foot">
        <nav class="foot-menu">
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <a href="https://github.kakronayan.dev/">Workspace</a>
        </nav>
        <div class="foot-credit">
          <div class="line1"><a href="${profile.github}">${profile.name}</a><span class="sep">·</span>© ${new Date().getFullYear()}</div>
          <div class="line2">Banker · Full Stack · Cloud · <a href="${profile.github}">Contributor</a></div>
        </div>
      </footer>
    `;

    document.getElementById('themeBtn').addEventListener('click', toggleTheme);
    tickClock();
    setInterval(tickClock, 1000);
  }

  function toggleTheme() {
    const root = document.documentElement;
    const current = root.getAttribute('data-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (!current) {
      root.setAttribute('data-theme', prefersDark ? 'light' : 'dark');
    } else if (current === 'dark') {
      root.setAttribute('data-theme', 'light');
    } else {
      root.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', root.getAttribute('data-theme') || 'auto');
  }

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme && savedTheme !== 'auto') {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  render();
})();
