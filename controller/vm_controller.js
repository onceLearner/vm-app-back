

var vmModel = require("./../model/vm.js");



const index = async(req, res) => {
    res.status(200).json({
        status: true,
        title: 'Apis'
    });
}




const controller_get_all = async (req, res) => {

    vmModel.find((err, data) => {
        if (err) {
            console.log(err)
            res.status(400).json({
                errorMessage: err,
                status: false
            });
        } else {
            res.status(200).json({
                status: true,
                title: 'success.',
                data:data
            });
        }
    });
}





const controller_get_one = async (req, res) => {

    console.log({ip:req.params.ip})
    vmModel.find({ip:req.params.ip})
        .then(data=>{
            res.send(data)
        })
        .catch(err=>{ res.status(400).send({msg:err.toString(),msg:"error"})})
}





const controller_Add = async(req, res) => {

    var vm_new = new vmModel(req.body);

    vmModel.findOne({ip:req.body.ip})
        .then(data=>{
            if(data){
                res.status(400).send({msg:"Machine already exists with the same IP address"})
            }
            else {
                vm_new.save((err, data) => {
                    if (err) {
                        console.log(err)
                        res.status(400).json({
                            errorMessage: err,
                            status: false
                        });
                    } else {
                        res.status(200).json({
                            status: true,
                            title: 'Vm Added successfully.',
                            data:data
                        });
                    }
                });

            }

        })
        .catch(er=>res.status(400).send({eror:er.toString()}))


}



const controller_update = async(req, res) => {
    vmModel.findOneAndUpdate({ip:req.params.ip},
        {etat:req.body.etat}, function(err, data) {
            if(err){
                console.log(err);
                res.status(400).send({msg:"error"})
            }
            else{
                res.status(200).send(data);
                console.log("Data updated!");
            }
        });  }



const controller_delete = async (req,res)=>
{

    vmModel.remove({ip:req.params.ip},
        function(err, data) {
            if(err){
                console.log(err);
                res.status(400).send({msg:"error"})
            }
            else{
                res.status(200).send(data);

            }
        });
}




module.exports={controller_get_all,controller_get_one,controller_Add,controller_update,controller_delete,index}
