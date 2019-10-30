import React, {Component} from 'react';
import {connect} from 'react-redux';
import Tweet from './Tweet';

class Dashboard extends Component{

    render(){
        return(
            <div>
                <h3 className='center'>Your time line</h3>
                <ul className='dashboard-list'>
                    {this.props.tweetsId.map((tweet) => {
                        return(
                            <li>
                                <Tweet id={tweet}/>
                            </li>
                        )
                    })}
                </ul>
            </div>

        )
    }
}

function mapStateToProps ({tweets}){
    return {tweetsId : Object.keys(tweets)
        .sort((a,b) => tweets[b].timestamp - tweets[a].timestamp)
    }
}

export default connect(mapStateToProps)(Dashboard);