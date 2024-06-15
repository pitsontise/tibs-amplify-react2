import styled from "styled-components";
import colors from "../utils/colors";

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 25px;
  width: 96%;
`;

export const TableTitle = styled.h5`
  position: relative;
  margin-bottom: 10px;
  left: 2px;
`;

export const StyledTable = styled.table`
  border-top: 1px ${colors.GREY1} solid;
  border-left: 1px ${colors.GREY1} solid;
  border-bottom: 1px ${colors.GREY1} solid;
  border-spacing: 0px;
`;

export const TableBody = styled.tbody``;

export const TableHeader = styled.td`
  font-size: 10pt;
  border-right: 1px ${colors.GREY1} solid;
  padding-left: 5px;
  background-color: ${colors.GREY2};
  font-weight: 450;
`;

export const Row = styled.tr`
  border-bottom: 1px ${colors.GREY1} solid;
  border-left: 1px ${colors.GREY1} solid;
  border-right: 1px ${colors.GREY1} solid;
`;

export const Col = styled.td`
  border-top: 1px ${colors.GREY1} solid;
  border-right: 1px ${colors.GREY1} solid;
  font-size: 10pt;
  padding-left: 5px;
`;

export const Footer = styled.tr`
  display: flex;
  justify-content: end;
  border-bottom: 1px ${colors.GREY1} solid;
  border-left: 1px ${colors.GREY1} solid;
  border-right: 1px ${colors.GREY1} solid;
  padding-right: 12px;
  font-size: 9pt;
  width: 95vw;
  position: relative;
  left: 0px;
  background-color: ${colors.GREY2};
  font-weight: 250;
`;

export const TableIcons = styled.div``;
