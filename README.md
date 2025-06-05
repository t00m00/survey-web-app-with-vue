# Survey Web App with Vue.js / Vue.js アンケートWebアプリ

This project is a web application built with Vue.js that allows users to create, complete, and manage surveys. It provides features for saving responses, editing survey questions, and exporting data.

このプロジェクトは、Vue.jsで構築されたWebアプリケーションで、ユーザーがアンケートの作成、完了、管理を行うことができます。回答の保存、アンケート質問の編集、データのエクスポート機能を提供します。

* Web site / Webサイト  
[https://t00m00.github.io/survey-web-app-with-vue/](https://t00m00.github.io/survey-web-app-with-vue/)

## Features / 機能

*   Enter a name for the survey. / アンケートの名前を入力できます。
*   Automatically saves survey responses to the browser's `localStorage`. / アンケートの回答をブラウザの`localStorage`に自動保存します。
*   Load previously saved survey data from `localStorage`. / `localStorage`から以前に保存されたアンケートデータを読み込めます。
*   Delete saved survey data from `localStorage`. / `localStorage`から保存されたアンケートデータを削除できます。
*   Export survey responses as a JSON file. / アンケートの回答をJSONファイルとしてエクスポートできます。
*   View and adjust scores for individual assessment items using sliders. / スライダーを使用して個別の評価項目のスコアを表示・調整できます。
*   Displays the total score and the maximum possible score for the survey. / アンケートの合計スコアと最大可能スコアを表示します。
*   Enable "Edit Mode" to manage assessment items, which allows you to: / 評価項目を管理する「編集モード」を有効にすると、以下のことができます：
    *   Modify the perspective (i.e., the question text or label) of existing assessment items. / 既存の評価項目の観点（質問文やラベル）を変更できます。
    *   Add new assessment items with a customizable maximum score (1-10). / カスタマイズ可能な最大スコア（1-10）で新しい評価項目を追加できます。
    *   Delete existing assessment items. / 既存の評価項目を削除できます。

---
![Survey Web App v0.4.0 Demonstration](./image/survey-web-app-with-vue_v0.4.0.gif)