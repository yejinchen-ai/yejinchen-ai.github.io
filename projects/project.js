(() => {
  const body = document.body;
  const toggle = document.getElementById('langToggle');
  const saved = localStorage.getItem('resume-language');
  const initial = saved || (navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en');

  function setLanguage(language) {
    const lang = language === 'zh' ? 'zh' : 'en';
    body.dataset.language = lang;
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = lang === 'zh' ? body.dataset.titleZh : body.dataset.titleEn;
    toggle.textContent = lang === 'zh' ? 'EN' : '中文';
    toggle.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切换到中文');
    localStorage.setItem('resume-language', lang);
  }

  toggle.addEventListener('click', () => setLanguage(body.dataset.language === 'zh' ? 'en' : 'zh'));
  setLanguage(initial);
})();
