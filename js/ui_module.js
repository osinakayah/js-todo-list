import ProjectModule from './project_module'
const UIModule = function(){
    const makeProjectActive = (projectId) => {
        document.querySelector(`#projects-ul [data-project-id="${projectId}"]`).classList.add("active")
        document.querySelector('#project_task_relation_id').value = projectId
    }
    const removeProjectActive = (projectId) => {
        document.querySelector(`#projects-ul [data-project-id="${projectId}"]`).classList.remove("active")
    }
    const renderProjectList = (projects) => {
        const projectListTemplate = projects.reduce((projectRows, project, projectIndex) => {
            return `${projectRows}
            <li class="list-group-item project-item" data-project-id="${projectIndex}">
                <a>
                    <h6 data-project-id="${projectIndex}" class="message-list-title">${project.projectName}</h6>
                </a>
            </li>
        `
        }, '');

        document.getElementById('projects-ul').innerHTML = projectListTemplate
    }

    return {
        init: () => {
            const projects = ProjectModule.fetchProjects();
            if (projects.length == 0 ) {
                console.log("NO projects");
                ProjectModule.createProject("Default Project");
            }
            renderProjectList(ProjectModule.fetchProjects())
        },
        renderProjectList,
        makeProjectActive,
        removeProjectActive
    }
}();

export default UIModule;
