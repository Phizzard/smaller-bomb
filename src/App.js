import React, { Fragment, PureComponent } from 'react';
import _ from 'lodash';
import SearchInput from './Components/SearchInput';
import Video from './Components/Video';
import VideoList from './Components/VideoList';
import axios from 'axios';
import { PacmanLoader } from 'react-spinners';
import './App.css';

class App extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null,
            isLoading: true
        };
        
    }
    componentDidMount(){
        this.searchVideos("");
    }
    searchVideos(searchTerm){
        this.setState({
            isLoading: true
        }, () => {
            axios.get(`${process.env.REACT_APP_API_URL}/search/videos`, {
                params: {
                    perPage: 16,
                    searchTerm
                }
            }).then((videosResponse)=>{
                this.setState({
                    videos: videosResponse.data.results,
                    selectedVideo: this.state.selectedVideo ? this.state.selectedVideo : videosResponse.data.results[0].embed_player,
                    isLoading: false
                });
            }).catch(err => console.error(err));
        });
    }
    render() {
        return (
            <div className="App">
                <SearchInput onSearchTermChange={ _.debounce(searchTerm => this.searchVideos(searchTerm), 300) } />
                {this.state.selectedVideo && (
                    <Video title={this.state.selectedVideo} src={this.state.selectedVideo} />
                )}
                {this.state.isLoading ? (
                    <div className="Loader">
                        <PacmanLoader
                            loading={true}
                            size={40}
                            sizeUnit={"px"}
                            color={'#fff'}
                        />
                    </div>
                ) : (
                    this.state.videos.length > 0 ? (
                        <Fragment>
                            <VideoList videos={this.state.videos} selectedVideo={this.state.selectedVideo} onVideoClick={selectedVideo => this.setState({selectedVideo}) }/>
                        </Fragment>
                    ) : (
                        <h2 className="Message">No Videos Duder...</h2>
                    )
                )}
            </div>
        );
    }
}

export default App;
