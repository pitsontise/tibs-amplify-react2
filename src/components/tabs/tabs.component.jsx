import React, { useCallback, useEffect, useMemo, useState } from "react";
import { TabContainer, Tab, Content } from "./tabs.style";

const Tabs = (props) => {
  const { data } = props;
  const [active, setActive] = useState(0);
  const [tabs, setTabs] = useState([]);

  const updateTabsData = useCallback((values) => {
    setTabs(values);
  }, []);

  useEffect(() => {
    if (data?.length) {
      updateTabsData(data);
    }
  }, [data, updateTabsData]);

  const handleClick = useCallback(
    (e) => {
      const index = parseInt(e.target.id, 0);
      if (index !== active) {
        setActive(index);
      }
    },
    [active]
  );

  const getTabs = useMemo(() => {
    if (tabs?.length) {
      return tabs?.map((tab) => (
        <Tab
          key={`tab-${tab.id}`}
          onClick={handleClick}
          selected={active === tab.id}
          id={tab.id}
        >
          Tab: {tab.title}
        </Tab>
      ));
    }
    return <>No data to display.</>;
  }, [active, tabs, handleClick]);

  console.log(getTabs);

  const getTabContent = useMemo(() => {
    if (tabs?.length) {
      const tabData = tabs.find((tab) => active === tab.id);

      return tabData.component;
    }
    return <>No data to display.</>;
  }, [active, tabs]);

  return (
    <>
      {tabs?.length && <Tabs>{getTabs}</Tabs>}
      {tabs?.length && <Content>{getTabContent}</Content>}
      {!tabs && <>No data to display.</>}
    </>
  );
};

export default Tabs;
