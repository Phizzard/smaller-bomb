import React, { Fragment, PureComponent } from 'react';
import _ from 'lodash';
import SearchInput from './Components/SearchInput';
import Video from './Components/Video';
import VideoList from './Components/VideoList';
import axios from 'axios';
import './App.css';

class App extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        
    }
    componentDidMount(){
        this.searchVideos("");
    }
    searchVideos(searchTerm){
        axios.get('https://smaller-bomb.herokuapp.com/videos', {
            params: {
                perPage: 12,
                searchTerm
            }
        }).then((videosResponse)=>{
            console.log(videosResponse.data);
            this.setState({
                videos: videosResponse.data.results,
                selectedVideo: this.state.selectedVideo ? this.state.selectedVideo : videosResponse.data.results[0].embed_player
            });
        }).catch(err => console.error(err));
    }
    render() {
        return (
            <div className="App">
                <SearchInput onSearchTermChange={ _.debounce(searchTerm => this.searchVideos(searchTerm), 300) } />
                {this.state.selectedVideo && (
                    <Video title={this.state.selectedVideo} src={this.state.selectedVideo} />
                )}
                {this.state.videos.length > 0 ? (
                    <Fragment>
                        <VideoList videos={this.state.videos} onVideoClick={selectedVideo => this.setState({selectedVideo}) }/>
                    </Fragment>
                ) : (
                    <h2>Loading...</h2>
                )}
            </div>
        );
    }
}

export default App;
