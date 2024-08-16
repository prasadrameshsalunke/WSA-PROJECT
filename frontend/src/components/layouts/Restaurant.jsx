import React from 'react'

export default function Restaurant()
{
  return (
    <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
        <div className='card p-3 rounded'>
            <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg"
            alt="Dominos"/>

            <div className='card-body d-flex flex-column'>
                <h5 className='card-title'>Dominos Pizza</h5>
                <p className='rest_address'>
                    123 Street,place,City-00000,state
                </p>
<div className='rating-outer'>
    <div className='rating-inner'>
        <span id='no_of_reviews'>140 reviews</span>
    </div>
</div>
            </div>
        </div>
    </div>
  )
}
