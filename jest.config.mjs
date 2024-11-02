export default {
        testEnvironment: "jsdom",
        moduleNameMapper: {
                "\\.(css|less)$": "identity-obj-proxy",
        },
        // テスト環境がセットアップされた後に実行するスクリプトを指定
        setupFilesAfterEnv: ["./jest.setup.js"],
};
