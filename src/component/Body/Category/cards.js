import React, { useEffect, useState } from 'react'
import Card from "./card";


import "./style.css";
function Cards({ title }) {
  const [list, setLists] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const slug = title.toLowerCase().replace(/\s+/g, '-');
        const response = await fetch(`https://api-staging-v2.sploot.space/api/v2/public/cms/post-categories/${slug}`, {
          method: 'GET',
        });
        const data = await response.json();
        setLists(data.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  },[title]);
  return (
    <div className="cards-flex">
      {title && list.map((data, i) => (
        <Card card={data} key={i} />
      ))}
    </div>
  );
}

export default Cards;