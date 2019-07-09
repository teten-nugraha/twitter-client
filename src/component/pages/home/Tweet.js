import React from 'react';
import Avatar from 'react-avatar';

import TimeAgo from 'react-timeago'
import enStrings from 'react-timeago/lib/language-strings/en'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

function Tweet(props) {

    const formatter = buildFormatter(enStrings)

    return (

        <div className="card gedf-card " style={{ marginBottom:"20px" }}>
            <div className="card-header">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="mr-2">
                        <Avatar color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])} name={props.tweetMaker} size="40" />
                        </div>
                        <div className="ml-2">
                            <div className="h5 m-0">@ {props.tweetMaker}</div>
                            <div className="h7 text-muted">Miracles Lee Cross</div>
                        </div>
                    </div>
                    <div>
                        <div className="dropdown">
                            <button className="btn btn-link dropdown-toggle" type="button" id="gedf-drop1"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-ellipsis-h"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                                <div className="h6 dropdown-header">Configuration</div>
                                <a className="dropdown-item" href="#">Save</a>
                                <a className="dropdown-item" href="#">Hide</a>
                                <a className="dropdown-item" href="#">Report</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="card-body">
                <div className="text-muted h7 mb-2"> <i className="fa fa-clock-o"></i>
                    <TimeAgo date={props.created} formatter={formatter} />
                </div>

                <p className="card-text">
                    {props.tweet}
                </p>
            </div>
            <div className="card-footer">
                <a href="#" className="card-link"><i className="fa fa-gittip"></i> Like</a>
                <a href="#" className="card-link"><i className="fa fa-comment"></i> Comment</a>
                <a href="#" className="card-link"><i className="fa fa-mail-forward"></i> Share</a>
            </div>
        </div>

    );
}

export default Tweet;