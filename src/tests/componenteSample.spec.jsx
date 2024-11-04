import App from "../App";
import React from "react";
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react';


test('学習内容と学習時間が登録されることを確認する', () => {
        // コンポーネントをレンダリング
        render(<App />);

        // input要素を取得
        const contentInputElement = screen.getByLabelText('学習内容');
        const hourInputElement = screen.getByLabelText('学習時間');
        // ボタン要素を取得
        const buttonElement = screen.getByText('登録');

        // inputに値を入力
        fireEvent.change(contentInputElement, { target: { value: 'test1' } });
        fireEvent.change(hourInputElement, { target: { value: 2 } });

        // ボタンをクリック
        fireEvent.click(buttonElement);

        // 登録された内容を確認（例として、登録された内容が表示されるdivを確認）
        const registeredContent = screen.getByText('test1');
        const registeredHour = screen.getByText('2');
        expect(registeredContent).toBeInTheDocument();
        expect(registeredHour).toBeInTheDocument();
});


// describe("Title Test", () => {
//   it("タイトルがHello Jestであること", () => {
//     // testId(title)を指定して取得
//     render(<App />);
//     const inputElement = document.getElementById('study-content');
//     inputElement.value = 'test1';


//     const title = screen.getByTestId("title");
//     expect(title).toHaveTextContent("Hello Jest");
//   });
// });


// describe("Title Test", () => {
//         it("タイトルがHello Jestであること", () => {
//           // testId(title)を指定して取得
//           render(<App />);
//           const inputElement = document.getElementById('study-content');

//           const title = screen.getByTestId("title");
//           expect(title).toHaveTextContent("Hello Jest");
//         });
//       });


// フォームに学習内容と時間を入力して登録ボタンを押すと新たに記録が追加されている
// 数が1つ増えていることをテストする

// {
//         "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"],
//         "editor.codeActionsOnSave": {
//           "source.fixAll.eslint": "true"
//         }
//       }