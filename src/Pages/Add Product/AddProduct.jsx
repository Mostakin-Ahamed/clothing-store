import { useRef } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
// import Swal from 'sweetalert2'

const AddProduct = () => {
    const axiosSecure = useAxiosSecure()

    const formRef = useRef()
    const handleNewProduct = e => {
        
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('productName');
        const brand = form.get('brand');
        const price1 = form.get('price');
        const price = parseInt(price1)
        const image = form.get('imageURL');
        const details = form.get('details');
        const rating1 = form.get('rating');
        const rating = parseInt(rating1)
        
        const newItem = { name, brand, price, image, details, rating }
        console.log(newItem);
        axiosSecure.post('/addItem',newItem)
        .then(res =>{
            console.log(res.data);
            if(res.data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Service added to cart!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                formRef.current?.reset();
            }
        })
        
        

    }

    return (
        <div className="mb-48">
            <Helmet><title>Clothing Store || Add Products </title></Helmet>
            <h2 className="text-3xl my-10 text-center">Add a new tour!</h2>
            <form ref={formRef} onSubmit={handleNewProduct} className="w-1/2 lg:w-1/2 md:3/4 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text" name="productName" placeholder="Product Name" className="input input-bordered" required />
                </div>
                


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image URL</span>
                    </label>
                    <input type="text" name="imageURL" placeholder="Image URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price </span>
                    </label>
                    <input type="number" name="price" placeholder="Price" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Short Description</span>
                    </label>
                    <textarea name="details" placeholder="Details" className="textarea textarea-bordered textarea-lg w-full " required ></textarea>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Brand</span>
                    </label>
                    <input type="text" name="brand" placeholder="Brand" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="number" name="rating" step={0.1} placeholder="Out of 5. ex: 4.5" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add Tour</button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;