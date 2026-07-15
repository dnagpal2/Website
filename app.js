const experiences = [
  { company: 'WSP', logo: 'images/WSP-Logo-Thumbnail-1200x630.png', role: 'Software Engineer I', employment: 'Permanent full-time', period: 'Apr 2026 - Present', duration: '4 mos', place: 'Toronto, Ontario, Canada', track: 'Backend / product infrastructure', detail: 'Building backend and product infrastructure for large-scale engineering workflows.', focus: ['Backend systems', 'Product infrastructure', 'Data platforms'], tech: ['Backend', 'Infrastructure', 'Data systems'] },
  { company: 'SadServers', logo: 'images/sadservers.png', role: 'Software Engineer', employment: 'Internship', period: 'Sep 2025 - Jan 2026', duration: '5 mos', place: 'Waterloo, Ontario, Canada', track: 'AI / site reliability', detail: 'Built an AI SRE agent for Linux and DevOps troubleshooting workflows.', focus: ['AI SRE agent', 'DevOps workflows', 'Linux systems'], tech: ['AI agents', 'DevOps', 'Linux'] },
  { company: 'WSP', logo: 'images/WSP-Logo-Thumbnail-1200x630.png', role: 'Software Engineer', employment: 'Internship', period: 'May 2025 - Aug 2025', duration: '4 mos', place: 'Toronto, Ontario, Canada', track: 'Data engineering', detail: 'Developed large-scale ELT pipelines and database systems for engineering data.', focus: ['ELT pipelines', 'Database development', 'Engineering data'], tech: ['ELT', 'Databases', 'Data engineering'] },
  { company: 'Swimingo', logo: 'images/swimingo.jpg', role: 'Software Engineer', employment: 'Internship', period: 'Feb 2025 - May 2025', duration: '4 mos', place: 'Toronto, Ontario, Canada', track: 'Backend systems', detail: 'Built global scheduling and promotions platforms for international bookings.', focus: ['Global scheduling', 'Promotion rules', 'Relational data'], tech: ['Node.js', 'Sequelize', 'PostgreSQL'] },
  { company: 'Mesh AI', logo: 'images/meshAI_logo.png', role: 'Software Engineer', employment: 'Internship', period: 'Aug 2024 - Nov 2024', duration: '4 mos', place: 'Toronto, Ontario, Canada', track: 'Applied AI', detail: 'Delivered an LLM-powered SQL assistant with guarded text-to-SQL workflows for clinicians.', focus: ['Guarded text-to-SQL', 'Clinical workflows', 'Serverless delivery'], tech: ['Python', 'LangChain', 'AWS Lambda', 'PostgreSQL'] },
  { company: 'Bitlearns', logo: 'images/bitlearns_logo.png', role: 'Full Stack Engineer', employment: 'Internship', period: 'Jul 2024 - Nov 2024', duration: '5 mos', place: 'Toronto, Ontario, Canada', track: 'Full-stack product', detail: 'Shipped AI-backed learning features and real-time notifications designed to increase product engagement.', focus: ['AI learning tools', 'Real-time events', 'Product engagement'], tech: ['React', 'Node.js', 'TypeScript', 'Socket.io'] },
  { company: 'Preeminent Technology', logo: 'images/preeminentTech.png', role: 'Backend Engineer', employment: 'Internship', period: 'Aug 2024 - Oct 2024', duration: '3 mos', place: 'Toronto, Ontario, Canada', track: 'Backend systems', detail: 'Built backend services powering AI-assisted travel booking workflows.', focus: ['Travel workflows', 'AI integrations', 'Cloud services'], tech: ['.NET', 'Node.js', 'Azure'] },
  { company: 'RAPYD LinX', logo: 'images/rapydLinx.png', role: 'Software Engineer', employment: 'Internship', period: 'May 2024 - Aug 2024', duration: '4 mos', place: 'Toronto, Ontario, Canada', track: 'Automation', detail: 'Automated sales processing and reporting workflows used by the sales team.', focus: ['Sales automation', 'Operational reports', 'Desktop tooling'], tech: ['Python', 'SQL', 'JavaFX'] },
  { company: 'Rocscience', logo: 'images/rocscience.png', role: 'Software Engineer', employment: 'Internship', period: 'May 2023 - Aug 2023', duration: '4 mos', place: 'Toronto, Ontario, Canada', track: 'Quality engineering', detail: 'Built backend automation that accelerated regression tests and diagnostics.', focus: ['Build verification', 'Regression automation', 'Diagnostics'], tech: ['Python', 'Automation'] },
  { company: 'Western WE-BOTS', logo: 'images/weBots.png', role: 'Firmware Engineer', employment: 'Student engineering team', period: 'Nov 2022 - Jan 2024', duration: '1 yr 3 mos', place: 'London, Ontario, Canada', track: 'Embedded systems', detail: "Built CAN and ROS telemetry firmware for a life-size robot's motion data.", focus: ['CAN telemetry', 'Robot motion data', 'Firmware integration'], tech: ['C++', 'ROS', 'MQTT'] }
];

