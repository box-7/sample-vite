import { render, screen, waitFor, waitForElementToBeRemoved, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import supabase from '../utils/supabase';

test('新しいデータが正しく登録されるかを確認する', async () => {
        render(<App />);

        await waitForElementToBeRemoved(() => screen.getByText('Loading...'));
        const records = await waitFor(() => screen.getAllByTestId('record'));
        const recordCount = records.length;

        const inputFormStudyContent = await screen.getByTestId('study-content');
        const inputFormStudyHour = await screen.getByTestId('study-hour');

        await act(async () => {
                await userEvent.type(inputFormStudyContent, 'Test3');
                await userEvent.type(inputFormStudyHour, '3');

                const addRecordButton = await screen.getByTestId('add-record');
                await userEvent.click(addRecordButton);
        });

        await waitFor(() => {
                const newRecords = screen.getAllByTestId('record');
                const newRecordCount = newRecords.length;

                console.log("newRecordCount", newRecordCount);

                // 新しいレコードが追加されたことを確認
                expect(recordCount + 1).toBe(newRecordCount);
        });
});


        //     // 新しいレコードが追加されるのを待つ
        //     const test = await waitFor(() => {
        //         userEvent.type(inputFormStudyContent, 'Test3');
        //         userEvent.type(inputFormStudyHour, '3');
        //         const addRecordButton = screen.getByTestId('add-record');
        //         userEvent.click(addRecordButton);
        //       });
        //         console.log("newRecordCount111", newRecordCount);
        //   const newRecordCount = newRecords.length;

        //   console.log("newRecordCount222", newRecordCount);

        //   await expect(recordCount  + 1).toBe(newRecordCount);


// //   console.log("newRecordCount", newRecordCount);

//   await expect(recordCount  + 1).toBe(newRecordCount);