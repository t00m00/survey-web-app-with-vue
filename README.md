# Survey Web App with Vue.js

This project is a web application built with Vue.js that allows users to create, complete, and manage surveys. It provides features for saving responses, editing survey questions, and exporting data.

* Web site
[https://t00m00.github.io/survey-web-app-with-vue/](https://t00m00.github.io/survey-web-app-with-vue/)

## Features

*   Enter a name for the survey.
*   Automatically saves survey responses to the browser's `localStorage`.
*   Load previously saved survey data from `localStorage`.
*   Delete saved survey data from `localStorage`.
*   Export survey responses as a JSON file.
*   View and adjust scores for individual assessment items using sliders.
*   Displays the total score and the maximum possible score for the survey.
*   Enable "Edit Mode" to manage assessment items, which allows you to:
    *   Modify the perspective (i.e., the question text or label) of existing assessment items.
    *   Add new assessment items with a customizable maximum score (1-10).
    *   Delete existing assessment items.

---
![Survey Web App v0.4.0 Demonstration](./image/survey-web-app-with-vue_v0.4.0.gif)

---

## 日本語説明

このプロジェクトはVue.jsを使用して開発されたアンケート・調査用のWebアプリケーションです。
ユーザーはアンケートを作成し、回答を入力・管理することができます。以下の機能を提供しています。

* アンケート名の入力
* ブラウザの`localStorage`への自動保存
* 保存されたアンケートデータの読み込み
* 保存データの削除
* アンケート結果のJSONファイルとしてのエクスポート
* 各評価項目のスコア調整用のスライダー表示
* 合計スコアおよび最大スコアの表示
* 「編集モード」の切り替えにより評価項目の追加・編集・削除が可能
  - 既存評価項目の質問文やラベルの変更
  - 新規評価項目の追加（最大スコア1〜10設定可能）
  - 既存項目の削除

このアプリはVue 3のComposition APIとVuetify 3を使用し、CDN経由での軽量利用を想定しています。