const projects = [
  { title: 'JobLoop', image: 'images/jobloop-logo.webp', url: 'https://www.jobloop.ca/', description: 'A focused job-search workspace for tracking applications, organizing progress, and preparing smarter for interviews.', tech: 'Full-stack product · 2026', category: 'featured', featured: true },
  { title: 'Trailer Vault', image: 'images/trailer-vault.webp', url: 'https://trailer-vault.vercel.app/', description: 'A social trailer discovery platform where people can list, follow, and message each other in real time.', tech: 'Java · Spring Boot · React · WebSockets', category: 'fullstack' },
  { title: 'Finance WebApp', image: 'images/finance.png', url: 'https://financetracker-eohh.onrender.com/', description: 'A finance tracker and stock-prediction workspace built around approachable market intelligence.', tech: 'Node.js · JavaScript · Transformers', category: 'ai' },
  { title: 'AI Chatbot', image: 'images/ai_chatbot.png', url: 'https://chat-bot-dnagpal.streamlit.app/', description: 'An interactive LLM chatbot experience with a streamlined conversational interface.', tech: 'LLMs · Node.js · Streamlit', category: 'ai' },
  { title: 'Path Finder', image: 'images/path_finder.png', url: 'https://dnagpal2.github.io/Path-Finder--Maze-Generator/', description: 'An interactive pathfinding and maze-generation visualizer for exploring classic algorithms.', tech: 'JavaScript · Algorithms · HTML · CSS', category: 'frontend' }
];

const skillGroups = [
  ['Languages & frameworks', ['Java', 'Spring Boot', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'FastAPI', 'React', 'Next.js']],
  ['Data & systems', ['SQL', 'PostgreSQL', 'Azure SQL', 'MongoDB', 'Redis', 'Kafka', 'Prisma', 'GraphQL']],
  ['AI & machine learning', ['LLMs', 'LangChain', 'RAG', 'TensorFlow', 'PyTorch', 'Prompt engineering']],
  ['Cloud & delivery', ['AWS', 'GCP', 'Azure', 'Docker', 'Jenkins', 'Git', 'Jira', 'Postman']]
];

const recommendations = [
  { name: 'Joaquin Berrios', role: 'Full Stack Developer · Mesh AI', quote: 'Devraj consistently proposed solutions to challenges and sought ways to improve the product. He communicated clearly with everyone and was a great addition to the team.' },
  { name: 'Eduardo Benetti', role: 'Co-Founder · Bitlearns', quote: 'Devraj’s versatility let him excel across several areas of the product. His eagerness to learn, technical strength, and collaborative approach made him a crucial contributor.' },
  { name: 'Ethan Heming', role: 'CTO / Software Developer · Mesh AI', quote: 'Devraj helped identify a feasible LLM strategy for complex customer queries, communicated ideas easily, and brought workable hypotheses to the table.' }
];

const views = ['about', 'experience', 'projects', 'skills', 'recommendations', 'linkedin', 'contact'];
const state = {
  current: 'about',
  history: ['about'],
  historyIndex: 0,
  projectFilter: 'all',
  experienceIndex: 0,
  recommendationIndex: 0
};
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const cinematic = document.getElementById('cinematic');
const roomScene = document.getElementById('roomScene');
const povScene = document.getElementById('povScene');
const portfolioApp = document.getElementById('portfolioApp');
const pageView = document.getElementById('pageView');
const pageLoading = document.getElementById('pageLoading');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const timers = [];

const schedule = (callback, delay) => {
  const timer = window.setTimeout(callback, delay);
  timers.push(timer);
  return timer;
};

