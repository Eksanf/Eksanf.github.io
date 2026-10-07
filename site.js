(() => {
  'use strict';
  const translations = {
    en: {
      nav_projects: "Projects",
      background_bio: "I received my Ph.D. in Computer Science and Technology from Xinjiang University in 2024, with joint research training at Tsinghua University. My earlier work explored multilingual information processing and Uyghur document image retrieval.",
      accepted: "Accepted",
      preprint_version: "Preprint version",
      projects_heading: "Selected projects",
      projects_intro: "From perception algorithms to embodied robot systems.",
      project_vla_role: "Project lead · Postdoctoral research",
      project_vla_date: "Oct 2024–present",
      project_vla_title: "Vision-language-action navigation for ground-air robots",
      project_vla_desc: "Developing a VLA navigation architecture, visual-language-action data pipelines and robot platforms that combine ground driving and aerial flight. Work includes mode switching, multimodal data collection and digital twin simulation.",
      project_occ_role: "Core member · Guangdong–Dongguan joint fund",
      project_occ_date: "2024–present",
      project_occ_title: "Multimodal perception and occupancy prediction in off-road scenes",
      project_occ_desc: "Developing 3D occupancy representations for unstructured terrain within a mobile robot perception and navigation project. Focused on multimodal fusion and perception of irregular obstacles, steep slopes and occluded regions.",
      project_twin_role: "Core member · Guangxi science and technology project",
      project_twin_title: "Digital twin simulation for autonomous heavy trucks",
      project_twin_desc: "Building simulation environments for intelligent driving validation in a battery-swap heavy truck VCU and coordinated control project. Research includes point cloud domain adaptation to bridge simulation and real-world data.",
      project_lidar_role: "Core algorithm development · Research collaboration",
      project_lidar_title: "LiDAR perception for agricultural and off-road robots",
      project_lidar_desc: "Developing ground segmentation algorithms for dense and low-resolution point clouds, agricultural robot perception systems and field-scene datasets. Research connects environment understanding with autonomous navigation.",
      tag_ground_air: "Ground-air robotics",
      tag_fusion: "Multimodal fusion",
      tag_offroad: "Off-road perception",
      tag_twin: "Digital twins",
      tag_domain: "Domain adaptation",
      tag_driving: "Autonomous driving",
      tag_segmentation: "Ground segmentation",
      tag_field: "Field robotics",
      related_papers: "Related publications",
      postdoc_date: "Oct 2024–present",
      postdoc_focus: "Embodied navigation, multimodal perception and ground-air robot systems.",
      education_heading: "Education",
      phd_title: "Ph.D. in Computer Science and Technology",
      phd_org: "Xinjiang University · Joint research training at Tsinghua University",
      phd_advisors: "Advisors: Prof. Jihong Zhu and Prof. Askar Hamdulla.",
      beng_title: "B.Eng. in Software Engineering",
      beng_org: "School of Software, Xinjiang University",
      honors_heading: "Honors & technical skills",
      award_offroad: "Third place, “Crossing Obstacles 2023” vehicle environment perception competition · Team lead.",
      award_internet: "National bronze award, China “Internet+” College Students Innovation and Entrepreneurship Competition.",
      award_opensource: "First prize, National College Students Open Source Software Innovation Competition.",
      skills_code: "Programming & learning",
      skills_robotics: "Robotics & vision",
      skills_models: "Models & systems",
      skills_models_value: "VLA · Transformer / Mamba · Occupancy prediction · Digital twin simulation",
      skills_multilingual: "Earlier multilingual work",
      skills_multilingual_value: "Uyghur–Chinese machine translation · NLP platform integration · Document image retrieval",
      skip: 'Skip to content', nav_research: 'Research', nav_publications: 'Publications', nav_experience: 'Experience', nav_contact: 'Contact',
      role: 'Postdoctoral Researcher', affiliation: 'Tsinghua Shenzhen International Graduate School<br>Tsinghua University', email: 'Email', experience_cv: 'Experience & CV',
      sidebar_note: 'Autonomous driving<br>3D perception<br>Reinforcement learning', eyebrow: 'AUTONOMOUS SYSTEMS & MACHINE INTELLIGENCE', role_line: 'Postdoctoral Researcher · Tsinghua University',
      bio: 'I am a postdoctoral researcher at <a href="https://www.sigs.tsinghua.edu.cn/en/" target="_blank" rel="noopener">Tsinghua Shenzhen International Graduate School</a>, Tsinghua University. Previously, I worked as a Research Associate at Great Bay University.',
      research_bio: "My research connects <strong>3D perception, robot learning and embodied navigation</strong>. I work on LiDAR segmentation and registration, multimodal occupancy prediction, and vision-language-action models for ground-air robots.",
      explore_work: 'Explore my research', get_in_touch: 'Get in touch', recent: 'RECENT WORK', recent_text: ' — point cloud registration in unstructured field environments.',
      research_heading: 'Research interests', research_intro: 'Perceiving complex environments. Learning to navigate them.',
      research_3d: '3D perception', research_3d_desc: "LiDAR segmentation and registration, multimodal occupancy prediction, and visual SLAM.",
      research_vision: 'Visual understanding', research_vision_desc: "Visual tracking, object detection, video prediction and document image retrieval.",
      research_rl: 'Robot learning', research_rl_desc: "Reinforcement learning for motion planning, and vision-language-action models for embodied navigation.",
      publications_heading: 'Publications', publications_intro: "Journal and conference papers, with accepted work and preprints clearly labelled.", selected: 'Selected', all_listed: 'All listed',
      search_label: 'Search titles, authors or venues', search_placeholder: 'Search publications…', topic_all: 'All topics', category_3d: '3D perception', category_vision: 'Computer vision', category_rl: 'Robot learning',
      citations: 'Citations', metrics_date: 'All-time metrics · as of October 6, 2026', preprint: 'Preprint', paper_link: 'Paper', download_citation: 'Download citation', no_results: 'No matching publications. Try another keyword or topic.', download_all: 'Download listed citations',
      illustration_note: 'Thumbnails illustrate research topics; they are not experimental results.', experience_heading: "Experience & education", postdoc: 'Postdoctoral Researcher', postdoc_org: 'Tsinghua Shenzhen International Graduate School, Tsinghua University',
      current: 'Current', previous: 'Previous', past_org: 'Great Bay University', cv_request: 'Request a full CV by email', contact_eyebrow: 'LET’S CONNECT', contact_heading: 'Research starts with a conversation.',
      contact_text: 'For research discussions and academic collaboration, please get in touch.', updated: 'Updated October 2026', back_top: 'Back to top ↑'
    },
    zh: {
      nav_projects: "科研项目",
      background_bio: "我于 2024 年获新疆大学计算机科学与技术博士学位，期间在清华大学联合培养。此前还开展过多语种信息处理与维吾尔文文档图像检索研究。",
      accepted: "已录用",
      preprint_version: "预印本版本",
      projects_heading: "代表项目",
      projects_intro: "从环境感知算法，到具身机器人系统。",
      project_vla_role: "项目负责人 · 博士后研究项目",
      project_vla_date: "2024.10–至今",
      project_vla_title: "面向陆空两栖机器人的视觉—语言—动作导航",
      project_vla_desc: "研发 VLA 导航架构、视觉—语言—动作数据流程，以及兼具地面行驶与空中飞行能力的机器人平台。工作涵盖运动模式切换、多模态数据采集和数字孪生仿真。",
      project_occ_role: "核心成员 · 粤莞联合基金",
      project_occ_date: "2024–至今",
      project_occ_title: "越野场景多模态感知与三维占用预测",
      project_occ_desc: "在移动机器人感知与导航课题中开展非结构化地形的三维占用表示研究，负责多模态融合，以及异形障碍物、大坡度和遮挡区域的感知。",
      project_twin_role: "核心成员 · 广西科技专项",
      project_twin_title: "面向无人重卡的数字孪生仿真验证",
      project_twin_desc: "在换电重卡 VCU 开发与智能协同控制项目中搭建智能驾驶仿真验证环境，并研究点云域自适应，缩小仿真与真实数据之间的分布差异。",
      project_lidar_role: "核心算法研发 · 科研合作",
      project_lidar_title: "农业与越野机器人的 LiDAR 环境感知",
      project_lidar_desc: "针对密集点云、低分辨率点云开展地面分割算法研究，构建农业机器人感知系统与农田场景数据集，将环境理解与自主导航相连接。",
      tag_ground_air: "陆空机器人",
      tag_fusion: "多模态融合",
      tag_offroad: "越野感知",
      tag_twin: "数字孪生",
      tag_domain: "域自适应",
      tag_driving: "自动驾驶",
      tag_segmentation: "地面分割",
      tag_field: "野外机器人",
      related_papers: "相关论文",
      postdoc_date: "2024.10–至今",
      postdoc_focus: "具身导航、多模态感知与陆空机器人系统。",
      education_heading: "教育背景",
      phd_title: "计算机科学与技术 · 博士",
      phd_org: "新疆大学 · 清华大学联合培养",
      phd_advisors: "导师：朱纪洪教授、艾斯卡尔·艾木都拉教授。",
      beng_title: "软件工程 · 学士",
      beng_org: "新疆大学软件学院",
      honors_heading: "荣誉奖项与专业技能",
      award_offroad: "“跨越险阻 2023”车载环境感知赛全国第三名 · 团队负责人。",
      award_internet: "中国“互联网+”大学生创新创业大赛全国铜奖。",
      award_opensource: "全国大学生开源软件技术创意大赛一等奖。",
      skills_code: "编程与机器学习",
      skills_robotics: "机器人与视觉",
      skills_models: "模型与系统",
      skills_models_value: "VLA · Transformer / Mamba · 三维占用预测 · 数字孪生仿真",
      skills_multilingual: "早期多语言研究",
      skills_multilingual_value: "维汉机器翻译 · NLP 平台集成 · 文档图像检索",
      skip: '跳至正文', nav_research: '研究方向', nav_publications: '学术论文', nav_experience: '经历与简历', nav_contact: '联系',
      role: '博士后研究员', affiliation: '清华大学深圳国际研究生院<br>清华大学', email: '电子邮箱', experience_cv: '经历与简历',
      sidebar_note: '自动驾驶<br>三维环境感知<br>强化学习', eyebrow: '自主系统与机器智能', role_line: '博士后研究员 · 清华大学',
      bio: '我在<a href="https://www.sigs.tsinghua.edu.cn/" target="_blank" rel="noopener">清华大学深圳国际研究生院</a>开展博士后研究，曾在大湾区大学担任 Research Associate。',
      research_bio: "我的研究连接<strong>三维环境感知、机器人学习与具身导航</strong>，涵盖 LiDAR 分割与配准、多模态三维占用预测，以及面向陆空机器人的视觉—语言—动作（VLA）模型。",
      explore_work: '查看研究成果', get_in_touch: '联系我', recent: '近期成果', recent_text: ' — 非结构化野外环境中的点云配准。',
      research_heading: '研究方向', research_intro: '理解复杂环境，学习自主移动。',
      research_3d: '三维环境感知', research_3d_desc: "LiDAR 分割与配准、多模态三维占用预测，以及视觉 SLAM。",
      research_vision: '视觉理解', research_vision_desc: "视觉跟踪、目标检测、视频预测与文档图像检索。",
      research_rl: '机器人学习', research_rl_desc: "面向运动规划的强化学习，以及用于具身导航的视觉—语言—动作模型。",
      publications_heading: '学术论文', publications_intro: "期刊与会议论文；已录用成果和预印本均单独标注。", selected: '精选论文', all_listed: '全部已列论文',
      search_label: '搜索标题、作者或期刊', search_placeholder: '搜索论文、作者或期刊…', topic_all: '全部主题', category_3d: '三维感知', category_vision: '计算机视觉', category_rl: '机器人学习',
      citations: '总引用', metrics_date: '累计指标 · 查询于 2026 年 10 月 6 日', preprint: '预印本', paper_link: '论文', download_citation: '下载引用', no_results: '没有匹配的论文，请尝试其他关键词或研究主题。', download_all: '下载已列论文引用',
      illustration_note: '缩略图为研究主题示意，不代表实验结果。', experience_heading: "科研经历与教育背景", postdoc: '博士后研究员', postdoc_org: '清华大学深圳国际研究生院 · 清华大学',
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
      const text = paper.textContent.toLocaleLowerCase() + ' eksan fikat 伊克萨尼·普尔凯提 伊克萨尼 普尔凯提';
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
