import React, { useEffect, useState } from 'react'
import Cards from './Body/Category/cards'
import Categories from './Body/categories'
import Header from './Header/navbar'
import { useNavigate } from "react-router-dom";
import Error from './Body/Error';

const Container = () => {
  const [selectedFilter, setSelectedFilter] = useState(0);
  const [result, setResult] = useState([]);
  const [title, setTitle] = useState("Weekend Reads");
  const [token, setToken] = useState('');
  let navigate = useNavigate();

  useEffect(() => {
    // Retrieve the token from localStorage
    const storedToken = localStorage.getItem('token');
  
    if (storedToken) {
      setToken(storedToken);
    }
  },[]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api-staging-v2.sploot.space/api/v2/cms/post-categories', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();
        setResult(data.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  },[token]);
  useEffect(() => {
    setTitle(result[selectedFilter]?.name || "Weekend Reads");
  }, [selectedFilter]);
  

  return (
    <div> 
      {
        token ?
        <>
          <Header auth={token}/>
          <Categories
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
            result={result}
          />
          <Cards title={title} />
        </> :
        <>
          <Error/>
        </>
      }
    </div>
  )
}

export default Container