function getSavedTheme() {
  try {
    return window.localStorage.getItem('portfolio-theme') === 'dark' ? 'dark' : 'light';
  } catch {
    return 'light';
  }
}

function applyTheme(theme, persist = false) {
  const normalized = theme === 'dark' ? 'dark' : 'light';
  const dark = normalized === 'dark';
  document.documentElement.dataset.theme = normalized;
  document.documentElement.style.colorScheme = normalized;
  themeToggle.setAttribute('aria-pressed', String(dark));
  themeToggle.setAttribute('aria-label', dark ? 'Use light mode' : 'Use dark mode');
  themeToggle.title = dark ? 'Use light mode' : 'Use dark mode';
  themeIcon.className = dark ? 'fa-regular fa-sun' : 'fa-regular fa-moon';
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  if (themeMeta) themeMeta.content = dark ? '#0f1413' : '#e8edf3';
  if (persist) {
    try {
      window.localStorage.setItem('portfolio-theme', normalized);
    } catch {
      // The theme still applies when storage is unavailable.
    }
  }
}

function clearIntroTimers() {
  while (timers.length) window.clearTimeout(timers.pop());
}

function typePassword() {
  const dots = document.getElementById('passwordDots');
  const loginScreen = document.querySelector('.login-screen');
  const loginMessage = document.getElementById('loginMessage');
  dots.textContent = '';
  povScene.classList.add('is-typing');
  let count = 0;
  const typeTimer = window.setInterval(() => {
    count += 1;
    dots.textContent += '•';
    if (count === 9) {
      window.clearInterval(typeTimer);
      schedule(() => {
        povScene.classList.remove('is-typing');
        loginScreen.classList.add('is-unlocked');
        loginMessage.textContent = 'Welcome back';
      }, 220);
    }
  }, 125);
}

function finishIntro(focusContent = false) {
  clearIntroTimers();
  cinematic.classList.add('is-finished');
  portfolioApp.classList.add('is-visible');
  cinematic.inert = true;
  portfolioApp.inert = false;
  portfolioApp.setAttribute('aria-hidden', 'false');
  cinematic.setAttribute('aria-hidden', 'true');
  document.body.classList.add('portfolio-ready');
  if (focusContent) document.getElementById('portfolioContent').focus();
}

function runIntro() {
  clearIntroTimers();
  cinematic.classList.remove('is-finished');
  portfolioApp.classList.remove('is-visible');
  roomScene.classList.remove('is-running', 'is-sitting', 'is-pov');
  void roomScene.offsetWidth;
  roomScene.classList.add('is-running');
  povScene.classList.remove('is-visible', 'is-typing');
  document.querySelector('.login-screen').classList.remove('is-unlocked');
  document.getElementById('passwordDots').textContent = '';
  document.getElementById('loginMessage').textContent = 'Enter password';
  cinematic.removeAttribute('aria-hidden');
  portfolioApp.setAttribute('aria-hidden', 'true');
  cinematic.inert = false;
  portfolioApp.inert = true;

  if (reducedMotion) {
    finishIntro();
    return;
  }

  schedule(() => {
    roomScene.classList.add('is-sitting');
  }, 2600);
  schedule(() => {
    roomScene.classList.add('is-pov');
    povScene.classList.add('is-visible');
  }, 4050);
  schedule(typePassword, 5000);
  schedule(() => finishIntro(), 7350);
}

