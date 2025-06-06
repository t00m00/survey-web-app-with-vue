# Survey Web App with Vue.js
# Vue.jsによるアンケートWebアプリ

This project is a web application built with Vue.js that allows users to create, complete, and manage surveys. It provides features for saving responses, editing survey questions, and exporting data.
このプロジェクトはVue.jsで構築されたWebアプリケーションで、アンケートの作成、回答、管理を可能にします。回答の保存、質問の編集、データのエクスポート機能を提供します。

* Web site
[https://t00m00.github.io/survey-web-app-with-vue/](https://t00m00.github.io/survey-web-app-with-vue/)
* Webサイト
[https://t00m00.github.io/survey-web-app-with-vue/](https://t00m00.github.io/survey-web-app-with-vue/)

## Features
## 機能

*   Enter a name for the survey.
*   アンケートの名前を入力します。
*   Automatically saves survey responses to the browser's `localStorage`.
*   ブラウザの`localStorage`に自動的にアンケートの回答を保存します。
*   Load previously saved survey data from `localStorage`.
*   `localStorage`から以前に保存したアンケートデータを読み込みます。
*   Delete saved survey data from `localStorage`.
*   `localStorage`から保存されたアンケートデータを削除します。
*   Export survey responses as a JSON file.
*   アンケートの回答をJSONファイルとしてエクスポートします。
*   View and adjust scores for individual assessment items using sliders.
*   スライダーを使用して個々の評価項目のスコアを表示・調整します。
*   Displays the total score and the maximum possible score for the survey.
*   アンケートの合計スコアと最大スコアを表示します。
*   Enable "Edit Mode" to manage assessment items, which allows you to:
*   「編集モード」を有効にして評価項目を管理できます。具体的には以下の操作が可能です。
    *   Modify the perspective (i.e., the question text or label) of existing assessment items.
    *   既存の評価項目の視点（質問テキストやラベル）を修正します。
    *   Add new assessment items with a customizable maximum score (1-10).
    *   最大スコア（1～10）をカスタマイズ可能な新しい評価項目を追加します。
    *   Delete existing assessment items.
    *   既存の評価項目を削除します。

---
![Survey Web App v0.4.0 Demonstration](./image/survey-web-app-with-vue_v0.4.0.gif)
アンケートWebアプリ v0.4.0 デモ