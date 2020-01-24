import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import axios from 'axios';
import './Blog.css';

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    selectedPostTitle: '',
    selectedPostBody: ''
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
      const posts = response.data.slice(0, 4);
      //Add author property to the recieved data
      const updatedPosts = posts.map(post => {
        return {
          ...post,
          author: 'Vrishali'
        };
      });
      this.setState({
        posts: updatedPosts
      });
    });
  }

  postSelectedHandler = (id, title, body) => {
    this.setState({
      selectedPostId: id,
      selectedPostTitle: title,
      selectedPostBody: body
    });
  };

  render() {
    const posts = this.state.posts.map(post => {
      return (
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={() =>
            this.postSelectedHandler(post.id, post.title, post.body)
          }
        />
      );
    });

    return (
      <div>
        <section className='Posts'>{posts}</section>
        <section>
          <FullPost
            id={this.state.selectedPostId}
            title={this.state.selectedPostTitle}
            body={this.state.selectedPostBody}
          />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
