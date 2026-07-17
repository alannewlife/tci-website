(() => {
  "use strict";

  const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
  const mix = (start, end, amount) => start + (end - start) * amount;
  const smoothstep = (edge0, edge1, value) => {
    const x = clamp((value - edge0) / Math.max(0.0001, edge1 - edge0));
    return x * x * (3 - 2 * x);
  };

  const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  let reduceMotion = reduceMotionQuery.matches;

  const layerNames = ["bg", "mid", "subject", "fore"];
  const scenes = [
    {
      id: "origin",
      roman: "00",
      name: "Origin",
      base: "assets/scenes/00-origin",
      focus: [0.5, 0.5],
      accent: [224, 177, 100],
    },
    {
      id: "signal",
      roman: "I",
      name: "Signal",
      base: "assets/scenes/01-signal",
      focus: [0.5, 0.5],
      accent: [232, 172, 87],
    },
    {
      id: "maze",
      roman: "II",
      name: "Complexity",
      base: "assets/scenes/02-complexity",
      focus: [0.5, 0.5],
      accent: [221, 232, 213],
    },
    {
      id: "intelligence",
      roman: "III",
      name: "Intelligence",
      base: "assets/scenes/03-intelligence",
      focus: [0.5, 0.5],
      accent: [82, 215, 235],
    },
    {
      id: "momentum",
      roman: "IV",
      name: "Momentum",
      base: "assets/scenes/04-momentum",
      focus: [0.5, 0.5],
      accent: [255, 104, 70],
    },
  ].map((scene) => ({
    ...scene,
    poster: `${scene.base}-bg.webp`,
    layers: Object.fromEntries(layerNames.map((layer) => [layer, `${scene.base}-${layer}.webp`])),
  }));

  const canvas = document.querySelector("#stage");
  const pageProgress = document.querySelector("#pageProgress");
  const runtimeState = document.querySelector("#runtimeState");
  const sceneRoman = document.querySelector("#sceneRoman");
  const sceneName = document.querySelector("#sceneName");
  const fallbackA = document.querySelector("#fallbackA");
  const fallbackB = document.querySelector("#fallbackB");
  const sections = [...document.querySelectorAll("[data-scene]")];
  const beats = [...document.querySelectorAll(".chapter-beat")];
  const navLinks = [...document.querySelectorAll("[data-nav-scene]")];

  let sectionMetrics = [];
  let beatMetrics = [];
  let currentSceneIndex = -1;
  let viewportWidth = window.innerWidth;
  let viewportHeight = window.innerHeight;
  let scrollDirty = true;
  let lastInteraction = performance.now();
  let resizeFrame = 0;
  let pointerCssX = 0;
  let filteredVelocity = 0;
  let lastScrollY = window.scrollY;
  let lastScrollAt = performance.now();

  fallbackA.style.backgroundImage = `url("${scenes[0].poster}")`;

  function measureSections() {
    viewportWidth = window.innerWidth;
    viewportHeight = window.innerHeight;
    sectionMetrics = sections.map((section) => {
      const rect = section.getBoundingClientRect();
      return {
        top: rect.top + window.scrollY,
        height: section.offsetHeight,
      };
    });
    beatMetrics = beats.map((beat) => {
      const rect = beat.getBoundingClientRect();
      return {
        element: beat,
        top: rect.top + window.scrollY,
        height: Math.max(1, beat.offsetHeight),
      };
    });
    scrollDirty = true;
  }

  function getScrollState() {
    const scrollY = window.scrollY;
    let activeIndex = 0;

    for (let index = 0; index < sectionMetrics.length; index += 1) {
      // Some browsers land a fraction of a pixel before an anchor's measured top.
      if (scrollY + 1 >= sectionMetrics[index].top) activeIndex = index;
      else break;
    }

    const metric = sectionMetrics[activeIndex] || { top: 0, height: viewportHeight };
    const usableDistance = Math.max(1, metric.height - viewportHeight);
    const localProgress = clamp((scrollY - metric.top) / usableDistance);
    const handoff = metric.top + metric.height;
    const transitionDuration = viewportHeight * 1.25;
    const transitionProgress = activeIndex < scenes.length - 1
      ? smoothstep(0, 1, (scrollY - (handoff - transitionDuration)) / transitionDuration)
      : 0;

    return {
      scrollY,
      activeIndex,
      nextIndex: Math.min(activeIndex + 1, scenes.length - 1),
      localProgress,
      transitionProgress,
      velocity: clamp(filteredVelocity, -1, 1),
      pageProgress: clamp(scrollY / Math.max(1, document.documentElement.scrollHeight - viewportHeight)),
    };
  }

  function updateBeatMotion(scrollY) {
    if (reduceMotion) return;

    beatMetrics.forEach(({ element, top, height }) => {
      const progress = clamp((scrollY + viewportHeight - top) / (height + viewportHeight));
      const entering = smoothstep(0.025, 0.2, progress);
      const leaving = 1 - smoothstep(0.78, 0.975, progress);
      const opacity = clamp(entering * leaving);
      const y = clamp((0.5 - progress) * 58, -34, 34);
      const blur = (1 - opacity) * 5.5;
      const scale = 0.985 + opacity * 0.015;

      element.style.setProperty("--beat-opacity", opacity.toFixed(3));
      element.style.setProperty("--beat-y", `${y.toFixed(2)}px`);
      element.style.setProperty("--beat-blur", `${blur.toFixed(2)}px`);
      element.style.setProperty("--beat-scale", scale.toFixed(4));
    });
  }

  let accentCache = "";
  function updateInterface(state) {
    const scene = scenes[state.activeIndex];
    const nextScene = scenes[state.nextIndex];
    const accentT = reduceMotion ? Number(state.transitionProgress > 0.5) : state.transitionProgress;
    const accent = scene.accent.map((value, channel) => Math.round(mix(value, nextScene.accent[channel], accentT)));
    const accentString = accent.join(", ");

    pageProgress.style.transform = `scaleX(${state.pageProgress})`;
    if (accentString !== accentCache) {
      document.documentElement.style.setProperty("--accent-rgb", accentString);
      accentCache = accentString;
    }

    document.documentElement.style.setProperty("--stage-x", `${pointerCssX.toFixed(2)}px`);
    document.documentElement.style.setProperty(
      "--stage-y",
      `${clamp((0.5 - state.localProgress) * 14 + state.velocity * 4, -18, 18).toFixed(2)}px`,
    );
    document.documentElement.style.setProperty("--stage-transition", state.transitionProgress.toFixed(3));
    updateBeatMotion(state.scrollY);

    if (state.activeIndex === currentSceneIndex) return;
    currentSceneIndex = state.activeIndex;
    document.body.dataset.scene = scene.id;
    sceneRoman.textContent = scene.roman;
    sceneName.textContent = scene.name;

    navLinks.forEach((link) => {
      const isActive = Number(link.dataset.navScene) === state.activeIndex;
      link.classList.toggle("is-active", isActive);
      if (isActive) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  }

  let fallbackPair = "";
  let fallbackOpacity = "";
  function updateFallback(state) {
    const pair = `${state.activeIndex}:${state.nextIndex}`;
    if (pair !== fallbackPair) {
      const current = scenes[state.activeIndex];
      const next = scenes[state.nextIndex];
      fallbackB.style.transition = "none";
      fallbackB.style.opacity = "0";
      fallbackB.getBoundingClientRect();
      fallbackA.style.backgroundImage = `url("${current.poster}")`;
      fallbackA.style.backgroundPosition = `${current.focus[0] * 100}% ${current.focus[1] * 100}%`;
      fallbackB.style.backgroundImage = `url("${next.poster}")`;
      fallbackB.style.backgroundPosition = `${next.focus[0] * 100}% ${next.focus[1] * 100}%`;
      fallbackB.style.transition = "";
      fallbackPair = pair;
      fallbackOpacity = "0";
    }
    const nextOpacity = String(reduceMotion
      ? Number(state.transitionProgress > 0.5)
      : state.transitionProgress);
    if (nextOpacity !== fallbackOpacity) {
      fallbackB.style.opacity = nextOpacity;
      fallbackOpacity = nextOpacity;
    }
  }

  document.querySelectorAll("a[href^='#']").forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      history.replaceState(null, "", link.getAttribute("href"));
    });
  });

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.target.classList.toggle("is-visible", entry.isIntersecting));
    }, {
      rootMargin: "-6% 0px -10% 0px",
      threshold: 0.06,
    });
    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
  } else {
    document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
  }

  function loadImage(src) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.decoding = "async";
      image.onload = () => {
        const decoded = typeof image.decode === "function" ? image.decode().catch(() => undefined) : Promise.resolve();
        decoded.then(() => resolve(image));
      };
      image.onerror = () => reject(new Error(`无法加载分层素材：${src}`));
      image.src = src;
    });
  }

  class LayerAssetManager {
    constructor(manifest) {
      this.manifest = manifest;
      this.cache = new Map();
      this.loading = new Map();
      this.order = [];
    }

    ensureScene(index) {
      const safeIndex = clamp(index, 0, this.manifest.length - 1);
      if (this.cache.has(safeIndex)) {
        this.touch(safeIndex);
        return Promise.resolve(this.cache.get(safeIndex));
      }
      if (this.loading.has(safeIndex)) return this.loading.get(safeIndex);

      const scene = this.manifest[safeIndex];
      const promise = Promise.all(layerNames.map((name) => loadImage(scene.layers[name])))
        .then((images) => {
          const asset = {
            index: safeIndex,
            images: Object.fromEntries(layerNames.map((name, layerIndex) => [name, images[layerIndex]])),
            width: images[0].naturalWidth,
            height: images[0].naturalHeight,
          };
          this.cache.set(safeIndex, asset);
          this.loading.delete(safeIndex);
          this.touch(safeIndex);
          return asset;
        })
        .catch((error) => {
          this.loading.delete(safeIndex);
          throw error;
        });

      this.loading.set(safeIndex, promise);
      return promise;
    }

    touch(index) {
      this.order = this.order.filter((value) => value !== index);
      this.order.push(index);
    }

    prune(keepIndices) {
      const keep = new Set(keepIndices);
      const limit = Math.max(1, keep.size);
      while (this.cache.size > limit) {
        const candidate = this.order.find((index) => !keep.has(index));
        if (candidate === undefined) break;
        this.cache.delete(candidate);
        this.order = this.order.filter((index) => index !== candidate);
      }
    }

    hasScene(index) {
      return this.cache.has(index);
    }
  }

  function compileShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      const message = gl.getShaderInfoLog(shader);
      gl.deleteShader(shader);
      throw new Error(`Shader 编译失败：${message}`);
    }
    return shader;
  }

  function createProgram(gl, vertexSource, fragmentSource) {
    const program = gl.createProgram();
    const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexSource);
    const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      const message = gl.getProgramInfoLog(program);
      gl.deleteProgram(program);
      throw new Error(`WebGL 程序链接失败：${message}`);
    }
    return program;
  }

  class StageRenderer {
    constructor(targetCanvas) {
      this.canvas = targetCanvas;
      this.gl = targetCanvas.getContext("webgl2", {
        alpha: false,
        antialias: false,
        depth: false,
        stencil: false,
        powerPreference: "high-performance",
      });
      if (!this.gl) throw new Error("当前浏览器不支持 WebGL2");
      if (this.gl.getParameter(this.gl.MAX_TEXTURE_IMAGE_UNITS) < 8) {
        throw new Error("当前 GPU 的片元纹理单元不足 8 个");
      }

      this.pointerTarget = [0, 0];
      this.pointer = [0, 0];
      this.uploadedPair = [-1, -1];
      this.imageSize = [1600, 900];
      this.contextLost = false;
      this.dpr = 1;
      this.init();
      this.resize();
    }

    init() {
      const vertexShader = `#version 300 es
        in vec2 aPosition;
        out vec2 vUv;

        void main() {
          vUv = aPosition * 0.5 + 0.5;
          gl_Position = vec4(aPosition, 0.0, 1.0);
        }
      `;

      const fragmentShader = `#version 300 es
        precision highp float;

        in vec2 vUv;
        out vec4 outColor;

        uniform sampler2D uCurrentBg;
        uniform sampler2D uCurrentMid;
        uniform sampler2D uCurrentSubject;
        uniform sampler2D uCurrentFore;
        uniform sampler2D uNextBg;
        uniform sampler2D uNextMid;
        uniform sampler2D uNextSubject;
        uniform sampler2D uNextFore;
        uniform vec2 uResolution;
        uniform vec2 uImageSize;
        uniform vec2 uCurrentFocus;
        uniform vec2 uNextFocus;
        uniform vec2 uPointer;
        uniform vec3 uCurrentAccent;
        uniform vec3 uNextAccent;
        uniform float uTime;
        uniform float uLocalProgress;
        uniform float uTransition;
        uniform float uSceneIndex;
        uniform float uVelocity;
        uniform float uReducedMotion;

        float hash21(vec2 point) {
          point = fract(point * vec2(123.34, 456.21));
          point += dot(point, point + 45.32);
          return fract(point.x * point.y);
        }

        float valueNoise(vec2 point) {
          vec2 cell = floor(point);
          vec2 local = fract(point);
          local = local * local * (3.0 - 2.0 * local);
          float a = hash21(cell);
          float b = hash21(cell + vec2(1.0, 0.0));
          float c = hash21(cell + vec2(0.0, 1.0));
          float d = hash21(cell + vec2(1.0, 1.0));
          return mix(mix(a, b, local.x), mix(c, d, local.x), local.y);
        }

        float fbm(vec2 point) {
          float result = 0.0;
          float amplitude = 0.56;
          mat2 rotation = mat2(0.82, -0.57, 0.57, 0.82);
          for (int index = 0; index < 4; index++) {
            result += valueNoise(point) * amplitude;
            point = rotation * point * 2.03 + 11.7;
            amplitude *= 0.5;
          }
          return result;
        }

        vec2 coverUv(vec2 uv, vec2 focus) {
          float viewportAspect = uResolution.x / uResolution.y;
          float imageAspect = uImageSize.x / uImageSize.y;
          vec2 scale = vec2(1.0);
          if (imageAspect > viewportAspect) scale.x = viewportAspect / imageAspect;
          else scale.y = imageAspect / viewportAspect;
          return clamp((uv - 0.5) * scale + focus, 0.001, 0.999);
        }

        vec2 depthUv(vec2 uv, float zoom, vec2 offset, vec2 focus) {
          return coverUv((uv - 0.5) / zoom + 0.5 + offset, focus);
        }

        vec3 overLayer(vec3 base, vec4 layer) {
          return base * (1.0 - layer.a) + layer.rgb;
        }

        vec3 grade(vec3 color, float warmth) {
          float luminance = dot(color, vec3(0.2126, 0.7152, 0.0722));
          color = mix(vec3(luminance), color, 0.94);
          return color * vec3(1.0 + warmth * 0.035, 1.0, 1.0 - warmth * 0.025);
        }

        vec3 sampleCurrent(vec2 uv, float motion) {
          float phase = uLocalProgress - 0.5;
          float breath = sin(uTime * 0.17 + uSceneIndex) * 0.5 + 0.5;
          vec2 pointer = uPointer * motion;
          float inertia = uVelocity * motion;

          vec2 bgOffset = vec2(pointer.x * 0.0015 + phase * 0.002, -pointer.y * 0.001 + phase * 0.004 + inertia * 0.0006);
          vec2 midOffset = vec2(pointer.x * 0.003 + phase * 0.004, -pointer.y * 0.002 + phase * 0.009 + inertia * 0.0012);
          vec2 subjectOffset = vec2(pointer.x * 0.005 + phase * 0.007, -pointer.y * 0.0035 + phase * 0.016 + inertia * 0.0021);
          vec2 foreOffset = vec2(pointer.x * 0.008 + phase * 0.011, -pointer.y * 0.006 + phase * 0.027 + inertia * 0.0034);

          vec3 color = texture(uCurrentBg, depthUv(uv, 1.025 + breath * 0.004 * motion, bgOffset, uCurrentFocus)).rgb;
          color = overLayer(color, texture(uCurrentMid, depthUv(uv, 1.038, midOffset, uCurrentFocus)));
          color = overLayer(color, texture(uCurrentSubject, depthUv(uv, 1.052, subjectOffset, uCurrentFocus)));
          color = overLayer(color, texture(uCurrentFore, depthUv(uv, 1.078, foreOffset, uCurrentFocus)));
          return grade(color, 0.18);
        }

        vec3 sampleNext(vec2 uv, float motion) {
          float phase = mix(-0.68, -0.5, uTransition);
          float direction = mix(-0.55, 1.0, uTransition);
          vec2 pointer = uPointer * motion * direction;
          float inertia = uVelocity * motion * direction;
          float breath = sin(uTime * 0.17 + uSceneIndex + 1.0) * 0.5 + 0.5;

          vec2 bgOffset = vec2(pointer.x * 0.0015 + phase * 0.002, -pointer.y * 0.001 + phase * 0.004 + inertia * 0.0006);
          vec2 midOffset = vec2(pointer.x * 0.003 + phase * 0.004, -pointer.y * 0.002 + phase * 0.009 + inertia * 0.0012);
          vec2 subjectOffset = vec2(pointer.x * 0.005 + phase * 0.007, -pointer.y * 0.0035 + phase * 0.016 + inertia * 0.0021);
          vec2 foreOffset = vec2(pointer.x * 0.008 + phase * 0.011, -pointer.y * 0.006 + phase * 0.027 + inertia * 0.0034);

          vec3 color = texture(uNextBg, depthUv(uv, 1.025 + breath * 0.004 * motion, bgOffset, uNextFocus)).rgb;
          color = overLayer(color, texture(uNextMid, depthUv(uv, 1.038, midOffset, uNextFocus)));
          color = overLayer(color, texture(uNextSubject, depthUv(uv, 1.052, subjectOffset, uNextFocus)));
          color = overLayer(color, texture(uNextFore, depthUv(uv, 1.078, foreOffset, uNextFocus)));
          return grade(color, mix(0.04, 0.18, uTransition));
        }

        void main() {
          float motion = 1.0 - uReducedMotion;
          float transition = clamp(uTransition, 0.0, 1.0);
          vec3 currentColor = sampleCurrent(vUv, motion);
          vec3 nextColor = sampleNext(vUv, motion);

          float outgoing = smoothstep(0.02, 0.74, transition);
          float incoming = smoothstep(0.26, 0.98, transition);
          float currentLuma = dot(currentColor, vec3(0.2126, 0.7152, 0.0722));
          currentColor = mix(currentColor, vec3(currentLuma), outgoing * 0.24);
          currentColor *= 1.0 - outgoing * 0.25;
          nextColor *= 1.08 - incoming * 0.08;

          vec2 noisePoint = vec2(vUv.y * 5.4, vUv.x * 2.8);
          noisePoint += vec2(uSceneIndex * 1.71, uTime * 0.025 * motion);
          float noiseValue = fbm(noisePoint);
          float bristle = sin(vUv.y * 220.0 + noiseValue * 19.0 + uVelocity * 8.0) * 0.025;
          float tilt = (vUv.y - 0.5) * (0.24 + uVelocity * 0.055);
          float sweep = vUv.x + tilt + (noiseValue - 0.5) * 0.36 + bristle;
          float threshold = mix(-0.46, 1.48, transition);
          float feather = mix(0.085, 0.002, uReducedMotion);
          float brushMask = 1.0 - smoothstep(threshold - feather, threshold + feather, sweep);
          float revealMask = mix(brushMask, transition, 0.16);

          vec3 color = mix(currentColor, nextColor, revealMask);
          float transitionLife = sin(transition * 3.14159265);
          float band = 1.0 - smoothstep(0.025, 0.15, abs(sweep - threshold));
          vec3 accent = mix(uCurrentAccent, uNextAccent, transition);
          color *= 1.0 - transitionLife * band * 0.12;
          color += accent * transitionLife * band * 0.19;

          float vignette = 1.0 - smoothstep(0.35, 0.96, length((vUv - 0.5) * vec2(0.82, 1.0)));
          color *= mix(0.78, 1.025, vignette);
          float grain = hash21(vUv * uResolution + floor(uTime * 18.0));
          color += (grain - 0.5) * 0.018 * motion;
          outColor = vec4(color, 1.0);
        }
      `;

      const gl = this.gl;
      this.program = createProgram(gl, vertexShader, fragmentShader);
      gl.useProgram(this.program);

      const vertices = new Float32Array([
        -1, -1, 1, -1, -1, 1,
        -1, 1, 1, -1, 1, 1,
      ]);
      const buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
      const positionLocation = gl.getAttribLocation(this.program, "aPosition");
      gl.enableVertexAttribArray(positionLocation);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

      const uniformNames = [
        "uCurrentBg", "uCurrentMid", "uCurrentSubject", "uCurrentFore",
        "uNextBg", "uNextMid", "uNextSubject", "uNextFore",
        "uResolution", "uImageSize", "uCurrentFocus", "uNextFocus", "uPointer",
        "uCurrentAccent", "uNextAccent", "uTime", "uLocalProgress", "uTransition",
        "uSceneIndex", "uVelocity", "uReducedMotion",
      ];
      this.uniforms = Object.fromEntries(uniformNames.map((name) => [name, gl.getUniformLocation(this.program, name)]));
      this.textures = Array.from({ length: 8 }, () => this.createTexture());
      [
        "uCurrentBg", "uCurrentMid", "uCurrentSubject", "uCurrentFore",
        "uNextBg", "uNextMid", "uNextSubject", "uNextFore",
      ].forEach((name, index) => gl.uniform1i(this.uniforms[name], index));

      this.canvas.addEventListener("webglcontextlost", (event) => {
        event.preventDefault();
        this.contextLost = true;
        document.body.dataset.renderer = "fallback";
        runtimeState.textContent = "WebGL 已暂停 · 静态降级";
        scrollDirty = true;
      });
    }

    createTexture() {
      const gl = this.gl;
      const texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      return texture;
    }

    uploadTexture(slot, image) {
      const gl = this.gl;
      gl.activeTexture(gl.TEXTURE0 + slot);
      gl.bindTexture(gl.TEXTURE_2D, this.textures[slot]);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
      gl.pixelStorei(gl.UNPACK_COLORSPACE_CONVERSION_WEBGL, gl.BROWSER_DEFAULT_WEBGL);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    }

    setPair(currentIndex, nextIndex, currentAssets, nextAssets) {
      layerNames.forEach((name, index) => this.uploadTexture(index, currentAssets.images[name]));
      layerNames.forEach((name, index) => this.uploadTexture(index + 4, nextAssets.images[name]));
      this.uploadedPair = [currentIndex, nextIndex];
      this.imageSize = [currentAssets.width, currentAssets.height];
    }

    hasPair(currentIndex, nextIndex) {
      return this.uploadedPair[0] === currentIndex && this.uploadedPair[1] === nextIndex;
    }

    resize() {
      const gl = this.gl;
      const width = window.innerWidth;
      const height = window.innerHeight;
      const dimensionCap = width < 768 ? 1280 : 1920;
      this.dpr = Math.max(1, Math.min(
        window.devicePixelRatio || 1,
        1.5,
        dimensionCap / Math.max(1, width),
        dimensionCap / Math.max(1, height),
      ));
      const renderWidth = Math.max(1, Math.round(width * this.dpr));
      const renderHeight = Math.max(1, Math.round(height * this.dpr));
      if (this.canvas.width !== renderWidth || this.canvas.height !== renderHeight) {
        this.canvas.width = renderWidth;
        this.canvas.height = renderHeight;
        this.canvas.style.width = `${width}px`;
        this.canvas.style.height = `${height}px`;
        gl.viewport(0, 0, renderWidth, renderHeight);
      }
    }

    setPointer(clientX, clientY) {
      this.pointerTarget[0] = (clientX / Math.max(1, window.innerWidth) - 0.5) * 2;
      this.pointerTarget[1] = (clientY / Math.max(1, window.innerHeight) - 0.5) * 2;
    }

    render(state, now) {
      if (!this.hasPair(state.activeIndex, state.nextIndex)) return;
      const gl = this.gl;
      const currentScene = scenes[state.activeIndex];
      const nextScene = scenes[state.nextIndex];
      this.pointer[0] += (this.pointerTarget[0] - this.pointer[0]) * 0.075;
      this.pointer[1] += (this.pointerTarget[1] - this.pointer[1]) * 0.075;

      gl.useProgram(this.program);
      gl.uniform2f(this.uniforms.uResolution, this.canvas.width, this.canvas.height);
      gl.uniform2f(this.uniforms.uImageSize, this.imageSize[0], this.imageSize[1]);
      gl.uniform2f(this.uniforms.uCurrentFocus, currentScene.focus[0], currentScene.focus[1]);
      gl.uniform2f(this.uniforms.uNextFocus, nextScene.focus[0], nextScene.focus[1]);
      gl.uniform2f(this.uniforms.uPointer, this.pointer[0], this.pointer[1]);
      gl.uniform3fv(this.uniforms.uCurrentAccent, currentScene.accent.map((value) => value / 255));
      gl.uniform3fv(this.uniforms.uNextAccent, nextScene.accent.map((value) => value / 255));
      gl.uniform1f(this.uniforms.uTime, now / 1000);
      gl.uniform1f(this.uniforms.uLocalProgress, state.localProgress);
      gl.uniform1f(
        this.uniforms.uTransition,
        reduceMotion ? Number(state.transitionProgress > 0.5) : state.transitionProgress,
      );
      gl.uniform1f(this.uniforms.uSceneIndex, state.activeIndex);
      gl.uniform1f(this.uniforms.uVelocity, state.velocity);
      gl.uniform1f(this.uniforms.uReducedMotion, reduceMotion ? 1 : 0);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    }
  }

  const assetManager = new LayerAssetManager(scenes);
  let renderer = null;
  let pairRequestKey = "";
  let pairRequestGeneration = 0;
  const prefetchInFlight = new Set();
  let lastRender = 0;

  function setRendererReady() {
    if (!renderer || renderer.contextLost) return;
    document.body.dataset.renderer = "webgl";
    runtimeState.textContent = `WEBGL2 · 4×2 LAYERS · DPR ${renderer.dpr.toFixed(2)}${reduceMotion ? " · REDUCED" : ""}`;
  }

  function requestRenderPair(state) {
    if (!renderer || renderer.contextLost) return;
    const key = `${state.activeIndex}:${state.nextIndex}`;
    if (renderer.hasPair(state.activeIndex, state.nextIndex)) {
      if (pairRequestKey && pairRequestKey !== key) {
        pairRequestGeneration += 1;
        pairRequestKey = "";
      }
      setRendererReady();
      return;
    }
    if (key === pairRequestKey) return;
    const requestGeneration = ++pairRequestGeneration;
    pairRequestKey = key;
    document.body.dataset.renderer = "loading";
    runtimeState.textContent = "正在装载相邻分层场景";

    Promise.all([
      assetManager.ensureScene(state.activeIndex),
      assetManager.ensureScene(state.nextIndex),
    ]).then(([currentAssets, nextAssets]) => {
      if (requestGeneration !== pairRequestGeneration) return;
      const latest = getScrollState();
      if (`${latest.activeIndex}:${latest.nextIndex}` !== key) {
        pairRequestKey = "";
        requestRenderPair(latest);
        return;
      }
      renderer.setPair(latest.activeIndex, latest.nextIndex, currentAssets, nextAssets);
      pairRequestKey = "";
      assetManager.prune([latest.activeIndex, latest.nextIndex]);
      setRendererReady();
      scrollDirty = true;
    }).catch((error) => {
      if (requestGeneration !== pairRequestGeneration) return;
      pairRequestKey = "";
      const latest = getScrollState();
      if (`${latest.activeIndex}:${latest.nextIndex}` !== key) {
        requestRenderPair(latest);
        return;
      }
      console.warn(error);
      document.body.dataset.renderer = "fallback";
      runtimeState.textContent = "分层素材加载失败 · 静态降级";
    });
  }

  function prefetchUpcoming(state) {
    const upcoming = state.nextIndex + 1;
    if (state.transitionProgress < 0.04 || upcoming >= scenes.length) return;
    if (assetManager.hasScene(upcoming) || prefetchInFlight.has(upcoming)) return;
    prefetchInFlight.add(upcoming);
    assetManager.ensureScene(upcoming)
      .then(() => {
        const latest = getScrollState();
        const keep = [latest.activeIndex, latest.nextIndex];
        if (latest.nextIndex + 1 === upcoming && latest.transitionProgress >= 0.04) keep.push(upcoming);
        assetManager.prune(keep);
      })
      .catch((error) => console.warn(error))
      .finally(() => prefetchInFlight.delete(upcoming));
  }

  function renderLoop(now) {
    const state = getScrollState();
    const velocityActive = Math.abs(filteredVelocity) > 0.001;
    const interfaceNeedsUpdate = scrollDirty || velocityActive || currentSceneIndex < 0;
    if (interfaceNeedsUpdate) {
      updateInterface(state);
      updateFallback(state);
      requestRenderPair(state);
      prefetchUpcoming(state);
    }

    filteredVelocity *= 0.9;
    if (Math.abs(filteredVelocity) < 0.0005) filteredVelocity = 0;
    const idle = now - lastInteraction > 900;
    const frameInterval = reduceMotion ? 1000 : idle ? 33 : 16;
    if (!document.hidden && renderer && (scrollDirty || now - lastRender >= frameInterval)) {
      renderer.render(state, now);
      lastRender = now;
    }
    scrollDirty = false;
    requestAnimationFrame(renderLoop);
  }

  window.addEventListener("scroll", () => {
    const now = performance.now();
    const elapsed = Math.max(8, now - lastScrollAt);
    const rawVelocity = (window.scrollY - lastScrollY) / elapsed;
    filteredVelocity = mix(filteredVelocity, clamp(rawVelocity / 3.2, -1, 1), 0.28);
    lastScrollY = window.scrollY;
    lastScrollAt = now;
    scrollDirty = true;
    lastInteraction = now;
  }, { passive: true });

  window.addEventListener("pointermove", (event) => {
    const normalizedX = (event.clientX / Math.max(1, window.innerWidth) - 0.5) * 2;
    pointerCssX = normalizedX * 12;
    if (renderer) renderer.setPointer(event.clientX, event.clientY);
    scrollDirty = true;
    lastInteraction = performance.now();
  }, { passive: true });

  function scheduleResize() {
    cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(() => {
      measureSections();
      if (renderer) renderer.resize();
    });
  }

  window.addEventListener("resize", scheduleResize, { passive: true });
  window.addEventListener("orientationchange", scheduleResize, { passive: true });
  document.addEventListener("visibilitychange", () => {
    lastInteraction = performance.now();
    scrollDirty = true;
  });

  if ("ResizeObserver" in window) {
    const resizeObserver = new ResizeObserver(scheduleResize);
    sections.forEach((section) => resizeObserver.observe(section));
  }

  reduceMotionQuery.addEventListener("change", (event) => {
    reduceMotion = event.matches;
    scrollDirty = true;
    if (reduceMotion) {
      beats.forEach((beat) => {
        beat.style.removeProperty("--beat-opacity");
        beat.style.removeProperty("--beat-y");
        beat.style.removeProperty("--beat-blur");
        beat.style.removeProperty("--beat-scale");
      });
    }
    runtimeState.textContent = renderer
      ? `WEBGL2 · 4×2 LAYERS${reduceMotion ? " · REDUCED" : ""}`
      : "静态舞台 · REDUCED MOTION";
  });

  measureSections();
  requestAnimationFrame(renderLoop);

  const initialState = getScrollState();
  Promise.all([
    assetManager.ensureScene(initialState.activeIndex),
    assetManager.ensureScene(initialState.nextIndex),
  ]).then(([currentAssets, nextAssets]) => {
    renderer = new StageRenderer(canvas);
    const latest = getScrollState();
    if (latest.activeIndex === initialState.activeIndex && latest.nextIndex === initialState.nextIndex) {
      renderer.setPair(latest.activeIndex, latest.nextIndex, currentAssets, nextAssets);
      assetManager.prune([latest.activeIndex, latest.nextIndex]);
      setRendererReady();
    } else {
      requestRenderPair(latest);
    }
    scrollDirty = true;
  }).catch((error) => {
    console.warn(error);
    document.body.dataset.renderer = "fallback";
    runtimeState.textContent = "CSS 静态降级模式";
  });

  window.addEventListener("load", () => {
    measureSections();
    document.querySelectorAll(".hero .reveal").forEach((element) => element.classList.add("is-visible"));
  }, { once: true });
})();
