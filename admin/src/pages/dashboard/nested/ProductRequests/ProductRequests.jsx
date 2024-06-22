import React, { useState, useEffect } from 'react';
import Header from '../../../../components/Header/Header';
import "./ProductRequests.css";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Avatar from "@mui/material/Avatar";
import Modal from '@mui/material/Modal';
import { Typography, Button, Box, CircularProgress } from '@mui/material'; // Added CircularProgress for loading state
import axios from 'axios';

const ProductRequests = () => {
  const [openModal, setOpenModal] = useState(false); // State to control modal visibility
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(false); // State for loading indicator

  useEffect(() => {
    fetchProductRequests();
  }, []);

  const fetchProductRequests = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:4001/api/admin/get-unapprovedproducts');
      setProducts(response.data.products);
    } catch (error) {
      console.error('Error fetching product requests:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProduct(null);
  };

  const approveProduct = async (productId) => {
    try {
      await axios.put(`http://localhost:4001/api/admin/approve-product/${productId}`);
      // Update local state after approval
      const updatedProducts = products.filter(product => product._id !== productId);
      setProducts(updatedProducts);
      handleCloseModal();
    } catch (error) {
      console.error('Error approving product:', error);
    }
  };

  // Function to truncate description to 200 characters
  const truncateDescription = (description) => {
    if (description.length > 200) {
      return description.substring(0, 200) + "...";
    }
    return description;
  };

  return (
    <div style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header title="Product Requests" />
      {/* Scrollable Content cards container */}
      <section style={{ marginTop: '10px', cursor: "pointer" }}>
        {loading ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : (
          products.map(product => (
            <div key={product._id} className='ProductRequestCard' onClick={() => handleOpenModal(product)}>
              <div className='TextContainerProductRequests'>
                <Avatar style={{ marginRight: '5px' }} src={product.avatar} />
                <div>
                  <p><span style={{ fontWeight: "bold", marginBottom: 0 }}>{product.PostedBy.firstName}</span> Applied the product for approval.</p>
                  <p style={{ fontSize: '10px', marginTop: 0, marginBottom: 0 }}>{truncateDescription(product.description)}</p>
                </div>
              </div>
              <NavigateNextIcon />
            </div>
          ))
        )}
      </section>

      {/* Product Details Modal */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <div className='ProductModal'>
          {selectedProduct && (
            <>
              <Typography variant="h5" component="h2" gutterBottom>
                {selectedProduct?.name.length > 50 ? `${selectedProduct?.name.substring(0, 50)}...` : selectedProduct?.name}
              </Typography>

              <Typography variant="body1" gutterBottom>{truncateDescription(selectedProduct.description)}</Typography>
              <div>
                {selectedProduct.image.map((imageUrl, index) => (
                  <img key={index} src={imageUrl} alt={`Product Image ${index}`} className="ModalImage" />
                ))}
              </div>

              {/* Pricing Options */}
              <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <Typography variant="h6" component="p">Price:</Typography>
                  <Typography variant="body1" component="p">Sale Price: PKRselectedProduct?.price.saleprice}</Typography>
                  <Typography variant="body1" component="p">Before Price: PKR{selectedProduct?.price.beforePrice}</Typography>
                </div>

                <div>
                  <Button style={{ backgroundColor: "#EDEDED", boxShadow: "none", color: '#4F4F4F', fontWeight: "500", border: '1px solid #4F4F4F', textTransform: "initial", fontFamily: "Outfit" }} variant='outlined' onClick={handleCloseModal}>Cancel</Button>
                  <Button variant="contained" color="primary" onClick={() => approveProduct(selectedProduct._id)}>Approve Product</Button>
                </div>
              </div>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default ProductRequests;
