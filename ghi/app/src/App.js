import Nav from './Nav';

function App(props) {
  return (
    <>
    <Nav />
    <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Conference</th>
          </tr>
        </thead>
        <tbody>
          {props.attendees.map((attendee,idx) =>{
            return(
              <tr key={attendee.href}>
                <td>{attendee.name}</td>
                <td>{attendee.conference}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default App;