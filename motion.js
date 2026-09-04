(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !window.gsap || !window.ScrollTrigger) { document.body.classList.add('motion-ready'); return; }

  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ force3D: true, nullTargetWarn: false });
  document.body.classList.add('motion-ready');

  gsap.from('.editorial-hero > *', { y: 70, scale: .92, autoAlpha: 0, stagger: .075, duration: 1.25, ease: 'expo.out', delay: .12 });

  gsap.utils.toArray('.statement > p, .section-head h2, .about-intro h2').forEach((title) => {
    gsap.from(title, { yPercent: 90, scale: 1.15, autoAlpha: 0, duration: 1.3, ease: 'expo.out', scrollTrigger: { trigger: title, start: 'top 86%', once: true } });
  });

  gsap.utils.toArray('.project-section').forEach((section) => {
    const heading = section.querySelector('.project-title');
    const cards = section.querySelectorAll('.work-card');
    gsap.from(heading, { y: 105, scale: 1.12, autoAlpha: 0, clipPath: 'inset(0 0 100% 0)', duration: 1.35, ease: 'expo.out', scrollTrigger: { trigger: section, start: 'top 75%', once: true } });
    gsap.from(cards, { yPercent: 28, scale: .9, autoAlpha: 0, clipPath: 'inset(0 0 100% 0)', duration: 1.15, stagger: .16, ease: 'power4.out', scrollTrigger: { trigger: heading, start: 'top 62%', once: true } });
    section.querySelectorAll('.card-media video, .card-media img').forEach((media) => {
      gsap.fromTo(media, { yPercent: 7, scale: 1.08 }, { yPercent: -7, scale: 1.03, ease: 'none', scrollTrigger: { trigger: media.closest('.work-card'), start: 'top bottom', end: 'bottom top', scrub: 1.1 } });
    });
  });

  gsap.from('.character-archive .section-head, .character-grid figure', { y: 80, autoAlpha: 0, stagger: .07, duration: 1, ease: 'power4.out', scrollTrigger: { trigger: '.character-archive', start: 'top 72%', once: true } });
  gsap.utils.toArray('.capabilities article, .experience-row').forEach((row) => gsap.from(row, { x: -70, autoAlpha: 0, duration: .95, ease: 'power3.out', scrollTrigger: { trigger: row, start: 'top 88%', once: true } }));
  gsap.from('.editorial-contact > *', { y: 100, scale: .94, autoAlpha: 0, stagger: .09, duration: 1.4, ease: 'expo.out', scrollTrigger: { trigger: '.editorial-contact', start: 'top 68%', once: true } });
  ScrollTrigger.refresh();
})();
