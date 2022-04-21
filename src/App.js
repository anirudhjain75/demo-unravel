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
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('email');
  const [isEdit, setIsEdit] = React.useState(false);

  React.useEffect(() => {
    setRows(rows.sort((a, b) => {
      if (order === 'asc') {
        return a[orderBy] > b[orderBy] ? 1 : -1
      } else {
        return a[orderBy] < b[orderBy] ? 1 : -1
      }
    }))
  }, [order, orderBy])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitEntry = () => {
    setRows(rows.concat([{ eid, name, email, phoneno }]))
    setIsEdit(false)
    setOpen(false)
  }

  const editModal = (data) => {
    setOpen(true)
    setIsEdit(true)
    setEid(data.Teid)
    setName(data.Tname)
    setEmail(data.Temail)
    setPhoneno(data.Tphoneno)
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
        <BasicTable rows={rows} order={order} orderBy={orderBy} setOrder={setOrder} setOrderBy={setOrderBy} editModal={editModal} />
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
              <Button onClick={submitEntry}>{isEdit ? 'Edit' : 'Add'}</Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default App;
