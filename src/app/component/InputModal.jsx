import React, { useState } from 'react';
import { Modal} from 'antd';
import DropDown from '../component/DropDown'

const InputModal = ({createAble}) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <span  onClick={() => setVisible(true)}>
        {createAble}
      </span>
      <Modal
        title={`Create ${createAble}`}
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}
      >
        <div>
            <textarea className="w-full outline-none border-2 border-blue-400 mb-5"/>
            <DropDown/>
        </div>
      </Modal>
    </>
  );
};

export default InputModal