import React from 'react';
import axios from 'axios';

const Home = () => {

  const [list, setMessageList] = React.useState([]);

  const [filteredList, setFilteredList] = React.useState('');

  const handleFilter = (e) => {
    setFilteredList(e.target.value);
  };


  const fetchListing = () => {
    axios.get('/view-Listings')
      .then((res) => {
        setMessageList(res.data);
      });
  };

  React.useEffect(() => {
    fetchListing();
  }, []);


  function handleDelete(e, q){
    const r = e;
    axios.delete('/delete-Listing?description=' + r + '&email=' + q)
      .then(fetchListing());
  };

  const filterListings = () => {
    const body = {
			email: filteredList
			//description : input_description,
		};
    console.log(body);
    console.log(filteredList);

    axios.get('/view-Listing', body)
    .then((res) => {
      setMessageList(res.data);
    });
    setFilteredList('');
  };

  return (
    <div>
      <h1>Home</h1>
    <div>
        <input value={filteredList} onChange={handleFilter} />
        <button onClick={filterListings} id="filter">Filter Listings</button>
         {list.map((object, i) => <div key={i}>
          <a href={object.email}>{object.email}</a>
          <div>{object.description}</div>
          <a href="/">
            <button onClick={() => handleDelete(object.description, object.email)} id='delete'>Delete</button>
          </a>   
        </div>)}

    </div>
  </div>
  );
};

export default Home;
