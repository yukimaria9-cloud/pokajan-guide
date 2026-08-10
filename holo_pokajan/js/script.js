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

  // 忍者AdMaxの広告タグはHTMLに直接静的に埋め込み、PC/SPの出し分けはCSSで行う
  // （.ad-pc-only / .ad-sp-only ＠ css/style.css）。詳細は各HTMLファイルを参照。
});
