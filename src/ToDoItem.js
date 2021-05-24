import React, { Component } from 'react'

class Listitem extends Component {
    render() {
      return (
        <ul>
          {
            this.props.data.map(element => {
              return (
                <li className="listItem" key={element.name}>
                  <input type="checkbox"/>
                  <span>{element.name}</span>
                  <button className="delete">刪除</button>
                </li>
               )
          })
        }
      </ul>
     )
    }
   }
   export default Listitem