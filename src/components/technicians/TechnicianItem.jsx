import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteTechnician } from '../../actions/technicianActions';
import M from 'materialize-css/dist/js/materialize.min';

const TechnicianItem = ({
  technician: { firstName, lastName, id },
  deleteTechnician
}) => {
  const onDelete = () => {
    deleteTechnician(id);
    M.toast({ html: 'Technician deleted successfully.' });
  };
  return (
    <li className='collection-item'>
      <div>
        {firstName} {lastName}
        <a href='#!' onClick={onDelete} className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

TechnicianItem.propTypes = {
  technician: PropTypes.object.isRequired,
  deleteTechnician: PropTypes.func.isRequired
};

export default connect(null, { deleteTechnician })(TechnicianItem);
