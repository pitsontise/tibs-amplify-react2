import styled from "styled-components";
import colors from "../utils/colors";

export const StyledTabs = styled.div`
  display: flex;
  width: 100%;
  align-items: stretch;
  padding-left: 10px;
`;

export const Tab = styled.div`
  width: 9%;
  height: 20px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: space-around;
  align-items: center;

  background-color: white;
  padding: 8px 5px 10px 5px;
  cursor: pointer;
  transition: 0.3s;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top: 1px solid ${colors.GREY1};
  border-left: 1px solid ${colors.GREY1};
  border-right: 1px solid ${colors.GREY1};
  border-bottom: 3px solid
    ${({ active }) => (active ? colors.PRIMARY : "transparent")};
  font-weight: ${({ active }) => (active ? "550" : "400")};
  margin-right: 0px;
  font-size: 11pt;
`;

export const Content = styled.div`
  ${(props) => (props.active ? "" : "display:none")}
`;
