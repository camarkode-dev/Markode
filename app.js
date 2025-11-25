document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // ✅ Safe DOM Selectors
  const $ = s => document.querySelector(s);
  const $$ = s => document.querySelectorAll(s);

  // ✅ Constants
  const WHATSAPP_NUMBER = "966552083166";
  const LANG_KEY = "markode_lang";
  const DEFAULT_LANG = "ar";

  const waUrl = (text = "") =>
    `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(text)}`;

  // ✅ Utility: Currency Format
  const fmtCurrency = n => {
    const isAr = document.documentElement.lang === "ar";
    const formatted = Number(n).toLocaleString("en-US");
    return isAr ? `${formatted} ر.س` : `${formatted} SAR`;
  };

  /* ================================================
      TRANSLATION DATA - كامل ومنظم ✅
  ================================================ */
  const translations = {
    ar: {
      dir: "rtl",
      lang: "ar",
      "nav-home": "الرئيسية",
      "nav-about": "من نحن",
      "nav-services": "خدماتنا",
      "nav-plans": "الباقات",
      "nav-privacy": "سياسة الخصوصية",
      "nav-contact": "تواصل معنا",
      "hero-welcome": "مرحباً بك في <span class=\"highlighted\">Markode</span>",
      "hero-intro": "وجهتك الذكية للتسويق الرقمي وتطوير البرمجيات، نبتكر الحلول وندعم نموك الرقمي، وندخل أفكارك إلى واقع.",
      "intro-title": "لمحة سريعة",
      "intro-desc": "نقدم تصميم واجهات وتجربة مستخدم متقدمة مع تنفيذ برمجي عملي وربط الحملات الإعلانية وقياس الأداء.",
      "intro-note": "أمثلة حقيقية لمشاريع نفذناها مع نتائج قابلة للقياس.",
      "intro-point-1": "🎯 نحن أكثر من مجرد استوديو رقمي — شركاء نجاح يحوّلون الأفكار إلى تجارب رقمية مبتكرة.",
      "intro-point-2": "💡 دمج التصميم العصري، التطوير البرمجري المتقن، واستراتيجيات التحويل الرقمي لحلول متكاملة.",
      "intro-point-3": "👨‍💻 فريق متخصص بخبرة واسعة في UI/UX، تطوير البرمجيات، وبناء أنظمة رقمية ذكية.",
      "intro-point-4": "📈 نتائج قابلة للقياس مع سجل حافل من المشاريع المحلية والإقليمية والعالمية.",
      "btn-brochure": "تحميل بروشور PDF",
      "btn-projects": "مشاهدة المشاريع",
      "tech-title": "خلاصة تقنيّة",
      "tech-desc": "نغطي تصميم الواجهات، التنفيذ البرمجي، ودمج الحملات الإعلانية مع تتبع الأداء بدقة.",
      "tech-point-1": "⚛️ <strong>React & Next.js</strong> — بناء واجهات ديناميكية وسريعة الأداء مع تجربة مستخدم سلسة.",
      "tech-point-2": "🎨 <strong>Figma</strong> — تصميم واجهات حديثة وتجربة مستخدم متكاملة قبل التنفيذ البرمجي.",
      "tech-point-3": "📈 <strong>التسويق الرقمي</strong> — Google Ads، TikTok Ads، Facebook & Snapchat لزيادة الوصول وتحقيق التحويل.",
      "tech-point-4": "🔍 <strong>SEO وتحليل الأداء</strong> — تحسين محركات البحث وقياس النتائج بدقة لزيادة التأثير الرقمي.",
      "header-title": "ماركود — محفظة الأعمال",
      "header-lead": "تصميم واجهات وتجربة مستخدم + برمجة واجهات وتكامل إعلاني — أمثلة عملياتية وأرقام أداء",
      "services-list": "<li>✦ بناء الهوية البصرية وتصميم الشعارات</li><li>✦ تصميم مواقع احترافية متجاوبة وسريعة</li><li>✦ تطوير تطبيقات مخصصة للأعمال</li><li>✦ إدارة الحملات التسويقية على المنصات الرقمية</li><li>✦ تحسين محركات البحث SEO وزيادة الظهور</li><li>✦ كتابة المحتوى التسويقي والتصميم الإبداعي</li>",
      "projects-title": "نماذج المشاريع",
      "project-title-1": "Ride Me – تطبيق  بيع سيارات",
      "project-desc-1": "تطبيق لعرض وبيع السيارات مع نظام قوائم، فلترة متقدمة، وحجز معاينة وربط ببوابات الدفع.",
      "project-title-2": "موقع عقاري احترافي",
      "project-desc-2": "موقع لعرض عقارات للبيع والإيجار مع خرائط تفاعلية وصفحات مفصلة ونماذج تواصل.",
      "project-title-3": "متجر إلكتروني شامل",
      "project-desc-3": "متجر إلكتروني متكامل: سلة، دفع آمن، إدارة مخزون، وصفحات منتجات، ونظام شحن وطلبات.",
      "project-title-4": "تطبيق طلب وتوصيل مياه",
      "project-desc-4": "تطبيق لطلب مياه مع جدولة التوصيل، تتبّع السائقين، وعملية دفع مبسطة.",
      "project1-case-btn": "عرض الحالة",
      "project1-code-btn": "كود / تفاصيل",
      "project2-case-btn": "عرض الحالة",
      "project2-code-btn": "كود / تفاصيل",
      "project3-case-btn": "عرض الحالة",
      "project3-code-btn": "كود / تفاصيل",
      "project4-case-btn": "عرض الحالة",
      "project4-code-btn": "التقارير",
      "ad1-case-btn": "عرض الحالة",
      "ad1-report-btn": "التقارير",
      "ad2-case-btn": "عرض الحالة",
      "ad2-report-btn": "التقارير",
      "services-project2-case-btn": "عرض الحالة",
      "services-project2-code-btn": "كود / تفاصيل",
      "packages-title": "الباقات",
      "ads-title": "أمثلة إعلانات ونتائج",
      "qq-title": "تقدير سعر فوري",
      "qq-desc": "اختر نوع الخدمة والخيارات لتحصل على نطاق تقديري سريع.",
      "statYearsLabel": "سنوات خبرة",
      "statResponseLabel": "متوسط سرعة الرد",
      "statProjectsLabel": "مبادرات وحملات",
      "ticker-1": "💼 تصميم واجهات احترافية",
      "ticker-2": "🚀 تطوير ويب متقدم",
      "ticker-3": "📊 تسويق رقمي فعّال",
      "ticker-4": "📈 زيادة المبيعات والعائد",
      "ticker-5": "🎯 حملات إعلانية مستهدفة",
      "tag-react": "React",
      "tag-nextjs": "Next.js",
      "tag-figma": "Figma",
      "tag-google-ads": "إعلانات Google",
      "tag-tiktok-ads": "إعلانات TikTok",
      "tag-snapchat-ads": "إعلانات Snapchat",
      "tag-facebook-ads": "إعلانات Facebook",
      "tag-seo": "تحسين محركات البحث (SEO)",
      "tag-ui": "تصميم واجهات (UI)",
      "tag-ux": "تجربة المستخدم (UX)",
      "tag-case-study": "دراسة حالة",
      "tag-mobile": "تطبيق جوال",
      "tag-ux-2": "تجربة المستخدم (UX)",
      "tag-rental": "تأجير / عقارات",
      "tag-system": "نظام",
      "tag-dashboard": "لوحة تحكم",
      "tag-ads": "إعلانات",
      "tag-analytics": "تحليلات",
      "card-title-1": "باقة الناشئين",
      "card-desc-1": "تصميم هوية + موقع تعريفي + حملة انطلاقية.",
      "card-btn-1": "اطلب الآن",
      "card-title-2": "باقة الشركات",
      "card-desc-2": "حلول متكاملة للتسويق وتطوير المواقع للشركات.",
      "card-btn-2": "اطلب الآن",
      "card-title-3": "باقة التطوير",
      "card-desc-3": "خدمة تطوير تطبيق أو نظام مخصص حسب الطلب.",
      "card-btn-3": "تواصل معنا",
      "qq-service-label": "نوع الخدمة",
      "qq-op-identity": "هوية بصرية",
      "qq-op-website": "موقع ويب",
      "qq-op-app": "تطبيق جوال",
      "qq-op-marketing": "تسويق رقمي",
      "qq-op-ads": "حملات إعلانية",
      "qq-budget-label": "الميزانية المتوقعة",
      "qq-options-label": "خيارات إضافية",
      "qq-seo-label": "تحسين محركات البحث (SEO)",
      "qq-cms-label": "لوحة إدارة محتوى (CMS)",
      "qq-multi-label": "دعم لغتين",
      "qq-time-label": "الإطار الزمني",
      "qq-time-normal": "عادي",
      "qq-time-rush": "عاجل",
      "qq-range-title": "النطاق التقديري",
      "qq-copy": "نسخ التقدير",
      "qq-send-quote": "📩 أرسل عبر واتساب",
      "qq-note": "* تقدير مبدئي للإرشاد فقط — السعر النهائي بعد مكالمة تعريفية قصيرة.",
      "chat-title": "Markode",
      "modal-title": "طلب الباقة",
      "modal-name": "الاسم",
      "modal-email": "البريد الإلكتروني",
      "modal-phone": "رقم الهاتف",
      "modal-details": "اكتب تفاصيل الطلب",
      "modal-submit": "إرسال الطلب",
      "about-title": "من نحن",
      "about-text": "نحن في <strong>Markode</strong> نبتكر حلول رقمية تجمع بين التصميم العصري والتقنيات الحديثة. نساعد الشركات والروّاد في بناء حضور رقمي احترافي. فريقنا متخصص في التصميم، البرمجة، والتسويق الرقمي بخبرة تتجاوز 5 سنوات في السوق الخليجي والعالمي. نؤمن بأن البساطة جوهر الإبداع ونهتم بأدق التفاصيل، ونسعى دائمًا لتحقيق نتائج قابلة للقياس بكل شفافية.",
      "footer-text": "جميع الحقوق محفوظة © 2025 Markode",
      "services-title": "خدماتنا",
      "services-desc": "نقدم حلولاً متكاملة تشمل التسويق الرقمي، تصميم وتطوير المواقع والتطبيقات، إدارة الحملات الإعلانية، وتحسين تجربة المستخدم.",
      "contact-title": "تواصل معنا",
      "intro-text": "نحن هنا للإجابة على استفساراتك ومساعدتك في تحقيق أهدافك الرقمية. ارسل رسالتك وسنعاود التواصل في أقرب وقت.",
      "placeholder-name": "اكتب اسمك الكامل",
      "placeholder-phone": "رقم الهاتف (مثال: 05xxxxxxxx)",
      "placeholder-email": "البريد الإلكتروني",
      "placeholder-message": "اكتب رسالتك أو استفسارك هنا",
      "services-projects-title": "نماذج تطبيقية لخدماتنا",
      "plans-title": "عروض الباقات",
      "plans-desc": "اختار الباقة التي تناسب طموحك واحتياجات عملك، نقدم لك خيارات متنوعة تشمل تصميم الهوية، تطوير المواقع، وإدارة الحملات الإعلانية.",
      "card-title-4": "حملة إعلانية احترافية",
      "card-desc-4": "إعلانات Google & Facebook مع تتبع ROAS و CTR.",
      "contact-title": "تواصل معنا",
      "intro-text": "نحن هنا للإجابة على استفساراتك ومساعدتك في تحقيق أهدافك الرقمية.",
      "label-name": "الاسم:",
      "label-phone": "رقم الهاتف:",
      "label-email": "البريد الإلكتروني:",
      "label-message": "الرسالة:",
      "submit-btn": "إرسال",
      "order-success": "✅ تم إرسال الطلب بنجاح! سنتواصل معك قريبًا.",
      "privacy-title": "سياسة الخصوصية",
      "privacy-p1": "نحن في Markode نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. لا نقوم ببيع أو مشاركة بياناتك مع أي طرف ثالث. جميع البيانات التي نجمعها تُستخدم لتحسين خدماتنا فقط.",
      "privacy-collect-title": "جمع المعلومات",
      "privacy-collect": "نجمع معلوماتك عندما تقوم بالتسجيل أو التواصل معنا عبر الموقع.",
      "privacy-use-title": "الاستخدام",
      "privacy-use": "تُستخدم البيانات لتحسين تجربة المستخدم وخدمات الموقع.",
      "privacy-changes-title": "التعديلات على السياسة",
      "privacy-changes": "قد نقوم بتحديث سياسة الخصوصية من وقت لآخر، وسيتم الإعلان عن أي تغييرات هنا.",
    },
    en: {
      dir: "ltr",
      lang: "en",
      "nav-home": "Home",
      "nav-about": "About",
      "nav-services": "Services",
      "nav-plans": "Plans",
      "nav-privacy": "Privacy Policy",
      "nav-contact": "Contact",
      "hero-welcome": "Welcome to <span class=\"highlighted\">Markode</span>",
      "hero-intro": "Your smart destination for digital marketing and software development. We create solutions, support your growth, and turn ideas into reality.",
      "intro-title": "Quick Overview",
      "intro-desc": "We offer advanced UI/UX design with practical programming implementation and advertising campaign integration with performance measurement.",
      "intro-note": "Real examples of projects we've implemented with measurable results.",
      "intro-point-1": "🎯 We're more than a digital studio — success partners who turn ideas into thoughtful digital experiences.",
      "intro-point-2": "💡 Combining modern design, meticulous engineering, and conversion-focused digital strategies.",
      "intro-point-3": "👨‍💻 A specialized team experienced in UI/UX, software development, and building intelligent digital systems.",
      "intro-point-4": "📈 Measurable results with a proven track record across local, regional and global projects.",
      "btn-brochure": "Download PDF Brochure",
      "btn-projects": "View Projects",
      "tech-title": "Tech Summary",
      "tech-desc": "We cover UI design, programming implementation, and advertising campaign integration with precise performance tracking.",
      "tech-point-1": "⚛️ <strong>React & Next.js</strong> — Building dynamic, high-performance interfaces with smooth UX.",
      "tech-point-2": "🎨 <strong>Figma</strong> — Crafting modern UI and end-to-end UX flows before development.",
      "tech-point-3": "📈 <strong>Digital Marketing</strong> — Google Ads, TikTok, Facebook & Snapchat to boost reach and conversions.",
      "tech-point-4": "🔍 <strong>SEO & Analytics</strong> — Improving search visibility and measuring results for better impact.",
      "header-title": "Markode — Portfolio",
      "header-lead": "UI/UX design + front-end development and ad integration — operational examples & performance numbers",
      "services-list": "<li>✦ Visual identity & logo design</li><li>✦ Responsive, high-performance websites</li><li>✦ Custom business applications</li><li>✦ Digital campaign management</li><li>✦ SEO & organic visibility</li><li>✦ Marketing copy and creative design</li>",
      "projects-title": "Project Examples",
      "project-title-1": "Ride Me — Car Sales App",
      "project-desc-1": "Car listing and marketplace app with advanced filters, booking for viewings and payment integration.",
      "project-title-2": "Real Estate Website",
      "project-desc-2": "Property listings site with interactive maps, detailed property pages and agent contact forms.",
      "project-title-3": "Full E‑commerce Store",
      "project-desc-3": "Complete e‑commerce platform with cart, secure payments, inventory management and order/shipping workflows.",
      "project-title-4": "Water Delivery App",
      "project-desc-4": "On‑demand water ordering app with scheduling, driver tracking and delivery management.",
      "project1-case-btn": "View Case",
      "project1-code-btn": "Code / Details",
      "project2-case-btn": "View Case",
      "project2-code-btn": "Code / Details",
      "project3-case-btn": "View Case",
      "project3-code-btn": "Code / Details",
      "project4-case-btn": "View Case",
      "project4-code-btn": "Reports",
      "ad1-case-btn": "View Case",
      "ad1-report-btn": "Reports",
      "ad2-case-btn": "View Case",
      "ad2-report-btn": "Reports",
      "services-project2-case-btn": "View Case",
      "services-project2-code-btn": "Code / Details",
      "packages-title": "Packages",
      "ads-title": "Ad Examples & Results",
      "qq-title": "Quick Price Estimate",
      "qq-desc": "Choose the service type and options to get a quick estimated range.",
      "statYearsLabel": "Years of Experience",
      "statResponseLabel": "Avg. Response Time",
      "statProjectsLabel": "Initiatives & Campaigns",
      "ticker-1": "💼 Professional UI Design",
      "ticker-2": "🚀 Advanced Web Development",
      "ticker-3": "📊 Effective Digital Marketing",
      "ticker-4": "📈 Increase Sales & ROI",
      "ticker-5": "🎯 Targeted Ad Campaigns",
      "tag-react": "React",
      "tag-nextjs": "Next.js",
      "tag-figma": "Figma",
      "tag-google-ads": "Google Ads",
      "tag-tiktok-ads": "TikTok Ads",
      "tag-snapchat-ads": "Snapchat Ads",
      "tag-facebook-ads": "Facebook Ads",
      "tag-seo": "SEO",
      "tag-ui": "UI",
      "tag-ux": "UX",
      "tag-case-study": "Case Study",
      "tag-mobile": "Mobile",
      "tag-ux-2": "UX",
      "tag-rental": "Rental",
      "tag-system": "System",
      "tag-dashboard": "Dashboard",
      "tag-ads": "Ads",
      "tag-analytics": "Analytics",
      "card-title-1": "Starter Plan",
      "card-desc-1": "Brand identity + Landing website + Launch campaign.",
      "card-btn-1": "Order Now",
      "card-title-2": "Business Plan",
      "card-desc-2": "Comprehensive solutions for marketing and web development.",
      "card-btn-2": "Order Now",
      "card-title-3": "Development Plan",
      "card-desc-3": "Custom application or system development on demand.",
      "card-btn-3": "Contact Us",
      "qq-service-label": "Service Type",
      "qq-op-identity": "Visual Identity",
      "qq-op-website": "Website",
      "qq-op-app": "Mobile App",
      "qq-op-marketing": "Digital Marketing",
      "qq-op-ads": "Ad Campaigns",
      "qq-budget-label": "Expected Budget",
      "qq-options-label": "Additional Options",
      "qq-seo-label": "SEO Optimization",
      "qq-cms-label": "Content Management System",
      "qq-multi-label": "Multi-language Support",
      "qq-time-label": "Timeline",
      "qq-time-normal": "Normal",
      "qq-time-rush": "Rush",
      "qq-range-title": "Estimated Range",
      "qq-copy": "Copy Estimate",
      "qq-send-quote": "📩 Send via WhatsApp",
      "qq-note": "* Initial estimate for guidance only — final price after a brief discovery call.",
      "chat-title": "Markode",
      "modal-title": "Order Plan",
      "modal-name": "Your Name",
      "modal-email": "Email",
      "modal-phone": "Phone Number",
      "modal-details": "Order Details",
      "modal-submit": "Submit Order",
      "about-title": "About",
      "about-text": "At <strong>Markode</strong> we craft digital solutions that combine modern design and reliable engineering to help businesses and founders build a professional online presence. Our team specializes in design, development, and digital marketing with over 5 years of experience in the Gulf and global markets. We believe simplicity is the essence of creativity and pay attention to the smallest details, always aiming for measurable results with full transparency.",
      "footer-text": "All rights reserved © 2025 Markode",
      "services-title": "Services",
      "services-desc": "We provide end-to-end solutions including digital marketing, website & app development, campaign management, and UX optimization.",
      "contact-title": "Contact Us",
      "intro-text": "We're here to answer your questions and help achieve your digital goals. Send your message and we'll get back shortly.",
      "placeholder-name": "Your full name",
      "placeholder-phone": "Phone number (e.g. +9665xxxxxxx)",
      "placeholder-email": "Email address",
      "placeholder-message": "Write your message or inquiry here",
      "services-projects-title": "Service Samples",
      "plans-title": "Plans & Packages",
      "plans-desc": "Choose the package that fits your goals — identity, websites, apps, and ad management options available.",
      "card-title-4": "Professional Ad Campaign",
      "card-desc-4": "Google & Facebook ads with ROAS and CTR tracking.",
      "contact-title": "Contact Us",
      "intro-text": "We're here to answer your questions and help achieve your digital goals.",
      "label-name": "Name:",
      "label-phone": "Phone:",
      "label-email": "Email:",
      "label-message": "Message:",
      "submit-btn": "Send",
      "order-success": "✅ Order sent successfully! We'll contact you soon.",
      "privacy-title": "Privacy Policy",
      "privacy-p1": "At Markode we respect your privacy and are committed to protecting your personal data. We do not sell or share your information with third parties. Any data we collect is used to improve our services only.",
      "privacy-collect-title": "Information Collection",
      "privacy-collect": "We collect your information when you register or contact us through the website.",
      "privacy-use-title": "Use",
      "privacy-use": "The data is used to improve the user experience and site services.",
      "privacy-changes-title": "Policy Changes",
      "privacy-changes": "We may update this privacy policy from time to time; any changes will be published here.",
    }
  };

  /* ================================================
      LANGUAGE MANAGEMENT ✅
  ================================================ */
  function switchLanguage(lang) {
    if (!translations[lang]) {
      console.error("❌ Language not found:", lang);
      return;
    }

    document.documentElement.lang = lang;
    document.documentElement.dir = translations[lang].dir;

    // Update all text elements. Inputs/textarea will receive the translation as `placeholder`.
    Object.entries(translations[lang]).forEach(([key, value]) => {
      // Primary lookup: element with the translation key as ID
      let elem = $(`#${key}`);

      // Support placeholder keys that target inputs by name, e.g. "placeholder-name" -> #name
      if (!elem && key.startsWith('placeholder-')) {
        const targetId = key.replace(/^placeholder-/, '');
        elem = $(`#${targetId}`);
      }

      if (!elem) return;

      const tag = (elem.tagName || '').toLowerCase();

      // If the translation contains HTML (like list items) set innerHTML.
      if (typeof value === 'string' && value.indexOf('<') !== -1) {
        elem.innerHTML = value;
        return;
      }

      // For inputs and textareas use the translation as placeholder
      if (tag === 'input' || tag === 'textarea') {
        try {
          elem.placeholder = value;
        } catch (e) {
          // fallback to setting value for non-text inputs
          elem.value = value;
        }
        return;
      }

      // For certain keys we want to allow HTML content
      if (key.startsWith("hero-") || key.startsWith("intro-") || key.startsWith("tech-") || key.startsWith("btn-")) {
        elem.innerHTML = value;
        return;
      }

      // Default: set textContent
      elem.textContent = value;
    });

    // Update ticker items
    const tickerItems = $$(".ticker__item");
    tickerItems.forEach((item, index) => {
      const tickerKey = `ticker-${(index % 5) + 1}`;
      if (translations[lang][tickerKey]) {
        item.textContent = translations[lang][tickerKey];
      }
    });

    // Update language buttons state
    $$('.language-switch button, .lang-switch button').forEach(btn => {
      const isArButton = btn.id === 'ar-btn';
      const shouldBeActive = (lang === 'ar' && isArButton) || (lang === 'en' && btn.id === 'en-btn');
      btn.classList.toggle('active', shouldBeActive);
    });

    localStorage.setItem(LANG_KEY, lang);
    // If a modal is open, refresh its content to the new language
    try {
      if (projectModal?.classList.contains('show') && currentModal.type) {
        if (currentModal.type === 'case') {
          // If the currently open case was opened via PROJECTS_DATA (keys like 'p1'),
          // refresh using openProjectModal so the project content stays accurate.
          if (String(currentModal.key).startsWith('p')) {
            openProjectModal(currentModal.key);
          } else {
            window.openModal(currentModal.key);
          }
        } else if (currentModal.type === 'code') {
          window.openCodeModal(currentModal.key);
        }
      }
      if (orderModal?.classList.contains('show')) {
        // update order modal title/labels from translations
        const modalTitle = document.getElementById('modal-title');
        if (modalTitle && translations[lang] && translations[lang]['modal-title']) {
          modalTitle.textContent = translations[lang]['modal-title'];
        }
      }
    } catch (err) {
      console.warn('Error refreshing modal for language change', err);
    }
  }

  /* ================================================
      NAVBAR INITIALIZATION ✅
  ================================================ */
  function initNavbar() {
    const navbar = $("nav.navbar");
    if (!navbar) {
      console.warn("⚠️ Navbar element not found");
      return;
    }

    // Clear existing content
    navbar.innerHTML = '';

    // Add privacy link; if current page contains a #privacy section, link to the anchor
    const hasPrivacySection = !!document.getElementById('privacy');
    const privacyHref = hasPrivacySection ? '#privacy' : 'privacy.html';

    const navItems = [
      { id: "nav-home", href: "index.html" },
      { id: "nav-about", href: "about.html" },
      { id: "nav-services", href: "services.html" },
      { id: "nav-plans", href: "plans.html" },
      { id: "nav-privacy", href: privacyHref },
      { id: "nav-contact", href: "contact.html" }
    ];

    navItems.forEach(item => {
      const link = document.createElement("a");
      link.id = item.id;
      link.href = item.href;
      link.textContent = translations[DEFAULT_LANG][item.id];
      // mark active link based on current page or in-page privacy
      const currentPage = window.location.pathname.split('/').pop() || 'index.html';
      if (item.href === currentPage || (item.href === '#privacy' && hasPrivacySection)) {
        link.classList.add('active');
      }
      navbar.appendChild(link);
    });
  }

  /* ================================================
      LANGUAGE BUTTONS INITIALIZATION ✅
  ================================================ */
  function initLanguageButtons() {
    const langSwitchContainer = $(".language-switch") || $(".lang-switch");
    
    if (!langSwitchContainer) {
      console.warn("⚠️ Language switch container not found");
      return;
    }

    // Clear existing buttons
    langSwitchContainer.innerHTML = '';

    const arBtn = document.createElement("button");
    arBtn.id = "ar-btn";
    arBtn.textContent = "AR";
    arBtn.className = "active";

    const enBtn = document.createElement("button");
    enBtn.id = "en-btn";
    enBtn.textContent = "EN";

    langSwitchContainer.appendChild(arBtn);
    langSwitchContainer.appendChild(enBtn);

    arBtn.addEventListener("click", () => switchLanguage("ar"));
    enBtn.addEventListener("click", () => switchLanguage("en"));
  }

  
  initLanguageButtons();
  initNavbar();
  // Cache modal elements early so switchLanguage can refresh open modals safely
  // Use `let` so we can create the modal dynamically on pages that don't include it (e.g., services.html)
  let projectModal = $("#modal");
  let projectBody = $("#modal-body");
  let projectCloseBtn = $("#modalCloseBtn");
  const orderModal = $("#orderModal");
  const orderSuccessMsg = $("#order-success-message");
  const savedLang = localStorage.getItem(LANG_KEY) || DEFAULT_LANG;
  // Track current open modal (declared early to avoid TDZ when switching language)
  let currentModal = { type: null, key: null };
  switchLanguage(savedLang);



  const modalCases = {
    case1: `
      <div class="case-card">
        <h2>Ride Me — تطبيق بيع سيارات</h2>
        <img src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop" alt="تطبيق بيع سيارات" style="width:100%;margin:12px 0;border-radius:12px;">
        <p>تطبيق لعرض قوائم السيارات مع فلترة متقدمة، مقارنة بين الإصدارات، ونموذج حجز موعد لمعاينة السيارة أو شراءها عبر بوابة دفع آمنة.</p>
        <div class="case-meta"><strong>النتيجة:</strong> زيادة تفاعل المشترين وتبسيط رحلة الشراء من أول تصفح إلى إتمام الصفقة.</div>
        <ul class="case-features">
          <li>قوائم منتجات قابلة للتصفية والبحث</li>
          <li>نظام حجز ومواعيد لمعاينة السيارات</li>
          <li>تكامل مع بوابات دفع وتقارير مبيعات</li>
        </ul>
      </div>
    `,
    case2: `
      <div class="case-card">
        <h2>موقع عقاري احترافي</h2>
        <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200&auto=format&fit=crop" alt="موقع عقاري" style="width:100%;margin:12px 0;border-radius:12px;">
        <p>بوابة عقارية لعرض العقارات مع خرائط تفاعلية، فلتر خصائص، ونظام تواصل مباشر بين العملاء والوكلاء.</p>
        <div class="case-meta"><strong>النتيجة:</strong> تحسين جودة الطلبات الواردة وزيادة رضا المستخدمين بفضل صفحات عقار مفصّلة وتجارب بحث سريعة.</div>
        <ul class="case-features">
          <li>تكامل مع خرائط وتحديد مواقع</li>
          <li>نظام إدارة قوائم العقارات والوكلاء</li>
          <li>نماذج اتصال وحفظ بحث للمستخدمين</li>
        </ul>
      </div>
    `,
    case3: `
      <div class="case-card">
        <h2>متجر إلكتروني شامل</h2>
        <img src="125.png" alt="متجر إلكتروني شامل" style="width:100%;margin:12px 0;border-radius:12px;">
        <p>منصة تجارة إلكترونية متكاملة تضم كتالوج منتجات، سلة مشتريات، طرق شحن متعددة، وحسابات عملاء مع لوحة تحكم للبائعين.</p>
        <div class="case-meta"><strong>النتيجة:</strong> زيادة معدل التحويل وتقليل التخلي عن السلة عبر تحسين تجربة الدفع وتتبّع الطلبات.</div>
        <ul class="case-features">
          <li>سلة وتسوية دفع آمنة</li>
          <li>لوحة إدارة مخزون وطلبات</li>
          <li>التعامل مع خيارات الشحن والضرائب</li>
        </ul>
      </div>
    `,
    case4: `
      <div class="case-card">
        <h2>تطبيق طلب وتوصيل مياه</h2>
        <img src="https://images.unsplash.com/photo-1592928306160-3d8fa6f2b6b4?q=80&w=1200&auto=format&fit=crop" alt="تطبيق توصيل مياه" style="width:100%;margin:12px 0;border-radius:12px;">
        <p>تطبيق يتيح للمستخدمين طلب زجاجات مياه وأسطوانات، جدولة توصيلات، وتتبع حالة الطلب مباشرةً مع إدارة أساطيل التوصيل.</p>
        <div class="case-meta"><strong>النتيجة:</strong> تقليل زمن التوصيل وتحسين معدلات التسليم من خلال تتبع المسارات وإدارة السائقين.</div>
        <ul class="case-features">
          <li>نمودج طلب مرن وجدولة مواعيد</li>
          <li>تتبّع سائقي التوصيل والمسارات</li>
          <li>دفع عند التسليم أو عبر بوابات رقمية</li>
        </ul>
      </div>
    `
  };

