const { ObjectId } = require("mongodb");

class FormationAPI {


    getAllFormations(app,FormationModel){
           app.post('/api/modules/getAllFormations' , async (req , res) => {
                    const response = await FormationModel.find();
                    res.json(response);
            });
    }

    getModuleFormationsByNiveauAndSemestre(app,FormationModel){
        app.post('/api/modules/getFormationSemetre' , async (req , res) => {
            const{formation , semestre} = req.body;
            const response = await FormationModel
                                    .where('Formation').eq(formation)
                                    .where('Semestre').eq(semestre);
           res.json(response);
    });
    }


    getModuleFormationById(app,FormationModel){
      app.post('/api/modules/getFormationById/' , async (req , res) => {
        const{idFormation} = req.body;
        const response = await FormationModel.findOne({"_id" : ObjectId(idFormation)})
        res.json(response);
});
    }
}


module.exports = FormationAPI;
