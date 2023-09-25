import React , {useState , useEffect} from "react";
import axios from "axios";
import './order.css';


export default function Editorder(){



   const [ordername, setordername] = useState("");
   const [orderID, setorderID] = useState("");
   const [orderdate, setorderdate] = useState("");
   const [customername, setcustomername] = useState("");
   const [quantity, setquantity] = useState("");
   

   const [orderss, setorders] = useState([]);

   function updateorder (e) {
    e.preventDefault();

    const Editorder = {

        ordername,
        orderID,
        orderdate,
        customername,
        quantity,
       

    }
        axios.put(`http://localhost:8070/order/update`,Editorder).then((res) => {
            alert("order Details Updated");
            setorders(res.data);
            
        }).catch((err) => {
            alert(err.message);
        })
}


    return (

      <div className="p-3 mb-2 bg-info text-white"><br/><br/>
      <h2>Update Order Details</h2>

      <MDBContainer fluid>
        <MDBRow className='justify-content-center align-items-center m-5'>
        <MDBCard>

          <form onSubmit={updateorder}>
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

       <button type="submit" className="btn btn-primary">Update</button>
      </form>
      </MDBCard>
      </MDBRow>
      </MDBContainer>
      </div>
    )

          }