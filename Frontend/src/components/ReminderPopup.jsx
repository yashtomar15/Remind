// import React from 'react';
// import Popup from 'reactjs-popup';
// import './reminderPopup.css';

// export const PopupExample = () => (
//     <Popup
//     trigger={<div> open modal</div>}
//     modal
//     nested
//   >
//     {close => (
//       <div className="modal">
//         <button className="close" onClick={close}>
//           &times;
//         </button>
//         <div className="header"> Reminder Title </div>
//         <div className="content">
//           <div >Task - scrum at 9am</div>
//           <div >Link - <a href='https://www.google.com'>https://www.google.com</a></div>
//           <div> Time - {"your Reminder time"}</div>
          
//         </div>
//         <div className="actions">
//           <Popup
//             // trigger={<button className="button"> Trigger </button>}
//             position="top center"
//             nested
//           >
//             <span>
//                   reminder app
//             </span>
//           </Popup>
//           <button
//             className="button"
//             onClick={() => {
//               console.log('modal closed ');
//               close();
//             }}
//           >
//             close modal
//           </button>
//         </div>
//       </div>
//     )}
//   </Popup>
// );