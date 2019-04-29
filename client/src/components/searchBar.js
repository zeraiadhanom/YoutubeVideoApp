import React, {Component} from 'react';

class SearchBar extends Component {
    state = {
      term: ''
    };
    handleChange = (event) => {
      this.setState({
        term: event.target.value
      });
    }

    handleSubmit = event => {
      event.preventDefault();
      this.props.handleFormSubmit(this.state.term);
    }
    render() {
        return (
            <div className="search-bar">
            <form onSubmit={this.handleSubmit} className="form">
              <div className="field">
               <lablel htmlFor="search-video">Search video</lablel>
               <input onChange={this.handleChange} name="video-search" type="text" value={this.state.term} />

              </div>
            </form>

            </div>
        );
    }
}

export default SearchBar;