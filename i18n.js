const translations = {
  en: {
    hero_title: "Translation, apostille, nostrification",
    hero_subtitle: "Reliable. Fast. Professional.",
    contact_btn: "Send Request",
    services_title: "Our Services",
    service1: "Language Translation",
    service2: "Nostrification",
    service3: "Apostille",
    service4: "No Criminal Record Certificate",
    contact_title: "Contacts",
    send_btn: "Send"
  },
  ru: {
    hero_title: "Переводы, апостиль, нострификация",
    hero_subtitle: "Надежно. Быстро. Профессионально.",
    contact_btn: "Оставить заявку",
    services_title: "Наши Услуги",
    service1: "Перевод на языки",
    service2: "Нострификация",
    service3: "Апостиль",
    service4: "Справка о несудимости",
    contact_title: "Контакты",
    send_btn: "Отправить"
  }
};

function applyTranslations(lang = 'ru') {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
}

const userLang = navigator.language.startsWith("en") ? "en" : "ru";
applyTranslations(userLang);