function aboutView() {
  return `
    <div class="content-shell about-page">
      <div class="page-spine" aria-hidden="true"><span>DN</span><strong>01</strong></div>
      <section class="about-intro">
        <div class="about-presence">
          <img src="images/profile-devraj.webp" alt="Devraj Nagpal" decoding="async">
          <div><span class="presence-dot"></span><strong>Software engineer</strong><small>Toronto, Canada</small></div>
        </div>
        <p class="page-eyebrow">Portfolio / 2026</p>
        <h1 class="about-name"><span>Devraj</span><span>Nagpal.</span></h1>
        <p class="about-lede">I build full-stack products, backend systems, and applied AI that hold up outside the demo.</p>
        <div class="hero-actions">
          <button class="action-button blue" type="button" data-view-link="projects">See selected work <i class="fa-solid fa-arrow-right"></i></button>
          <button class="text-action" type="button" data-view-link="experience">Read my experience</button>
        </div>
      </section>
      <aside class="profile-board">
        <div class="board-label"><span>Now building</span><span>01 / JobLoop</span></div>
        <div class="jobloop-lockup">
          <img src="images/jobloop-logo.webp" alt="JobLoop" decoding="async">
          <strong>JobLoop</strong>
        </div>
        <h2>A calmer way to run a job search.</h2>
        <p>Used by 1,000+ job seekers to track applications, stay organized, and prepare for the conversations that matter.</p>
        <dl class="project-facts">
          <div><dt>Role</dt><dd>Founder & engineer</dd></div>
          <div><dt>Focus</dt><dd>Product, systems, UX</dd></div>
        </dl>
        <a class="board-link" href="https://www.jobloop.ca/" target="_blank" rel="noopener noreferrer">Visit jobloop.ca <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
      </aside>
      <section class="about-proof" aria-label="Engineering focus">
        <article><span>01</span><div><strong>Product engineering</strong><p>Turning unclear workflows into software people can actually use.</p></div></article>
        <article><span>02</span><div><strong>Backend systems</strong><p>Designing reliable services, data models, and integrations.</p></div></article>
        <article><span>03</span><div><strong>Applied AI</strong><p>Using LLMs where they improve a real workflow, with guardrails.</p></div></article>
      </section>
    </div>`;
}

function experienceSpotlightView(selected, index) {
  return `<article class="experience-spotlight" id="experienceSpotlight" aria-live="polite">
    <header class="spotlight-header">
      <div class="spotlight-company"><img src="${selected.logo}" alt="${selected.company} logo"><div><span>Selected role</span><strong>${selected.company}</strong></div></div>
      <span class="role-track">${selected.track}</span>
    </header>
    <div class="spotlight-story">
      <span class="spotlight-number">${String(index + 1).padStart(2, '0')}</span>
      <h2>${selected.role}</h2>
      <p class="spotlight-summary">${selected.detail}</p>
      <div class="focus-list">
        ${selected.focus.map((focus, focusIndex) => `<div><span>${String(focusIndex + 1).padStart(2, '0')}</span><strong>${focus}</strong></div>`).join('')}
      </div>
      <div class="spotlight-stack"><span>Tools & focus</span><div class="tag-list">${selected.tech.map((tech) => `<span class="tag">${tech}</span>`).join('')}</div></div>
    </div>
    <dl class="role-context">
      <div><dt>Dates</dt><dd>${selected.period}</dd></div>
      <div><dt>Location</dt><dd>${selected.place}</dd></div>
      <div><dt>Practice</dt><dd>${selected.track}</dd></div>
    </dl>
  </article>`;
}

function experienceView() {
  const roleNav = experiences.map((item, index) => `
    <button class="career-nav-item ${index === state.experienceIndex ? 'is-active' : ''}" type="button" data-experience-index="${index}" aria-pressed="${index === state.experienceIndex}">
      <img src="${item.logo}" alt=""><span><strong>${item.company}</strong><small>${item.role}</small></span><span class="career-year">${item.period.slice(-4)}</span>
    </button>`).join('');
  return `
    <div class="content-shell career-page">
      <div class="page-spine" aria-hidden="true"><span>DN</span><strong>02</strong></div>
      <div class="career-heading">
        <div><p class="page-eyebrow">Experience</p><h1 class="page-title">From robot telemetry to product and AI.</h1></div>
        <p class="career-summary">${experiences.length} engineering roles shaped how I work: understand the system, reduce the ambiguity, and ship the useful version.</p>
      </div>
      <div class="career-arc" aria-label="Career progression"><span>Embedded systems</span><i></i><span>Automation</span><i></i><span>Backend</span><i></i><span>Product & AI</span></div>
      <div class="experience-workspace">
        <aside class="career-switcher" aria-label="Select an experience"><div class="switcher-label"><span>Role index</span><strong id="experienceCounter">${String(state.experienceIndex + 1).padStart(2, '0')} / ${String(experiences.length).padStart(2, '0')}</strong></div>${roleNav}</aside>
        ${experienceSpotlightView(experiences[state.experienceIndex] || experiences[0], state.experienceIndex)}
      </div>
    </div>`;
}

