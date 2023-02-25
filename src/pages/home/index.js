import { Navbar, PostFeeds } from "../../containers";
import React, { useState } from "react";
const HomePage = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  //  Functions to handle Tab Switching
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };

  return (
    <>
      <Navbar />
      <div className="Tabs">
        <ul className="nav">
          <li className={activeTab === "tab1" ? "active" : ""} onClick={handleTab1}>Posts</li>
          <li className={activeTab === "tab2" ? "active" : ""} onClick={handleTab2}>Tagged</li>
        </ul>
      </div>
      {activeTab === "tab1" ? <PostFeeds activeTab={activeTab} /> : <PostFeeds activeTab={activeTab} />}
    </>
  );
};

export default HomePage;
