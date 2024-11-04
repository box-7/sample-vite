export default {
        testEnvironment: "jsdom",
        testEnvironmentOptions: {
                resources: "usable", // これを追加 外部リソースの読み込みが有効になる
        },
        moduleNameMapper: {
                "\\.(css|less)$": "identity-obj-proxy",
        },
        setupFilesAfterEnv: ["./jest.setup.js"],
};

// testEnvironment: "jsdom",
// テスト環境として jsdom を使うことを指定している。
// jsdom はブラウザのような環境をシミュレートするから、React コンポーネントのテストに適している

// moduleNameMapper:
// モジュール名のマッピングを設定
// CSS や LESS ファイルをモックするために identity-obj-proxy を使っている
// これにより、スタイルシートのインポートがテスト中にエラーを引き起こさないようにしている

// テスト環境がセットアップされた後に実行するスクリプトを指定
// setupFilesAfterEnv: ["./jest.setup.js"]