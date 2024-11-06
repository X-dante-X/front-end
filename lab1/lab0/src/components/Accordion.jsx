import { useState } from 'react';

function Accordion({ title, body }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <button onClick={toggle} className="btn btn-link">
        {title}
      </button>
      {isOpen && <div className="mt-2">{body}</div>}
    </div>
  );
}

export default Accordion;
