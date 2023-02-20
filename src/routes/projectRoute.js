import { addNewProject, 
    getProjects, 
    getProjectWithID, 
    updateProject, 
    deleteProject } from '../controllers/projectController.js';

const routes = (app) => {
    app.route('/api/v1/projects')

     // GET all projects
    .get( getProjects)
    
    // POST a new project
    .post( addNewProject);

    app.route('/api/v1/project/:projectId')
    // GET a specific project
    .get(getProjectWithID)
    
    // PUT update a project
    .put( updateProject)

    // DELETE a project
    .delete( deleteProject);

   
}

export default routes;




