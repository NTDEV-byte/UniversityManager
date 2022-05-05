
class FormationAPI {


    getAllFormations(app,FormationModel){
           app.post('/api/modules/getAllFormations' , async (req , res) => {
                    const response = await FormationModel.find();
                    res.json(response);
            });
    }
}


module.exports = FormationAPI;