function projectsView() {
  const filters = [['all', 'All work'], ['featured', 'Featured'], ['ai', 'AI'], ['fullstack', 'Full stack'], ['frontend', 'Frontend']];
  const visibleProjects = state.projectFilter === 'all' ? projects : projects.filter((project) => project.category === state.projectFilter);
  const cards = visibleProjects.map((project) => {
    const projectIndex = projects.indexOf(project);
    const categoryLabel = project.category === 'fullstack' ? 'Full stack' : project.category === 'ai' ? 'Applied AI' : project.category === 'frontend' ? 'Frontend' : 'Current product';
    return `
      <article class="project-card ${project.featured ? 'is-featured jobloop' : ''}">
        <a class="project-visual" href="${project.url}" target="_blank" rel="noopener noreferrer" aria-label="Open ${project.title}">
          <img src="${project.image}" alt="${project.featured ? `${project.title} logo` : `${project.title} project preview`}" loading="lazy" decoding="async">
          <span class="project-watermark" aria-hidden="true">${String(projectIndex + 1).padStart(2, '0')}</span>
        </a>
        <div class="project-body">
          <div class="project-kicker"><span>${project.featured ? 'Now building' : 'Selected build'}</span><span>${categoryLabel}</span></div>
          <h2>${project.title}</h2>
          <p>${project.description}</p>
          <div class="project-meta">${project.tech}</div>
          <a class="project-link" href="${project.url}" target="_blank" rel="noopener noreferrer">View the project <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </article>`;
  }).join('');
  return `<div class="content-shell projects-page"><div class="page-spine" aria-hidden="true"><span>DN</span><strong>03</strong></div><div class="section-heading project-heading"><div><p class="page-eyebrow">Selected work</p><h1 class="page-title">Ideas taken all the way to working software.</h1></div><p>Product thinking, backend engineering, applied AI, and interfaces built to make complicated work feel clear.</p></div><div class="filter-row" aria-label="Filter projects">${filters.map(([key, label]) => `<button class="filter-chip ${state.projectFilter === key ? 'is-active' : ''}" type="button" data-project-filter="${key}">${label}</button>`).join('')}</div><div class="projects-grid">${cards || '<div class="empty-state">No projects in this filter.</div>'}</div></div>`;
}

function skillsView() {
  const technologies = [
    ['devicon-java-plain', 'Java'], ['devicon-spring-original', 'Spring'], ['devicon-javascript-plain', 'JavaScript'], ['devicon-typescript-plain', 'TypeScript'], ['devicon-nodejs-plain', 'Node.js'], ['devicon-python-plain', 'Python'], ['devicon-react-original', 'React'], ['devicon-nextjs-plain', 'Next.js'], ['devicon-postgresql-plain', 'PostgreSQL'], ['devicon-docker-plain', 'Docker']
  ];
  const track = [...technologies, ...technologies].map(([icon, label]) => `<div class="tech-tile"><i class="${icon}"></i><span>${label}</span></div>`).join('');
  const groups = skillGroups.map(([title, skills], index) => `<article class="skill-group"><header><span>${String(index + 1).padStart(2, '0')}</span><h2>${title}</h2></header><ul>${skills.map((skill) => `<li>${skill}</li>`).join('')}</ul></article>`).join('');
  return `<div class="content-shell skills-page"><div class="page-spine" aria-hidden="true"><span>DN</span><strong>04</strong></div><p class="page-eyebrow">Toolkit</p><h1 class="page-title">The stack changes. The way I work does not.</h1><p class="page-intro">I choose tools around the product, the team, and the constraints, then keep the implementation understandable.</p><div class="skill-marquee" aria-label="Technology stack"><div class="skill-track">${track}</div><div class="skill-track reverse">${track}</div></div><div class="skills-layout">${groups}</div><section class="practice-notes"><header><span>Engineering practice</span><strong>How I approach the work</strong></header><div><span>01</span><strong>Design the boundaries</strong><p>Make the data flow, ownership, and failure modes explicit.</p></div><div><span>02</span><strong>Measure the system</strong><p>Use latency, reliability, and cost to guide the next decision.</p></div><div><span>03</span><strong>Leave a clear handoff</strong><p>Readable code and focused changes make the whole team faster.</p></div></section></div>`;
}

