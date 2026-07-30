(() => {
  const body = document.body;
  const root = body.dataset.root || "";
  const pageId = body.dataset.page || "";
  const pages = window.TCI_PAGES || {};

  const esc = (value = "") => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

  const url = (path = "") => {
    if (!path) return root || "./";
    if (path.startsWith("#") || path.startsWith("http") || path.startsWith("mailto:") || path.startsWith("tel:")) return path;
    return `${root}${path}`;
  };

  const pageHref = {
    capabilities: "capabilities/",
    "capabilities-ai": "capabilities/ai/",
    "capabilities-digital": "capabilities/digital-engineering/",
    "capabilities-manufacturing": "capabilities/smart-factory-robotics/",
    "capabilities-cloud": "capabilities/cloud-operations/",
    industries: "industries/",
    "industry-manufacturing": "industries/manufacturing-logistics/",
    "industry-enterprise": "industries/enterprise-operations/",
    "industry-it": "industries/it-infrastructure/",
    "how-we-work": "how-we-work/",
    cases: "cases/",
    "case-detail": "cases/manufacturing-knowledge/",
    about: "about/",
    "ai-transformation": "about/ai-transformation/",
    quality: "about/quality-security/",
    global: "about/global-network/",
    insights: "insights/",
    careers: "careers/",
    contact: "contact/",
    privacy: "privacy/"
  };

  const pageContexts = {
    capabilities: { key: "capabilities", group: "能力与服务", current: "能力总览", href: "capabilities/" },
    "capabilities-ai": { key: "capabilities", group: "能力与服务", current: "AI应用与智能体", href: "capabilities/" },
    "capabilities-digital": { key: "capabilities", group: "能力与服务", current: "数字工程与系统开发", href: "capabilities/" },
    "capabilities-manufacturing": { key: "capabilities", group: "能力与服务", current: "智能制造与机器人", href: "capabilities/" },
    "capabilities-cloud": { key: "capabilities", group: "能力与服务", current: "云与智能运维", href: "capabilities/" },
    industries: { key: "industries", group: "应用领域", current: "领域总览", href: "industries/" },
    "industry-manufacturing": { key: "industries", group: "应用领域", current: "制造与物流", href: "industries/" },
    "industry-enterprise": { key: "industries", group: "应用领域", current: "企业运营与专业业务", href: "industries/" },
    "industry-it": { key: "industries", group: "应用领域", current: "IT与基础设施", href: "industries/" },
    "how-we-work": { key: "delivery", group: "服务与交付", current: "合作与交付方式", href: "how-we-work/" },
    cases: { key: "cases", group: "案例", current: "案例中心", href: "cases/" },
    "case-detail": { key: "cases", group: "案例", current: "制造企业本地知识库", href: "cases/" },
    insights: { key: "insights", group: "洞察", current: "洞察与新闻", href: "insights/" },
    about: { key: "about", group: "关于我们", current: "公司介绍", href: "about/" },
    "ai-transformation": { key: "about", group: "关于我们", current: "AI时代的苏州大宇宙", href: "about/" },
    quality: { key: "about", group: "关于我们", current: "品质与安全", href: "about/" },
    global: { key: "about", group: "关于我们", current: "集团与全球网络", href: "about/" },
    careers: { key: "about", group: "关于我们", current: "招贤纳士", href: "about/" },
    contact: { key: "contact", group: "联系", current: "联系我们", href: "contact/" },
    privacy: { key: "legal", group: "网站信息", current: "隐私与法律", href: "privacy/" }
  };

  const navGroups = [
    {
      id: "capabilities",
      label: "能力与服务",
      href: "capabilities/",
      items: [
        ["01", "能力总览", "capabilities/"],
        ["02", "AI应用与智能体", "capabilities/ai/"],
        ["03", "数字工程与系统开发", "capabilities/digital-engineering/"],
        ["04", "智能制造与机器人", "capabilities/smart-factory-robotics/"],
        ["05", "云与智能运维", "capabilities/cloud-operations/"]
      ]
    },
    {
      id: "industries",
      label: "应用领域",
      href: "industries/",
      items: [
        ["01", "领域总览", "industries/"],
        ["02", "制造与物流", "industries/manufacturing-logistics/"],
        ["03", "企业运营与专业业务", "industries/enterprise-operations/"],
        ["04", "IT与基础设施", "industries/it-infrastructure/"]
      ]
    },
    { id: "cases", label: "案例", href: "cases/" },
    { id: "insights", label: "洞察", href: "insights/" },
    {
      id: "about",
      label: "关于我们",
      href: "about/",
      items: [
        ["01", "关于苏州大宇宙", "about/"],
        ["02", "AI时代的苏州大宇宙", "about/ai-transformation/"],
        ["03", "品质与安全", "about/quality-security/"],
        ["04", "集团与全球网络", "about/global-network/"],
        ["05", "招贤纳士", "careers/"]
      ]
    }
  ];

  function activeNavId() {
    if (!pageId) return "home";
    return pages[pageId]?.nav || pageId;
  }

  function renderHeader() {
    const host = document.querySelector("#siteHeader");
    if (!host) return;
    const active = activeNavId();
    const context = pageContexts[pageId];
    if (context) body.dataset.context = context.key;
    const links = navGroups.map((group) => {
      const dropdown = group.items ? `
        <div class="nav-dropdown">
          ${group.items.map(([index, label, href]) => `
            <a href="${url(href)}"><small>${index}</small><span>${esc(label)}</span></a>
          `).join("")}
        </div>` : "";
      return `
        <div class="nav-item">
          <a class="nav-link ${active === group.id ? "active" : ""}" href="${url(group.href)}">
            ${esc(group.label)}
            ${group.items ? `<svg class="nav-chevron" viewBox="0 0 12 12" aria-hidden="true"><path d="m2 4 4 4 4-4" fill="none" stroke="currentColor"/></svg>` : ""}
          </a>
          ${dropdown}
        </div>`;
    }).join("");

    host.className = "site-header";
    host.innerHTML = `
      <nav class="site-nav" aria-label="主导航">
        <a class="brand" href="${url("")}" aria-label="苏州大宇宙首页">
          <img src="${url("assets/transcosmos-logo-reverse.png")}" alt="transcosmos" />
        </a>
        <div class="nav-links" id="navLinks">${links}</div>
        <a class="nav-contact" href="${url("contact/")}">联系我们 <i>↗</i></a>
        <button class="menu-toggle" id="menuToggle" type="button" aria-label="打开导航" aria-expanded="false"><span></span></button>
      </nav>
      ${context ? `
        <nav class="page-context" aria-label="当前位置">
          <a href="${url(context.href)}">${esc(context.group)}</a>
          <span class="page-context-separator" aria-hidden="true">/</span>
          <strong aria-current="page">${esc(context.current)}</strong>
        </nav>` : ""}`;

    const toggle = host.querySelector("#menuToggle");
    const navLinks = host.querySelector("#navLinks");
    toggle?.addEventListener("click", () => {
      const open = !navLinks.classList.contains("open");
      navLinks.classList.toggle("open", open);
      toggle.classList.toggle("active", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "关闭导航" : "打开导航");
      body.classList.toggle("menu-open", open);
    });
    navLinks?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      toggle.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
      body.classList.remove("menu-open");
    }));
  }

  function renderFooter() {
    const host = document.querySelector("#siteFooter");
    if (!host) return;
    host.className = "site-footer";
    host.innerHTML = `
      <div class="footer-top">
        <div>
          <img class="footer-logo" src="${url("assets/transcosmos-logo-ver1.png")}" alt="transcosmos people & technology" />
          <span class="footer-tag">Digital engineering for the AI era</span>
          <h2 class="footer-title cn-serif">从一个具体问题开始，<br />让改变真正发生。</h2>
        </div>
        <a class="pill-cta" href="${url("contact/")}">开始一次对话 <span class="arrow">↗</span></a>
      </div>
      <div class="footer-links">
        <div><h3>Capabilities</h3><a href="${url("capabilities/ai/")}">AI应用与智能体</a><a href="${url("capabilities/digital-engineering/")}">数字工程</a><a href="${url("capabilities/smart-factory-robotics/")}">智能制造与机器人</a></div>
        <div><h3>Industries</h3><a href="${url("industries/manufacturing-logistics/")}">制造与物流</a><a href="${url("industries/enterprise-operations/")}">企业运营</a><a href="${url("industries/it-infrastructure/")}">IT与基础设施</a></div>
        <div><h3>Company</h3><a href="${url("about/")}">关于我们</a><a href="${url("about/ai-transformation/")}">AI时代的苏州大宇宙</a><a href="${url("careers/")}">招贤纳士</a></div>
        <div><h3>Evidence</h3><a href="${url("cases/")}">案例中心</a><a href="${url("insights/")}">洞察与新闻</a><a href="${url("about/quality-security/")}">品质与安全</a></div>
        <div><h3>Contact</h3><a href="${url("contact/")}">联系我们</a><a href="${url("privacy/")}">隐私与法律</a><a href="${url("about/global-network/")}">集团与全球网络</a></div>
      </div>
      <div class="footer-bottom">
        <span>苏州大宇宙信息创造有限公司 · 苏州 / 上海 / 常州</span>
        <span>演示版 · 内容与数据需在正式发布前复核</span>
        <span>© 2026 TCI SUZHOU</span>
      </div>`;
  }

  function renderHero(page) {
    const subnav = (page.sections || []).slice(0, 5).map((section, index) => {
      const id = section.id || `section-${index + 1}`;
      return `<a href="#${id}">${esc(section.title || section.label || `Section ${index + 1}`)}</a>`;
    }).join("");
    return `
      <section class="page-hero">
        <div class="page-hero-frame">
          <div class="page-hero-media">
            <img src="${url(`assets/${page.heroImage}`)}" alt="" />
          </div>
          <div class="noise"></div>
          <div class="page-hero-content">
            <div class="page-hero-copy">
              <div class="eyebrow">${esc(page.eyebrow)}</div>
              <h1 class="cn-serif">${esc(page.title)}</h1>
            </div>
            <div class="page-hero-aside">
              <p>${esc(page.description)}</p>
              ${page.cta ? `<a class="pill-cta" href="${url(page.cta[1])}">${esc(page.cta[0])}<span class="arrow">↗</span></a>` : ""}
              <div class="page-subnav">${subnav}</div>
            </div>
          </div>
        </div>
      </section>`;
  }

  function sectionHeading(section) {
    if (!section.title && !section.index) return "";
    return `
      <div class="section-head reveal">
        <div class="section-index">${esc(section.index || "")}</div>
        <div>
          ${section.title ? `<h2 class="section-title cn-serif">${esc(section.title)}</h2>` : ""}
          ${section.intro ? `<p class="section-intro">${esc(section.intro)}</p>` : ""}
        </div>
      </div>`;
  }

  function renderCards(section) {
    const cls = section.columns === 4 ? "four" : section.columns === 2 ? "two" : "";
    return `
      ${sectionHeading(section)}
      <div class="content-grid ${cls}">
        ${section.items.map((item, index) => {
          const content = `
            <span class="index">${esc(item.tag || String(index + 1).padStart(2, "0"))}</span>
            <h3>${esc(item.title)}</h3>
            <p>${esc(item.text)}</p>
            ${item.href ? `<span class="text-link">进入页面 <span>→</span></span>` : ""}`;
          return item.href
            ? `<a class="data-card reveal" href="${url(item.href)}">${content}</a>`
            : `<article class="data-card reveal">${content}</article>`;
        }).join("")}
      </div>`;
  }

  function renderSplit(section, index) {
    return `
      <div class="split-layout ${index % 2 ? "reverse" : ""}">
        <div class="split-media reveal">
          <img src="${url(`assets/${section.image}`)}" alt="" />
        </div>
        <div class="split-copy reveal">
          <div class="section-index">${esc(section.index || "")}</div>
          <h2 class="cn-serif">${esc(section.title)}</h2>
          <p>${esc(section.text)}</p>
          ${section.bullets?.length ? `<div class="split-list">${section.bullets.map((item, itemIndex) => `<div><span>${String(itemIndex + 1).padStart(2, "0")}</span>${esc(item)}</div>`).join("")}</div>` : ""}
        </div>
      </div>`;
  }

  function renderTimeline(section) {
    return `
      ${sectionHeading(section)}
      <div class="timeline">
        ${section.items.map((item) => `
          <article class="timeline-item reveal">
            <span class="year">${esc(item.year)}</span>
            <h3>${esc(item.title)}</h3>
            <p>${esc(item.text)}</p>
          </article>`).join("")}
      </div>`;
  }

  function caseCard(item, index) {
    const content = `
      <img src="${url(`assets/${item.image}`)}" alt="" />
      <div class="case-card-copy">
        <small>Case ${String(index + 1).padStart(2, "0")}</small>
        <strong class="cn-serif">${esc(item.title)}</strong>
        <p>${esc(item.text)}</p>
        <div class="case-tags">${(item.tags || []).map((tag) => `<span>${esc(tag)}</span>`).join("")}</div>
      </div>`;
    return item.href
      ? `<a class="case-card reveal" href="${url(item.href)}" data-tags="${esc((item.tags || []).join("|"))}">${content}</a>`
      : `<article class="case-card case-card-static reveal" data-tags="${esc((item.tags || []).join("|"))}">${content}</article>`;
  }

  function renderCases(section) {
    const tags = [...new Set(section.items.flatMap((item) => item.tags || []))];
    const filter = section.filter ? `
      <div class="filter-bar" aria-label="案例筛选">
        <button class="filter-btn active" type="button" data-filter="all">全部</button>
        ${tags.map((tag) => `<button class="filter-btn" type="button" data-filter="${esc(tag)}">${esc(tag)}</button>`).join("")}
      </div>` : "";
    return `
      ${sectionHeading(section)}
      ${filter}
      <div class="case-grid">${section.items.map(caseCard).join("")}</div>`;
  }

  function renderArticles(section) {
    return `
      ${sectionHeading(section)}
      <div class="article-grid">
        ${section.items.map((item, index) => `
          <article class="article-card reveal">
            <div class="meta"><span>${esc(item.category)}</span><span>${String(index + 1).padStart(2, "0")}</span></div>
            <h3 class="cn-serif">${esc(item.title)}</h3>
            <p>${esc(item.text)}</p>
          </article>`).join("")}
      </div>`;
  }

  function renderQuote(section) {
    return `
      <div class="quote-block reveal">
        <small>${esc(section.label || "Point of view")}</small>
        <blockquote class="cn-serif">${esc(section.text)}</blockquote>
      </div>`;
  }

  function renderContact() {
    return `
      <div class="contact-layout">
        <div class="contact-note reveal">
          <span class="demo-badge">DEMO FORM</span>
          <h2 class="cn-serif">先告诉我们，您正在面对什么问题。</h2>
          <p>无论您正在寻找AI应用方向、计划升级业务系统、改善工厂与物流现场，还是希望探讨机器人与联合方案，都可以先从概要开始。</p>
          <div class="location-list">
            <div><strong>苏州</strong><span>苏州工业园区 · 总公司</span></div>
            <div><strong>上海</strong><span>上海分公司 · 业务协同据点</span></div>
            <div><strong>常州</strong><span>常州分公司 · 制造客户支援据点</span></div>
          </div>
        </div>
        <form class="demo-form reveal" id="demoContactForm">
          <div class="form-row">
            <div class="field"><label for="name">姓名 *</label><input id="name" name="name" autocomplete="name" required /></div>
            <div class="field"><label for="company">公司 *</label><input id="company" name="company" autocomplete="organization" required /></div>
          </div>
          <div class="form-row">
            <div class="field"><label for="email">工作邮箱 *</label><input id="email" name="email" type="email" autocomplete="email" required /></div>
            <div class="field"><label for="phone">联系电话</label><input id="phone" name="phone" autocomplete="tel" /></div>
          </div>
          <div class="field">
            <label for="type">咨询类型 *</label>
            <select id="type" name="type" required>
              <option value="">请选择</option>
              <option>AI应用与智能体</option>
              <option>智能制造与机器人</option>
              <option>数字工程与系统开发</option>
              <option>云与智能运维</option>
              <option>伙伴合作</option>
              <option>其他</option>
            </select>
          </div>
          <div class="field"><label for="message">当前问题或目标 *</label><textarea id="message" name="message" required placeholder="请先做概要说明，不要在演示表单中填写保密信息。"></textarea></div>
          <button class="pill-cta" type="submit">提交演示咨询 <span class="arrow">↗</span></button>
          <p class="demo-form-note" id="formStatus">演示版表单不会发送或保存数据。正式版需在上线前完成法务、安全和数据流程确认。</p>
        </form>
      </div>`;
  }

  function renderLegal() {
    const nav = [
      ["privacy-scope", "个人信息保护政策"],
      ["terms", "网站使用条款"],
      ["cookies", "Cookie说明"],
      ["legal-info", "法定信息"]
    ];
    return `
      <div class="legal-layout">
        <nav class="legal-nav" aria-label="法律信息目录">
          ${nav.map(([id, label]) => `<a href="#${id}">${label}</a>`).join("")}
        </nav>
        <div class="legal-copy">
          <section id="privacy-scope">
            <span class="demo-badge">STRUCTURE DEMO</span>
            <h2 class="cn-serif">个人信息保护政策</h2>
            <p>本页为演示版结构，不构成正式法律文本。正式版本应由法务或总务根据实际表单、分析工具、服务器位置和数据流编写并审批。</p>
            <h3>1. 收集的信息</h3><p>联系表单中的姓名、公司、工作邮箱、联系电话、咨询类型和咨询概要，以及为保障网站安全所需的基础访问日志。</p>
            <h3>2. 使用目的</h3><p>用于响应咨询、安排对应业务与技术团队、改善网站体验，并在取得适当同意后提供相关业务信息。</p>
            <h3>3. 保存、共享与跨境</h3><p>正式版需明确保存期限、处理主体、第三方服务、集团内共享与可能发生的跨境处理，并提供用户权利的行使方式。</p>
          </section>
          <section id="terms"><h2 class="cn-serif">网站使用条款</h2><p>正式版应说明网站内容版权、链接、禁止行为、责任限制、内容变更与适用法律。案例、数字、客户名称和Logo仅在取得授权后公开。</p></section>
          <section id="cookies"><h2 class="cn-serif">Cookie说明</h2><p>根据正式网站实际使用的分析、性能与偏好工具，说明Cookie的类型、目的、保存时间与用户选择。不使用的工具不应出现在文本中。</p></section>
          <section id="legal-info"><h2 class="cn-serif">法定信息</h2><p>正式上线前补充并核实公司主体、注册地址、ICP备案、公安备案、版权、正式联系窗口与隐私事务负责人。</p></section>
        </div>
      </div>`;
  }

  function renderSection(section, index) {
    const id = section.id || `section-${index + 1}`;
    let inner = "";
    if (section.type === "cards") inner = renderCards(section);
    if (section.type === "split") inner = renderSplit(section, index);
    if (section.type === "timeline") inner = renderTimeline(section);
    if (section.type === "cases") inner = renderCases(section);
    if (section.type === "articles") inner = renderArticles(section);
    if (section.type === "quote") inner = renderQuote(section);
    if (section.type === "contact") inner = renderContact();
    if (section.type === "legal") inner = renderLegal();
    const useShell = section.type !== "quote" || true;
    return `<section class="content-section ${index % 2 ? "alt" : ""}" id="${id}"><div class="page-shell">${inner}</div></section>`;
  }

  function renderRelated(page) {
    if (!page.related?.length) return "";
    return `
      <section class="related-section">
        <div class="page-shell">
          <div class="section-head">
            <div class="section-index">Continue exploring</div>
            <h2 class="section-title cn-serif">继续了解</h2>
          </div>
          <div class="related-grid">
            ${page.related.slice(0, 3).map((id, index) => {
              const related = pages[id];
              if (!related) return "";
              return `
                <a class="related-card" href="${url(pageHref[id] || "")}">
                  <span>0${index + 1}</span>
                  <h3>${esc(related.title)}</h3>
                  <p>${esc(related.description)}</p>
                  <span class="text-link">进入页面 <span>→</span></span>
                </a>`;
            }).join("")}
          </div>
        </div>
      </section>`;
  }

  function renderPage() {
    const page = pages[pageId];
    const host = document.querySelector("#pageMain");
    if (!page || !host) return;
    document.title = `${page.title} — 苏州大宇宙`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", page.description);
    host.innerHTML = `
      ${renderHero(page)}
      <section class="lead-section">
        <div class="page-shell lead-grid">
          <div class="section-index">Position / ${esc(page.eyebrow)}</div>
          <p class="lead-copy cn-serif reveal">${page.lead}</p>
        </div>
      </section>
      ${(page.sections || []).map(renderSection).join("")}
      ${renderRelated(page)}`;
  }

  function initHomeHero() {
    const slides = [...document.querySelectorAll(".hero-slide")];
    const dots = [...document.querySelectorAll(".slide-dot")];
    if (!slides.length) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let current = 0;
    let timer;
    slides.forEach((slide) => {
      const video = slide.querySelector("video");
      if (!video) return;
      const markReady = () => slide.classList.add("media-ready");
      if (video.readyState >= 2) markReady();
      else video.addEventListener("loadeddata", markReady, { once: true });
    });
    const show = (index) => {
      current = index;
      slides.forEach((slide, slideIndex) => {
        const active = slideIndex === index;
        const video = slide.querySelector("video");
        slide.classList.toggle("active", active);
        dots[slideIndex]?.classList.toggle("active", active);
        if (!video) return;
        if (active && !reduceMotion) {
          if (video.readyState >= 1) video.currentTime = 0;
          video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      });
    };
    const schedule = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        show((current + 1) % slides.length);
        schedule();
      }, Number(slides[current]?.dataset.duration || 6000));
    };
    dots.forEach((dot, index) => dot.addEventListener("click", () => {
      show(index);
      if (!reduceMotion) schedule();
    }));
    show(0);
    if (!reduceMotion) schedule();
  }

  function initFilm() {
    const dialog = document.querySelector("#filmDialog");
    const video = document.querySelector("#brandFilm");
    const open = document.querySelector("#openFilm");
    const close = document.querySelector("#closeFilm");
    if (!dialog || !video || !open || !close) return;
    open.addEventListener("click", () => {
      dialog.showModal();
      video.play().catch(() => undefined);
    });
    close.addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener("close", () => video.pause());
  }

  function initCaseFilters() {
    document.querySelectorAll(".filter-bar").forEach((bar) => {
      const grid = bar.nextElementSibling;
      const cards = [...grid.querySelectorAll(".case-card")];
      bar.querySelectorAll(".filter-btn").forEach((button) => {
        button.addEventListener("click", () => {
          bar.querySelectorAll(".filter-btn").forEach((item) => item.classList.remove("active"));
          button.classList.add("active");
          const filter = button.dataset.filter;
          cards.forEach((card) => {
            card.hidden = filter !== "all" && !card.dataset.tags.split("|").includes(filter);
          });
        });
      });
    });
  }

  function initForm() {
    const form = document.querySelector("#demoContactForm");
    if (!form) return;
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const status = form.querySelector("#formStatus");
      status.textContent = "演示提交成功：本次输入未发送、未保存。正式版将接入经审批的处理流程。";
      status.style.color = "var(--amber)";
    });
  }

  function initReveals() {
    const items = [...document.querySelectorAll(".reveal")];
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!pageId && window.gsap && window.ScrollTrigger && !reduceMotion) {
      const { gsap, ScrollTrigger } = window;
      gsap.registerPlugin(ScrollTrigger);
      document.documentElement.classList.add("gsap-motion");

      const motionMedia = gsap.matchMedia();
      motionMedia.add({
        isDesktop: "(min-width: 721px)",
        isMobile: "(max-width: 720px)"
      }, (context) => {
        const { isDesktop, isMobile } = context.conditions;
        const scrub = isMobile ? 0.34 : 0.58;

        items.forEach((item, index) => {
          const isText = item.classList.contains("section-head");
          gsap.fromTo(item, {
            autoAlpha: 0,
            x: isText && isDesktop ? -36 : 0,
            y: isText ? (isMobile ? 30 : 54) : (isMobile ? 48 : 82),
            scale: isText ? 0.99 : (isMobile ? 0.975 : 0.955),
            transformOrigin: "50% 100%",
            force3D: true
          }, {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            ease: "none",
            immediateRender: true,
            scrollTrigger: {
              trigger: item,
              start: "clamp(top 94%)",
              end: "clamp(top 57%)",
              scrub,
              invalidateOnRefresh: true,
              refreshPriority: index
            }
          });
        });

        const refreshMotion = () => ScrollTrigger.refresh();
        if (document.fonts?.ready) document.fonts.ready.then(refreshMotion);
        if (document.readyState === "complete") refreshMotion();
        else window.addEventListener("load", refreshMotion, { once: true });

        return () => {
          document.documentElement.classList.remove("gsap-motion");
          gsap.set(items, { clearProps: "opacity,visibility,transform" });
        };
      });
      return;
    }

    if (reduceMotion) {
      items.forEach((item) => item.classList.add("revealed"));
      return;
    }

    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("revealed"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: .05 });
    items.forEach((item) => observer.observe(item));
  }

  function initProgress() {
    const bar = document.querySelector("#siteProgress");
    const header = document.querySelector("#siteHeader");
    if (!bar) return;
    const update = () => {
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = `scaleX(${distance > 0 ? window.scrollY / distance : 0})`;
      header?.classList.toggle("scrolled", window.scrollY > 24);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
  }

  function initCalendarTool() {
    if (!document.modelContext?.registerTool) return;
    document.modelContext.registerTool({
      name: "get_daily_calendar",
      description: "Get a public TCI daily calendar poster URL for a YYYY-MM-DD date in Asia/Shanghai. This is read-only and requires no user data.",
      inputSchema: {
        type: "object",
        properties: {
          date: {
            type: "string",
            pattern: "^\\d{4}-\\d{2}-\\d{2}$",
            description: "Calendar date in YYYY-MM-DD. Omit to use today in Asia/Shanghai."
          }
        }
      },
      annotations: {
        readOnlyHint: true,
        untrustedContentHint: false
      },
      execute: async ({ date } = {}) => {
        const parts = Object.fromEntries(
          new Intl.DateTimeFormat("en", {
            timeZone: "Asia/Shanghai",
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
          }).formatToParts(new Date()).map(({ type, value }) => [type, value])
        );
        const requestedDate = date || `${parts.year}-${parts.month}-${parts.day}`;
        if (!/^\d{4}-\d{2}-\d{2}$/.test(requestedDate)) {
          return JSON.stringify({ available: false, error: "invalid_date", expected: "YYYY-MM-DD" });
        }
        const posterUrl = new URL(`${root}calendar/${requestedDate}.png`, document.baseURI).href;
        const response = await fetch(posterUrl, { method: "HEAD" });
        return JSON.stringify({
          available: response.ok,
          date: requestedDate,
          timezone: "Asia/Shanghai",
          contentType: "image/png",
          downloadUrl: response.ok ? posterUrl : null
        });
      }
    }).catch(() => undefined);
  }

  renderHeader();
  if (pageId) renderPage();
  renderFooter();
  initHomeHero();
  initFilm();
  initCaseFilters();
  initForm();
  initReveals();
  initProgress();
  initCalendarTool();
})();
