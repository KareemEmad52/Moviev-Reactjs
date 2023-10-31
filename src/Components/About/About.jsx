import React from 'react'
import Style from './About.module.css'


export default function About() {
  return <>
    <div className={`${Style.froms} pt-5 mt-5`}>
        <div className=' d-flex justify-content-center align-items-center'>
        <div className="w-75 mx-auto ">
          <h2 className='h2 py-3 text-center text-white'>Contact Us</h2>
          <div className="row p-5 py-2">
            <div className="col-md-6 mt-2">
              <input type="text" className='form-control' placeholder='Name' />
            </div>
            <div className="col-md-6 mt-2">
              <input type="text" className='form-control' placeholder='Email'/>
            </div>
          </div>
          <div className="row p-5 py-2">
            <div className="col-md-12">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" placeholder='type your problem...'></textarea>
            <button className='btn w-100 btn-info mt-3 '>Submit</button>
            </div>
          </div>
        </div>
        </div>
    </div>
  
  </>
}
