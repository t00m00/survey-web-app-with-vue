\n+\n+---
# 日本語での説明
\n+このプロジェクトは、Vue.js を使用して構築されたウェブアプリケーションであり、ユーザーがアンケートを作成、完了、管理できるようにします。回答の保存、アンケート質問の編集、およびデータのエクスポート機能を提供します。
\n+* ウェブサイト
  [https://t00m00.github.io/survey-web-app-with-vue/](https://t00m00.github.io/survey-web-app-with-vue/)
\n+## 機能
\n+*   アンケートの名前を入力します。
*   ブラウザの `localStorage` にアンケートの回答を自動保存します。
*   以前に保存したアンケートデータを `localStorage` から読み込みます。
*   `localStorage` から保存したアンケートデータを削除します。
*   アンケートの回答を JSON ファイルとしてエクスポートします。
*   個々のアセスメント項目のスコアをスライダーで表示および調整します。
*   アンケートの合計スコアと最大スコアを表示します。
*   「編集モード」を有効にして、アセスメント項目の管理を行えます。これにより以下が可能です:
    *   既存のアセスメント項目の視点（質問文やラベルの文言）を変更します。
    *   カスタマイズ可能な最大スコア（1〜10）で新しいアセスメント項目を追加します。
    *   既存のアセスメント項目を削除します。
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