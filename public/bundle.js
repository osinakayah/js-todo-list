/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/event_module.js":
/*!****************************!*\
  !*** ./js/event_module.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project_module */ \"./js/project_module.js\");\n/* harmony import */ var _ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui_module */ \"./js/ui_module.js\");\n/* harmony import */ var _task_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task_factory */ \"./js/task_factory.js\");\n\n\n\n\nconst EventModule = function () {\n\n    const attachEventToProject = (projects) => {\n        for (let i = 0; i < projects.length; i ++) {\n            document.querySelector(`#projects-ul li[data-project-id=\"${i}\"]`).onclick = (e) => {\n                const index = e.target.getAttribute('data-project-id');\n                projects.map((project, index) => _ui_module__WEBPACK_IMPORTED_MODULE_1__[\"default\"].removeProjectActive(index))\n                _ui_module__WEBPACK_IMPORTED_MODULE_1__[\"default\"].makeProjectActive(index)\n                eventToFectchTask(index)\n            }\n        }\n    }\n    const openModalToCreateTask = () => {\n\n        const modal = document.getElementById('task-myModal');\n        const btn = document.getElementById(\"taskmyBtn\");\n        const span = document.getElementsByClassName(\"close\")[1];\n        btn.onclick = function() {\n            const projectId = document.getElementById('project_task_relation_id').value\n            if (projectId < 0 ) {\n                alert('Please select a project')\n                return\n            }\n            modal.style.display = \"block\";\n        }\n        span.onclick = function() {\n            document.getElementById('existing_task_id').value = -1\n            modal.style.display = \"none\";\n        }\n\n    }\n    const openModalToCreateProject = () => {\n        const modal = document.getElementById('myModal');\n        const btn = document.getElementById(\"myBtn\");\n        const span = document.getElementsByClassName(\"close\")[0];\n        btn.onclick = function() {\n            modal.style.display = \"block\";\n        }\n        span.onclick = function() {\n            modal.style.display = \"none\";\n        }\n        window.onclick = function(event) {\n            if (event.target == modal) {\n                modal.style.display = \"none\";\n            }\n        }\n    }\n    const eventToCloseModal = () => {\n        document.getElementById('myModal').style.display = \"none\"\n    }\n    const eventCloseTaskModal = () => {\n        document.getElementById('task-myModal').style.display = \"none\";\n    }\n\n    const eventToCreateProject = (e) => {\n        e.preventDefault()\n        const projectName = document.getElementById('new-project-name').value\n        _project_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createProject(projectName);\n        _ui_module__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderProjectList(_project_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetchProjects());\n        eventToCloseModal();\n        attachEventToProject(_project_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetchProjects())\n    }\n\n    const eventToCreateTask = (e) => {\n        e.preventDefault()\n        const projectId = document.getElementById('project_task_relation_id').value\n        if (projectId < 0 ) {\n            alert('Please select a project')\n            return\n        }\n        const taskName = document.getElementById('new-task-name').value\n        const taskDescription = document.getElementById('new-task-desc').value\n        const taskDueDate = document.getElementById('new-task-due-date').value\n        const taskPriority = document.getElementById('new-task-priority').value\n\n        const existingTaskId = document.getElementById('existing_task_id').value\n        if (existingTaskId > -1) {\n            _project_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeTask(parseInt(projectId), parseInt(existingTaskId))\n        }\n\n        const task = Object(_task_factory__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(taskName, taskDescription, taskDueDate, taskPriority, new Date());\n        _project_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTaskToProject(projectId, task);\n        eventCloseTaskModal();\n        eventToFectchTask(projectId)\n    }\n\n    const eventToFectchTask = (projectId) => {\n        const status = 0\n        const tasks = _project_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetchTask(projectId, status);\n\n        const taskTemplate = tasks.reduce((taskRows, task, index) => {\n            return `${taskRows}\n                <tr>\n                    <td>${index + 1}</td>\n                    <td>${task.name}</td>\n                    <td>${task.description}</td>\n                    <td>${task.dueDate}</td>\n                    <td>${task.priority}</td>\n                    <td>${task.createdAt}</td>\n                    <td>\n                        <button data-task-id=\"${index}\" class=\"view-task-btn small-button button-wrap-content\">View</button>\n                        <button data-task-id=\"${index}\" class=\"delete-task-btn small-button button-wrap-content\">Delete</button>\n                    </td>\n                </tr>\n            `\n        }, '');\n        document.getElementById('task-list-table-body').innerHTML = taskTemplate;\n        attachEventsToTask();\n    }\n\n    const attachEventsToTask = () => {\n        const projectId = document.getElementById('project_task_relation_id').value\n\n        const tasks = _project_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetchTask(projectId, 0)\n        for (let i = 0; i < tasks.length; i ++) {\n            document.querySelector(`.view-task-btn[data-task-id=\"${i}\"]`).onclick = (e) => {\n                const modal = document.getElementById('task-myModal');\n                modal.style.display = \"block\";\n                document.getElementById('existing_task_id').value = i\n                const task = _project_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetchTask(projectId, 0)[i]\n\n                document.getElementById('new-task-name').value = task.name\n\n                document.getElementById('new-task-desc').value = task.description\n                document.getElementById('new-task-due-date').value = task.dueDate\n                document.getElementById('new-task-priority').value = task.priority\n\n            }\n            document.querySelector(`.delete-task-btn[data-task-id=\"${i}\"]`).onclick = (e) => {\n                _project_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeTask(projectId, i)\n                eventToFectchTask(projectId)\n            }\n\n        }\n    }\n\n\n    return {\n        attachEvents: () => {\n            openModalToCreateTask();\n            openModalToCreateProject()\n            document.getElementById('create-project-button').addEventListener('click', eventToCreateProject);\n            document.getElementById('create-task-button').addEventListener('click', eventToCreateTask)\n\n            attachEventToProject(_project_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetchProjects())\n\n        },\n        attachEventToProject\n    }\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventModule);\n\n\n//# sourceURL=webpack:///./js/event_module.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _event_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event_module */ \"./js/event_module.js\");\n/* harmony import */ var _ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui_module */ \"./js/ui_module.js\");\n\n\n\n_ui_module__WEBPACK_IMPORTED_MODULE_1__[\"default\"].init()\n_event_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].attachEvents()\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/project_factory.js":
