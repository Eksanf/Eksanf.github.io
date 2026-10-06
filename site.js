(() => {
  'use strict';
  const translations = {
    en: {
      skip: 'Skip to content', nav_research: 'Research', nav_publications: 'Publications', nav_experience: 'Experience', nav_contact: 'Contact',
      role: 'Postdoctoral Researcher', affiliation: 'Tsinghua Shenzhen International Graduate School<br>Tsinghua University', email: 'Email', experience_cv: 'Experience & CV',
      sidebar_note: 'Autonomous driving<br>3D perception<br>Reinforcement learning', eyebrow: 'AUTONOMOUS SYSTEMS & MACHINE INTELLIGENCE', role_line: 'Postdoctoral Researcher · Tsinghua University',
      bio: 'I am a postdoctoral researcher at <a href="https://www.sigs.tsinghua.edu.cn/en/" target="_blank" rel="noopener">Tsinghua Shenzhen International Graduate School</a>, Tsinghua University. Previously, I worked as a Research Associate at Great Bay University.',
      research_bio: 'My research focuses on <strong>autonomous driving, 3D perception and reinforcement learning</strong>, with work spanning LiDAR segmentation, point cloud registration, visual SLAM and motion planning.',
      explore_work: 'Explore my research', get_in_touch: 'Get in touch', recent: 'RECENT WORK', recent_text: ' — point cloud registration in unstructured field environments.',
      research_heading: 'Research interests', research_intro: 'Perceiving complex environments. Learning to navigate them.',
      research_3d: '3D perception', research_3d_desc: 'LiDAR segmentation, point cloud fusion and registration, and visual SLAM.',
      research_vision: 'Visual understanding', research_vision_desc: 'Visual tracking, object detection and video prediction with multimodal learning.',
      research_rl: 'Robot learning', research_rl_desc: 'Reinforcement learning for autonomous driving decision-making and motion planning.',
      publications_heading: 'Publications', publications_intro: 'Journal and conference papers, alongside clearly marked preprints.', selected: 'Selected', all_listed: 'All listed',
      search_label: 'Search titles, authors or venues', search_placeholder: 'Search publications…', topic_all: 'All topics', category_3d: '3D perception', category_vision: 'Computer vision', category_rl: 'Robot learning',
      citations: 'Citations', metrics_date: 'All-time metrics · as of October 6, 2026', preprint: 'Preprint', paper_link: 'Paper', download_citation: 'Download citation', no_results: 'No matching publications. Try another keyword or topic.', download_all: 'Download listed citations',
      illustration_note: 'Thumbnails illustrate research topics; they are not experimental results.', experience_heading: 'Experience & CV', postdoc: 'Postdoctoral Researcher', postdoc_org: 'Tsinghua Shenzhen International Graduate School, Tsinghua University',
      current: 'Current', previous: 'Previous', past_org: 'Great Bay University', cv_request: 'Request a full CV by email', contact_eyebrow: 'LET’S CONNECT', contact_heading: 'Research starts with a conversation.',
      contact_text: 'For research discussions and academic collaboration, please get in touch.', updated: 'Updated October 2026', back_top: 'Back to top ↑'
    },
    zh: {
      skip: '跳至正文', nav_research: '研究方向', nav_publications: '学术论文', nav_experience: '经历与简历', nav_contact: '联系',
      role: '博士后研究员', affiliation: '清华大学深圳国际研究生院<br>清华大学', email: '电子邮箱', experience_cv: '经历与简历',
      sidebar_note: '自动驾驶<br>三维环境感知<br>强化学习', eyebrow: '自主系统与机器智能', role_line: '博士后研究员 · 清华大学',
      bio: '我在<a href="https://www.sigs.tsinghua.edu.cn/" target="_blank" rel="noopener">清华大学深圳国际研究生院</a>开展博士后研究，曾在大湾区大学担任 Research Associate。',
      research_bio: '我的研究关注<strong>自动驾驶、三维环境感知与强化学习</strong>，包括 LiDAR 分割、点云配准、视觉 SLAM 与运动规划。',
      explore_work: '查看研究成果', get_in_touch: '联系我', recent: '近期成果', recent_text: ' — 非结构化野外环境中的点云配准。',
      research_heading: '研究方向', research_intro: '理解复杂环境，学习自主移动。',
      research_3d: '三维环境感知', research_3d_desc: 'LiDAR 分割、点云融合与配准，以及视觉 SLAM。',
      research_vision: '视觉理解', research_vision_desc: '多模态学习驱动的视觉跟踪、目标检测与视频预测。',
      research_rl: '机器人学习', research_rl_desc: '基于强化学习的自动驾驶决策与运动规划。',
      publications_heading: '学术论文', publications_intro: '期刊、会议论文与明确标注的预印本。', selected: '精选论文', all_listed: '全部已列论文',
      search_label: '搜索标题、作者或期刊', search_placeholder: '搜索论文、作者或期刊…', topic_all: '全部主题', category_3d: '三维感知', category_vision: '计算机视觉', category_rl: '机器人学习',
      citations: '总引用', metrics_date: '累计指标 · 查询于 2026 年 10 月 6 日', preprint: '预印本', paper_link: '论文', download_citation: '下载引用', no_results: '没有匹配的论文，请尝试其他关键词或研究主题。', download_all: '下载已列论文引用',
      illustration_note: '缩略图为研究主题示意，不代表实验结果。', experience_heading: '经历与简历', postdoc: '博士后研究员', postdoc_org: '清华大学深圳国际研究生院 · 清华大学',
      current: '当前', previous: '曾任', past_org: '大湾区大学', cv_request: '通过邮件获取完整简历', contact_eyebrow: '学术交流', contact_heading: '从一次交流，开启新的研究。',
      contact_text: '欢迎就相关研究与学术合作联系我。', updated: '更新于 2026 年 10 月', back_top: '返回顶部 ↑'
    }
  };
  const papers = [...document.querySelectorAll('.paper')];
  const search = document.querySelector('#publication-search');
  const viewButtons = [...document.querySelectorAll('[data-view]')];
  const filterButtons = [...document.querySelectorAll('[data-filter]')];
  let lang = 'en';
  try { if (localStorage.getItem('eksan-language') === 'zh') lang = 'zh'; } catch (_) { /* Optional preference storage. */ }
  let view = 'selected';
  let topic = 'all';
  function updatePapers() {
    const query = search.value.trim().toLocaleLowerCase();
    let count = 0;
    for (const paper of papers) {
      const text = paper.textContent.toLocaleLowerCase() + ' eksan fikat';
      const match = (view === 'all' || paper.dataset.selected === 'true') && (topic === 'all' || topic === paper.dataset.category) && (!query || text.includes(query));
      paper.hidden = !match;
      if (match) count++;
    }
    viewButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.view === view)));
    filterButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === topic)));
    document.querySelector('#no-results').hidden = count > 0;
    document.querySelector('#result-count').textContent = lang === 'zh'
      ? `显示 ${count} / ${papers.length} 篇已列论文${view === 'selected' ? ' · 精选' : ''}`
      : `${count} of ${papers.length} listed publications${view === 'selected' ? ' · Selected' : ''}`;
  }
  function setLanguage(next) {
    lang = next;
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    document.title = `Eksan Fikat | ${lang === 'zh' ? '学术个人主页' : 'Academic Homepage'}`;
    document.querySelectorAll('[data-i18n]').forEach(node => {
      const value = translations[lang][node.dataset.i18n];
      if (value !== undefined) node.innerHTML = value;
    });
    search.placeholder = translations[lang].search_placeholder;
    const toggle = document.querySelector('#language-toggle');
    toggle.textContent = lang === 'zh' ? 'EN' : '中文';
    toggle.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切换为中文');
    document.querySelector('nav').setAttribute('aria-label', lang === 'zh' ? '主导航' : 'Main navigation');
    document.querySelector('.publication-view').setAttribute('aria-label', lang === 'zh' ? '论文显示范围' : 'Publication view');
    document.querySelector('.filter-row').setAttribute('aria-label', lang === 'zh' ? '研究主题' : 'Research topic');
    try { localStorage.setItem('eksan-language', lang); } catch (_) { /* Works without storage. */ }
    updatePapers();
  }
  document.querySelector('#language-toggle').addEventListener('click', () => setLanguage(lang === 'en' ? 'zh' : 'en'));
  viewButtons.forEach(button => button.addEventListener('click', () => {
    view = button.dataset.view;
    topic = 'all';
    search.value = '';
    updatePapers();
  }));
  filterButtons.forEach(button => button.addEventListener('click', () => {
    topic = button.dataset.filter;
    updatePapers();
  }));
  search.addEventListener('input', () => {
    if (search.value.trim()) view = 'all';
    updatePapers();
  });
  document.querySelectorAll('[data-research-filter]').forEach(link => link.addEventListener('click', () => {
    view = 'all'; topic = link.dataset.researchFilter; search.value = ''; updatePapers();
  }));
  document.querySelector('#language-toggle').hidden = false;
  document.querySelector('#publication-tools').hidden = false;
  setLanguage(lang);
})();
