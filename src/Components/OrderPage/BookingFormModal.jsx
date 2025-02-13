import CloseIcon from "@mui/icons-material/Close";
import {
    Box,
    Button,
    IconButton,
    MenuItem,
    Modal,
    TextField,
    Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import React, { useState } from "react";

const BookingFormModal = ({ open, handleClose }) => {
  const today = new Date().toISOString().split("T")[0];
  const [formData, setFormData] = useState({
    date: today,
    time: "",
    guests: "",
    occasion: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="booking-form-modal"
      aria-describedby="booking-form-modal-description"
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" component="h2" gutterBottom>
          Book Table
        </Typography>
        <TextField
          label="Date"
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          fullWidth
          margin="normal"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
        <TextField
          label="Time"
          select
          name="time"
          value={formData.time}
          onChange={handleChange}
          fullWidth
          margin="normal"
        >
          <MenuItem value="18:00">18:00</MenuItem>
          <MenuItem value="18:30">18:30</MenuItem>
          <MenuItem value="19:00">19:00</MenuItem>
          <MenuItem value="19:30">19:30</MenuItem>
          <MenuItem value="20:00">20:00</MenuItem>
          <MenuItem value="20:30">20:30</MenuItem>
          <MenuItem value="21:00">21:00</MenuItem>
        </TextField>
        <TextField
          label="Number of Guests"
          type="number"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          fullWidth
          margin="normal"
          slotProps={{ input: { min: 1, max: 10 } }}
          placeholder="1"
        />
        <TextField
          label="Occasion"
          select
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
          fullWidth
          margin="normal"
        >
          <MenuItem value="birthday">Birthday</MenuItem>
          <MenuItem value="anniversary">Anniversary</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </TextField>
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#495E57",
            "&:hover": { backgroundColor: "#3a4a44" },
          }}
          fullWidth
        >
          Submit
        </Button>
      </Box>
    </Modal>
  );
};
BookingFormModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default BookingFormModal;
