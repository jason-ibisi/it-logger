import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import { addComments } from '../../actions/commentActions';
import CommentItem from './CommentItem';
import M from 'materialize-css/dist/js/materialize.min';

const Comments = ({ log: { current }, comments, addComments }) => {
  const [comment, setComment] = useState('');

  const onSubmit = () => {
    if (comment === '') {
      M.toast({ html: 'Please enter a comment.' });
    } else {
      // set new comment object
      const newComment = {
        id: uuid.v4(),
        comment,
        author: current.technician,
        date: new Date()
      };

      // set new updateLog object
      const updatedLog = {
        ...current,
        comments: [...current.comments, newComment]
      };

      // Add comments to current object
      addComments(updatedLog);

      // Clear fields
      setComment('');
    }
  };
  return (
    <ul className='collection'>
      {comments && comments.map(c => <CommentItem key={c.id} comment={c} />)}
      <li className='collection-item'>
        <input
          type='text'
          name='comment'
          value={comment}
          onChange={e => setComment(e.target.value)}
          placeholder='Enter Comment'
          required
        />
        <a
          href='#!'
          onClick={onSubmit}
          className='btn waves-effect waves-light blue secondary-content'
        >
          Submit
          <i className='material-icons right'>send</i>
        </a>
      </li>
    </ul>
  );
};

Comments.propTypes = {
  log: PropTypes.object,
  comments: PropTypes.array,
  addComments: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  log: state.log
});

export default connect(mapStateToProps, { addComments })(Comments);
