/* ============================================
   AETHER — Animation Engine
   ============================================ */

if (window.gsap) {
  gsap.registerPlugin(ScrollTrigger);
}

// ============================================
// Smooth Scroll (Lenis)
// ============================================
let lenis = null;

if (window.Lenis) {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  lenis.on('scroll', ScrollTrigger.update);

  if (window.gsap) {
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  }
}

// ============================================
// Custom Cursor
// ============================================
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

if (cursor && follower) {
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (window.gsap) {
      gsap.to(cursor, { x: mouseX, y: mouseY, duration: 0.1 });
    }
  });

  if (window.gsap) {
    gsap.ticker.add(() => {
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;
      gsap.set(follower, { x: followerX, y: followerY });
    });
  }

  const hoverElements = document.querySelectorAll('a, button, .work-item, .service-item');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('hover');
      follower.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
      follower.classList.remove('hover');
    });
  });

  if (window.matchMedia('(max-width: 1024px)').matches) {
    cursor.style.display = 'none';
    follower.style.display = 'none';
    document.body.style.cursor = 'auto';
  }
}

// ============================================
// Magnetic Buttons
// ============================================
document.querySelectorAll('.magnetic').forEach(btn => {
  const strength = parseFloat(btn.dataset.strength) || 0.3;

  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    if (window.gsap) {
      gsap.to(btn, {
        x: x * strength,
        y: y * strength,
        duration: 0.4,
        ease: 'power3.out'
      });
    }
  });

  btn.addEventListener('mouseleave', () => {
    if (window.gsap) {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.4)'
      });
    }
  });
});

// ============================================
// Preloader
// ============================================
const preloader = document.querySelector('.preloader');
const preloaderBar = document.querySelector('.preloader-bar');
const preloaderPercent = document.querySelector('.preloader-percent');
const preloaderLogo = document.querySelector('.preloader-logo');

function startAnimations() {
  if (!window.gsap) return;

  const tlPreloader = gsap.timeline({
    onComplete: () => {
      if (preloader) {
        gsap.to(preloader, {
          yPercent: -100,
          duration: 1,
          ease: 'power4.inOut',
          onComplete: () => {
            if (preloader) preloader.style.display = 'none';
            initPageAnimations();
          }
        });
      } else {
        initPageAnimations();
      }
    }
  });

  if (preloaderLogo && preloaderBar && preloaderPercent) {
    tlPreloader
      .to(preloaderLogo, { opacity: 1, duration: 0.8, ease: 'power2.out' })
      .to(preloaderBar, {
        width: '100%',
        duration: 1.8,
        ease: 'power2.inOut',
        onUpdate: function() {
          const progress = Math.round(this.progress() * 100);
          if (preloaderPercent) preloaderPercent.textContent = progress + '%';
        }
      }, '-=0.3')
      .to([preloaderLogo, preloaderPercent, '.preloader-progress'], {
        opacity: 0,
        y: -20,
        duration: 0.5,
        stagger: 0.05
      });
  } else {
    initPageAnimations();
  }
}

// ============================================
// Page Animations
// ============================================
function initPageAnimations() {
  if (!window.gsap) return;

  const heroTl = gsap.timeline({ defaults: { ease: 'power4.out' } });

  heroTl
    .to('.hero-title .line', {
      y: 0,
      duration: 1.2,
      stagger: 0.12
    })
    .to('.hero-subtitle', {
      opacity: 1,
      y: 0,
      duration: 1
    }, '-=0.6')
    .to('.hero-cta', {
      opacity: 1,
      y: 0,
      duration: 1
    }, '-=0.7')
    .to('.hero-scroll', {
      opacity: 1,
      duration: 1
    }, '-=0.5')
    .to('.hero-eyebrow', {
      opacity: 1,
      duration: 0.8
    }, '-=1.2');

  gsap.utils.toArray('.work-item').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      y: 80,
      opacity: 0,
      duration: 1.2,
      delay: i * 0.1,
      ease: 'power3.out'
    });
  });

  gsap.utils.toArray('.service-item').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 90%',
        toggleActions: 'play none none none'
      },
      y: 40,
      opacity: 0,
      duration: 0.9,
      delay: i * 0.08,
      ease: 'power3.out'
    });
  });

  gsap.from('.about-text', {
    scrollTrigger: {
      trigger: '.about',
      start: 'top 75%'
    },
    y: 40,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out'
  });

  gsap.utils.toArray('.stat-number').forEach(stat => {
    const target = parseInt(stat.dataset.target);
    gsap.from(stat, {
      scrollTrigger: {
        trigger: stat,
        start: 'top 85%'
      },
      textContent: 0,
      duration: 2,
      ease: 'power2.out',
      snap: { textContent: 1 },
      onUpdate: function() {
        stat.textContent = Math.round(this.targets()[0].textContent);
      }
    });
  });

  gsap.to('.contact-title .line', {
    scrollTrigger: {
      trigger: '.contact',
      start: 'top 70%'
    },
    y: 0,
    duration: 1.2,
    stagger: 0.1,
    ease: 'power4.out'
  });

  gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
      scrollTrigger: {
        trigger: title,
        start: 'top 85%'
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
  });
}

// ============================================
// Mobile Menu
// ============================================
const burger = document.querySelector('.nav-burger');
const mobileMenu = document.querySelector('.mobile-menu');

if (burger && mobileMenu) {
  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    const spans = burger.querySelectorAll('span');
    if (mobileMenu.classList.contains('active')) {
      if (window.gsap) {
        gsap.to(spans[0], { rotation: 45, y: 4, duration: 0.3 });
        gsap.to(spans[1], { rotation: -45, y: -4, duration: 0.3 });
      }
    } else {
      if (window.gsap) {
        gsap.to(spans[0], { rotation: 0, y: 0, duration: 0.3 });
        gsap.to(spans[1], { rotation: 0, y: 0, duration: 0.3 });
      }
    }
  });

  document.querySelectorAll('.mobile-menu-links a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      const spans = burger.querySelectorAll('span');
      if (window.gsap) {
        gsap.to(spans[0], { rotation: 0, y: 0, duration: 0.3 });
        gsap.to(spans[1], { rotation: 0, y: 0, duration: 0.3 });
      }
    });
  });
}

// ============================================
// Smooth anchor links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      if (lenis) {
        lenis.scrollTo(target, { offset: -80 });
      } else {
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

startAnimations();
