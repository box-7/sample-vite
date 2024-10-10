import { useState } from 'react'
import './App.css'
import supabase from './utils/supabase'
import { useEffect } from 'react'

function App() {
        const [data, setData] = useState(null);
        const [totalTime, setTotalTime] = useState(0);
        const [isLoading, setIsLoading] = useState(true);
        useEffect(() => {
                const fetchData = async () => {
                        try {
                                const { data } = await supabase.from('study-record').select('*');
                                setData(data);
                                setIsLoading(false);
                        } catch (error) {
                                console.error('Error fetching data:', error);
                        }
                };
                // fetchData();
                fetchData().then(data => {
                        const calculatedTotalTime = data.reduce((acc, record) => acc + parseInt(record.time), 0);
                        setTotalTime(calculatedTotalTime);
                });
        }, []);

        // useEffect(() => {
        //         if (data) {
        //                 const calculatedTotalTime = data.reduce((acc, record) => acc + parseInt(record.time), 0);
        //                 setTotalTime(calculatedTotalTime);
        //         }
        // }, [data]);

        const addTodo = async (title, time) => {
                const { data, error } = await supabase
                        .from("study-record")
                        .insert([{ title: title, time: time }])
                        .select();
                if (error) {
                        throw error;
                }
                return data;
        };

        const [studyContent, setStudyContent] = useState('');
        const [studyHour, setStudyHour] = useState(0);
        // const [records, setRecords] = useState([]);
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
                addTodo(studyContent, studyHour);
                // const newRecord = {title: studyContent, time: studyHour};
                // const updateRecords = ([...records, newRecord])
                setStudyContent('')
                setStudyHour(0)
                // setRecords(updateRecords)
        };

        return (
                <>
                        <h1>学習記録一覧</h1>
                        <p>学習内容<input type="text" value={studyContent} onChange={handleChange} /></p>
                        <p>学習時間<input type="number" value={studyHour} onChange={ handleChangeHour} /></p>
                        <p>入力されている学習内容: {studyContent}</p>
                        <p>入力されている学習時間: {studyHour}時間</p>
                        <button onClick={onClickSetRecord}>登録</button>

                        <div>
                                {isLoading ? (
                                        <p>Loading...</p>
                                ) : (
                                        data && data.length > 0 ? (
                                        <div>
                                                {/* データを表示する部分 */}
                                                {data.map((record, index) => (

                                                        <p  key={index}>{record.title} {record.time}時間</p>
                                                ))}
                                        </div>
                                        ) : (
                                        <p>データがありません</p>
                                        )
                                )}
                        </div>
                        {error && <p>{error}</p>}

                        <h2>合計時間: {totalTime} / 1000(h)</h2>
                </>
        )
}

export default App


                        // {/* {records.map((record, index) => ( */}
                        // {/* {data?.map((record, index) => (
                        //         <p  key={index}>{record.title} {record.time}時間</p>
                        // ))} */}

                                                // <div key={item.id}>{item.name}</div>
        // const totalTime = data.reduce((acc, record) => acc + parseInt(record.time), 0);

        // console.log("data",data);
        // console.log("supabase.fromの確認");
        // const test = async supabase.from("study-record").select("*");
        // console.log(test.data);