function recommendationStageView(item, index) {
  return `<div class="signals-stage" id="signalsStage" aria-live="polite">
    <div class="signal-count"><span>${String(index + 1).padStart(2, '0')}</span><i></i><span>${String(recommendations.length).padStart(2, '0')}</span></div>
    <blockquote>${item.quote}</blockquote>
    <footer><strong>${item.name}</strong><span>${item.role}</span></footer>
    <div class="signal-selectors" aria-label="Choose a recommendation">
      ${recommendations.map((person, personIndex) => `<button class="${personIndex === index ? 'is-active' : ''}" type="button" data-recommendation-index="${personIndex}" aria-pressed="${personIndex === index}">${person.name}</button>`).join('')}
    </div>
  </div>`;
}

function recommendationsView() {
  return `<div class="content-shell signals-page"><div class="page-spine" aria-hidden="true"><span>DN</span><strong>05</strong></div><div class="signals-heading"><p class="page-eyebrow">Recommendations</p><h1 class="page-title">What it was like to work together.</h1><p>Direct feedback from teammates and founders I worked with at Mesh AI and Bitlearns.</p></div>${recommendationStageView(recommendations[state.recommendationIndex], state.recommendationIndex)}</div>`;
}

function linkedinView() {
  const roles = experiences.map((item) => `
    <article class="linkedin-role">
      <img src="${item.logo}" alt="${item.company} logo" loading="lazy" decoding="async">
      <div class="linkedin-role-copy">
        <h3>${item.role}</h3>
        <p><strong>${item.company}</strong> · ${item.employment}</p>
        <span>${item.period} · ${item.duration}</span>
        <span>${item.place}</span>
        <small>${item.detail}</small>
        <em>${item.focus.join(' · ')}</em>
      </div>
    </article>`).join('');
  const profileSkills = skillGroups.flatMap(([, skills]) => skills).slice(0, 12);
  return `
    <div class="content-shell linkedin-page">
      <div class="page-spine" aria-hidden="true"><span>DN</span><strong>06</strong></div>
      <div class="linkedin-profile-shell" aria-label="LinkedIn profile preview">
        <section class="linkedin-profile-card">
          <div class="linkedin-cover"><img src="images/western-engineering-cover.webp" alt="Amit Chakma Engineering Building at Western University" loading="lazy" decoding="async"></div>
          <div class="linkedin-profile-body">
            <img class="linkedin-avatar" src="images/profile-devraj.webp" alt="Devraj Nagpal" loading="lazy" decoding="async">
            <div class="linkedin-summary">
              <h1>Devraj Nagpal <span class="linkedin-verified" title="Verified profile"><i class="fa-solid fa-check"></i></span></h1>
              <p>SWE I @ WSP | Prev SWE Intern @ WSP & Rocscience | Software Engineering @ Western University</p>
              <span>Canada · <a href="mailto:devraj.nagpal@gmail.com">Contact info</a></span>
              <div class="linkedin-network"><strong>1,471 followers</strong><i></i><strong>500+ connections</strong></div>
              <div class="linkedin-profile-actions">
                <a class="linkedin-primary-action" href="https://linkedin.com/in/devrajnagpal" target="_blank" rel="noopener noreferrer">View live profile</a>
                <a href="mailto:devraj.nagpal@gmail.com">Message</a>
                <a class="linkedin-more-action" href="https://github.com/dnagpal2" target="_blank" rel="noopener noreferrer" aria-label="Open GitHub"><i class="fa-brands fa-github"></i></a>
              </div>
            </div>
            <aside class="linkedin-affiliations" aria-label="Current affiliations">
              <div><img src="images/WSP-Logo-Thumbnail-1200x630.png" alt=""><strong>WSP</strong></div>
              <div><img src="images/western-university-logo.svg" alt=""><strong>Western University</strong></div>
            </aside>
          </div>
          <div class="linkedin-open-to"><div><span>Open to work</span><strong>Software engineering · Backend · AI systems</strong><small>Toronto, Ontario · On-site · Hybrid</small></div><a href="mailto:devraj.nagpal@gmail.com">Get in touch</a></div>
        </section>
        <div class="linkedin-layout">
          <main class="linkedin-main-column">
            <section class="linkedin-section linkedin-experience-section"><header><h2>Experience</h2><span>${experiences.length} roles</span></header><div class="linkedin-role-list">${roles}</div></section>
          </main>
          <aside class="linkedin-side-column">
            <section class="linkedin-section linkedin-about"><span class="linkedin-section-label">About</span><p>I build full-stack products, backend systems, and applied AI workflows. My experience spans engineering platforms, customer-facing applications, automation, robotics, and LLM-powered tools.</p></section>
            <section class="linkedin-section"><h2>Top skills</h2><div class="linkedin-skills">${profileSkills.map((skill) => `<span>${skill}</span>`).join('')}</div></section>
            <section class="linkedin-section linkedin-contact-card"><h2>Contact</h2><a href="mailto:devraj.nagpal@gmail.com"><i class="fa-solid fa-envelope"></i> devraj.nagpal@gmail.com</a><a href="https://github.com/dnagpal2" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i> github.com/dnagpal2</a></section>
          </aside>
        </div>
      </div>
    </div>`;
}