const PROJECTS_DATA = {
  p1: {
    title: "Ride Me — تطبيق بيع سيارات",
    desc: "تطبيق احترافي لبيع السيارات مع فلترة، دفع، حجز معاينة، وتدفق تجربة مستخدم متكامل.",
    img: "123.png",
    link: "https://www.behance.net/gallery/233201723/Ride-me/modules/1338471047"
  },
  p2: {
    title: "موقع عقاري احترافي",
    desc: "موقع عقاري لعرض العقارات مع خرائط، صفحات مفصلة، ونظام وكالات.",
    img: "124.png",
    link: "124"
  },
  p3: {
    title: "متجر إلكتروني شامل",
    desc: "متجر إلكتروني كامل بنظام شحن ومخزون وعمليات دفع متكاملة.",
    img: "125.png",
    link: "https://www.behance.net/gallery/227235501/Headphone-HN"
  },
  p4: {
    title: "تطبيق طلب وتوصيل مياه",
    desc: "تطبيق متكامل لطلب المياه وتتبع الطلبات وإدارة السائقين.",
    img: "126.png",
    link: "https://www.behance.net/gallery/229058143/Tanni-Dabba"
  }
};

function openProjectModal(id) {
  const data = PROJECTS_DATA[id];
  if (!data) {
    console.warn('Project data not found for', id);
    return;
  }

    // If the unified modal is not present on this page, create it dynamically
    if (!projectModal || !projectBody) {
      const modal = document.createElement('div');
      modal.id = 'modal';
      modal.className = 'modal';

      const modalContent = document.createElement('div');
      modalContent.className = 'modal-content';
      modalContent.setAttribute('tabindex', '-1');
      modalContent.setAttribute('role', 'dialog');

      const closeSpan = document.createElement('span');
      closeSpan.className = 'close';
      closeSpan.id = 'modalCloseBtn';
      closeSpan.setAttribute('aria-label', 'إغلاق');
      closeSpan.tabIndex = 0;
      closeSpan.textContent = '×';

      const bodyDiv = document.createElement('div');
      bodyDiv.id = 'modal-body';

      modalContent.appendChild(closeSpan);
      modalContent.appendChild(bodyDiv);
      modal.appendChild(modalContent);
      document.body.appendChild(modal);

      // Reassign cached references
      projectModal = document.getElementById('modal');
      projectBody = document.getElementById('modal-body');
      projectCloseBtn = document.getElementById('modalCloseBtn');

      // Attach close handlers for the dynamically created modal
      projectCloseBtn?.addEventListener('click', closeModal);
      window.addEventListener('mousedown', e => {
        if (e.target === projectModal) closeModal();
      });
      window.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeModal();
      });
    }

  const lang = document.documentElement.lang || DEFAULT_LANG;
  const viewLabel = (lang === 'ar' ? 'مشاهدة المشروع' : 'View Project');

  // Build modal content and inject into the unified modal body (`#modal-body`)
  // Prefer translation strings for title/desc when available so modal updates on language switch
  const num = String(id).replace(/^p/, '');
  const titleKey = `project-title-${num}`;
  const descKey = `project-desc-${num}`;
  const titleText = (translations[lang] && translations[lang][titleKey]) ? translations[lang][titleKey] : data.title;
  const descText = (translations[lang] && translations[lang][descKey]) ? translations[lang][descKey] : data.desc;

  const imgHtml = data.img ? `<img src="${data.img}" alt="${escapeHtml(titleText)}" style="width:100%;margin:12px 0;border-radius:12px;" />` : '';
  const linkHtml = data.link && data.link !== '#' ? `<a class="btn" href="${data.link}" target="_blank" rel="noopener noreferrer">${viewLabel}</a>` : '';

  if (projectBody) {
    projectBody.innerHTML = `
      <div class="case-card">
        ${imgHtml}
        <h2 id="modal-case-title">${escapeHtml(titleText)}</h2>
        <p id="modal-case-desc">${escapeHtml(descText)}</p>
        <div style="margin-top:14px">${linkHtml}</div>
      </div>
    `;
    projectModal?.classList.add('show');
    document.body.style.overflow = 'hidden';
    currentModal = { type: 'case', key: id };
  } else {
    console.warn('Modal body not found to show project');
  }
}

