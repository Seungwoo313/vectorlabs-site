(() => {
  "use strict";

  const STRINGS = {
    en: {
      "meta.title": "VectorLabs",
      "meta.description": "VectorLabs, the app studio behind Airpost.",
      "skip": "Skip to content",
      "nav.label": "Main",
      "nav.home": "VectorLabs home",
      "nav.contact": "Contact",
      "lang.label": "Language",
      "nav.apps": "Apps",
      "apps.title": "Apps",
      "hero.lead": "An app studio",
      "hero.mail": "Email us",
      "hero.app": "See apps",
      "app.lead": "Air mail for pen pals around the world.",
      "img.badge": "assets/airpost/app-store-en.svg",
      "img.badge.alt": "Download on the App Store",
      "app.links": "Airpost links",
      "link.site": "Website",
      "link.privacy": "Privacy Policy",
      "link.terms": "Terms of Use",
      "href.privacy": "https://seungwoo313.github.io/airpost-legal/privacy-en/",
      "href.terms": "https://seungwoo313.github.io/airpost-legal/terms-en/",
      "app.screens": "Airpost screens",
      "img.thread": "assets/airpost/thread-en.webp",
      "img.thread.alt": "An Airpost conversation: a handwritten letter, a sealed airmail envelope and a letter in flight from Sydney to Incheon",
      "img.tracking.alt": "A letter in flight over Incheon, 7 hours 13 minutes and 5,240 km to go",
      "img.aircraft": "assets/airpost/aircraft-en.webp",
      "img.aircraft.alt": "Choosing the plane that carries a letter, with four aircraft and their speeds",
      "img.enclosures": "assets/airpost/enclosures-en.webp",
      "img.enclosures.alt": "A letter with a drawing of a flower and a cassette for a voice note",
      "contact.title": "Write to VectorLabs",
      "contact.lead": "App support, partnerships and business proposals.",
      "contact.copy": "Copy address",
      "contact.copied": "Address copied.",
      "contact.copyFail": "Could not copy. Select the address instead.",
      "foot.info": "Business information",
      "biz.name.k": "Trade name",
      "biz.name.v": "VectorLabs (벡터랩스)",
      "biz.owner.k": "Proprietor",
      "biz.owner.v": "Seungwoo Yang",
      "biz.reg.k": "Business registration number",
      "biz.addr.k": "Address",
      "biz.addr.v": "Room 306, 10-7 Myeongnyun 3-gil, Deokjin-gu, Jeonju-si, Jeonbuk State, Republic of Korea",
      "biz.mail.k": "Email"
    },
    ko: {
      "meta.title": "VectorLabs",
      "meta.description": "앱 스튜디오 VectorLabs, Airpost 개발사",
      "skip": "본문으로 건너뛰기",
      "nav.label": "주 메뉴",
      "nav.home": "VectorLabs 처음으로",
      "nav.contact": "문의",
      "lang.label": "언어",
      "nav.apps": "앱",
      "apps.title": "앱",
      "hero.lead": "앱 스튜디오",
      "hero.mail": "메일 보내기",
      "hero.app": "앱 보기",
      "app.lead": "세계 곳곳의 펜팔과 주고받는 항공우편",
      "img.badge": "assets/airpost/app-store-ko.svg",
      "img.badge.alt": "App Store에서 다운로드하기",
      "app.links": "Airpost 링크",
      "link.site": "웹사이트",
      "link.privacy": "개인정보처리방침",
      "link.terms": "이용약관",
      "href.privacy": "https://seungwoo313.github.io/airpost-legal/privacy/",
      "href.terms": "https://seungwoo313.github.io/airpost-legal/terms/",
      "app.screens": "Airpost 화면",
      "img.thread": "assets/airpost/thread-ko.webp",
      "img.thread.alt": "Airpost 대화 화면: 손글씨 편지, 실링으로 봉한 항공우편 봉투, 시드니에서 인천으로 가는 편지",
      "img.tracking.alt": "인천 상공을 나는 편지, 남은 시간 7시간 13분, 남은 거리 5,240km",
      "img.aircraft": "assets/airpost/aircraft-ko.webp",
      "img.aircraft.alt": "편지를 실을 비행기 고르기, 비행기 네 대와 속도",
      "img.enclosures": "assets/airpost/enclosures-ko.webp",
      "img.enclosures.alt": "꽃 그림과 음성 메시지 카세트가 든 편지",
      "contact.title": "VectorLabs에 연락하기",
      "contact.lead": "앱 이용 문의, 제휴, 사업 제안",
      "contact.copy": "주소 복사",
      "contact.copied": "주소를 복사했습니다.",
      "contact.copyFail": "복사하지 못했습니다. 주소를 직접 선택하십시오.",
      "foot.info": "사업자 정보",
      "biz.name.k": "상호",
      "biz.name.v": "벡터랩스(VectorLabs)",
      "biz.owner.k": "대표자",
      "biz.owner.v": "양승우",
      "biz.reg.k": "사업자등록번호",
      "biz.addr.k": "주소",
      "biz.addr.v": "전북특별자치도 전주시 덕진구 명륜3길 10-7, 306호(덕진동1가)",
      "biz.mail.k": "이메일"
    }
  };

  const root = document.documentElement;
  let lang = "en";

  function pickInitialLanguage() {
    const fromQuery = new URLSearchParams(location.search).get("lang");
    if (fromQuery === "ko" || fromQuery === "en") return fromQuery;
    try {
      const saved = localStorage.getItem("vectorlabs.lang");
      if (saved === "ko" || saved === "en") return saved;
    } catch (_) { /* per-viewer convenience only */ }
    return (navigator.language || "").toLowerCase().startsWith("ko") ? "ko" : "en";
  }

  function applyLanguage(next, remember) {
    lang = next === "ko" ? "ko" : "en";
    const dict = STRINGS[lang];
    root.lang = lang;
    document.title = dict["meta.title"];
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = dict["meta.description"];

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = dict[el.dataset.i18n];
      if (value !== undefined) el.textContent = value;
    });
    document.querySelectorAll("[data-i18n-src]").forEach((el) => {
      const value = dict[el.dataset.i18nSrc];
      if (value && el.getAttribute("src") !== value) el.setAttribute("src", value);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const value = dict[el.dataset.i18nAlt];
      if (value !== undefined) el.alt = value;
    });
    document.querySelectorAll("[data-i18n-href]").forEach((el) => {
      const value = dict[el.dataset.i18nHref];
      if (value) el.href = value;
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const value = dict[el.dataset.i18nAria];
      if (value) el.setAttribute("aria-label", value);
    });
    const group = document.querySelector(".lang");
    if (group) group.setAttribute("aria-label", dict["lang.label"]);
    document.querySelectorAll("[data-lang]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
    });
    const status = document.querySelector(".status");
    if (status) status.textContent = "";

    if (remember) {
      try { localStorage.setItem("vectorlabs.lang", lang); } catch (_) { /* per-viewer convenience only */ }
    }
  }

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.lang, true));
  });
  applyLanguage(pickInitialLanguage(), false);

  // Copy the contact address. The status line reports the clipboard result.
  document.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      const status = button.parentElement.querySelector(".status");
      try {
        await navigator.clipboard.writeText(button.dataset.copy);
        if (status) status.textContent = STRINGS[lang]["contact.copied"];
      } catch (_) {
        if (status) status.textContent = STRINGS[lang]["contact.copyFail"];
      }
    });
  });

})();
