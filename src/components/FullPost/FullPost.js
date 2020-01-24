import React from 'react';

import './FullPost.css';

const fullPost = props => {
  const post = props.id ? (
    <div className='FullPost'>
      <h1>{props.title}</h1>
      <p>{props.body}</p>
      <div className='Edit'>
        <button className='Delete' onClick={props.clicked}>
          Delete
        </button>
      </div>
    </div>
  ) : (
    <p style={{ textAlign: 'center' }}>Please select a Post!</p>
  );

  return post;
};

// class FullPost extends Component {
//     render () {
//         let post = <p>Please select a Post!</p>;
//         post = (
//             <div className="FullPost">
//                 <h1>Title</h1>
//                 <p>Content</p>
//                 <div className="Edit">
//                     <button className="Delete">Delete</button>
//                 </div>
//             </div>

//         );
//         return post;
//     }
// }

export default fullPost;
