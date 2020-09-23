import React, { Component } from 'react';
import '../appstyle.css'

class Input extends Component {
      componentDidUpdate() {
        console.log('Update Input')
      }
    render() {
        return (
            <input className="search"
                        type="text"
                        placeholder="Search ..."
                    />
        );
    }
}

export default Input;