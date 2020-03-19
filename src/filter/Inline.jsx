import React, {
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { Utils } from 'terra-list';
import ContentContainer from 'terra-content-container';
import ActionFooter from 'terra-action-footer';
// import Spacer from 'terra-spacer';
import Button from 'terra-button';
import DualListbox from './DualListbox';
import {
  DisclosureManagerHeaderAdapter,
  withDisclosureManager,
  disclosureManagerShape,
} from '../disclosure-manager';

const propTypes = {
  data: PropTypes.array,
  disclosureManager: disclosureManagerShape,
  onChange: PropTypes.func,
  selected: PropTypes.array,
};

const Inline = ({
  onChange,
  data,
  selected,
  disclosureManager,
}) => {
  const [selectedKeys, setSelectedKeys] = useState(selected || []);
  const [searchText, setSearchText] = useState('');

  const [activeAvailableKeys, setActiveAvailableKeys] = useState([]);
  const [activeSelectedKeys, setActiveSelectedKeys] = useState([]);

  const onClickAvailable = (event, metaData) => {
    setActiveAvailableKeys(Utils.updatedMultiSelectedKeys(activeAvailableKeys, metaData.key));
  };
  const onClickSelected = (event, metaData) => {
    setActiveSelectedKeys(Utils.updatedMultiSelectedKeys(activeSelectedKeys, metaData.key));
  };

  const onSelectAll = () => {
    let keys = selectedKeys;
    activeAvailableKeys.forEach(key => {
      // if (selectedKeys.indexOf(key) > 0) {
      keys = Utils.updatedMultiSelectedKeys(keys, key);
      // }
    });
    setSelectedKeys(keys);
    setActiveAvailableKeys([]);
  };
  const onRemoveAll = () => {
    let keys = selectedKeys;
    activeSelectedKeys.forEach(key => {
      // if (selectedKeys.indexOf(key) > 0) {
      keys = Utils.updatedMultiSelectedKeys(keys, key);
      // }
    });
    setSelectedKeys(keys);
    setActiveSelectedKeys([]);
  };
  const onSubmit = (event) => {
    onChange(event, selectedKeys);
    disclosureManager.dismiss();
  };
  const onSearch = (text) => {
    setSearchText(text);
  };

  const availableItems = [];
  const selectedItems = [];

  data.forEach((option, index) => {
    if (selectedKeys.indexOf(option.key) >= 0) {
      selectedItems.push({
        key: option.key,
        node: option.text,
        metaData: { key: option.key },
        isSelected: activeSelectedKeys.indexOf(option.key) >= 0,
      });
    } else if (!searchText.length || (searchText.length && index === 0)) {
      availableItems.push({
        key: option.key,
        node: option.text,
        metaData: { key: option.key },
        isSelected: activeAvailableKeys.indexOf(option.key) >= 0,
      });
    }
  });

  return (
    <>
      <DisclosureManagerHeaderAdapter title="Multi Filter" />
      <ContentContainer
        fill
        footer={(
          <ActionFooter
            end={(
              <Button onClick={onSubmit} text="Submit" variant={Button.Opts.Variants.EMPHASIS} />
            )}
          />
        )}
      >
        <DualListbox
          columnOneData={{
            // isLoading: true,
            id: 'box-1',
            title: 'Available',
            onSearch,
            onSelectAll,
            onSelectItem: onClickAvailable,
            selectAllTitle: '>>',
            items: availableItems,
          }}
          columnTwoData={{
            id: 'box-2',
            title: 'Selected',
            onSelectAll: onRemoveAll,
            onSelectItem: onClickSelected,
            selectAllTitle: '<<',
            items: selectedItems,
          }}
        />
      </ContentContainer>
    </>
  );
};

Inline.propTypes = propTypes;

export default withDisclosureManager(Inline);