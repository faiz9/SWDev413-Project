import React, { Component } from "react";



class postListingComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailVerify: false,
    };
  }

  emailSubmit = () => {
    this.setState({ emailVerify: true });
  };

  redirectToViewPage = () => {
    this.props.history.push('/view-listing');
  }

  render() {
    return (
      <div className="container-fluid">
        {this.state.emailVerify === false ? (
          <div className="row justify-content-md-center">
            <div className="col-5">
              <div className="card text-center mt-5">
                <div className="card-header">
                  Before Access Post listing You Have to enter your email
                </div>
                <div className="card-body">
                  <h5 className="card-title">Email Address</h5>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                    <small id="emailHelp" class="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary mt-4"
                    onClick={this.emailSubmit}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="container mt-4">
            <h1>Post Listing Page</h1>
            <div className="card mt-4">
              <div className="card-header">Add Item</div>
              <div className="card-body">
                <div className="row m-4 justify-content-md-center">
                  <div className="col">
                    <div class="form-group mb-2">
                      <label for="staticEmail2" class="sr-only">
                        Description
                      </label>
                      <textarea
                        type="text"
                        className="form-control form-control-sm"
                        id="description"
                        placeholder="enter description"
                        rows="2"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div class="form-group mb-2">
                      <label for="staticEmail2" class="sr-only">
                        Type
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        id="type"
                        placeholder="enter type"
                        rows="2"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div class="form-group mb-2">
                      <label for="staticEmail2" class="sr-only">
                        Quantity
                      </label>
                      <input
                        type="number"
                        className="form-control form-control-sm"
                        id="quantity"
                        placeholder="enter Qty"
                        rows="2"
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div class="form-group mb-2">
                      <label for="staticEmail2" class="sr-only">
                        Price
                      </label>
                      <input
                        type="number"
                        className="form-control form-control-sm"
                        id="price"
                        placeholder="enter price"
                        rows="2"
                      />
                    </div>
                  </div>
                  <div className="col mt-3">
                    <button className="btn btn-success btn-sm">Submit</button>
                    <button className="btn btn-danger btn-sm m-1" type="reset">reset</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-md-center mt-3">
              <div className="col-2">
                <button
                  className="btn btn-info"
                  onClick={this.redirectToViewPage}
                >
                  Go to view Listing Page
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default postListingComponent;
