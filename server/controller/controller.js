var Userdb=require("../model/model");

//Create and Save new User

exports.create=(req,res)=>{
//validate request
if(!req.body)
{
res.status(400).send({message:"Content Can't be Empty"});
return;    
}  

//new user
const user=new Userdb({
    name:req.body.name,
    email:req.body.email,
    gender:req.body.gender,
    status:req.body.status,
});
//svae user
user
   .save(user)
   .then(data=>{
    // res.send(data);
    res.redirect("/add_user");
   })
   .catch(err=>{
    res.status(500..send({
        message:err.message || "some Error Occured"
    }));
   });
};
//retrieve and return all Users
exports.find=(req,res)=>{
if(req.query.id){
    const id=req.query.id;
    Userdb.findById(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:"Not found user with id"+id});
        }else{
            res.send(data);
        }
    })
    .catch(err=>{
        res.status(500).send({message:"Erro retrieving user with id"+id});
    })
}

else{
    Userdb.find()
    .then(user=>{
        res.send(user);
    })
    .catch(err=>{
        res.status(500).send({message:err.message || "Some error Occured"});
    });
}
};
//Update an New User by userid
exports.update=(req,res)=>{
if(!req.body){
return res  
.status(400)
 .send({message:"Data to be Update  can't be udate"});
}
const id=req.params.id;
Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
.then(data=>{
    if(!data){
        res.status(404).send({message:`Can't Update User with ${id}.Maybe user not found`});
    }else{
        res.send(data);
    }
})
.catch(err=>{
    res.status(500).send({message:"Error Update user information"});
});
};
//Delete an user by specified userid
exports.delete=(req,res)=>{
    const id=req.params.id;
    Userdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(400).send({message:`Can't Delete with id ${id}.Maybe id is wrong`});
        }
        else{
            res.send({message:"Succesfully deleted"});
        }
    })
    .catch(err=>{
        res.status(500).send({message:"couldn't User with id="+id});
    });

};