import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "reactstrap";
import { KinoteatrCard } from "..";
import "./KinoteatrCard.css";

function Kinoteatrlar() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:1010/kinoteatr")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="kinoteatrlar"></div>
      <Container>
        <Row className="row">
          <h1 className="ag">Kinoteatrlar</h1>
          <p className="text-white fs-1">{loading && "loading..."}</p>
          {data.map((item) => (
            <Col key={item.id} xs="12" sm="6" md="4">
              <KinoteatrCard {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Kinoteatrlar;
