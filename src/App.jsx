import { useState } from 'react'
import './App.css'
import supabase from './utils/supabase'


function App() {
        console.log("supabase 222", supabase)

        const [studyContent, setStudyContent] = useState('');
        const [studyHour, setStudyHour] = useState(0);
        const [records, setRecords] = useState([]);
        const [error, setError] = useState("");
        const handleChange = (e) => {
                setStudyContent(e.target.value)
        };
        const handleChangeHour = (e) => {
                setStudyHour(e.target.value)
        };
        const onClickSetRecord = () => {
                if (studyContent === '' || studyHour === '') {
                        setError('入力されていない項目があります')
                        return
                }
                setError('')
                const newRecord = {title: studyContent, time: studyHour};
                const updateRecords = ([...records, newRecord])
                setStudyContent('')
                setStudyHour(0)
                setRecords(updateRecords)
        };

        const totalTime = records.reduce((acc, record) => acc + parseInt(record.time), 0);

        return (
                <>
                        <h1>学習記録一覧</h1>
                        <p>学習内容<input type="text" value={studyContent} onChange={handleChange} /></p>
                        <p>学習時間<input type="number" value={studyHour} onChange={ handleChangeHour} /></p>
                        <p>入力されている学習内容: {studyContent}</p>
                        <p>入力されている学習時間: {studyHour}時間</p>
                        <button onClick={onClickSetRecord}>登録</button>

                        {records.map((record, index) => (
                                <p  key={index}>{record.title} {record.time}時間</p>
                        ))}

                        {error && <p>{error}</p>}

                        <h2>合計時間: {totalTime} / 1000(h)</h2>
                </>
        )
}

export default App

