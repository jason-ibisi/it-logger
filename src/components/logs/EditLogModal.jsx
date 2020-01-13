import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateLog } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min';

const EditLogModal = ({ current, updateLog }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [technician, setTechnician] = useState('');

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTechnician(current.technician);
    }
  }, [current]);

  const modalStyle = {
    width: '75%',
    height: '75%'
  };

  const onSubmit = () => {
    if (message === '' || technician === '') {
      M.toast({ html: 'Please enter a message and technician' });
    } else {
      // set new updateLog object
      const upLog = {
        id: current.id,
        message,
        attention,
        technician,
        date: new Date()
      };

      // Update Log
      updateLog(upLog);
      M.toast({ html: `Log updated by ${technician}` });

      // Clear fields
      setMessage('');
      setTechnician('');
      setAttention(false);
    }
  };

  return (
    <div id='edit-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter System Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <select
              name='technician'
              id=''
              value={technician}
              className='browser-default'
              onChange={e => setTechnician(e.target.value)}
            >
              <option value='' disabled>
                Select Technician
              </option>
              <option value='Sara Conor'>Sarah Conor</option>
              <option value='Sam Smith'>Sam Smith</option>
              <option value='Jim Jones'>Jim Jones</option>
              <option value='Jennifer Williams'>Jennifer Williams</option>
            </select>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={e => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue btn'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

EditLogModal.propTypes = {
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  current: state.log.current
});

export default connect(mapStateToProps, { updateLog })(EditLogModal);
