const TaskFactory = (name, description, dueDate, priority, createdAt) => {
    return {
        name,
        description,
        dueDate,
        priority,
        createdAt,
        status: 0
    }
}

export default TaskFactory
