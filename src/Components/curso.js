import React, { Component } from "react";
import { Redirect } from "react-router";

export default class Curso extends Component {
  state = {
    color: "red",
    estado: false
  };

  changeColor = (e) => {
    e.preventDefault();

    if (!this.state.estado) {
      this.setState({
        color: "yellow",
        estado: true
      });
    } else {
      this.setState({
        color: "red",
        estado: false
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Bienvenidos</h1>
        <div className="row">
          <div className="col l12">
            <div className="card">
              <div className="card-content">
                <table className="striped">
                  <tr>
                    <th> Hola </th>
                    <th> Mañana </th>
                    <th> Pasado Mañana </th>
                    <th
                      style={{
                        background: `${this.state.color}`,
                      }}
                      onClick={this.changeColor}
                    >
                      {this.state.color}
                    </th>
                  </tr>
                  <tr>
                    <div style={{background: `${this.state.color}`}}>
                      <td>QUe paso</td>
                    </div>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
