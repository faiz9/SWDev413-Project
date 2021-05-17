import React from 'react';
import axios from 'axios';

const Home = ({ ws }) => {

const [list, setMessageList] = React.useState([]);


  const fetchListing = () => {
    axios.get('view-Listings')
      .then((res) => {
        setMessageList(res.data);
      });
  };

  React.useEffect(() => {
    fetchListing();
  }, []);


  function handleDelete(e, q){
    
    const r = e;
    console.log(r);
    console.log(q);
    axios.delete('/delete-Listing?description=' + r + '&email=' + q)
      .then(fetchListing());
  };

  return (
    <div>
      <h1>Home</h1>
    <div>
         {list.map((object, i) => <div key={i}>
          <a href={object.email}>{object.email}</a>
          <div>{object.description}</div>
          <button onClick={() => handleDelete(object.description, object.email)} id='delete'>Delete</button>
          
        </div>)}
    </div>
  </div>
  );
};

export default Home;
