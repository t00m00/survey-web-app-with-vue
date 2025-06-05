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

## 日本語での説明

本プロジェクトはVue.jsを使って構築されたアンケート作成・回答・管理のWebアプリケーションです。以下の特徴があります。

* アンケート名の入力が可能です。
* ブラウザの`localStorage`を使って調査結果を自動保存します。
* 保存済みの調査結果を`localStorage`から読み込めます。
* 保存された調査結果を`localStorage`から削除できます。
* 調査結果をJSONファイルとしてエクスポートできます。
* スライダーを使って個別のアセスメント項目のスコアを調整できます。
* アンケートの合計スコアおよび最大スコアを表示します。
* "編集モード"を有効にするとアセスメント項目の管理が可能です。具体的には：
  * 既存のアセスメント項目の視点（質問文やラベル）を変更できます。
  * 最大スコア(1-10)を指定して新しいアセスメント項目を追加できます。
  * 既存のアセスメント項目を削除できます。