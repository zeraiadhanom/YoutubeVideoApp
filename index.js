/* this is a sample code how to get [fetch]data from server using Axios*/
import React, {Component} from 'react';
import axios from 'axios'

class Home extends Component {
    state = {
        posts: []
    }
    componentDidMount(){
        axios.get('url')
         .then(res => {
             console.log(res)
             this.setState({
                 posts: res.data.slice(0,10)
             })
         })
    }
    render() {
        const {posts} = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <div className="post card" key={post.key}>
                      <div className='card-content'></div>
                       <span className="card-title">post.title</span>
                       <p>post.body</p>

                    </div>
                )
            })
        ):(
            <div className="center">No Posts yet</div>
        )
        return(
            <div className="container">
            <h4 className="center">HOME</h4>
            {postList}
            </div>
        )
    }
}
