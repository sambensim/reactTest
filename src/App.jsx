///Users/samsimmons/Desktop/website stuff/react/vite-test copy/src/App.jsx
import { useEffect, useState } from 'react'
import './App.css'
import {supabase} from "./supabaseClient";
import DataForm from './components/DataForm';
import DataList from './components/DataList';

const App = () => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const {data, error} = await supabase.from('data').select();
      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setDataList(data);
      }
    };
    fetchData();
  }, []);

  const handleNewData = (newData) => {
    setDataList([...dataList, newData]);
  };

  return (
    <div>
      <h1>Enter Info</h1>
      <DataForm onNewData={handleNewData} />
      <h2>Saved Data</h2>
      <DataList dataList={dataList} />
    </div>
  );
};

export default App;
