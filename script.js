const works = document.querySelector('.works');
const cards = [...works.querySelectorAll('.work-card')];
const titleOf = (card) => card.querySelector('.card-info h3')?.textContent.trim();
const byTitle = (title) => cards.find((card) => titleOf(card) === title);

const sections = [
  { key: 'live', kicker: '01 / LIVE ACTION', title: '真人实拍', lead: '过堂风', description: '现场的光线、声音与人物关系，构成真实而有呼吸感的影像叙事。' },
  { key: 'ai', kicker: '02 / AIGC DRAMA', title: 'AI 漫剧', lead: '荒年种出一座仙城 · 片段一', description: '从分镜拆解到画面生成、角色一致性修复和成片节奏控制。' }
];

const visualCards = cards.filter((card) => card.querySelector('.image-media'));
const rootHeading = works.querySelector('.section-head');
works.innerHTML = '';
works.append(rootHeading);
rootHeading.querySelector('.eyebrow').textContent = 'PORTFOLIO / THREE CHAPTERS';
rootHeading.querySelector('h2').textContent = '作品集';
rootHeading.querySelector('.filters')?.remove();

sections.forEach((section) => {
  const group = document.createElement('section');
  group.className = `project-section project-${section.key}`;
  group.innerHTML = `<div class="project-title"><p class="eyebrow">${section.kicker}</p><h3>${section.title}</h3><p>${section.description}</p></div><div class="work-grid"></div>`;
  const grid = group.querySelector('.work-grid');
  const groupCards = cards.filter((card) => card.classList.contains(section.key) && !visualCards.includes(card));
  const lead = byTitle(section.lead);
  if (lead) {
    groupCards.splice(groupCards.indexOf(lead), 1);
    groupCards.unshift(lead);
  }
  groupCards.forEach((card, index) => {
    card.classList.toggle('feature', index === 0);
    grid.append(card);
  });
  works.append(group);
});

const characterFiles = ['AI漫剧_人物图_岑今梨_000.png','AI漫剧_人物图_岑今梨_000_副本.png','AI漫剧_人物图_岑今梨_001.png','AI漫剧_人物图_岑今梨_001_副本.png','AI漫剧_人物图_岑今梨_002.png','AI漫剧_人物图_岑今梨_003.png','AI漫剧_人物图_岑今梨_003_副本.png','AI漫剧_人物图_岑今梨_004.png','AI漫剧_人物图_岑今梨_005.png','AI漫剧_人物图_岑今梨_006.png','AI漫剧_人物图_岑今梨_007.png','AI漫剧_人物图_岑今梨_标准版_副本.png','AI漫剧_人物图_岑今梨_礼服版.png','AI漫剧_人物图_岑今梨_礼服版_副本.png','AI漫剧_人物图_岑今梨_ll.png'];
const gallery = document.querySelector('#character-gallery');
gallery.innerHTML = characterFiles.map((file, index) => `<figure><img loading="lazy" src="assets/images/archive/${file}" alt="岑今梨 AI 人物视觉 ${index + 1}"><figcaption>${String(index + 1).padStart(2, '0')} / ${file.replace('AI漫剧_人物图_', '').replace('.png','')}</figcaption></figure>`).join('');

document.querySelectorAll('[data-watch-url]').forEach((card) => {
  const media = card.querySelector('.video-media');
  media.querySelector('video')?.remove();
  media.classList.add('external-video');
  const watch = document.createElement('a');
  watch.className = 'watch-external';
  watch.href = card.dataset.watchUrl;
  watch.target = '_blank';
  watch.rel = 'noopener noreferrer';
  watch.innerHTML = '<span>▶</span> 在哔哩哔哩观看';
  media.append(watch);
});
