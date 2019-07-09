import React, { Component } from 'react'
import axios from 'axios'
import {
    API_URL
}from '../../../util/Url'
import { Instagram } from 'react-content-loader'
import Tweet from './Tweet'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newTweet: "",
            tweets:[],
            loadTweet:false
        }
        this.handleNewTweet = this.handleNewTweet.bind(this);
        
        
    }

    componentDidMount() {
        this.loadTweets();
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleNewTweet =  event => {
        event.preventDefault();
        
        const data = {
            tweet : this.state.newTweet
        }
        // this.setState({
        //     isLoading: true,
        //     errors:false
        // })

        axios.post(API_URL + "/tweets", data, {
            headers: {
                'Authorization': 'Bearer '+localStorage.getItem('jwtToken'),
                'Content-type': 'application/json'
            }
        })
        .then(response => {
            
            this.setState({
                newTweet: " "
            })
            
            this.loadTweets();
           
            
        })
        .catch(function(error) {
    
            console.log(error)
        })

        

    }

    loadTweets() {

        this.setState({
            loadTweet: true
        })

        axios.get(API_URL + "/tweets/home", {
            headers: {
                'Authorization': 'Bearer '+localStorage.getItem('jwtToken'),
                'Content-type': 'application/json'
            }
        })
        .then(response => {
            
            this.setState({
                tweets: response.data.data,
                loadTweet: false
            })

        })
        .catch(function(error) {
    
            console.log(error)
        })

    }

    populateTweets = () => {

        let listTweet = null;
        if(this.state.loadTweet) {
            listTweet = <Instagram />
        }else{
            listTweet = this.state.tweets.map(tweet => {
                return <Tweet 
                    key={tweet.id}
                    tweet={tweet.tweet}
                    tweetMaker={tweet.user.fullname}
                    created={tweet.create_At}
                    />;
            });
        }

        return listTweet;
    }


    render() {


        return (
            <div className="row">

                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="h5">@LeeCross</div>
                            <div className="h7 text-muted">Fullname : Miracles Lee Cross</div>
                            <div className="h7">Developer of web applications, JavaScript, PHP, Java, Python, Ruby, Java,
                                Node.js,
                                etc.
                            </div>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="h6 text-muted">Followers</div>
                                <div className="h5">5.2342</div>
                            </li>
                            <li className="list-group-item">
                                <div className="h6 text-muted">Following</div>
                                <div className="h5">6758</div>
                            </li>
                            <li className="list-group-item">Vestibulum at eros</li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-9 gedf-main">

                    <div className="card gedf-card">
                        <div className="card-header">
                            <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="posts-tab" data-toggle="tab" href="#posts" role="tab"
                                        aria-controls="posts" aria-selected="true">  Make
                                        a publication</a>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.handleNewTweet}>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="posts" role="tabpanel"
                                    aria-labelledby="posts-tab">
                                    <div className="form-group">
                                        <label className="sr-only" for="message">post</label>
                                        <textarea 
                                            className="form-control" 
                                            id="newTweet" 
                                            rows="3"
                                            placeholder="What are you thinking?"
                                            value={this.state.username}
                                            onChange={this.handleChange}
                                            name="newTweet"
                                            ></textarea>
                                    </div>

                                </div>
                            </div>
                            <div className="btn-toolbar justify-content-between">
                                <div className="btn-group">
                                    <button 
                                        type="submit" 
                                        className="btn btn-primary btn-block mb-2"
                                    ><i className="fa fa-twitter"></i> Share New Tweet</button>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>

                    <br />

                    { this.populateTweets() }

                </div>

            </div>
        )
    }
}

export default Home;
