import React, {useState} from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel, MenuItem, Select,
    TextField
} from "@mui/material";
import useRestaurants from "../../../../hooks/useRestaurants.js";

const initialForm = {
    "name": "",
    "description": "",
    "price": "",
    "quantity": "",
    "restaurantId": ""

}
const AddDishDialog = ({open, onClose, onAdd}) => {
    const restaurants = useRestaurants();

    const [form, setForm] = useState(initialForm)

    const handleChange = (event) => {
        const {name, value} = event.target;
        setForm({...form, [name]: value});
    }

    const handleSubmit = () => {
        onAdd(form)
        setForm(initialForm)
        onClose()
    }
    // TODO: Implement this.

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add Product</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    label="Name"
                    name="name"
                    fullWidth
                    onChange={handleChange}
                    value={form.name}
                />
                <TextField
                    margin="dense"
                    label="Description"
                    name="description"
                    fullWidth
                    multiline
                    rows={3}
                    onChange={handleChange}
                    value={form.description}
                />
                <TextField
                    margin="dense"
                    label="Price"
                    name="price"
                    type="number"
                    fullWidth
                    onChange={handleChange}
                    value={form.price}
                />
                <TextField
                    margin="dense"
                    label="Quantity"
                    name="quantity"
                    type="number"
                    fullWidth
                    onChange={handleChange}
                    value={form.quantity}
                />
                <FormControl fullWidth margin="dense">
                    <InputLabel>Restaurant</InputLabel>
                    <Select
                        name="restaurantId"
                        label="Restaurant"
                        variant="outlined"
                        onChange={handleChange}
                        value={form.restaurantId}
                        className="restaurant-select"
                        MenuProps={{PaperProps: {style: {maxHeight: 100}}}}>
                        {restaurants.map((restaurant) => (
                            <MenuItem
                                key={restaurant.id}
                                value={restaurant.id}
                                className="restaurant-option"
                            >
                                {restaurant.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button variant="contained" color="primary" className="submit-btn" onClick={handleSubmit}>Add</Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddDishDialog;