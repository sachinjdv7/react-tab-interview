import { useState } from "react";
import { tabsConfig } from "../config/tabConfig";

const Tabs = () => {
  const [data, setData] = useState({
    name: "sachin",
    age: 18,
    email: "sachin@gmail.com",
    interests: ["coding", "badminton"],
    theme: "dark",
  });
  const [activeTab, setActiveTab] = useState(0);

  const ActiveTab = tabsConfig[activeTab].component;

  const handlePrevClick = () => {
    setActiveTab(activeTab - 1);
  };

  const handleNextClick = () => {
    setActiveTab(activeTab + 1);
  };

  const handleSubmitClick = () => {
    console.log(data);
  };

  return (
    <>
      <div className="tabheading">
        {tabsConfig.map((tab, index) => (
          <div
            key={index}
            className="tabsubheading"
            onClick={() => setActiveTab(index)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <ActiveTab data={data} setData={setData} />
      </div>
      <div>
        {activeTab > 0 && <button onClick={handlePrevClick}>Prev</button>}
        {activeTab < tabsConfig.length - 1 && (
          <button onClick={handleNextClick}>Next</button>
        )}
        {activeTab === tabsConfig.length - 1 && (
          <button onClick={handleSubmitClick}>submit</button>
        )}
      </div>
    </>
  );
};

export default Tabs;
