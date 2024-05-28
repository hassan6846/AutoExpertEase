import React, { useState, useEffect } from 'react';
import { Avatar, Chip } from '@mui/material';
import { toast, Toaster } from 'react-hot-toast';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Header from '../../../../components/Header/Header';
import "./UserManegment.css";
import ApiInstance from '../../../../../Instance/AxiosInstance';

const UserManegment = () => {
  const [openModal, setOpenModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [deleting, setDeleting] = useState(false);

  //handle opening and closing of modal
  const handleOpen = (userId) => {
    setSelectedUserId(userId);
    setOpenModal(true);
  };

  const handleClose = () => setOpenModal(false);

  // Function to delete a user
  const deleteUsers = (userId) => {
    setDeleting(true);
    ApiInstance.delete(`/admin/user/${userId}`)
      .then(response => {
        // Handle successful deletion
        toast.success('User deleted successfully');
        // Update the user list after deletion
        setUsers(users.filter(user => user._id !== userId));
        handleClose(); // Close the modal after deletion
      })
      .catch(error => {
        // Handle deletion error
        toast.error('Error deleting user');
        console.error('Error deleting user:', error);
      })
      .finally(() => setDeleting(false));
  };

  // Fetch Users on load
  useEffect(() => {
    toast.success("Fetching users");

    ApiInstance.get('/admin/getusers')
      .then(response => {
        setUsers(response.data);
        console.log('Fetched users:', response.data);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div style={{ flex: 1, backgroundColor: "#fff" }}>
      <Toaster />
      <Header title="User Management" />

      <Modal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClose={handleClose}
        open={openModal}
      >
        <div className='UserManegmentModal'>
          <h3 style={{ marginBottom: 10, marginTop: 0, marginLeft: '20px' }}>Are You Sure you Want Delete User</h3>
          <p style={{ marginTop: 0, marginBottom: 0, paddingLeft: 20, paddingRight: 20, color: '#666666', fontSize: '14px' }}>
            Deleting someone from the database means they'll lose access to services and cease to be a user. It's like removing their digital footprint entirely. They won't be able to log in, access their account, or utilize any associated features. It's essentially cutting off all ties between them and the platform or service.
          </p>
          <div className='ButtonContainerModal'>
            <Button style={{ backgroundColor: "#EDEDED", boxShadow: "none", color: '#4F4F4F', fontWeight: "500", border: '1px solid #4F4F4F', textTransform: "initial", fontFamily: "Outfit" }} variant='outlined' onClick={handleClose}>Cancel</Button>
            <Button color="error" style={{ boxShadow: "none", color: '#fff', fontWeight: "300", textTransform: "initial", fontFamily: "Outfit" }} variant="contained" onClick={() => deleteUsers(selectedUserId)}>
              {deleting ? 'Deleting...' : 'Delete User'}
            </Button>
          </div>
        </div>
      </Modal>

      <div>
        {users.map((user) => (
          <div key={user._id} style={{ backgroundColor: "red", width: "100%", height: "10vh", marginTop: 5, marginBlock: 5, borderRadius: 5, display: "flex", alignItems: "center", padding: 3, justifyContent: "space-around", cursor: "pointer" }}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <Avatar src={user.avatar} />
              <div style={{ marginLeft: 5 }}>
                <p style={{ marginBottom: 0, marginTop: 0 }}>{user.username}</p>
                <p style={{ marginBottom: 0, marginTop: 0, fontSize: 10 }}>{user.email}</p>
                <p style={{ marginBottom: 0, marginTop: 0, fontSize: 10 }}>{user._id}</p>
              </div>
            </div>
            <div>
              <p style={{ marginBottom: 0, marginTop: 0 }}>Joining Date</p>
              <p style={{ marginBottom: 0, marginTop: 0, fontSize: 10 }}>{user.createdAt}</p>
            </div>
            <div>
              <p style={{ marginBottom: 0, marginTop: 0 }}>Phone</p>
              <p style={{ marginBottom: 0, marginTop: 0, fontSize: 10 }}>+{user.phone}</p>
            </div>
            <div>
              <p style={{ marginBottom: 0, marginTop: 0 }}>Address</p>
              <p style={{ marginBottom: 0, marginTop: 0, fontSize: 10 }}>135-c Samanabad, Lahore</p>
            </div>
            <div>
              <p style={{ marginBottom: 0, marginTop: 0 }}>Role</p>
              <Chip label={user.role} style={{ height: 17, backgroundColor: "#e5e5e5" }} />
            </div>
            <div>
              <p style={{ marginBottom: 0, marginTop: 0 }}>Device</p>
              <Chip label={user.Locations.BuisnessLocation} style={{ height: 17, backgroundColor: "#e5e5e5" }} />
            </div>
            <div style={{ justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <p style={{ marginBottom: 0, marginTop: 0 }}>Actions </p>
              <DeleteIcon onClick={() => handleOpen(user._id)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserManegment;
