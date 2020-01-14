import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

const CommentItem = ({ comment: { comment, author, date, id } }) => {
  return (
    <li className='collection-item'>
      <span className='black-text'>{comment}</span>
      <br />
      <span className='grey-text'>
        {' '}
        posted by <span className='black-text'>{author}</span> on{' '}
        <Moment format='MMM Do YY, h:mm:ss a'>{date}</Moment>
      </span>
    </li>
  );
};

CommentItem.propTypes = {
  comment: PropTypes.object.isRequired
};

export default CommentItem;
