var skillsController = require('./skills');

module.exports = function(app) {
	/*SKILLS*/
	app.get('/skills', skillsController.findAllSkills);
	app.get('/skills/:id', skillsController.findSkill);
	app.post('/skills', skillsController.addSkill);
	app.put('/skills/:id', skillsController.updateSkill);
	app.delete('/skills/:id', skillsController.deleteSkill);
}