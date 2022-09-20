import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    let { stateShoeProps } = this.props;
    return (
      <div>
        {/* Button to Open the Modal */}
        {/* The Modal */}
        <div className="modal" id="myModal">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">Detail</h4>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              {/* Modal body */}
              <div className="modal-body">
                <div className="row">
                  <div className="col-5">
                    <h4>{stateShoeProps.name}</h4>
                    <img
                      src={stateShoeProps.image}
                      style={{ height: "200px" }}
                    />
                  </div>
                  <div className="col-7">
                    <h2>Details</h2>
                    <table>
                      <tbody>
                        <tr>
                          <td>Name: </td>
                          <td>{stateShoeProps.name}</td>
                        </tr>
                        <tr>
                          <td>Price:</td>
                          <td>{stateShoeProps.price}</td>
                        </tr>
                        <tr>
                          <td>Description:</td>
                          <td>{stateShoeProps.description}</td>
                        </tr>
                        <tr>
                          <td>Quantity:</td>
                          <td>{stateShoeProps.quantity}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* Modal footer */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
