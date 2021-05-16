import React from 'react';
import axios from 'axios';

const Home = ({ ws }) => {
const [list, setMessageList] = React.useState([]);

  const fetchListing = () => {
    axios.get('view-Listings')
      .then((res) => {
        console.log(`items: ` + res.data);
        setMessageList(res.data);
      })
  }
  React.useEffect(() => {
    fetchListing();
  }, []);


  return (
    <div>
            {list.map((object, i) => <div key={i}>
          <div>{object.email}</div>
          <div>{object.description}</div>
        </div>)}
    </div>
  );
};

export default Home;