function closeProjectModal() {
  if (projectModal) projectModal.classList.remove('show');
  if (projectBody) projectBody.innerHTML = '';
  document.body.style.overflow = '';
  currentModal = { type: null, key: null };
}

// Expose project modal functions to the global scope so HTML `onclick` attributes work
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;

  // Per-language modal content for full translation support
  const modalTranslations = {
    ar: {
      case1: modalCases.case1,
      case2: modalCases.case2,
      case3: modalCases.case3,
      case4: modalCases.case4
    },
    en: {
      case1: `
        <div class="case-card">
          <h2>Ride Me — Car Sales App</h2>
          <img src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop" alt="Car sales app" style="width:100%;margin:12px 0;border-radius:12px;">
          <p>Marketplace app for car listings with advanced filters, booking viewings, and secure payment flow.</p>
          <div class="case-meta"><strong>Outcome:</strong> Improved buyer engagement and streamlined purchase journey.</div>
          <ul class="case-features"><li>Filterable listings</li><li>Booking & viewing flow</li><li>Payment gateway integration</li></ul>
        </div>
      `,
      case2: `
        <div class="case-card">
          <h2>Real Estate Website</h2>
          <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200&auto=format&fit=crop" alt="Real estate site" style="width:100%;margin:12px 0;border-radius:12px;">
          <p>Property portal with interactive maps, detailed listing pages and direct contact forms for agents.</p>
          <div class="case-meta"><strong>Outcome:</strong> Higher quality leads and better user search experience.</div>
          <ul class="case-features"><li>Map integration</li><li>Agent & listing management</li><li>Saved searches</li></ul>
        </div>
      `,
      case3: `
        <div class="case-card">
          <h2>Full E‑commerce Store</h2>
          <img src="https://images.unsplash.com/photo-1515165562835-c24b9d8a0ee6?q=80&w=1200&auto=format&fit=crop" alt="E‑commerce platform" style="width:100%;margin:12px 0;border-radius:12px;">
          <p>Complete e‑commerce solution including product catalog, cart, secure checkout, inventory and order management.</p>
          <div class="case-meta"><strong>Outcome:</strong> Increased conversions and reduced cart abandonment.</div>
          <ul class="case-features"><li>Secure checkout</li><li>Inventory & order dashboard</li><li>Shipping options</li></ul>
        </div>
      `,
      case4: `
        <div class="case-card">
          <h2>Water Delivery App</h2>
          <img src="https://images.unsplash.com/photo-1592928306160-3d8fa6f2b6b4?q=80&w=1200&auto=format&fit=crop" alt="Water delivery app" style="width:100%;margin:12px 0;border-radius:12px;">
          <p>On‑demand ordering with scheduling, driver assignment and delivery tracking for water supply businesses.</p>
          <div class="case-meta"><strong>Outcome:</strong> Faster deliveries and better logistics management.</div>
          <ul class="case-features"><li>Flexible ordering & scheduling</li><li>Driver tracking</li><li>Payment on delivery or online</li></ul>
        </div>
      `
    }
  };


  // Track current open modal (to refresh on language change)
  // (declared earlier to avoid temporal dead zone)

  window.openModal = function (type) {
    // If caller passed a code key accidentally (some pages use openModal('code2'))
    if (String(type).startsWith('code')) {
      return window.openCodeModal(type);
    }

    // Map caseN -> project modal when PROJECTS_DATA contains the matching project
    // so pages that call `openModal('case2')` (e.g., services.html) open the unified project view.
    if (String(type).startsWith('case')) {
      const num = type.replace(/^case/, '');
      const projectKey = `p${num}`;
      if (PROJECTS_DATA && PROJECTS_DATA[projectKey]) {
        return openProjectModal(projectKey);
      }
    }

    // Prefer per-page modal element if present (e.g., <div id="case2" class="modal">)
    const perPage = document.getElementById(type);
    if (perPage && perPage.classList.contains('modal')) {
      perPage.classList.add('show');
      document.body.style.overflow = 'hidden';
      currentModal = { type: 'case', key: type };
      return;
    }

    if (!projectModal || !projectBody) return;
    const lang = document.documentElement.lang || DEFAULT_LANG;
    const content = (modalTranslations[lang] && modalTranslations[lang][type]) || modalCases[type] || modalCases.case1;
    projectBody.innerHTML = content;
    projectModal.classList.add("show");
    document.body.style.overflow = "hidden";
    currentModal = { type: 'case', key: type };
  };

  window.openOrderModal = function (planName) {
    if (!orderModal) return;
    // fill hidden plan name if present
    const planInput = document.getElementById('plan-name');
    if (planInput) planInput.value = planName || '';
    // update modal title according to current language
    const lang = document.documentElement.lang || DEFAULT_LANG;
    const modalTitle = document.getElementById('modal-title');
    if (modalTitle && translations[lang] && translations[lang]['modal-title']) {
      modalTitle.textContent = translations[lang]['modal-title'];
    }
    orderModal.classList.add("show");
    document.body.style.overflow = "hidden";
  };

  function closeModal() {
    [projectModal, orderModal].forEach(m => {
      if (m) m.classList.remove("show");
    });
    if (projectBody) projectBody.innerHTML = "";
    if (orderSuccessMsg) orderSuccessMsg.style.display = "none";
    document.body.style.overflow = "";
  }
  window.closeModal = closeModal;

  projectCloseBtn?.addEventListener("click", closeModal);
  window.addEventListener("mousedown", e => {
    if (e.target === projectModal || e.target === orderModal) closeModal();
  });
  window.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
  });

  /* ================================================
      FORM SUBMISSION ✅
  ================================================ */
  window.showOrderSuccessMessage = function (event) {
    event.preventDefault();
    const form = event.target;

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" }
    })
      .then(response => {
        if (response.ok) {
          form.reset();
          if (orderSuccessMsg) {
            const lang = document.documentElement.lang;
            orderSuccessMsg.textContent = translations[lang]["order-success"];
            orderSuccessMsg.style.display = "block";
          }
          setTimeout(closeModal, 2500);
        } else {
          alert("❌ حدث خطأ أثناء إرسال الطلب.");
        }
      })
      .catch(err => {
        console.error("Form submission error:", err);
        alert("⚠️ تعذر الاتصال بالخادم.");
      });
  };

  // Backwards compatibility: old pages used `showSuccessMessage`
  window.showSuccessMessage = window.showOrderSuccessMessage;

  // ===== Code snippets for "عرض الكود" modal =====
  const codeSnippets = {
    code1: `<!-- مثال: صفحة رئيسية لتطبيق توصيل طعام -->
<!doctype html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>تطبيق توصيل - الصفحة الرئيسية</title>
    <style>body{font-family:Arial,Helvetica,sans-serif}</style>
  </head>
  <body>
    <header>
      <h1>مطعم X - توصيل سريع</h1>
      <nav>القائمة · العروض · تتبع الطلب</nav>
    </header>
    <main>
      <section class="hero">
        <h2>أطباق مميزة اليوم</h2>
        <div class="cards">/* قائمة الأصناف هنا */</div>
      </section>
      <section class="order-tracking">
        <p>حالة الطلب: <strong>جارٍ التحضير</strong></p>
      </section>
    </main>
  </body>
</html>`,
    code2: `// مثال: React - بطاقة منتج بسيطة
import React from 'react';
export default function ProductCard({ item }) {
  return (
    <article className="product-card">
      <img src={item.img} alt={item.title} />
      <h3>{item.title}</h3>
      <p className="price">{item.price}</p>
      <button>Add to cart</button>
    </article>
  );
}
`,
    code3: `<!-- تقرير حملة إعلانية — مثال جاهز للطباعة -->
<section class="report">
  <h2>تقرير الحملة</h2>
  <table>
    <tr><th>مقياس</th><th>القيمة</th></tr>
    <tr><td>الانطباعات</td><td>120,000</td></tr>
    <tr><td>النقرات</td><td>3,450</td></tr>
    <tr><td>CTR</td><td>2.88%</td></tr>
    <tr><td>التحويلات</td><td>210</td></tr>
    <tr><td>تكلفة لكل تحويل</td><td>45 ر.س</td></tr>
  </table>
</section>`,
    code4: `// تتبع بسيط للأحداث
function trackEvent(name, data) {
  fetch('/api/track', { method: 'POST', body: JSON.stringify({ name, data }), headers: { 'Content-Type': 'application/json' } });
}
`
  };

  // Make codeSnippets language-aware (provide en/ar if needed)
  const codeSnippetsByLang = {
    ar: {
      code1: codeSnippets.code1,
      code2: codeSnippets.code2,
      code3: codeSnippets.code3,
      code4: codeSnippets.code4
    },
    en: {
      code1: codeSnippets.code1,
      code2: codeSnippets.code2,
      code3: codeSnippets.code3,
      code4: codeSnippets.code4
    }
  };

  // Open a modal showing code (with copy button)
  window.openCodeModal = function (key) {
    if (!projectModal || !projectBody) return;
    const lang = document.documentElement.lang || DEFAULT_LANG;
    const code = (codeSnippetsByLang[lang] && codeSnippetsByLang[lang][key]) || codeSnippetsByLang[lang].code1;
    const title = (lang === 'ar') ? 'عرض الكود' : 'Code Preview';
    projectBody.innerHTML = `
      <div class="modal-code">
        <div class="modal-code-head">
          <strong>${title}</strong>
          <button class="copy-code-btn" type="button">نسخ الكود</button>
        </div>
        <pre><code>${escapeHtml(code)}</code></pre>
      </div>`;
    projectModal.classList.add("show");
    document.body.style.overflow = "hidden";
    currentModal = { type: 'code', key };
  };

  // Open a campaign report modal (uses modalCases or a minimal template)
  window.openCampaignReport = function (key) {
    if (!projectModal || !projectBody) return;
    const lang = document.documentElement.lang || DEFAULT_LANG;
    if (modalTranslations[lang] && modalTranslations[lang][key]) {
      projectBody.innerHTML = modalTranslations[lang][key];
    } else if (modalCases[key]) {
      projectBody.innerHTML = modalCases[key];
    } else {
      projectBody.innerHTML = codeSnippetsByLang[lang].code3;
    }
    projectModal.classList.add("show");
    document.body.style.overflow = "hidden";
  };

  // Copy button handler (delegate)
  document.addEventListener('click', (e) => {
    if (!e.target.matches('.copy-code-btn')) return;
    const pre = e.target.closest('.modal-code')?.querySelector('pre');
    if (!pre) return;
    const text = pre.innerText || pre.textContent;
    navigator.clipboard.writeText(text).then(() => {
      const original = e.target.textContent;
      e.target.textContent = '✓ تم النسخ';
      setTimeout(() => e.target.textContent = original, 1500);
    }).catch(err => {
      console.error('Copy failed', err);
      alert('تعذر النسخ');
    });
  });

  // Helper to escape HTML inside code blocks
  function escapeHtml(s) {
    return s.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
  }

  /* ================================================
      WHATSAPP FAB ✅
  ================================================ */
  const waFab = $("#waFab");

  // Build a WhatsApp message from quick-quote and contact inputs
  function buildQuoteMessage() {
    const isAr = document.documentElement.lang === 'ar';
    const svcEl = $("#qq-service");
    const svcText = svcEl ? svcEl.options[svcEl.selectedIndex].text : '';
    const budget = $("#qq-budget-out")?.textContent || ($("#qq-budget")?.value || '');
    const timeEl = $("#qq-time");
    const timeText = timeEl ? timeEl.options[timeEl.selectedIndex].text : '';
    const opts = [];
    if ($("#qq-seo")?.checked) opts.push($("#qq-seo-label")?.textContent || 'SEO');
    if ($("#qq-cms")?.checked) opts.push($("#qq-cms-label")?.textContent || 'CMS');
    if ($("#qq-multi")?.checked) opts.push($("#qq-multi-label")?.textContent || 'Multi');

    // Try to capture contact fields if present
    const name = $("#name")?.value || $("#modal-name")?.value || '';
    const phone = $("#phone")?.value || $("#modal-phone")?.value || '';
    const email = $("#email")?.value || $("#modal-email")?.value || '';

    if (isAr) {
      const lines = [
        'مرحباً، أود الحصول على تقدير سريع',
        `• الخدمة: ${svcText}`,
        `• الميزانية: ${budget}`,
        `• الخيارات: ${opts.length ? opts.join(', ') : 'لا توجد'}`,
        `• الإطار الزمني: ${timeText}`
      ];
      if (name) lines.push(`• الاسم: ${name}`);
      if (phone) lines.push(`• الهاتف: ${phone}`);
      if (email) lines.push(`• البريد: ${email}`);
      return lines.join('\n');
    } else {
      const lines = [
        'Hello, I would like a quick estimate',
        `• Service: ${svcText}`,
        `• Budget: ${budget}`,
        `• Options: ${opts.length ? opts.join(', ') : 'None'}`,
        `• Timeline: ${timeText}`
      ];
      if (name) lines.push(`• Name: ${name}`);
      if (phone) lines.push(`• Phone: ${phone}`);
      if (email) lines.push(`• Email: ${email}`);
      return lines.join('\n');
    }
  }

  function openWhatsAppWithQuote(e) {
    if (e) e.preventDefault();
    const msg = buildQuoteMessage();
    const url = waUrl(msg);
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  // Attach to FAB and the inline send link
  const qqSend = $("#qq-send-quote");
  if (waFab) {
    waFab.addEventListener('click', openWhatsAppWithQuote);
  }
  if (qqSend) {
    qqSend.addEventListener('click', openWhatsAppWithQuote);
    // prevent default href navigation if present
    qqSend.href = 'javascript:void(0)';
  }

  /* ================================================
      QUICK QUOTE CALCULATOR ✅
  ================================================ */
  const qqBudget = $("#qq-budget");
  const qqOut = $("#qq-budget-out");
  const qqLow = $("#qq-low");
  const qqHigh = $("#qq-high");
  const qqSvc = $("#qq-service");

  const baseRange = service => ({
    identity: [3000, 15000],
    website: [7000, 45000],
    app: [20000, 200000],
    marketing: [4000, 80000],
    ads: [5000, 50000]
  }[service] || [5000, 20000]);

  function applyOptions([low, high]) {
    let multiplier = 1;
    if ($("#qq-seo")?.checked) multiplier += 0.12;
    if ($("#qq-cms")?.checked) multiplier += 0.18;
    if ($("#qq-multi")?.checked) multiplier += 0.15;
    if ($("#qq-time")?.value === "rush") multiplier += 0.2;
    return [Math.round(low * multiplier), Math.round(high * multiplier)];
  }

  function clampBudget([low, high], budget) {
    if (budget < low) return [Math.round(budget * 0.8), Math.round(budget * 1.1)];
    if (budget > high) return [Math.round(high * 0.9), Math.round(budget * 1.05)];
    return [low, high];
  }

  function updateQuote() {
    if (!qqBudget || !qqOut || !qqLow || !qqHigh || !qqSvc) return;
    
    const budgetValue = Number(qqBudget.value);
    qqOut.textContent = fmtCurrency(budgetValue);
    
    let range = baseRange(qqSvc.value);
    range = applyOptions(range);
    range = clampBudget(range, budgetValue);
    
    qqLow.textContent = fmtCurrency(range[0]);
    qqHigh.textContent = fmtCurrency(range[1]);
  }

  ["input", "change"].forEach(eventType => {
    qqBudget?.addEventListener(eventType, updateQuote);
    qqSvc?.addEventListener(eventType, updateQuote);
    ["qq-seo", "qq-cms", "qq-multi", "qq-time"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener(eventType, updateQuote);
    });
  });

  if (qqBudget) {
    qqBudget.value = 100;
    updateQuote();
  }

  $("#qq-copy")?.addEventListener("click", () => {
    if (!qqLow || !qqHigh) return;
    const text = `${qqLow.textContent} - ${qqHigh.textContent}`;
    navigator.clipboard.writeText(text).then(() => {
      const btn = $("#qq-copy");
      const original = btn.textContent;
      btn.textContent = "✓ تم النسخ";
      setTimeout(() => btn.textContent = original, 1500);
    });
  });

  /* ================================================
      CHAT WIDGET ✅
  ================================================ */
  const chatFab = $("#chatFab");
  const chatBox = $("#chatBox");
  const chatBody = $("#chatBody");
  const chatForm = $("#chatForm");
  const chatInput = $("#chatInput");
  const chatClose = $("#chatClose");

  const chatScriptAr = [
    "أهلاً بك! 👋 اختر نوع الخدمة:",
    "ما ميزانيتك التقريبية؟",
    "أرسل بريدك أو رقمك للتواصل:"
  ];
  
  const chatScriptEn = [
    "Welcome! 👋 Choose a service:",
    "What's your approximate budget?",
    "Share your contact:"
  ];

  let chatStep = 0;
  let chatAnswers = [];

  const getChatScript = () =>
    document.documentElement.lang === "ar" ? chatScriptAr : chatScriptEn;

  function botMsg(text) {
    const div = document.createElement("div");
    div.className = "bubble bot";
    div.textContent = text;
    chatBody?.appendChild(div);
    if (chatBody) chatBody.scrollTop = chatBody.scrollHeight;
  }

  function userMsg(text) {
    const div = document.createElement("div");
    div.className = "bubble me";
    div.textContent = text;
    chatBody?.appendChild(div);
    if (chatBody) chatBody.scrollTop = chatBody.scrollHeight;
  }

  function askQuestion() {
    const script = getChatScript();
    botMsg(script[chatStep]);
    if (chatInput) chatInput.placeholder = script[chatStep];
  }

  chatFab?.addEventListener("click", () => {
    if (chatBox) {
      chatBox.classList.add("show");
      if (chatBody && !chatBody.childElementCount) {
        askQuestion();
      }
    }
  });

  chatClose?.addEventListener("click", () => {
    if (chatBox) chatBox.classList.remove("show");
  });

  chatForm?.addEventListener("submit", e => {
    e.preventDefault();
    const inputValue = (chatInput?.value || "").trim();
    
    if (!inputValue) return;

    userMsg(inputValue);
    chatAnswers[chatStep] = inputValue;
    if (chatInput) chatInput.value = "";
    chatStep++;

    const script = getChatScript();
    if (chatStep < script.length) {
      askQuestion();
    } else {
      const isAr = document.documentElement.lang === "ar";
      const [service, budget, contact] = chatAnswers;
      const summary = isAr
        ? `📋 ملخص الطلب:\n• الخدمة: ${service}\n• الميزانية: ${budget}\n• التواصل: ${contact}`
        : `📋 Request Summary:\n• Service: ${service}\n• Budget: ${budget}\n• Contact: ${contact}`;
      
      window.open(waUrl(summary), "_blank", "noopener,noreferrer");
      botMsg(isAr ? "✅ تم الإرسال للواتساب." : "✅ Sent to WhatsApp.");
      
      // Reset chat
      chatStep = 0;
      chatAnswers = [];
      setTimeout(askQuestion, 600);
    }
  });

  console.log("✅ Markode App Loaded Successfully");
});