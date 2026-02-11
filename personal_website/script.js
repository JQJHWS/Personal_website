/**
 * 星辰物语 - 个人博客交互脚本
 * 包含：粒子背景、打字效果、滚动动画、主题切换、3D倾斜等
 */

// ===== 粒子背景 =====
function initParticles() {
  const canvas = document.getElementById('particles');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  const particleCount = 80;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticleArray();
  }

  function initParticleArray() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const color = isLight ? 'rgba(201, 162, 39, ' : 'rgba(201, 162, 39, ';

    particles.forEach((p, i) => {
      p.x += p.dx;
      p.y += p.dy;

      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = color + p.opacity + ')';
      ctx.fill();

      // 连线
      particles.slice(i + 1).forEach(p2 => {
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.strokeStyle = color + (0.1 * (1 - dist / 120)) + ')';
          ctx.lineWidth = 0.5;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      });
    });

    requestAnimationFrame(drawParticles);
  }

  resize();
  window.addEventListener('resize', resize);
  drawParticles();
}

// ===== 打字机效果 =====
function initTypingEffect() {
  const element = document.getElementById('typingText');
  if (!element) return;

  const texts = ['开发者', '创作者', '探索者'];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeSpeed = 100;
  const deleteSpeed = 50;
  const pauseTime = 2000;

  function type() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
      element.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      element.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === currentText.length) {
      delay = pauseTime;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      delay = 500;
    }

    setTimeout(type, delay);
  }

  setTimeout(type, 1000);
}

// ===== 滚动动画 (Intersection Observer) =====
function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.section-title, .about-content, .blog-card, .skill-item').forEach(el => {
    observer.observe(el);
  });
}

// ===== 导航栏滚动效果 =====
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });
}

// ===== 活跃导航高亮 =====
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => link.classList.remove('active'));
        navLink?.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActive);
  updateActive();
}

// ===== 主题切换 =====
function initThemeToggle() {
  const toggle = document.getElementById('themeToggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const savedTheme = localStorage.getItem('theme');
  const currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  
  document.documentElement.setAttribute('data-theme', currentTheme === 'dark' ? '' : 'light');

  toggle?.addEventListener('click', () => {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const newTheme = isLight ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', isLight ? '' : 'light');
    localStorage.setItem('theme', newTheme);
  });
}

// ===== 移动端菜单 =====
function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const navLinks = document.querySelector('.nav-links');

  btn?.addEventListener('click', () => {
    navLinks?.classList.toggle('active');
    document.body.style.overflow = navLinks?.classList.contains('active') ? 'hidden' : '';
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks?.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// ===== 博客卡片 3D 倾斜效果 =====
function initTiltEffect() {
  const cards = document.querySelectorAll('[data-tilt]');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.querySelector('.card-inner').style.transform = 
        `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.querySelector('.card-inner').style.transform = 
        'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
  });
}

// ===== 表单提交 =====
function initContactForm() {
  const form = document.querySelector('.contact-form');
  
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('感谢你的消息！我会尽快回复。');
    form.reset();
  });
}

// ===== 平滑滚动增强 =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initTypingEffect();
  initScrollAnimations();
  initNavbarScroll();
  initActiveNav();
  initThemeToggle();
  initMobileMenu();
  initTiltEffect();
  initContactForm();
  initSmoothScroll();
});
