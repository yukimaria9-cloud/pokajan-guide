/* A8.net 広告タグ（複数種類からランダム表示）
   サイト内の全ページから /ads.js として読み込む共通ファイル。
   広告タグを追加・変更する場合はこのファイルだけを編集すればよい。 */
(function () {
  var AD_MACROMILL_300x250 = `<a href="https://px.a8.net/svt/ejp?a8mat=4BAA9E+F1SH9U+2WL0+CLJ5T" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www29.a8.net/svt/bgt?aid=260820338910&wid=001&eno=01&mid=s00000013554002116000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=4BAA9E+F1SH9U+2WL0+CLJ5T" alt="">`;

  var AD_MACROMILL_728x90 = `<a href="https://px.a8.net/svt/ejp?a8mat=4BAA9E+F1SH9U+2WL0+C0YF5" rel="nofollow">
<img border="0" width="728" height="90" alt="" src="https://www26.a8.net/svt/bgt?aid=260820338910&wid=001&eno=01&mid=s00000013554002020000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=4BAA9E+F1SH9U+2WL0+C0YF5" alt="">`;

  var AD_MACROMILL_320x50 = `<a href="https://px.a8.net/svt/ejp?a8mat=4BAA9E+F1SH9U+2WL0+BYT9D" rel="nofollow">
<img border="0" width="320" height="50" alt="" src="https://www21.a8.net/svt/bgt?aid=260820338910&wid=001&eno=01&mid=s00000013554002010000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=4BAA9E+F1SH9U+2WL0+BYT9D" alt="">`;

  var AD_POINTINCOME_300x250 = `<a href="https://px.a8.net/svt/ejp?a8mat=4BAA9F+6JSFM+5JWO+5YZ75" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www23.a8.net/svt/bgt?aid=260820339011&wid=001&eno=01&mid=s00000025908001003000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4BAA9F+6JSFM+5JWO+5YZ75" alt="">`;

  var AD_GAMERS_300x250 = `<a href="https://px.a8.net/svt/ejp?a8mat=4BAA9E+GBMUUQ+4AHY+5ZMCH" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www21.a8.net/svt/bgt?aid=260820338987&wid=001&eno=01&mid=s00000020023001006000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4BAA9E+GBMUUQ+4AHY+5ZMCH" alt="">`;

  var AD_GAMERS_320x50 = `<a href="https://px.a8.net/svt/ejp?a8mat=4BAA9E+GBMUUQ+4AHY+5ZEMP" rel="nofollow">
<img border="0" width="320" height="50" alt="" src="https://www23.a8.net/svt/bgt?aid=260820338987&wid=001&eno=01&mid=s00000020023001005000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=4BAA9E+GBMUUQ+4AHY+5ZEMP" alt="">`;

  var AD_MDL_300x250 = `<a href="https://px.a8.net/svt/ejp?a8mat=4BAA9E+FWR0QA+5HXK+5YZ75" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www25.a8.net/svt/bgt?aid=260820338962&wid=001&eno=01&mid=s00000025652001003000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=4BAA9E+FWR0QA+5HXK+5YZ75" alt="">`;

  var AD_VIVION_300x250 = `<a href="https://px.a8.net/svt/ejp?a8mat=4BAA9E+CLOBQQ+5UVE+601S1" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www21.a8.net/svt/bgt?aid=260820338762&wid=001&eno=01&mid=s00000027329001008000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=4BAA9E+CLOBQQ+5UVE+601S1" alt="">`;

  var AD_VIVION_728x90 = `<a href="https://px.a8.net/svt/ejp?a8mat=4BAA9E+CLOBQQ+5UVE+614CX" rel="nofollow">
<img border="0" width="728" height="90" alt="" src="https://www24.a8.net/svt/bgt?aid=260820338762&wid=001&eno=01&mid=s00000027329001013000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=4BAA9E+CLOBQQ+5UVE+614CX" alt="">`;

  var AD_VIVION_320x50 = `<a href="https://px.a8.net/svt/ejp?a8mat=4BAA9E+CLOBQQ+5UVE+60WN5" rel="nofollow">
<img border="0" width="320" height="50" alt="" src="https://www23.a8.net/svt/bgt?aid=260820338762&wid=001&eno=01&mid=s00000027329001012000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=4BAA9E+CLOBQQ+5UVE+60WN5" alt="">`;

  var AD_GOKURAKUYU_300x250 = `<a href="https://px.a8.net/svt/ejp?a8mat=4BAA9E+CI3Q42+5T6U+5YZ75" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www20.a8.net/svt/bgt?aid=260820338756&wid=001&eno=01&mid=s00000027111001003000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=4BAA9E+CI3Q42+5T6U+5YZ75" alt="">`;

  // 掲載枠ごとの候補プール。data-ad-slot の値がキーに対応する。
  // pc-fixed は画面右下に追従するフロート表示（幅300px程度）のため、横長の728x90ではなく
  // 300x250系（pc-inlineと同じ顔ぶれ）を使う。728x90タグ(AD_MACROMILL_728x90 / AD_VIVION_728x90)は
  // 将来ワイドな固定枠を作る場合のために残してあるが、現状は未使用。
  var A8_AD_POOLS = {
    "pc-inline": [AD_MACROMILL_300x250, AD_POINTINCOME_300x250, AD_GAMERS_300x250, AD_MDL_300x250, AD_VIVION_300x250, AD_GOKURAKUYU_300x250],
    "sp-inline": [AD_MACROMILL_300x250, AD_POINTINCOME_300x250, AD_GAMERS_300x250, AD_VIVION_300x250, AD_GOKURAKUYU_300x250],
    "pc-fixed": [AD_MACROMILL_300x250, AD_POINTINCOME_300x250, AD_GAMERS_300x250, AD_MDL_300x250, AD_VIVION_300x250, AD_GOKURAKUYU_300x250],
    "sp-fixed": [AD_MACROMILL_320x50, AD_POINTINCOME_300x250, AD_GAMERS_320x50, AD_VIVION_320x50]
  };

  // ページ内に同じ枠が複数あっても(例: 本文中とページ下部)、それぞれ独立にランダム抽選する。
  var slots = document.querySelectorAll("[data-ad-slot]");
  for (var i = 0; i < slots.length; i++) {
    var el = slots[i];
    var pool = A8_AD_POOLS[el.getAttribute("data-ad-slot")];
    if (pool && pool.length) {
      el.innerHTML = pool[Math.floor(Math.random() * pool.length)];
    }
  }
})();
