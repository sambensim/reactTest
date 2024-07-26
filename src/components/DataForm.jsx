//src/components/DataForm.jsx
import {useState} from "react";
import {supabase} from '../supabaseClient';
import PropTypes from 'prop-types';

const DataForm = ({onNewData}) => {
    const [data, setData] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const {data: newData, error} = await supabase
            .from('data')
            .insert([{text: data}]);
        if (error) {
            console.error('Error inseting data:', error);
        } else {
            onNewData(newData[0]);
            setData('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type = "text"
                value = {data}
                onChange = {(e) => setData(e.target.value)}
                placeholder="Enter data"
            />
            <button type = "submit"> Save </button>
        </form>
    );
};

DataForm.propTypes = {
    onNewData: PropTypes.func.isRequired,
};

export default DataForm;