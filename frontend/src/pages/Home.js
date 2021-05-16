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

  const handleDelete = (e) =>{
    console.log("E: " + e);
    const body = list[e];
    console.log(body);
    axios.delete('/delete-Listing', body)
      .then(fetchListing());
  };

  return (
    <div>
            {list.map((object, i) => <div key={i}>
          <div>{object.email}</div>
          <div>{object.description}</div>
          <button onClick={handleDelete({i})} id='delete'>Delete</button>
        </div>)}
    </div>
  );
};

export default Home;

