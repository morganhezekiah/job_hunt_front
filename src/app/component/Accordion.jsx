import { Collapse } from 'antd';
import '../css/Accordion.css'
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

const header = `Google Advertisement`

const Accordion = () => {
    
    return (
            <Collapse defaultActiveKey={['1']} onChange={callback} className="mx-2 sm:mx-8 mt-4 rounded-md md:mx-28 lg:mx-56 shadow-lg changeColor text-xl sm:text-2xl " bordered={false} expandIcon={({ isActive }) => <></>}>
                <Panel header="Google Advertisement" key="1" className="">
                    <Collapse defaultActiveKey={['1']} bordered={false}  className="rounded-md" expandIcon={({ isActive }) => <></>}>
                        <Panel header="Google Ads" key="1">
                        <p className="md:mr-12 lg:mr-24 xl:mr-44">{text}</p>
                        </Panel>
                        <Panel header="Google buisness profile" key="2">
                        <p className="md:mr-12 lg:mr-24 xl:mr-44">{text}</p>
                        </Panel>
                        <Panel header="Google my buisness" key="3">
                        <p className="md:mr-12 lg:mr-24 xl:mr-44">{text}</p>
                        </Panel>
                    </Collapse>
                </Panel>
                
                
            </Collapse>
    )
}

export default Accordion