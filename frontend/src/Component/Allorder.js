import React,{useState , useEffect} from "react";
import axios from "axios"; 
import './order.css';
import { useNavigate } from "react-router-dom";

export default function Allorder(){

    const navigate = useNavigate();

const [orders,setorder] = useState([]);

useEffect(() => {

  function getorder()
  {
     

    axios.get("http://localhost:8070/order/").then((res) => {


       setorder(res.data);

    }).catch((err) => {

       alert(err.message);
    })
  }

  getorder();
  },[]); 

  function deleteorder(userId)
  {
    axios.delete(`http://localhost:8070/order/delete/${userId}`).then((res) => {
        
    
    alert("Deleted") 
    navigate("/");
    window.location.reload(false);
    
       res.json().then((res) => {
            console.warn(res)
        })
    })
}


    return(

        /*<div className="p-3 mb-2 bg-info text-white"><br/>*/
      <div className="oooooo"><br/>
      <h2>Order Management</h2><br></br>

     {/*<button className="btn btn-success"><a href="#" style={{textDecoration:'none',color:'white'}}>Genarate Report</a></button><br></br>
      
    */}
           <br></br><table className="table table-danger table-striped">
              <thead>
                  <tr>
                      <th scope="col">Order ID</th>
                      <th scope="col">Customer Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Order Date</th>
                      <th scope="col">Item Name</th>
                      <th scope="col">Quantity</th>
                      {/*<th scope="col">Nationality</th>
                      <th scope="col">Phone</th>
                    <th scope="col">Total Number of Days</th>*/}
                        <th scope="col">Action</th>
                  </tr>
              </thead>
              <tbody>
              {orders.map((order,id) => (
                      <tr key={id}>
                          <td>{id}</td>
                          <td>{order.ordername}</td>
                          <td>{order.orderID}</td>
                          <td>{order.orderdate}</td>
                          <td>{order.customername}</td>
                          <td>{order.quantity}</td>
                          {/*
                          <td>{Payment.nationality}</td>
                          <td>{Payment.phone}</td>
                          <td>{Payment.tnds}</td>
              */}
                          <td>
                              <a className="btn btn-success" href={'/Update'}>
                                  <i className="fas fa-edit"></i>&nbsp;Edit
                              </a>
                              &nbsp;
                              <button className="btn btn-danger" onClick={()=> deleteorder(order._id)}>
                              <i className="far fa-trash-alt" ></i>&nbsp;Delete

                          </button>
                          </td>
                      </tr>
                  ))}
              </tbody>
           </table>

             

           
  </div>
      
    )
}