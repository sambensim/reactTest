// import React from 'react';
import PropTypes from 'prop-types';
// import DataForm from './DataForm';

const DataList = ({dataList}) => {
    return (
        <ul>
            {dataList.map((item, index) => (
                <li key = {index}> {item.text} </li>
            ))}
        </ul>
    );
};

DataList.propTypes = {
    dataList: PropTypes.array.isRequired,
};

export default DataList;