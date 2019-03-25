const ProjectModule = function () {
  const PROJECT_KEY = 'PROJECT_KEY'
  let projects = localStorage.getItem(PROJECT_KEY) === null ? [] : JSON.parse(localStorage.getItem(PROJECT_KEY))

  const createProject = (name) => {
    projects.push(ProjectFactory(name));
    saveProjectsToLocalStorage()
  }

  const addTaskToProject = (projectId, task) => {
    projects[projectId].tasks.push(task)
    saveProjectsToLocalStorage();
  }

  const fetchTask = (projectId, taskStatus) => {
    return projects[projectId].tasks.filter(task => task.status === taskStatus)
  }

  const fetchProjects = () => projects

  const saveProjectsToLocalStorage = () => {
    localStorage.setItem(PROJECT_KEY, JSON.stringify(projects))
  }
  const setProjects = (_projects) => {
    projects = _projects
    saveProjectsToLocalStorage()
  }

  const removeTask = (projectId, taskId) => {
    const newTask = projects[projectId].tasks.filter((task, index) => index !== taskId)
    projects[projectId].tasks = [];
    newTask.map(task => addTaskToProject(projectId, task))

  }


  return {
    createProject,
    addTaskToProject,
    fetchTask,
    fetchProjects,
    setProjects,
    removeTask
  }
}();
