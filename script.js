/* ============================================================
   FikraBits — landing interactivity
   - i18n (EN / AR) with RTL switching + persistence
   - Contact form -> opens mail client to info@fikrabits.net
   - Decorative floating "bits"
   ============================================================ */

(function () {
  'use strict';

  var CONTACT_EMAIL = 'info@fikrabits.net';

  /* ---------------- translations ---------------- */
  var I18N = {
    en: {
      badge: 'Under construction',
      headline: "We're building something great.",
      subhead:
        "FikraBits turns ideas into bits. Our new site is on its way — in the meantime, drop us a line and let's talk.",
      formTitle: 'Get in touch',
      labelName: 'Name',
      labelEmail: 'Email',
      labelMessage: 'Message',
      phName: 'Your name',
      phEmail: 'you@example.com',
      phMessage: 'Tell us about your idea…',
      cta: 'Send message',
      copyright: '© 2026 FikraBits. All rights reserved.',
      // runtime-only strings
      langLabel: 'العربية',
      noteOpening: 'Opening your email app…',
      noteFill: 'Please fill in all fields.'
    },
    ar: {
      badge: 'قيد الإنشاء',
      headline: 'نحن نبني شيئًا رائعًا.',
      subhead:
        'فكرة بِتس تحوّل الأفكار إلى واقع رقمي. موقعنا الجديد في الطريق — وحتى ذلك الحين، راسلنا ولنتحدث.',
      formTitle: 'تواصل معنا',
      labelName: 'الاسم',
      labelEmail: 'البريد الإلكتروني',
      labelMessage: 'الرسالة',
      phName: 'اسمك',
      phEmail: 'you@example.com',
      phMessage: 'أخبرنا عن فكرتك…',
      cta: 'إرسال الرسالة',
      copyright: '© 2026 فكرة بِتس. جميع الحقوق محفوظة.',
      langLabel: 'English',
      noteOpening: 'جارٍ فتح تطبيق البريد لديك…',
      noteFill: 'يرجى تعبئة جميع الحقول.'
    }
  };

  var currentLang = 'en';

  function applyLang(lang) {
    currentLang = I18N[lang] ? lang : 'en';
    var dict = I18N[currentLang];
    var html = document.documentElement;

    html.setAttribute('lang', currentLang);
    html.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');

    // text nodes
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (!dict[key]) return;
      var attr = el.getAttribute('data-i18n-attr');
      if (attr) {
        el.setAttribute(attr, dict[key]);
      } else {
        el.textContent = dict[key];
      }
    });

    // language toggle shows the OTHER language
    var currentSpan = document.querySelector('.lang-current');
    if (currentSpan) currentSpan.textContent = dict.langLabel;

    try { localStorage.setItem('fikrabits-lang', currentLang); } catch (e) {}
  }

  /* ---------------- init language ---------------- */
  var saved;
  try { saved = localStorage.getItem('fikrabits-lang'); } catch (e) {}
  if (!saved) {
    saved = (navigator.language || '').toLowerCase().indexOf('ar') === 0 ? 'ar' : 'en';
  }
  applyLang(saved);

  var toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      applyLang(currentLang === 'en' ? 'ar' : 'en');
    });
  }

  /* ---------------- contact form -> mailto ---------------- */
  var form = document.getElementById('contactForm');
  var note = document.getElementById('formNote');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = (document.getElementById('name').value || '').trim();
      var email = (document.getElementById('email').value || '').trim();
      var message = (document.getElementById('message').value || '').trim();

      if (!name || !email || !message) {
        if (note) note.textContent = I18N[currentLang].noteFill;
        if (typeof form.reportValidity === 'function') form.reportValidity();
        return;
      }

      var subject = 'FikraBits — inquiry from ' + name;
      var body =
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n\n' +
        message;

      var mailto =
        'mailto:' + CONTACT_EMAIL +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);

      if (note) note.textContent = I18N[currentLang].noteOpening;
      window.location.href = mailto;
    });
  }

  /* ---------------- decorative bits ---------------- */
  (function spawnBits() {
    var field = document.querySelector('.bits-field');
    if (!field) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // still render a few static bits for texture
    }
    var count = window.innerWidth < 600 ? 14 : 26;
    var frag = document.createDocumentFragment();
    for (var i = 0; i < count; i++) {
      var b = document.createElement('span');
      b.className = 'bit';
      var size = 4 + Math.random() * 9;
      b.style.width = size + 'px';
      b.style.height = size + 'px';
      b.style.left = Math.random() * 100 + '%';
      b.style.top = Math.random() * 100 + '%';
      b.style.animationDuration = (6 + Math.random() * 8).toFixed(1) + 's';
      b.style.animationDelay = (-Math.random() * 10).toFixed(1) + 's';
      frag.appendChild(b);
    }
    field.appendChild(frag);
  })();
})();
