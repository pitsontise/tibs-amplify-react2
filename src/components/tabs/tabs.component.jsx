import React, { memo, useEffect, useState } from "react";
import { TabContainer, Tab } from "./tabs.style";

const Tabs = ({ children, onTabSelected }) => {
  const [itemId, setItemId] = useState(0);

  useEffect(() => {
    onTabSelected && onTabSelected(itemId);
  }, [itemId, onTabSelected]);

  return (
    <TabContainer>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          onClick: () => {
            setItemId(index);
          },
          selected: itemId === index,
        });
      })}
    </TabContainer>
  );
};

export const TabItem = memo(({ children, content, ...restProps }) => (
  <Tab {...restProps}>{children}</Tab>
));

export default Tabs;
