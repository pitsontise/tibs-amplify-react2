import {
  TableContainer,
  TableTitle,
  StyledTable,
  TableBody,
  TableHeader,
  Row,
  Col,
  Footer,
} from "./table.style";
import { useMemo } from "react";

const Table = (props) => {
  const { title, headers, data } = props;

  const pagination = useMemo(
    () => `1 - ${data.length} of ${data.length}`,
    [data.length]
  );

  return (
    <TableContainer>
      <TableTitle>{title}</TableTitle>
      <StyledTable>
        <TableBody>
          <Row>
            {headers?.map((header) => (
              <TableHeader key={header.title}>{header.title}</TableHeader>
            ))}
          </Row>
          {data?.map((rowData) => {
            return (
              <Row key={rowData.id}>
                {headers?.map((header) => {
                  return (
                    <Col key={rowData[header.accessor]}>
                      {rowData[header.accessor]}
                    </Col>
                  );
                })}
              </Row>
            );
          })}
        </TableBody>
      </StyledTable>
      <Footer>{pagination}</Footer>
    </TableContainer>
  );
};

export default Table;
