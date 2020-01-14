import React, { useState } from 'react';
import TechnicianSelectOptions from '../technicians/TechnicianSelectOptions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLog } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min';

const AddLogModal = ({ addLog }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [technician, setTechnician] = useState('');

  const modalStyle = {
    width: '75%',
    height: '75%'
  };

  const onSubmit = () => {
    if (message === '' || technician === '') {
      M.toast({ html: 'Please enter a message and technician' });
    } else {
      // Create new log object
      const newLog = {
        message,
        attention,
        technician,
        date: new Date()
      };

      // Add Log
      addLog(newLog);

      M.toast({ html: `Log added by ${technician} ` });

      // Clear fields
      setMessage('');
      setTechnician('');
      setAttention(false);
    }
  };

  return (
    <div id='add-log-modal' className='modal' style={modalStyle}>
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
            <label htmlFor='message' className='active'>
              Log Message
            </label>
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
              <TechnicianSelectOptions />
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

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired
};

export default connect(null, { addLog })(AddLogModal);
