import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const PopupToEditDish = () => (
  <Popup trigger={<button>Edit</button>} position="right center">
    <div> Choose The dish you want to edit </div>
  </Popup>
);
export default PopupToEditDish; 