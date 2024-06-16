import React, { useEffect, useCallback, useMemo, useState } from "react";
import { StyledTabs, Tab, Content } from "./tabs.style";

const Tabs = ({ data }) => {
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
          active={active === tab.id}
          id={tab.id}
        >
          {tab.title}
        </Tab>
      ));
    }
    return <>No tabs to display.</>;
  }, [active, tabs, handleClick]);

  const getTabsContent = useMemo(() => {
    if (tabs?.length) {
      return tabs.map((tab) => (
        <Content key={`content-${tab.id}`} active={active === tab.id}>
          {tab.component}
        </Content>
      ));
    }
    return <>No data to display.</>;
  }, [active, tabs]);

  return (
    <>
      <StyledTabs>{getTabs}</StyledTabs>
      {getTabsContent}
    </>
  );
};

export default Tabs;
