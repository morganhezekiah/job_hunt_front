import { Collapse } from 'antd';

import { CaretRightOutlined } from '@ant-design/icons'
const { Panel } = Collapse;

function callback(key) {
    console.log(key);
  }

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Accordion = () => {
    
    return (
            <Collapse defaultActiveKey={['1']} onChange={callback} className="mx-2 mt-4 rounded-md" expandIcon={({ isActive }) => <></>}>
                <Panel header="Google Advertisement" key="1" className="ml-10 bg-red-200">
                    <Collapse defaultActiveKey={['1']} expandIcon={({ isActive }) => <></>}>
                        <Panel header="This is panel nest panel" key="1">
                        <p>{text}</p>
                        </Panel>
                        <Panel header="This is panel nest panel" key="2">
                        <p>{text}</p>
                        </Panel>
                        <Panel header="This is panel nest panel" key="3">
                        <p>{text}</p>
                        </Panel>
                        <Panel header="This is panel nest panel" key="4">
                        <p>{text}</p>
                        </Panel>
                    </Collapse>
                </Panel>
                
                
            </Collapse>
    )
}

export default Accordion