function contactView() {
  return `
    <div class="content-shell contact-page">
      <div class="page-spine" aria-hidden="true"><span>DN</span><strong>07</strong></div>
      <header class="contact-heading">
        <p class="page-eyebrow">Contact</p>
        <h1 class="page-title">Let's talk about what you're building.</h1>
        <p class="contact-intro">The best conversations start with a real problem, a useful idea, or a system that could work better.</p>
        <a class="contact-email" href="mailto:devraj.nagpal@gmail.com">devraj.nagpal@gmail.com <i class="fa-solid fa-arrow-right"></i></a>
      </header>
      <div class="contact-layout">
        <section class="contact-panel" aria-label="Contact details">
          <div class="contact-panel-copy">
            <span>Start a conversation</span>
            <h2>Product, backend, data, or applied AI.</h2>
            <p>Tell me what you are trying to improve and where the current approach falls short.</p>
          </div>
          <div class="contact-links">
            <a class="contact-option" href="https://linkedin.com/in/devrajnagpal" target="_blank" rel="noopener noreferrer"><div><span>LinkedIn</span><strong>linkedin.com/in/devrajnagpal</strong></div><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            <a class="contact-option" href="https://github.com/dnagpal2" target="_blank" rel="noopener noreferrer"><div><span>GitHub</span><strong>github.com/dnagpal2</strong></div><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
          <div class="contact-location"><span>Based in</span><strong>Toronto, Canada</strong><small>Eastern Time</small></div>
        </section>
        <form class="contact-form" id="contactForm">
          <header class="contact-form-header"><span>Send a note</span><h2>What can I help with?</h2><p>Fill this out and your email app will open with everything ready.</p></header>
          <div class="contact-fields">
            <div class="field"><label for="contactName">Your name</label><input id="contactName" name="name" autocomplete="name" placeholder="Name" required></div>
            <div class="field"><label for="contactEmail">Your email</label><input id="contactEmail" name="email" type="email" autocomplete="email" placeholder="you@company.com" required></div>
            <div class="field message-field"><label for="contactMessage">What are you working on?</label><textarea id="contactMessage" name="message" placeholder="A short note about the project, role, or problem..." required></textarea></div>
          </div>
          <footer class="contact-form-actions"><button class="contact-submit" type="submit">Compose email <i class="fa-regular fa-paper-plane"></i></button><p class="form-note">Opens your default email client.</p></footer>
        </form>
      </div>
    </div>`;
}

const renderers = { about: aboutView, experience: experienceView, projects: projectsView, skills: skillsView, recommendations: recommendationsView, linkedin: linkedinView, contact: contactView };

