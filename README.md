# Survey Web App with Vue.js
# Vue.jsを使用したアンケートWebアプリケーション

This project is a web application built with Vue.js that allows users to create, complete, and manage surveys. It provides features for saving responses, editing survey questions, and exporting data.
本プロジェクトは、Vue.jsを利用してアンケートの作成、回答、管理ができるWebアプリケーションです。回答の保存、アンケート項目の編集、データのエクスポート機能を提供します。

* Web site: [https://t00m00.github.io/survey-web-app-with-vue/](https://t00m00.github.io/survey-web-app-with-vue/)
* ウェブサイト： [https://t00m00.github.io/survey-web-app-with-vue/](https://t00m00.github.io/survey-web-app-with-vue/)

## Features
## 機能

*   Enter a name for the survey.
*   アンケートの名称を入力します。
*   Automatically saves survey responses to the browser's `localStorage`.
*   アンケートの回答をブラウザの `localStorage` に自動保存します。
*   Load previously saved survey data from `localStorage`.
*   `localStorage` に保存された回答データを読み込みます。
*   Delete saved survey data from `localStorage`.
*   `localStorage` に保存された回答データを削除します。
*   Export survey responses as a JSON file.
*   アンケートの回答をJSONファイルとしてエクスポートします。
*   View and adjust scores for individual assessment items using sliders.
*   スライダーを使用して各アセスメント項目のスコアを確認・調整できます。
*   Displays the total score and the maximum possible score for the survey.
*   アンケートの合計スコアと最大スコアを表示します。
*   Enable "Edit Mode" to manage assessment items, which allows you to:
*   編集モードを有効にすると、以下の操作が可能になります：
    *   Modify the perspective (i.e., the question text or label) of existing assessment items.
    *   既存のアセスメント項目の文言（質問内容やラベル）を修正できます。
    *   Add new assessment items with a customizable maximum score (1-10).
    *   最大スコア（1～10）を指定して新しいアセスメント項目を追加できます。
    *   Delete existing assessment items.
    *   既存のアセスメント項目を削除できます。

---
![Survey Web App v0.4.0 Demonstration / デモ](./image/survey-web-app-with-vue_v0.4.0.gif)