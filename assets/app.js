(function () {
  "use strict";

  const data = window.PORTFOLIO_DATA;
  if (!data) {
    document.body.innerHTML = "<p class='fatal-error'>Portfolio data could not be loaded.</p>";
    return;
  }

  const $ = (selector) => document.querySelector(selector);
  const escapeHtml = (value = "") => String(value).replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", "\"": "&quot;"
  })[character]);

  function setText(selector, value) {
    const element = $(selector);
    if (element) element.textContent = value;
  }

  function renderProfile() {
    const profile = data.profile;
    setText("#header-name", profile.name);
    setText("#header-role", profile.role);
    setText("#hero-location", profile.location);
    setText("#hero-headline", profile.headline);
    setText("#hero-intro", profile.intro);
    setText("#availability-text", profile.availability);
    setText("#about-text", profile.about);
    setText("#contact-location", profile.location);
    setText("#contact-email-text", profile.email);
    setText("#contact-phone", profile.phone);
    setText("#footer-name", profile.name);
    setText("#current-year", new Date().getFullYear());

    $("#header-contact").href = `mailto:${profile.email}`;
    $("#contact-email").href = `mailto:${profile.email}`;
    $("#contact-mail-link").href = `mailto:${profile.email}`;
    $("#contact-phone").href = `tel:${profile.phone.replace(/\s/g, "")}`;
    $("#contact-linkedin").href = profile.linkedin;
  }

  function blueprintVisual(project) {
    return `<div class="project-visual blueprint-visual" aria-label="${escapeHtml(project.title)} — confidential geometry withheld">
      <span class="blueprint-index">${escapeHtml(project.title.slice(0, 2).toUpperCase())}</span>
      <div class="blueprint-object" aria-hidden="true"><span></span><span></span><span></span></div>
      <span class="drawing-stamp">Scope shown / geometry withheld</span>
    </div>`;
  }

  function imageVisual(project) {
    const image = project.images[0];
    return `<div class="project-visual image-visual">
      <img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt)}" loading="lazy">
      <span class="drawing-stamp">${escapeHtml(project.category)} / ${escapeHtml(project.period)}</span>
    </div>`;
  }

  function renderProjects() {
    $("#project-list").innerHTML = data.projects.map((project, index) => `
      <article class="project-row">
        <div class="project-index">${String(index + 1).padStart(2, "0")}</div>
        ${project.images.length ? imageVisual(project) : blueprintVisual(project)}
        <div class="project-copy">
          <div class="project-meta"><span>${escapeHtml(project.focus)}</span><span>${escapeHtml(project.organization)}</span></div>
          <h3>${escapeHtml(project.title)}</h3>
          <p>${escapeHtml(project.summary)}</p>
          <ul class="tag-list" aria-label="Project skills">${project.tags.map((tag) => `<li>${escapeHtml(tag)}</li>`).join("")}</ul>
          <button class="text-link" type="button" data-project="${escapeHtml(project.slug)}">View case study <span aria-hidden="true">↗</span></button>
        </div>
      </article>`).join("");

    document.querySelectorAll("[data-project]").forEach((button) => {
      button.addEventListener("click", () => openProject(button.dataset.project));
    });
  }

  function renderServices() {
    $("#service-grid").innerHTML = data.services.map((service) => `
      <article><span>${escapeHtml(service.number)}</span><h3>${escapeHtml(service.title)}</h3><p>${escapeHtml(service.description)}</p></article>`).join("");
  }

  function renderExperience() {
    $("#timeline").innerHTML = data.experience.map((item) => `
      <article><span>${escapeHtml(item.period)}</span><div><h3>${escapeHtml(item.company)}</h3><p><strong>${escapeHtml(item.role)}</strong> · ${escapeHtml(item.summary)}</p></div></article>`).join("");
  }

  function openProject(slug) {
    const project = data.projects.find((item) => item.slug === slug);
    if (!project) return;

    const gallery = project.images.length
      ? `<div class="dialog-gallery">${project.images.map((image, index) => `<figure class="${index === 0 ? "gallery-feature" : ""}"><img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt)}"><figcaption><span>${String(index + 1).padStart(2, "0")}</span>${escapeHtml(image.caption)}</figcaption></figure>`).join("")}</div>`
      : `<div class="withheld-panel"><div class="blueprint-object" aria-hidden="true"><span></span><span></span><span></span></div><div><p class="section-number">CONFIDENTIAL WORK</p><h3>Scope presented without proprietary drawings.</h3><p>The project description records the engineering responsibility while protecting employer-owned geometry and production information.</p></div></div>`;

    $("#dialog-content").innerHTML = `
      <header class="dialog-header">
        <p class="section-number">${escapeHtml(project.category)} · ${escapeHtml(project.period)}</p>
        <h2 id="dialog-title">${escapeHtml(project.title)}</h2>
        <p>${escapeHtml(project.summary)}</p>
      </header>
      ${gallery}
      <section class="dialog-body">
        <div><p class="section-number">DESIGN SCOPE</p><h3>${escapeHtml(project.focus)}</h3><p>${escapeHtml(project.description)}</p><p class="case-note">${escapeHtml(project.confidentiality)}</p></div>
        <aside><dl><div><dt>Context</dt><dd>${escapeHtml(project.organization)}</dd></div><div><dt>Role</dt><dd>${escapeHtml(project.role)}</dd></div><div><dt>Tools</dt><dd>${project.tools.map(escapeHtml).join(" · ")}</dd></div></dl><h4>Deliverables</h4><ul>${project.deliverables.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></aside>
      </section>`;

    const dialog = $("#project-dialog");
    dialog.showModal();
    dialog.scrollTop = 0;
  }

  function setupNavigation() {
    const button = $(".menu-button");
    const navigation = $("#site-nav");
    button.addEventListener("click", () => {
      const open = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!open));
      navigation.classList.toggle("open", !open);
    });
    navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      button.setAttribute("aria-expanded", "false");
      navigation.classList.remove("open");
    }));

    const dialog = $("#project-dialog");
    dialog.addEventListener("click", (event) => {
      const bounds = dialog.getBoundingClientRect();
      const outside = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
      if (outside) dialog.close();
    });
  }

  renderProfile();
  renderProjects();
  renderServices();
  renderExperience();
  setupNavigation();
})();
