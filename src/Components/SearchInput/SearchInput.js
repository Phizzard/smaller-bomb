import React, {PureComponent} from 'react';
import {func} from 'prop-types';
import './SearchInput.css';

class SearchInput extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            searchTerm: ""
        };
    }
    render(){
        return(
            <div className="SearchInput">
                <input placeholder="Search Giant Bomb Videos" type="text" value={this.state.searchTerm} onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(searchTerm){
        this.setState({
            searchTerm
        });
        this.props.onSearchTermChange(searchTerm);
    }
}
SearchInput.propTypes = {
    onSearchTermChange: func
};

export default SearchInput;