/*!*******************************!*\
  !*** ./js/project_factory.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ProjectFactory = (projectName, tasks = []) => {\n    return {\n        projectName,\n        tasks,\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectFactory);\n\n\n//# sourceURL=webpack:///./js/project_factory.js?");

/***/ }),

/***/ "./js/project_module.js":
/*!******************************!*\
  !*** ./js/project_module.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project_factory */ \"./js/project_factory.js\");\n\n\nconst ProjectModule = function () {\n    const PROJECT_KEY = 'PROJECT_KEY'\n    let projects = localStorage.getItem(PROJECT_KEY) === null ? [] : JSON.parse(localStorage.getItem(PROJECT_KEY))\n\n    const createProject = (name) => {\n        projects.push(Object(_project_factory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(name));\n        saveProjectsToLocalStorage()\n    }\n\n    const addTaskToProject = (projectId, task) => {\n        projects[projectId].tasks.push(task)\n        saveProjectsToLocalStorage();\n    }\n\n    const fetchTask = (projectId, taskStatus) => {\n        return projects[projectId].tasks.filter(task => task.status === taskStatus)\n    }\n\n    const fetchProjects = () => projects\n\n    const saveProjectsToLocalStorage = () => {\n        localStorage.setItem(PROJECT_KEY, JSON.stringify(projects))\n    }\n    const setProjects = (_projects) => {\n        projects = _projects\n        saveProjectsToLocalStorage()\n    }\n\n    const removeTask = (projectId, taskId) => {\n        const newTask = projects[projectId].tasks.filter((task, index) => index !== taskId)\n        projects[projectId].tasks = [];\n        newTask.map(task => addTaskToProject(projectId, task))\n\n    }\n\n\n    return {\n        createProject,\n        addTaskToProject,\n        fetchTask,\n        fetchProjects,\n        setProjects,\n        removeTask\n    }\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectModule);\n\n\n//# sourceURL=webpack:///./js/project_module.js?");

/***/ }),

/***/ "./js/task_factory.js":
/*!****************************!*\
  !*** ./js/task_factory.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst TaskFactory = (name, description, dueDate, priority, createdAt) => {\n    return {\n        name,\n        description,\n        dueDate,\n        priority,\n        createdAt,\n        status: 0\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TaskFactory);\n\n\n//# sourceURL=webpack:///./js/task_factory.js?");

/***/ }),

/***/ "./js/ui_module.js":
/*!*************************!*\
  !*** ./js/ui_module.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project_module */ \"./js/project_module.js\");\n\nconst UIModule = function(){\n    const makeProjectActive = (projectId) => {\n        document.querySelector(`#projects-ul [data-project-id=\"${projectId}\"]`).classList.add(\"active\")\n        document.querySelector('#project_task_relation_id').value = projectId\n    }\n    const removeProjectActive = (projectId) => {\n        document.querySelector(`#projects-ul [data-project-id=\"${projectId}\"]`).classList.remove(\"active\")\n    }\n    const renderProjectList = (projects) => {\n        const projectListTemplate = projects.reduce((projectRows, project, projectIndex) => {\n            return `${projectRows}\n            <li class=\"list-group-item project-item\" data-project-id=\"${projectIndex}\">\n                <a>\n                    <h6 data-project-id=\"${projectIndex}\" class=\"message-list-title\">${project.projectName}</h6>\n                </a>\n            </li>\n        `\n        }, '');\n\n        document.getElementById('projects-ul').innerHTML = projectListTemplate\n    }\n\n    return {\n        init: () => {\n            const projects = _project_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetchProjects();\n            if (projects.length == 0 ) {\n                console.log(\"NO projects\");\n                _project_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createProject(\"Default Project\");\n            }\n            renderProjectList(_project_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetchProjects())\n        },\n        renderProjectList,\n        makeProjectActive,\n        removeProjectActive\n    }\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UIModule);\n\n\n//# sourceURL=webpack:///./js/ui_module.js?");

/***/ })

/******/ });