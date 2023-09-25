import React,{useState} from "react";
import axios from "axios"; 
import './order.css';

import { useNavigate } from "react-router-dom";
import {
  //MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
 // MDBCardBody,
 // MDBInput,
 // MDBSelect,
 // MDBRadio
} 
from 'mdb-react-ui-kit';
import { Card, Container, Row, Col} from "react-bootstrap";




export default function Addorder(){

    const [ordername, setordername] = useState("");
    const [orderID, setorderID] = useState("");
    const [orderdate, setorderdate] = useState("");
    const [customername, setcustomername] = useState("");
    const [quantity, setquantity] = useState("");
   // const [tnds, settnds] = useState("");


  const navigate = useNavigate(); 
    

    function senddata(e)
    {
        
     
     
      e.preventDefault();
      
      const neworder ={
        
          ordername,
          orderID,
          //email,
          orderdate,
          customername,
          quantity,
         // tnds,

      }

      
       axios.post("http://localhost:8070/order/add",neworder).then(()=>{
        alert("Order Added")


         
        
      navigate("/");

       })


    }


    return (
      
      /*<div className="p-3 mb-2 bg-info text-white"><br/><br/>*/
      <div className="oooooo"><br/><br/>
      <h2>Add Order Details</h2>

      <MDBContainer fluid>
        <MDBRow className='justify-content-center align-items-center m-5'>
        <MDBCard>

          <form onSubmit={senddata}>
            <div className="form-group">

          <MDBCol md='6'>
           <label for="name">Customer Name</label>
           <input type="text" className="form-control" id="fristname" aria-describedby="emailHelp" placeholder="Enter customer name" required
           
           
           onChange={(e)=>{

               setordername(e.target.value);

           }}/>
           <br></br>
           </MDBCol>
        </div>
        
        <div className="form-group">
        <MDBCol md='6'>
           <label for="name">Customer Email</label>
           <input type="email" className="form-control" id="lastname" aria-describedby="emailHelp" placeholder="Enter customer email" required
           
           onChange={(e)=>{

               setorderID(e.target.value);

           }}/>
           <br></br>
           </MDBCol>
        </div>
        
    {/* 
        <div className="form-group">
        <MDBCol md='6'>
             <label for="email">Email</label>
             <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email"
             
             onChange={(e)=>{

                 setemail(e.target.value);

             }}/>
             <br></br>
             </MDBCol> 
            </div> */}

              <div className="form-group">
        <MDBCol md='6'>
             <label for="name">Date</label>
             <input type="date" className="form-control" id="nationality" aria-describedby="emailHelp" placeholder="Select date" required
             
             onChange={(e)=>{

                 setorderdate(e.target.value);

             }}/>
             <br></br>
             </MDBCol>   
             </div>
    
{ 
        <div className="form-group">
        <MDBRow>
        <Col md='6'>
           <label for="customername">Item Name</label>
           <input type="text" className="form-control" id="customername" aria-describedby="emailHelp" placeholder="Enter item name" required
          
           onChange={(e)=>{

               setcustomername(e.target.value);

           }}/>
           <br></br>
           </Col>
        
        <Col md='6'>
           <label for="quantity">Quantity</label>
           <input type="text" className="form-control" id="quantity" aria-describedby="emailHelp" placeholder="Enter quantity" required
           
           onChange={(e)=>{

               setquantity(e.target.value);

           }}/>
           <br></br>
           </Col>
           </MDBRow>
        </div> }

       <button type="submit" className="btn btn-primary">Confirm</button>
      </form>
      </MDBCard>
      </MDBRow>
      </MDBContainer>
      </div>
    )

          }