import React from 'react';

const DataList = ({dataList}) => {
    return (
        <ul>
            {dataList.map((item, index) => (
                <li key = {index}> {item.text} </li>
            ))}
        </ul>
    );
};

export default DataList;