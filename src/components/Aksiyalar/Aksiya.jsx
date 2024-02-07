import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { AksiyaCard } from "..";
import "./Aksiya.css";
import axios from "axios";

function Aksiya() {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectKey, setSelectKey] = useState({ name: "" });
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:1010/aksiyalar")
      .then((res) => {
        setData(res.data);
        setNewData(res.data[0].models);
      })
      .catch((err) => console.log(err));
    setLoading(false);
  }, []);

  // const slct = (e) => {
  //   const selectKey = e.target.value;
  //   setNewData(data[selectKey].models);
  // };
  useEffect(() => {
    if (selectKey.name) {
      const selcFilm = data.find((item) => item.type === selectKey.name).models;
      setNewData(selcFilm);
    }
  }, [selectKey.name, data]);
  return (
    <div>
      <div className="aksiya"></div>
      <Container className="content">
        <select
          onChange={(e) => {
            setSelectKey({ ...selectKey, name: e.target.value });
          }}
        >
          {data?.map((item, index) => (
            <option key={index} value={item.type}>
              {item.type[0].toUpperCase() + item.type.slice(1)}
            </option>
          ))}
        </select>
        <p className="text-white fs-1">{loading && "loading..."}</p>
        <Row className="kinoteatr">
          {newData?.map((item) => (
            <Col key={item.id} xs="12" sm="6" md="4" lg="3">
              <AksiyaCard {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Aksiya;
