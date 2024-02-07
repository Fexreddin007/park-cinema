import React, { useEffect, useState } from "react";
import "./HomeSelect.css";
import axios from "axios";

function HomeSelect() {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [date, setDate] = useState([]);
  const [seans, setSeans] = useState([]);
  const [option, setOption] = useState({
    name: "",
    place: "",
    date: "",
    seans: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:1010/filmler")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (option.name) {
      const selcFilm = data.find((item) => item.name === option.name);
      if (selcFilm) {
        const getSelec = selcFilm.theatre.map((item) => item.place);
        setNewData(getSelec);
      }
    }
  }, [option.name, data]);

  useEffect(() => {
    if (option.name && option.place) {
      const selcFilm = data.find((item) => item.name === option.name);
      if (selcFilm) {
        const getSelec = selcFilm.theatre.find(
          (item) => item.place === option.place
        ).dates;
        setDate(getSelec);
      }
    }
  }, [option.name, option.place, data]);0
  

  useEffect(() => {
    if (option.date) {
      const getDate = date.find((item) => item.date === option.date).seans;
      setSeans(getDate);
    }
  }, [option.date, date]);

  return (
    <div className="HomeSelect">
      <div className="select">
        <select
          onChange={(e) => setOption({ ...option, name: e.target.value })}
        >
          <option>Film</option>
          {data?.map((item) => (
            <option value={item.name} key={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        <select
          onChange={(e) => setOption({ ...option, place: e.target.value })}
        >
          <option>Kinoteatr</option>
          {newData?.map((item, index) => (
            <option value={item} key={index + 1}>
              {item}
            </option>
          ))}
        </select>
        <select
          onChange={(e) => setOption({ ...option, date: e.target.value })}
        >
          <option>Tarix</option>
          {date?.map((item, index) => (
            <option value={item.date} key={index + 1}>
              {item.date}
            </option>
          ))}
        </select>
        <select
          onChange={(e) => setOption({ ...option, seans: e.target.value })}
        >
          <option>Seans</option>
          {seans?.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
        <button>BİLET AL</button>
      </div>
    </div>
  );
}

export default HomeSelect;
