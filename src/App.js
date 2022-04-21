import logo from './logo.svg';
import './App.css';
import BasicTable from './components/Table';
import * as React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';

function App() {

  const [open, setOpen] = React.useState(false);
  const [eid, setEid] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phoneno, setPhoneno] = React.useState('');
  const [rows, setRows] = React.useState([])

  React.useEffect(() => {

  }, [])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitEntry = () => {
    setRows(rows.concat([{ eid, name, email, phoneno }]))
    setOpen(false);
  }

  function createData(Teid, Tname, Temail, Tphoneno) {
    return { Teid, Tname, Temail, Tphoneno };
  }

  function loadData() {
    setRows(rows.concat([
      createData(1, "Tanya", "a@meow.com", "1234567890"),
      createData(2, "Mehru", "b@meow.com", "234567890"),
      createData(3, "Naveen", "c@meow.com", "34567890"),
      createData(4, "Himanshu", "d@meow.com", "4567890"),
      createData(5, "Zangho", "e@meow.com", "567890"),
    ]))
  }

  return (
    <div className="App">
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', flexDirection: 'column' }} >
        <BasicTable rows={rows} />
        <div>

          <Button onClick={handleClickOpen}>Add Entry</Button>
          {rows.length == 0 ? <Button onClick={loadData}>Load Data</Button> : null}
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Employee Form</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Employee Id"
                type="eid"
                fullWidth
                value={eid}
                onChange={(e) => setEid(e.target.value)}
                variant="standard"
              />
              <TextField
                margin="dense"
                id="name"
                label="Employee Name"
                type="name"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                variant="standard"
              />
              <TextField
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="standard"
              />
              <TextField
                margin="dense"
                id="name"
                label="Phone Number"
                type="phoneno"
                fullWidth
                value={phoneno}
                onChange={(e) => setPhoneno(e.target.value)}
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={submitEntry}>Add</Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default App;
