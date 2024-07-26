//src/components/DataForm.jsx
import {useState} from "react";
import {supabase} from '../supabaseClient';
import PropTypes from 'prop-types';

const DataForm = ({onNewData}) => {
    const [data, setData] = useState('');

    const handleCommand = async (data) => {
        if (data.toUpperCase() === "TEST") {
            console.log("test successful")
        } else {
            await handleSubmit(data);
        }
    };

    const handleSubmit = async (data) => {
        const {data: newData, error} = await supabase
            .from('data')
            .insert([{text: data}]);
        if (error) {
            console.error('Error inseting data:', error);
        } else if (newData && newData.length > 0) {
            onNewData(newData[0]);
        } else {
            console.error('No data returned from insert');
        }
        setData('');

    };
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
        handleCommand(data);
    };
    
    return (
        <form onSubmit={handleFormSubmit}>
            <input
                type = "text"
                value = {data}
                onChange = {(e) => setData(e.target.value)}
                placeholder="Enter data"
            />
            <button type = "submit">Save</button>
        </form>
    );
};

DataForm.propTypes = {
    onNewData: PropTypes.func.isRequired,
};

export default DataForm;