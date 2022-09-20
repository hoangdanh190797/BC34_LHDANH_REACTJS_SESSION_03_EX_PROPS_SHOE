import React, { Component } from "react";

export default class ListItem extends Component {
  render() {
    let { dataShoeProps, changeItemProps } = this.props;
    return (
      <div className="container card-columns">
        {dataShoeProps.map((item, index) => {
          return (
            <div key={index} className="card m-2" style={{ width: 370 }}>
              <img className="card-img-top" src={item.image} alt="Card image" />
              <div className="card-body">
                <h4 className="card-title">{item.name}</h4>
                <p className="card-text">{item.shortDescription}</p>
                <button
                  onClick={() => changeItemProps(item)}
                  type="button"
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  Detail
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
