const ProjectFactory = (projectName, tasks = []) => {
    return {
        projectName,
        tasks,
    }
}

export default ProjectFactory
