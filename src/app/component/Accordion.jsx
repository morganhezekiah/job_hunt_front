import { Collapse } from "antd";
import "../css/Accordion.css";
import { CaretRightOutlined } from "@ant-design/icons";
import { DEFAULT_COLOR } from "../misc/__colors__";
const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const Accordion = ({ topics }) => {
  return topics.map((topic) => (
    <Collapse
      key={topic.id}
      defaultActiveKey={["1"]}
      style={{ minWidth:"35rem", overflowX:"scroll" }}
      onChange={callback}
      className="mx-2 sm:mx-8 mt-4 rounded-md sm:mx-12 shadow-lg changeColor text-xl sm:text-2xl xl:mx-48 "
      bordered={false}
      expandIcon={({ isActive }) => (
        <>
          <i class="fas fa-copy mr-4 text-3xl" style={{ color: DEFAULT_COLOR }}></i>
        </>
      )}
    >
      <Panel header={topic.title} key="1" className="">
        <Collapse
          defaultActiveKey={["1"]}
          bordered={false}
          className="rounded-md shadow-lg"
          style={{ maxHeight:"20rem", overflowY:"scroll" }}
          expandIcon={({ isActive }) => (
            <>
              <i
                class="fas fa-file-invoice mr-4 text-xl"
                style={{ color: DEFAULT_COLOR }}
              ></i>
            </>
          )}
        >
          {topic.assignment.length > 0 ? (
            topic.assignment.map((t) => (
              <Panel header={t.title} key={ t.id } >
                <p>Assignment</p>
                {t.description ? (
                  <p className="md:mr-12 lg:mr-24 xl:mr-44">{ t.description }</p>
                ) : (
                  <p
                    style={{ textAlign: "center" }}
                    className="text-sm text-gray-300"
                  >
                    ----No Description--
                  </p>
                )}
              </Panel>
            ))
          ) : (
            <div
              style={{ textAlign: "center" }}
              className="text-sm text-gray-300"
            >
              No Assignments Yet..
            </div>
          )}
        </Collapse>
      </Panel>
    </Collapse>
  ));
};

export default Accordion;
