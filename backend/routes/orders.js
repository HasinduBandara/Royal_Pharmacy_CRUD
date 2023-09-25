const router = require("express").Router();
const { response } = require("express");
let order = require("../models/order");

http://Localhost:8070/order/add

router.route("/add").post((req,res)=>{


    const ordername = req.body.ordername;
   const orderID = req.body.orderID;
   const orderdate = req.body.orderdate;   
   const customername = req.body.customername;
   const quantity = req.body.quantity;   
    

    const neworder = new order({ 

       ordername, 
       orderID,
       orderdate, 
       customername,
       quantity,
       

    })

    neworder.save().then(()=>{

        res.json("order Added Success")
    }).catch((err)=>{

        console.log(err);
    })
})    


http://localhost:8070/order

router.route("/").get((req,res)=>{

    order.find().then((orders)=>{
        res.json(orders)

    }).catch((err)=>{

        console.log(err);
    })

})




http://localhost:8070//update/5ffffffhf
router.route("/update/:id").put(async (req,res) => {


    let userId = req.params.id;
    const {ordername,orderID,orderdate,customername,quantity } = req.body;

    const upadateorder = {

        ordername,
        orderID,
        orderdate,
        customername,
        quantity,
       
    }

    const update = await order.findByIdAndUpdate(userId,upadateorder).then(() =>{

        res.status(200).send({status: "order updated"})

    }).catch((err)=>{

        console.log(err);
        res.status(500).send({status: "Error with updating order", error:err.message})
    })


   })

   http://localhost:8070/delete/5ffffffhf

   router.route("/delete/:id").delete(async (req,res) => {

    let userId = req.params.id;

    await order.findByIdAndDelete(userId).then(() => {

        res.status(200).send({status: "order deleted"});

    }).catch((err)=>{

        console.log(err.message);
        res.status(500).send({status: "Error with Delete order", error:err.message})
    })

   })


   router.route("/get/:id").get(async (req,res) => {

    let userId = req.params.id;
    const user = await order.findById(userId).then( (order) =>{

        res.status(200).send({status: "order fetched", user : order})

    }).catch((err)=>{

        console.log(err.message);
        res.status(500).send({status: "Erroe with get order", error:err.message})
    })

})

module.exports = router;