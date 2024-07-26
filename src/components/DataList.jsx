///Users/samsimmons/Desktop/website stuff/react/vite-test copy/src/components/DataList.jsx
import PropTypes from 'prop-types';

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