function attachViewEvents() {
  pageView.querySelectorAll('[data-view-link]').forEach((element) => element.addEventListener('click', () => navigate(element.dataset.viewLink)));
  pageView.querySelectorAll('[data-project-filter]').forEach((element) => element.addEventListener('click', () => {
    state.projectFilter = element.dataset.projectFilter;
    renderView('projects', false);
  }));
  pageView.querySelector('.signals-page')?.addEventListener('click', (event) => {
    const selector = event.target.closest('[data-recommendation-index]');
    if (!selector) return;
    const nextIndex = Number(selector.dataset.recommendationIndex);
    if (nextIndex === state.recommendationIndex || !recommendations[nextIndex]) return;
    state.recommendationIndex = nextIndex;
    const stage = document.getElementById('signalsStage');
    if (stage) stage.outerHTML = recommendationStageView(recommendations[nextIndex], nextIndex);
  });
  pageView.querySelectorAll('[data-experience-index]').forEach((element) => element.addEventListener('click', () => {
    const nextIndex = Number(element.dataset.experienceIndex);
    if (nextIndex === state.experienceIndex) return;
    state.experienceIndex = nextIndex;
    pageView.querySelectorAll('[data-experience-index]').forEach((button) => {
      const active = Number(button.dataset.experienceIndex) === nextIndex;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    const counter = document.getElementById('experienceCounter');
    if (counter) counter.textContent = `${String(nextIndex + 1).padStart(2, '0')} / ${String(experiences.length).padStart(2, '0')}`;
    const currentSpotlight = document.getElementById('experienceSpotlight');
    if (currentSpotlight) currentSpotlight.outerHTML = experienceSpotlightView(experiences[nextIndex], nextIndex);
  }));
  document.getElementById('contactForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio message from ${data.get('name')}`);
    const body = encodeURIComponent(`${data.get('message')}\n\nFrom: ${data.get('name')} (${data.get('email')})`);
    window.location.href = `mailto:devraj.nagpal@gmail.com?subject=${subject}&body=${body}`;
  });
}

function renderView(view, animate = true) {
  const normalized = views.includes(view) ? view : 'about';
  state.current = normalized;
  let activeTab = null;
  document.querySelectorAll('.browser-tab').forEach((tab) => {
    const active = tab.dataset.view === normalized;
    tab.classList.toggle('is-active', active);
    tab.setAttribute('aria-selected', String(active));
    if (active) activeTab = tab;
  });
  activeTab?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  document.getElementById('browserBack').disabled = state.historyIndex <= 0;
  document.getElementById('browserForward').disabled = state.historyIndex >= state.history.length - 1;
  document.getElementById('addressText').textContent = `devraj.dev/${normalized}`;
  if (animate) pageLoading.classList.add('is-active');
  pageView.style.opacity = animate ? '.35' : '1';
  const update = () => {
    pageView.innerHTML = renderers[normalized]();
    pageView.style.opacity = '1';
    pageView.style.transition = 'opacity .18s ease';
    document.getElementById('portfolioContent').scrollTop = 0;
    attachViewEvents();
    window.setTimeout(() => pageLoading.classList.remove('is-active'), 420);
  };
  window.setTimeout(update, animate ? 120 : 0);
}

function navigate(view, push = true) {
  if (!views.includes(view)) return;
  if (push && state.current !== view) {
    state.history = state.history.slice(0, state.historyIndex + 1);
    state.history.push(view);
    state.historyIndex = state.history.length - 1;
  }
  renderView(view);
  const nextHash = view === 'about' ? '' : `#${view}`;
  history.replaceState(null, '', `${location.pathname}${nextHash}`);
}

document.getElementById('browserTabs').addEventListener('click', (event) => {
  const tab = event.target.closest('[data-view]');
  if (tab) navigate(tab.dataset.view);
});
document.querySelectorAll('[data-view-link]').forEach((element) => element.addEventListener('click', () => navigate(element.dataset.viewLink)));
document.getElementById('browserBack').addEventListener('click', () => {
  if (state.historyIndex > 0) { state.historyIndex -= 1; navigate(state.history[state.historyIndex], false); }
});
document.getElementById('browserForward').addEventListener('click', () => {
  if (state.historyIndex < state.history.length - 1) { state.historyIndex += 1; navigate(state.history[state.historyIndex], false); }
});
document.getElementById('browserReload').addEventListener('click', () => renderView(state.current));
document.getElementById('skipIntro').addEventListener('click', () => finishIntro(true));
document.getElementById('replayIntro').addEventListener('click', runIntro);
themeToggle.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme, true);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !cinematic.classList.contains('is-finished')) finishIntro(true);
  if ((event.ctrlKey || event.metaKey) && /^[1-7]$/.test(event.key)) {
    event.preventDefault();
    navigate(views[Number(event.key) - 1]);
  }
});

function updateClock() {
  const now = new Date();
  const time = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Toronto',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  }).format(now).toLowerCase();
  document.getElementById('localClock').textContent = time;
  document.getElementById('loginClock').textContent = time;
  document.getElementById('loginClock').dateTime = now.toISOString();
  document.getElementById('wallClock').textContent = `Toronto, ${time}`;
  document.getElementById('wallClock').dateTime = now.toISOString();
}

const initialView = views.includes(location.hash.slice(1)) ? location.hash.slice(1) : 'about';
applyTheme(getSavedTheme());
state.current = initialView;
state.history = [initialView];
renderView(initialView, false);
updateClock();
window.setInterval(updateClock, 1000);
runIntro();
