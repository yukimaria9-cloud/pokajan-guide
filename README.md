# GuideLabo

複数のゲームの攻略情報をまとめるハブサイト。Vercelでホスティングし、`guidelabo.com` にドメインを割り当てています。

## 構成

- [index.html](index.html) — ルートのハブページ（ゲーム一覧）
- [holo_pokajan/](holo_pokajan/) — ホロライブドリームス「ポカジャン」攻略サイト（`guidelabo.com/holo_pokajan/`）
  - [holo_pokajan/index.html](holo_pokajan/index.html) — トップページ
  - [holo_pokajan/rules.html](holo_pokajan/rules.html) — ルール・遊び方
  - [holo_pokajan/yaku.html](holo_pokajan/yaku.html) — 役一覧・点数表
  - [holo_pokajan/strategy.html](holo_pokajan/strategy.html) — 戦術・安全牌の読み方
  - [holo_pokajan/holomen-board.html](holo_pokajan/holomen-board.html) — コインの稼ぎ方
  - `holo_pokajan/css/style.css` — 共通スタイル
  - `holo_pokajan/js/script.js` — 共通スクリプト

今後、他のゲームの攻略コンテンツを追加する場合は、ルート直下に新しいフォルダ（例：`/other_game/`）を作成する想定です。

## 技術構成

静的HTML / CSS / JavaScript のみ（ビルド不要）。Vercelにこのリポジトリを接続し、push すると自動デプロイされます。

## コメント機能

ポカジャン攻略サイトの各ページ下部に [giscus](https://giscus.app)（GitHub Discussions ベース）のコメント欄を設置しています。

## 免責事項（ポカジャン攻略Lab部分）

ポカジャン攻略サイトは個人が運営する非公式ファンサイトであり、カバー株式会社およびホロライブプロダクション、「ホロライブドリームス」運営とは一切関係ありません。
