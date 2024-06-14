import { Row, Col } from "react-grid-system";
import { TableContainer } from "./table.style";
import { H3 } from "../utils/typography";

const Table = (props) => {
  const { title, headers } = props;

  return (
    <>
      <H3>{title}</H3>
      <TableContainer>
        <Row>
          {headers?.map((header) => (
            <Col style={{ border: "1px gray solid" }}>{header.title}</Col>
          ))}
        </Row>
        <Row>
          <Col></Col>
        </Row>
      </TableContainer>
    </>
  );
};

export default Table;
