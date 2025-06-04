# INSTRUCTIONS.md

このファイルは OpenAI Codex CLI（`codex` コマンド）を使用して本リポジトリのコードを操作する際のガイダンスを提供します。

## プロジェクト構成

本プロジェクトは Vue 3 を用いた完全クライアントサイドのアンケート／アセスメント Web アプリケーションです。主な技術スタック:

- **Vue 3**（Composition API）を CDN 経由で読み込み
- **Vuetify 3** による UI コンポーネント
- **ES6 モジュール** を利用したコンポーネント分割
- **localStorage** によるデータ永続化

### コアアーキテクチャパターン

アプリのコンポーネントは以下のファイルで構成されます:

- `docs/index.html` - エントリーポイント。Vue/Vuetify を CDN から読み込む
- `docs/js/main.js` - アプリの初期化と Vuetify 設定
- `docs/js/components/surveyPage.js` - アンケート画面全体（名前入力、保存/読み込み/エクスポート機能）
- `docs/js/components/surveyPageAssessment.js` - アセスメント項目リストとスライダー操作
- `docs/js/components/assessments.js` - アセスメントデータ管理ロジック
- `docs/survey.config.js` - デフォルト設定のアセスメント項目定義

## データフロー

1. `survey.config.js` から初期アセスメントデータを読み込む
2. `surveyPageAssessment.js` でスライダー操作によりスコアを更新
3. `surveyPage.js` が変更を検知し、`localStorage` に自動保存
4. エクスポート機能（File System Access API）で JSON ファイルを書き出し（Chromium ベースブラウザ限定）

## 主な機能

- **編集モード**: アセスメント項目の文言編集・追加・削除
- **自動保存**: データの `localStorage` への自動永続化
- **エクスポート**: JSON ファイルとしてのエクスポート
- **レスポンシブ対応**: Vuetify のグリッドシステムでスマホ対応

## 開発

### アプリの実行

静的 Web アプリのため、`docs/index.html` をブラウザで直接開くか、サーバーを立てて `docs/` を提供してください:

```bash
# Python - シンプルサーバー起動
cd docs && python -m http.server 8000

# Node.js - serve を利用
cd docs && npx serve .
```

### ファイル構成

- 全ソースコード: `docs/`
- CSS ファイル: `docs/css/`
- ES6 モジュールによるコンポーネント構成（`.vue` ファイルは使用しない）
- ビルド不要（直接 ES6 モジュールを読み込む）

### コード変更のポイント

- UI 操作周り: `surveyPageAssessment.js`
- データ構造管理: `assessments.js`
- デフォルト項目定義: `survey.config.js`
- コンポーネント間通信: props & events（Vue 3）

### ブラウザ互換性

エクスポート機能は File System Access API を利用するため Chromium ベースブラウザでのみ動作します。その他機能はモダンブラウザで動作します。

## Codex CLI 向け補足

- セッション開始時に必ず本ファイルを参照し、プロジェクトの前提や方針を把握してください。
- 新規セッションでは `codex --help` によって利用可能なコマンドやオプションを確認してください。