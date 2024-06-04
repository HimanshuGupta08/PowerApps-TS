import * as React from 'react';
import './AAccordion.css'; // Import your CSS file

interface User {
  NAME: string;
  EMAIL: string;
}

interface AAccordionProps {
  onToggle: (index: number) => void;
  users: User[];
  openIndex: number | null;
}

const AAccordion: React.FC<AAccordionProps> = ({ users, openIndex, onToggle  }) => {
  return (
    <div className="accordion">
      {users.map((user, index) => (
        <div key={index} className="accordion-item">
          <div
            className={`accordion-header ${openIndex === index ? 'open' : ''}`}
            onClick={() => onToggle(index)}
          >
            {user.NAME}
            <span className={`arrow ${openIndex === index ? 'down' : 'right'}`}>&gt;</span>
          </div>
          {openIndex === index && (
            <div className="accordion-content">
              <p>Name: {user.NAME}</p>
              <p>Email: {user.EMAIL}</p>
              
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default AAccordion;
