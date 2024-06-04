import * as React from 'react';
import UsersViewModal from '../Modal/userView/UsersViewModal';
import './UserViewTable.css';  // Import the custom CSS file
import AAccordion from './AAccordion';

interface User {
  EID: string;
  NAME: string;
  EMAIL: string;
}

const UserViewTable: React.FC = () => {
  const [isChecked, setIsChecked] = React.useState<boolean>(false);
  const [usersData, setUsersData] = React.useState<User[]>([]);
  const [usersViewModal, setUsersViewModal] = React.useState<{
    show: boolean;
    index: number | null;
    userName: string;
  }>({
    show: false,
    index: null,
    userName: '',
  });

  const containerRef = React.useRef<HTMLDivElement>(null);

  const [accordionIndex, setAccordionIndex] = React.useState<number | null>(null);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const entriesPerPage = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const toggleCheckbox = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setIsChecked(!isChecked);
  };

  const getUsersData = async () => {
    try {
      const response = await fetch(
        'https://ceq-xpertise-manager-dev.azurewebsites.net/api/v2/reports/users/0/0'
      );
      const data = await response.json();
      setUsersData(data.data);
    } catch (error) {
      console.error('Error fetching users data: ', error);
    }
  };

  React.useEffect(() => {
    getUsersData();
  }, []);

  const handleAccordionToggle = (index: number) => {
    setAccordionIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = usersData.slice(indexOfFirstEntry, indexOfLastEntry);
  const totalPages = Math.ceil(usersData.length / entriesPerPage);

  const handleModalOpen = () => {
    setUsersViewModal({ show: true, index: null, userName: '' });
    containerRef.current?.classList.add('opacity-50');
  };

  const handleModalClose = () => {
    setUsersViewModal({ show: false, index: null, userName: '' });
    containerRef.current?.classList.remove('opacity-50');
  };

  return (
    <>
      {usersViewModal.show && (
        <UsersViewModal
          handleClose={() =>
            setUsersViewModal({
              show: false,
              index: null,
              userName: '',
            })
          }
          open={usersViewModal.show}
          data={usersData[usersViewModal.index!]}
        />
      )}
      <div ref={containerRef} className='container'>
        <div className='header'>
          <div className='filters'>
            <button className='filter-button'>Filters</button>
            <select className='filter-select'>
              <option>User 20</option>
              <option>User 30</option>
              <option>User 40</option>
            </select>
            <select className='filter-select'>
              <option>Projects</option>
              <option>Tasks</option>
              <option>Hours</option>
            </select>
          </div>
        </div>

        <div className='table-container'>
          <div className='table-wrapper'>
            <table className='user-table'>
              <thead className='table-header'>
                <tr>
                  <th className='table-checkbox'>
                    <input type='checkbox' onClick={(e) => toggleCheckbox(e)}/>
                  </th>
                  <th> </th>
                  <th className='table-heading'>User</th>
                  <th className='table-heading'>Projects</th>
                  <th className='table-heading'>Tasks</th>
                  <th className='table-heading'>Hours Logged</th>
                  <th className='table-heading'>Updated Hours</th>
                </tr>
              </thead>
              <tbody>
                {usersData.map((data, index) => (
                  <React.Fragment key={data.EID}>
                    <tr
                      className='table-row'
                      onClick={() => {
                        if (isChecked) return;
                        setUsersViewModal({
                          show: true,
                          index,
                          userName: data.NAME,
                        });
                      }}
                    >
                      <td className='table-checkbox'>
                        <input type='checkbox' onClick={(e) => toggleCheckbox(e)} />
                      </td>
                      <td
                        className='table-expand'
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAccordionToggle(index + indexOfFirstEntry);
                        }}
                      >
                        {'>'}
                      </td>
                      <td className='table-data'>{data.NAME}</td>
                      <td className='table-data'>8</td>
                      <td className='table-data'>8</td>
                      <td className='table-data'>
                        <div className='progress-bar-container'>
                          <div
                            className='progress-bar'
                            style={{ width: '75%' }}
                          ></div>
                        </div>
                      </td>
                      <td className='table-data'>30 Hrs</td>
                    </tr>

                    {accordionIndex === index + indexOfFirstEntry && (
                      <tr className='accordion-content'>
                        <td colSpan={7}>
                          <AAccordion
                            users={[{ NAME: data.NAME, EMAIL: data.EMAIL }]}
                            openIndex={accordionIndex}
                            onToggle={handleAccordionToggle}
                          />
                        </td>
                      </tr>
                    )}

                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className='pagination-buttons'>
            <button
              className='pagination-button'
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                className={`pagination-button ${currentPage === i + 1 ? 'active' : ''}`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              className='pagination-button'
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
    </>
  );
};

export default UserViewTable;
