import React, { useState } from 'react';
import './index.scss';

const Modal = ({ open, setOpen }) => (
  <div className={`overlay animated ${open ? 'show' : ''}`}>
        <div className="modal">
          <svg onClick={() => setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
          <img src="https://images.unsplash.com/photo-1714829732384-f56e81b60117?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
      </div>
)

function App() {
  const [open, setOpen] = useState(false);

  
  // функция открытия модального окна с учетом изменения состояния
  const handleOpenModal = () => {
    setOpen(true);
  }
  
  /*
  // функция закрытия модального окна
  const handleCloseModal = () => {
    setOpen(false);
  }*/

  return (
    <div className="App">
      <button onClick={handleOpenModal} className="open-modal-btn">✨ Открыть окно</button>
      {/* отображение модального окна с внесением разметки в App
      <div className={`overlay animated ${open ? 'show' : ''}`}>
        <div className="modal">
          <svg onClick={handleCloseModal} height="200" viewBox="0 0 200 200" width="200">
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
          <img src="https://images.unsplash.com/photo-1714829732384-f56e81b60117?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
      </div> 
      */}
      <Modal open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;
