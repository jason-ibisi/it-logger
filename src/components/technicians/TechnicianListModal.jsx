import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TechnicianItem from './TechnicianItem';
import { getTechnicians } from '../../actions/technicianActions';

const TechnicianListModal = ({
  getTechnicians,
  technician: { technicians, loading }
}) => {
  useEffect(() => {
    getTechnicians();
    //eslint-disable-next-line
  }, []);

  return (
    <div id='technician-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technicians List</h4>
        <ul className='collection'>
          {!loading &&
            technicians != null &&
            technicians.map(technician => (
              <TechnicianItem technician={technician} key={technician.id} />
            ))}
        </ul>
      </div>
    </div>
  );
};

TechnicianListModal.propTypes = {
  technician: PropTypes.object.isRequired,
  getTechnicians: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  technician: state.technician
});

export default connect(mapStateToProps, { getTechnicians })(
  TechnicianListModal
);
