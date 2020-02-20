import React, {
  useState,
} from 'react';
import Inline3 from './Inline3';
import selectData from './mock-select.js';
import {
  withDisclosureManager,
} from '../disclosure-manager';

const Expand3 = ({ disclosureManager }) => {
  const [selectedKeys, setSelectedKeys] = useState([]);

  const style2 = {
    backgroundColor: 'pink',
    height: '30px',
    width: '100%',
  };

  const onClose = (event, keys) => {
    // const keys = metaArray.map((metaData) => {
    //   return metaData.key;
    // })
    setSelectedKeys(keys);
  };

  return (
    <button
      aria-haspopup
      tabIndex="0"
      style={style2}
      role="select"
      onClick={() => {
        disclosureManager.disclose({
          preferredType: 'modal',
          dimensions: { height: '420', width: '320' },
          content: {
            key: 'magic-muffin-filter3',
            component: <Inline3 onChange={onClose} data={selectData} selected={selectedKeys} />,
          },
        });
      }}
    >
      {selectedKeys.join(' ')}
    </button>
  );
};

export default withDisclosureManager(Expand3);
