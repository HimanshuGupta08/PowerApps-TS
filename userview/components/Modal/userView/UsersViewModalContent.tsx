// UsersViewModalContent.tsx
import * as React from 'react';
import './UsersViewModalContent.css';

interface UsersViewModalContentProps {
  handleClose: () => void;
  data: {
    NAME: string;
    map: {
      project: string;
      projectname: string;
      key: number;
      loggedTime: number;
      timeestimate: number;
      designate: string;
      manual: boolean;
      issues: any[];
      issueList: any[];
      manualList: any[];
      approved: boolean;
    }[];
  };
}

const UsersViewModalContent: React.FC<UsersViewModalContentProps> = ({ handleClose, data }) => {
  return (
    <div>
      <div className="modal-header">
        <h1>{data.NAME}</h1>
        <button className="close-button" type="button" onClick={handleClose}>
          Close
        </button>
      </div>
      <div>
        {data.map.map((item, index) => (
          <div key={index} className="grid-container">
            <div className="grid-item">
              <p className="font-semibold">Projects: {item.project}</p>
            </div>
            <div className="grid-item">
              <p className="font-semibold">Hours Logged: {item.loggedTime}</p>
            </div>
            <div className="grid-item">
              <p className="font-semibold">Project Name: {item.projectname}</p>
            </div>
            <div className="grid-item">
              <p className="font-semibold">Hours Approved: {item.timeestimate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersViewModalContent;
