(() => {
  const root = document.querySelector('[data-blog]');
  if (!root) return;

  const cards = [...root.querySelectorAll('[data-article]')];
  const search = root.querySelector('[data-blog-search]');
  const buttons = [...root.querySelectorAll('[data-filter]')];
  const count = root.querySelector('[data-article-count]');
  const empty = root.querySelector('[data-no-results]');
  const locale = document.documentElement.lang === 'ar' ? 'ar' : 'en';
  let activeCategory = 'all';

  const normalize = value => (value || '')
    .toLocaleLowerCase(locale)
    .normalize('NFKD')
    .replace(/[\u064B-\u065F\u0670]/g, '')
    .trim();

  function update() {
    const query = normalize(search?.value);
    let visible = 0;

    cards.forEach(card => {
      const categories = (card.dataset.category || '').split(' ');
      const haystack = normalize(card.textContent + ' ' + (card.dataset.keywords || ''));
      const matchesCategory = activeCategory === 'all' || categories.includes(activeCategory);
      const matchesQuery = !query || haystack.includes(query);
      const show = matchesCategory && matchesQuery;
      card.hidden = !show;
      if (show) visible += 1;
    });

    if (count) {
      count.textContent = locale === 'ar'
        ? `${visible} ${visible === 1 ? 'مقال' : 'مقالات متاحة'}`
        : `${visible} ${visible === 1 ? 'article' : 'articles'} available`;
    }
    empty?.classList.toggle('show', visible === 0);
  }

  buttons.forEach(button => button.addEventListener('click', () => {
    activeCategory = button.dataset.filter || 'all';
    buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    update();
  }));

  search?.addEventListener('input', update);
  update();
})();
