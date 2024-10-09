import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  electricalPortfolio,
  mechanicalPortfolio,
  roboticsPortfolio,
  iotPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "electrical",
      title: "Electrical Design",
    },
    {
      id: "mechanical",
      title: "Mechanical Design",
    },
    {
      id: "robotics",
      title: "Robotics",
    },
    {
      id: "iot",
      title: "IoT",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "electrical":
        setData(electricalPortfolio);
        break;
      case "mechanical":
        setData(mechanicalPortfolio);
        break;
      case "robotics":
        setData(roboticsPortfolio);
        break;
      case "iot":
        setData(iotPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
      <div className="come"><h3>Let`s Create Something Cool Together ↓ ↓ ↓</h3></div>
    </div>
  );
}
