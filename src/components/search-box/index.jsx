import { Component } from "react";
import './search-box.styles.css';

class SearchBox extends Component {
  render() {
    return (
      <div className="search-box">
        <input className={this.props.className} type='search' placeholder={this.props.placeholder} 
        onChange={this.props.onChangeHandler} />
      </div>
    );
  }
}

export default SearchBox;