## 日本語説明

本プロジェクトは、Vue.js を用いて開発されたアンケート・ウエブアプリケーションです。ユーザーがアンケートを作成し、回答し、管理することができます。回答内容の保存、アンケート質問の編集、データのエクスポート機能を備えています。

* ウェブサイト
  [https://t00m00.github.io/survey-web-app-with-vue/](https://t00m00.github.io/survey-web-app-with-vue/)

### 主な機能

* アンケートの名前を入力可能
* アンケート回答はブラウザの `localStorage` に自動保存
* 以前保存したアンケートデータを `localStorage` から読み込み可能
* 保存済みアンケートデータの削除機能
* JSON ファイル形式でのアンケート回答エクスポート
* 個別の評価項目のスコアをスライダーで調整可能
* アンケート全体の合計スコアと最大スコアの表示
* 「編集モード」を有効にすると、以下の管理が可能:
  * 既存の評価項目の視点（質問文・ラベル）の修正
  * 新しい評価項目を最大スコア（1〜10）を指定して追加
  * 既存の評価項目の削除
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