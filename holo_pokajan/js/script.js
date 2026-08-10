// ポカジャン攻略サイト 共通スクリプト
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // ナビリンクをクリックしたら閉じる（モバイル）
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // 現在のページに対応するナビリンクをハイライト
  const currentPage = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
    }
  });

  // ---------- 忍者AdMax 広告設置 ----------
  // 記事内（728x90 / 320x50）とページ固定（160x600右サイド / SPオーバーレイ320x50）で
  // PC・スマホそれぞれに合ったタグだけを画面幅を見て読み込む。
  const ADS = {
    inline: {
      pc: "https://adm.shinobi.jp/s/65c7d77707083429e7a6757025c9b1c0", // poka-PC-728x90
      sp: "https://adm.shinobi.jp/s/e65ecf7eae7f5dd310829d086626ddbd", // poka-SP-320x50
    },
    fixed: {
      pc: "https://adm.shinobi.jp/s/98ddc85e799a562418a611fb01b78c9f", // poka-PC-160x600（右サイド固定）
      sp: "https://adm.shinobi.jp/s/53424dc3792c66e8c524dbb14efe6b9a", // poka-SP-ovl-320x50（オーバーレイ）
    },
  };

  function loadAd(containerId, srcPc, srcSp) {
    const el = document.getElementById(containerId);
    if (!el) return;
    const isPC = window.innerWidth >= 768;
    const s = document.createElement("script");
    s.src = isPC ? srcPc : srcSp;
    s.async = false; // document.write()を使うタグのため、非同期実行にすると描画がブロックされる
    el.appendChild(s);
  }

  loadAd("ad-top", ADS.inline.pc, ADS.inline.sp);
  loadAd("ad-bottom", ADS.inline.pc, ADS.inline.sp);
  loadAd("ad-fixed", ADS.fixed.pc, ADS.fixed.sp);
});
