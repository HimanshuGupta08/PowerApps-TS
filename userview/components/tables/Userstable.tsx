import * as React from 'react';
import './UsersTable.css'; // Import your CSS file

interface Person {
  name: string;
  title: string;
  Team: string;
  Status: string;
  LastUpdated: string;
  UpdatedNotes: string;
  Aligned: string;
  image: string;
}

const people: Person[] = [
  {
    name: 'Anne Rempel',
    title: 'Community Works',
    Team: 'DevOps',
    Status: '33%',
    LastUpdated: '13 Sept 2023',
    UpdatedNotes: 'Lorem ispum dolor sit amet',
    Aligned: 'Aligned',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Horace Volkman',
    title: 'Community Works',
    Team: 'Product',
    Status: '48%',
    LastUpdated: '13 Sept 2023',
    UpdatedNotes: 'Lorem ispum dolor sit amet',
    Aligned: 'Aligned',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Desiree Johnston',
    title: 'Community Works',
    Team: 'UX/UI',
    Status: '48%',
    LastUpdated: '13 Sept 2023',
    UpdatedNotes: 'Lorem ispum dolor sit amet',
    Aligned: 'Aligned',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Janet Turcotte',
    title: 'Community Works',
    Team: 'PMO',
    Status: 'Not Started',
    LastUpdated: '13 Sept 2023',
    UpdatedNotes: 'Lorem ispum dolor sit amet',
    Aligned: 'Aligned',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Bennie Emmerich',
    title: 'Community Works',
    Team: 'SNOW',
    Status: '100%',
    LastUpdated: '13 Sept 2023',
    UpdatedNotes: 'Lorem ispum dolor sit amet',
    Aligned: 'Aligned',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Mrs. Elbert Heaney',
    title: 'Community Works',
    Team: 'SysOps',
    Status: '48%',
    LastUpdated: '13 Sept 2023',
    UpdatedNotes: 'Lorem ispum dolor sit amet',
    Aligned: 'Aligned',
    image:
      'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const UsersTable: React.FC = () => {
  return (
    <div className="table-container">
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Owner</th>
              <th scope="col">Team</th>
              <th scope="col">Status</th>
              <th scope="col">Last Updated</th>
              <th scope="col">Updated Notes</th>
              <th scope="col"></th>
              <th scope="col">Aligned</th>
              <th scope="col" className="sr-only">Edit</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person) => (
              <tr key={person.name}>
                <td>{person.title}</td>
                <td>
                  <div className="img-container">
                    <img src={person.image} alt={person.name} />
                    <div className="name">{person.name}</div>
                  </div>
                </td>
                <td>{person.Team}</td>
                <td>
                  <p>{person.Status}</p>
                  <div className="progress-bar-container">
                    <div className="progress-bar" style={{ width: person.Status }}></div>
                  </div>
                </td>
                <td>{person.LastUpdated}</td>
                <td>{person.UpdatedNotes}</td>
                <td>1d</td>
                <td>{person.Aligned}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;
