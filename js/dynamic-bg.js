/**
 * 机场PRO - 动态意境湖景水波与微光悬浮粒子引擎
 * 纯原生 HTML5 Canvas + 高性能 requestAnimationFrame (零外部依赖，极低功耗)
 */
(function () {
  'use strict';

  // 检查浏览器是否开启减弱动态效果偏好
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const container = document.getElementById('dynamic-bg-container');
  const canvas = document.getElementById('dynamic-bg-canvas');
  const bgImg = document.querySelector('.dynamic-bg-img');

  if (!canvas || !container) return;

  const ctx = canvas.getContext('2d');
  let width = 0;
  let height = 0;
  let animationFrameId = null;

  // 鼠标视差平滑变量
  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize, { passive: true });
  resize();

  // 监听鼠标移动产生微视差
  window.addEventListener('mousemove', function (e) {
    mouseX = (e.clientX / width - 0.5) * 20; // 范围 -10px ~ +10px
    mouseY = (e.clientY / height - 0.5) * 16; // 范围 -8px ~ +8px
  }, { passive: true });

  // 悬浮微光光斑粒子群
  const PARTICLE_COUNT = 38;
  const particles = [];

  class Particle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 10;
      this.radius = 1.2 + Math.random() * 2.8;
      this.baseAlpha = 0.15 + Math.random() * 0.45;
      this.alpha = this.baseAlpha;
      this.speedY = 0.25 + Math.random() * 0.55;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.pulse = Math.random() * Math.PI * 2;
      this.pulseSpeed = 0.02 + Math.random() * 0.03;
    }

    update() {
      this.y -= this.speedY;
      this.x += this.speedX + Math.sin(this.pulse) * 0.25;
      this.pulse += this.pulseSpeed;
      this.alpha = this.baseAlpha * (0.6 + 0.4 * Math.sin(this.pulse));

      if (this.y < -10 || this.x < -10 || this.x > width + 10) {
        this.reset();
      }
    }

    draw() {
      const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius * 2.5);
      grad.addColorStop(0, `rgba(224, 242, 254, ${this.alpha})`);
      grad.addColorStop(0.4, `rgba(56, 189, 248, ${this.alpha * 0.7})`);
      grad.addColorStop(1, 'rgba(56, 189, 248, 0)');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius * 2.5, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle());
  }

  // 鼠标交互微涟漪
  const ripples = [];
  let lastRippleTime = 0;

  window.addEventListener('mousemove', function (e) {
    const now = Date.now();
    if (now - lastRippleTime > 180) {
      lastRippleTime = now;
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 4,
        maxRadius: 45 + Math.random() * 25,
        alpha: 0.35
      });
      if (ripples.length > 12) ripples.shift();
    }
  }, { passive: true });

  // 水面微波光影条纹 (基于水域位置进行微光渲染)
  let waveTime = 0;

  function drawWaterShimmer() {
    const waterTop = height * 0.52; // 水面大概位于高度 52% 以下
    const waterHeight = height - waterTop;

    waveTime += 0.015;

    // 绘制 4 层柔和横向波动光晕
    for (let layer = 0; layer < 4; layer++) {
      const yOffset = waterTop + (waterHeight / 4) * layer + Math.sin(waveTime + layer) * 8;
      const waveAlpha = 0.04 + 0.03 * Math.sin(waveTime * 1.5 + layer * 2);

      const grad = ctx.createLinearGradient(0, yOffset - 12, 0, yOffset + 12);
      grad.addColorStop(0, 'rgba(56, 189, 248, 0)');
      grad.addColorStop(0.5, `rgba(224, 242, 254, ${waveAlpha})`);
      grad.addColorStop(1, 'rgba(56, 189, 248, 0)');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.moveTo(0, yOffset);

      for (let x = 0; x <= width; x += 40) {
        const waveY = yOffset + Math.sin(x * 0.008 + waveTime * 2 + layer) * 5;
        ctx.lineTo(x, waveY);
      }
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      ctx.fill();
    }
  }

  // 主渲染循环
  function animate() {
    ctx.clearRect(0, 0, width, height);

    // 1. 平滑微视差更新背景图位移
    currentX += (mouseX - currentX) * 0.05;
    currentY += (mouseY - currentY) * 0.05;
    if (bgImg) {
      bgImg.style.transform = `translate3d(${-currentX}px, ${-currentY}px, 0) scale(1.05)`;
    }

    // 2. 渲染水面波光倒影
    drawWaterShimmer();

    // 3. 渲染悬浮微光粒子
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }

    // 4. 渲染鼠标微涟漪
    for (let i = ripples.length - 1; i >= 0; i--) {
      const r = ripples[i];
      r.radius += 0.85;
      r.alpha *= 0.94;

      if (r.alpha <= 0.01 || r.radius >= r.maxRadius) {
        ripples.splice(i, 1);
        continue;
      }

      ctx.strokeStyle = `rgba(186, 230, 253, ${r.alpha})`;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      // 椭圆涟漪（模拟透视倾角）
      ctx.ellipse(r.x, r.y, r.radius, r.radius * 0.42, 0, 0, Math.PI * 2);
      ctx.stroke();
    }

    animationFrameId = requestAnimationFrame(animate);
  }

  // 页面离开时自动暂停节省 CPU，返回时恢复
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    } else {
      if (!animationFrameId) {
        animate();
      }
    }
  });

  animate();
})();
