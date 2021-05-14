import React, { Component } from "react";

class viewListingComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemList: [
        {
          description: "Apple 7+ with full set charger handfree included.",
          type: "Mobile phone",
          quantity: "1",
          price: "$450",
          email: "ABC@Gmail.com",
        },
        {
          description: "Apple Laptop 6GB ram 500GB hard disk.",
          type: "Laptop",
          quantity: "2",
          price: "$1000",
          email: "ABC@Gmail.com",
        },
        {
          description: "Protable 5G wifi router. brand new.",
          type: "Accessories",
          quantity: "10",
          price: "$250",
          email: "ABC@Gmail.com",
        },
        {
          description: "Samsung S8",
          type: "Mobile phone",
          quantity: "1",
          price: "$450",
          email: "ABC@Gmail.com",
        },
      ],
    };
  }

  redirectToPostPage = () => {
    this.props.history.push("/post-listing");
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="mt-2">
          <div className="row justify-content-md-center">
            <div className="col-6">
              <h1>
                View Listing Page
                <button type="button" class="btn btn-primary m-3">
                  Count <span class="badge badge-light">{this.state.itemList.length}</span>
                </button>
              </h1>
            </div>
            <div className="col-2"></div>
          </div>
          <div>
            {this.state.itemList.map((item) => (
              <div
                key={item.description}
                className="row justify-content-md-center"
              >
                <div className="col-8">
                  <div className="card mt-2">
                    <div className="card-header">{item.type}</div>
                    <div className="card-body">
                      <h5 className="card-title">{item.description}</h5>
                      <p className="card-text">
                        <p>
                          Price : {item.price} , Quantity : {item.quantity}
                        </p>
                        <p>Reply for inquire : {item.email}</p>
                      </p>
                      <button className="btn btn-danger">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="row justify-content-md-center mt-3">
              <div className="col-2">
                <button
                  className="btn btn-info"
                  onClick={this.redirectToPostPage}
                >
                  Go to Post Listing Page
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default viewListingComponent;
