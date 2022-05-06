import React from "react";
import UserInfo from "./userInfo.jsx";
import Time from "./time.jsx";
import TabContent from "./tabContent.jsx";

const TimeTracker = ()=>{
    return(
        <div className="timeTracker">
            <div className="timeList">
                <UserInfo />
                <Time />
            </div>

            <div className="tracker tabContainer">
                <TabContent tab="daily" className="tabContent active"/>
                <TabContent tab= "weekly" className="tabContent"/>
                <TabContent tab="monthly" className="tabContent"/>
            </div>
        </div>
    );
}

export default TimeTracker;