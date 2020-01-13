import React, { useState, useEffect } from 'react';
import TechnicianItem from './TechnicianItem';

const TechnicianListModal = () => {
  const [technicians, setTechnicians] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechnicians();
    //eslint-disable-next-line
  }, []);

  const getTechnicians = async () => {
    setLoading(true);

    const res = await fetch('/technicians');
    const data = await res.json();

    setTechnicians(data);
    setLoading(false);
  };

  return (
    <div id='technician-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technicians List</h4>
        <ul className='collection'>
          {!loading &&
            technicians.map(technician => (
              <TechnicianItem technician={technician} key={technician.id} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TechnicianListModal;
