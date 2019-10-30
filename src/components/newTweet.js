import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleAddTweet} from '../actions/tweets';
import {Redirect} from 'react-router-dom';


class NewTweet extends Component{
    state = {
        text: '',
        toHome: false,
    }

    handleChange = (e) => {
        const text = e.target.value;

        this.setState(() => ({
            text: text,
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {text} = this.state;
        console.log('New tweet:', text)
        const {dispatch, id} = this.props;
        // add tweet to the store
        dispatch(handleAddTweet(text, id))

        console.log('New tweet:', text)
        this.setState(() => ({
            text: '',
            toHome: id? false:true,
        }));
    }

    render(){
        const {text, toHome} = this.state;
        const tweetLeft = 280 - text.length;

        if(toHome){
           return <Redirect to='/'/>
        }

        return(
            <div>
                <h3 className='center'>Compose new Tweet</h3>
                <form className='new-tweet' onSubmit={this.handleSubmit}>
                    <textarea
                    placeholder="What's happenning?"
                    value={text}
                    onChange={this.handleChange}
                    className='textarea'
                    maxLength={280}/>
                    {tweetLeft <= 100 && (
                        <div className='tweet-length'>
                            {tweetLeft}
                        </div>
                    )}
                    <button
                    className='btn'
                    type='submit'
                    disabled={text === ''}
                    >Submit</button>
                </form>
            </div>
        )
    }
}

export default connect()(NewTweet);