function renderProjectArt(project, detail = false) {
  if (project.hideArt) return "";
  if (project.images?.length) {
    return `<div class="project-image-frame${project.images.length === 1 ? " project-image-single" : ""}${project.imageFit === "contain" ? " project-image-contain" : ""}${detail ? " project-image-detail reveal" : ""}">
      ${project.images.map((image) => `<img src="${image.src}" alt="${image.alt}" width="${image.width || 1280}" height="${image.height || 720}" loading="lazy" />`).join("")}
    </div>`;
  }
  return `<div class="wire-art${detail ? " proj-art reveal" : ""}"><svg viewBox="0 0 200 120" aria-hidden="true">${project.art}</svg></div>`;
}

const carousel = document.getElementById("carousel");

if (carousel && window.PROJECTS) {
  carousel.innerHTML = PROJECTS.map(
    (p) => `
    <a class="project-card" href="project.html?id=${p.slug}">
      ${renderProjectArt(p)}
      <h3>${p.title}</h3>
      <p>${p.blurb}</p>
      <div class="tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
      <div class="card-foot">
        <span>${p.date}</span>
        <span class="view">view details →</span>
      </div>
    </a>`,
  ).join("");

  const dotsWrap = document.getElementById("carouselDots");
  const firstCard = carousel.querySelector(".project-card");
  const GAP = 18;

  const step = () => firstCard.offsetWidth + GAP;
  const maxScroll = () => carousel.scrollWidth - carousel.clientWidth;

  let dots = [];

  function buildDots() {
    const pages = maxScroll() > 1 ? Math.round(maxScroll() / step()) + 1 : 1;
    dotsWrap.innerHTML = "";
    for (let i = 0; i < pages; i++) {
      const dot = document.createElement("button");
      dot.setAttribute("aria-label", `Go to project page ${i + 1}`);
      dot.addEventListener("click", () => {
        carousel.scrollTo({
          left: Math.min(i * step(), maxScroll()),
          behavior: "smooth",
        });
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
          ${renderProjectArt(p)}
          <h3>${p.title}</h3>
          <p>${p.blurb}</p>
          <div class="tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
          <div class="card-foot">
            <span>${p.date}</span>
            <span class="view">view details →</span>
          </div>
        </a>`,
        ).join("")}
      </div>`;
  } else {
    const p = PROJECTS[idx];
    const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
    const next = PROJECTS[(idx + 1) % PROJECTS.length];

    const videoUrl = p.videoId ? new URL(`https://www.youtube.com/embed/${p.videoId}`) : null;
    if (videoUrl) {
      videoUrl.searchParams.set("playsinline", "1");
      videoUrl.searchParams.set("controls", "1");
      if (["http:", "https:"].includes(location.protocol)) {
        videoUrl.searchParams.set("origin", location.origin);
      }
    }

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

      ${
        p.videoId
          ? `
        <figure class="project-media reveal">
          <iframe src="${videoUrl.href}"
            title="${p.title} — project demonstration" loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </figure>`
          : renderProjectArt(p, true)
      }

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
          ${p.resource && !p.videoId ? `<a class="btn btn-ghost" href="${p.resource.url}" target="_blank" rel="noopener noreferrer">${p.resource.label} ↗</a>` : ""}
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

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document
  .querySelectorAll(".reveal")
  .forEach((el) => revealObserver.observe(el));

const navLinks = document.querySelectorAll(".nav-link[data-section]");

if (navLinks.length) {
  const sections = [...document.querySelectorAll(".section[id]")];
  let scheduled = false;

  function syncNavigation() {
    scheduled = false;
    const marker = Math.min(window.innerHeight * 0.35, 240);
    let current = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= marker) current = section;
    }
    if (
      window.scrollY > 0 &&
      window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2
    ) {
      current = sections[sections.length - 1];
    }
    if (!current) return;
    const activeNav = current.id === "skills" ? "home" : current.id;
    navLinks.forEach((link) => {
      const active = link.dataset.section === activeNav;
      link.classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
    const hash = `#${current.id}`;
    if (location.hash !== hash) {
      history.replaceState(
        history.state,
        "",
        `${location.pathname}${location.search}${hash}`,
      );
    }
  }

  function scheduleNavigation() {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(syncNavigation);
  }

  window.addEventListener("scroll", scheduleNavigation, { passive: true });
  window.addEventListener("resize", scheduleNavigation);
  window.addEventListener("hashchange", scheduleNavigation);
  window.addEventListener("pageshow", scheduleNavigation);
  if (document.readyState === "complete") scheduleNavigation();
  else window.addEventListener("load", scheduleNavigation, { once: true });
}

const toTop = document.getElementById("toTop");
if (toTop) {
  toTop.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );
}

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
