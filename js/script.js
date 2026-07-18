/* ============================================================
   Sakinah Farah Agnia — Portfolio scripts
   Shared by index.html and project.html (features are guarded).
   ============================================================ */

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ---------- projects carousel (index.html) ----------
const carousel = document.getElementById("carousel");

if (carousel && window.PROJECTS) {
  carousel.innerHTML = PROJECTS.map(
    (p) => `
    <a class="project-card" href="project.html?id=${p.slug}">
      <div class="wire-art"><svg viewBox="0 0 200 120" aria-hidden="true">${p.art}</svg></div>
      <h3>${p.title}</h3>
      <p>${p.blurb}</p>
      <div class="tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
      <div class="card-foot">
        <span>${p.date}</span>
        <span class="view">view details →</span>
      </div>
    </a>`
  ).join("");

  const dotsWrap = document.getElementById("carouselDots");
  const firstCard = carousel.querySelector(".project-card");
  const GAP = 18; // must match the CSS grid gap

  const step = () => firstCard.offsetWidth + GAP;
  const maxScroll = () => carousel.scrollWidth - carousel.clientWidth;

  let dots = [];

  // One dot per scroll position that actually exists at the current
  // viewport width — recomputed on resize, so dots always match reality.
  function buildDots() {
    const pages = maxScroll() > 1 ? Math.round(maxScroll() / step()) + 1 : 1;
    dotsWrap.innerHTML = "";
    for (let i = 0; i < pages; i++) {
      const dot = document.createElement("button");
      dot.setAttribute("aria-label", `Go to project page ${i + 1}`);
      dot.addEventListener("click", () => {
        carousel.scrollTo({ left: Math.min(i * step(), maxScroll()), behavior: "smooth" });
      });
      dotsWrap.appendChild(dot);
    }
    dots = [...dotsWrap.children];
    dotsWrap.style.display = pages <= 1 ? "none" : "";
    updateDots();
  }

  function updateDots() {
    if (!dots.length) return;
    const sl = carousel.scrollLeft;
    let idx = sl >= maxScroll() - 2 ? dots.length - 1 : Math.round(sl / step());
    idx = Math.max(0, Math.min(dots.length - 1, idx));
    dots.forEach((d, i) => d.classList.toggle("active", i === idx));
  }

  carousel.addEventListener("scroll", updateDots, { passive: true });
  window.addEventListener("resize", buildDots);
  buildDots();
}

// ---------- project detail page (project.html) ----------
const page = document.getElementById("projectPage");

if (page && window.PROJECTS) {
  const id = new URLSearchParams(location.search).get("id");
  const idx = PROJECTS.findIndex((p) => p.slug === id);

  if (idx === -1) {
    document.title = "All Projects — Sakinah Farah Agnia";
    page.innerHTML = `
      <p class="breadcrumb"><a href="index.html">~</a>/<span class="crumb-cur">projects</span></p>
      <div class="proj-head"><h1>All Projects</h1></div>
      ${id ? `<p style="color:var(--muted);margin-bottom:18px">"${id}" doesn't match anything — here's everything instead.</p>` : ""}
      <div class="projects-grid">
        ${PROJECTS.map(
          (p) => `
        <a class="project-card" href="project.html?id=${p.slug}">
          <div class="wire-art"><svg viewBox="0 0 200 120" aria-hidden="true">${p.art}</svg></div>
          <h3>${p.title}</h3>
          <p>${p.blurb}</p>
          <div class="tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
          <div class="card-foot">
            <span>${p.date}</span>
            <span class="view">view details →</span>
          </div>
        </a>`
        ).join("")}
      </div>`;
  } else {
    const p = PROJECTS[idx];
    const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
    const next = PROJECTS[(idx + 1) % PROJECTS.length];

    document.title = `${p.title} — Sakinah Farah Agnia`;
    page.innerHTML = `
      <p class="breadcrumb"><a href="index.html">~</a>/<a href="index.html#projects">projects</a>/<span class="crumb-cur">${p.slug}</span></p>

      <div class="proj-head">
        <h1>${p.title}</h1>
        <div class="proj-meta">
          <span class="meta-chip">📅 ${p.date}</span>
          <span class="meta-chip">${p.context}</span>
          <span class="meta-chip m-status">● ${p.status}</span>
        </div>
        <div class="tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
      </div>

      <div class="wire-art proj-art reveal">
        <svg viewBox="0 0 200 120" aria-hidden="true">${p.art}</svg>
      </div>

      <div class="proj-cols">
        <div class="proj-main reveal">
          <h2>// overview</h2>
          ${p.overview.map((par) => `<p>${par}</p>`).join("")}
          <h2>// what I did</h2>
          <ul class="hl">${p.highlights.map((h) => `<li>${h}</li>`).join("")}</ul>
        </div>
        <aside class="proj-aside reveal">
          <div class="aside-card">
            <h3>// tech stack</h3>
            <div class="tags">${p.stack.map((s) => `<span>${s}</span>`).join("")}</div>
          </div>
          <div class="aside-card">
            <h3>// info</h3>
            <dl>
              <dt>Role</dt><dd>${p.role}</dd>
              <dt>Timeline</dt><dd>${p.date}</dd>
              <dt>Status</dt><dd>${p.status}</dd>
            </dl>
          </div>
          <a class="btn btn-primary" href="index.html#contact">Ask me about this ↗</a>
        </aside>
      </div>

      <nav class="prevnext">
        <a href="project.html?id=${prev.slug}">← ${prev.title}</a>
        <a class="pn-all" href="index.html#projects">[ all projects ]</a>
        <a href="project.html?id=${next.slug}">${next.title} →</a>
      </nav>`;
  }
}

// ---------- typing effect (index.html hero) ----------
const typedEl = document.getElementById("typed");

if (typedEl) {
  const WORDS = ["cyber security (pentesting)", "AI automation", "AI agents", "IoT & embedded systems", "research & development"];

  if (reduceMotion) {
    typedEl.textContent = WORDS.join(" · ");
  } else {
    let wordIdx = 0;
    let charIdx = 0;
    let deleting = false;

    (function typeTick() {
      const word = WORDS[wordIdx];
      charIdx += deleting ? -1 : 1;
      typedEl.textContent = word.slice(0, charIdx);

      let delay = deleting ? 40 : 85;
      if (!deleting && charIdx === word.length) {
        delay = 1800;
        deleting = true;
      } else if (deleting && charIdx === 0) {
        deleting = false;
        wordIdx = (wordIdx + 1) % WORDS.length;
        delay = 350;
      }
      setTimeout(typeTick, delay);
    })();
  }
}

// ---------- reveal on scroll ----------
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// ---------- active nav link while scrolling (index.html) ----------
const navLinks = document.querySelectorAll(".nav-link[data-section]");

if (navLinks.length) {
  const sections = [...navLinks]
    .map((link) => document.getElementById(link.dataset.section))
    .filter(Boolean);

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) =>
          link.classList.toggle("active", link.dataset.section === entry.target.id)
        );
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );

  sections.forEach((sec) => navObserver.observe(sec));
}

// ---------- contact form (opens mail client, no backend needed) ----------
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("fName").value.trim();
    const email = document.getElementById("fEmail").value.trim();
    const message = document.getElementById("fMsg").value.trim();

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:sakinah.frha@gmail.com?subject=${subject}&body=${body}`;
  });
}

// ---------- back to top & footer year ----------
const toTop = document.getElementById("toTop");
if (toTop) {
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
