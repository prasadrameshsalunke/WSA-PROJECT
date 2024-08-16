import React from 'react'
import { FaIndianRupeeSign } from "react-icons/fa6";

export default function FoodItem() {
  return (
    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
        <div className='card p-3 rounded'>
            <img src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg" className='card-img-top mx-auto' alt ="Pizza"/>
            
            <div className='card-body d-flex flex-column'>
                <h5 className='card-title'>
                    Veg Loaded Pizza
                </h5>
                <p className='fooditem_des'>Crunchy and cheesy veg loaded pizza served with happpines</p>
                <p className='card-text'>
                <FaIndianRupeeSign /> 180
                <br/>
                </p>
                <button type="button" id="card_btn" className='btn btn-primary d-inline ml-4'>
                    Add to Cart
                </button>
                <br/>
                <p>Status:<span id="stock_status"
                className={10>5 ? "greenColor" : "redColor"}>
                    {10>5 ?"In Stock" : "Out of Stock"}
                    </span></p>
            </div>
        </div>
    </div>
  )
}
