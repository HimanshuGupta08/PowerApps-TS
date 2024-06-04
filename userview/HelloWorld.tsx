import * as React from 'react';
import './HelloWorld.css'; // Import custom CSS file
import UserViewTable from './components/tables/UserViewTable';

function HelloWorld(): React.JSX.Element {
  return (
    <div className='app-container'>
      <div className='flex-container'>
        <UserViewTable />
      </div>
    </div>
  );
}

export default HelloWorld;
