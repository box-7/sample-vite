import "@testing-library/jest-dom";

require("dotenv").config();

// import "@testing-library/jest-dom";:
// これは @testing-library/jest-dom をインポートしている
// Jest のテストで使えるカスタムマッチャー（例えば、toBeInTheDocument など）が追加される
// これらのマッチャーは、DOM 要素の存在や属性を簡単にテストするために使われる

// require("dotenv").config();:
// dotenv ライブラリを使って、.env ファイルに定義された環境変数を読み込む設定を行っている
// dotenv を使うことで、テスト環境でも .env ファイルに定義された環境変数を利用できるようになる
// テスト中に必要な設定やシークレット情報を簡単に管理できる