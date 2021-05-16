import React from 'react';
import axios from 'axios';

const Home = ({ ws }) => {
const [list, setMessageList] = React.useState([]);


  const fetchListing = () => {
    axios.get('view-Listings')
      .then((res) => {
        setMessageList(res.data);
      })
  }
  React.useEffect(() => {
    fetchListing();
  }, []);

  function handleDelete(e){
    
    const r = e;
    console.log(r);
    const body = {
      description : r,
    };
    console.log("body: " + body.description);
    
    axios.delete('/delete-Listing?description=' + r)
      .then(fetchListing());
  };

  return (
    <div>
         {list.map((object, i) => <div key={i}>
          <div>{object.email}</div>
          <div>{object.description}</div>
          <button onClick={() => handleDelete(object.description)} id='delete'>Delete</button>
        </div>)}
    </div>
  );
};

export default Home;
