import * as React from 'react';
import './ObjectiveComponent.css';

interface ObjectiveComponentProps {
  handleClose: () => void;
}

const ObjectiveComponent: React.FC<ObjectiveComponentProps> = ({ handleClose }) => {
  return (
    <div className="objective-content">
      <div className="objective-header">
        <p className="header-text">Add Objective</p>
        <button
          className="close-button"
          type="button"
          onClick={handleClose}
        >
        </button>
      </div>

      <div className="input-container">
        <input
          type="text"
          placeholder="Title"
          className="input-field"
        />

        <div className="section-header">
          <p className="uppercase font-semibold">Objectives</p>
          <p>Describe what you want to accomplish</p>
        </div>

        <div className="section">
          <div className="section-item">
            <p className="uppercase">Align To</p>
          </div>
          <input
            type="text"
            placeholder="Not Aligned to any OKR"
            className="small-input"
          />
        </div>

        <div className="section">
          <div className="section-item">
            <p className="uppercase">Owner</p>
          </div>
          <div className="section-item">
            <img
              className="w-6 h-6 object-cover rounded-full"
              alt="profile image"
            />
            <p>Anne Rempel</p>
          </div>
        </div>

        <div className="section">
          <div className="section-item">
            <p className="uppercase">Due Date</p>
          </div>
          <input
            type="number"
            placeholder="Q3 2023"
            className="small-input"
          />
        </div>

        <div className="section">
          <div className="section-item">
            <p className="uppercase">Team</p>
          </div>
          <input
            type="text"
            placeholder="Team"
            className="small-input"
          />
        </div>

        <div className="section">
          <div className="section-item">
            <p className="uppercase">Delegate</p>
          </div>
          <input
            type="text"
            placeholder="Assign to"
            className="small-input"
          />
        </div>

        <div className="section">
          <div className="section-item">
            <p className="uppercase">Tags</p>
          </div>
          <input
            type="text"
            placeholder="Add tags"
            className="small-input"
          />
        </div>

        <div className="section">
          <div className="section-item">
            <p className="uppercase">Description</p>
          </div>
          <input
            type="text"
            placeholder="Description"
            className="small-input"
          />
        </div>

        <div className="section-header">
          <p className="uppercase font-semibold">Outcome</p>
          <p>Measured as a goal towards 100% completion.</p>
        </div>

        <button
          type="button"
          className="button"
          onClick={() => alert('clicked')}
        >
          Add Milestones
        </button>

        <div className="section-header">
          <p className="uppercase font-semibold">Progress & Status</p>
          <p>Specify the method for updating progress and status.</p>
        </div>

        <div className="section">
          <div className="section-item">
            <p className="uppercase">PROGRESS</p>
          </div>
          <input
            type="number"
            placeholder="Update from key Results"
            className="small-input"
          />
        </div>

        <div className="section">
          <div className="section-item">
            <p className="uppercase">STATUS</p>
          </div>
          <input
            type="text"
            placeholder="Update Based on progress"
            className="small-input"
          />
        </div>

        <div className="button-container">
          <button
            type="button"
            className="button"
            onClick={() => alert('clicked')}
          >
            Cancel
          </button>
          <button
            type="button"
            className="button button-primary"
            onClick={() => alert('clicked')}
          >
            Add Objective
          </button>
        </div>
      </div>
    </div>
  );
};

export default ObjectiveComponent;
