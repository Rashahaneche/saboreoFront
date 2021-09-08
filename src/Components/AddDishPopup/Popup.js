import React from 'react';
import Popup from 'reactjs-popup';
import AddDish from './AddPopup';
const PopupToAddDish = () => (<Popup trigger={<button>Add</button>} position="right center">
<div>
 <AddDish/>
</div>
</Popup>); 

export default PopupToAddDish;