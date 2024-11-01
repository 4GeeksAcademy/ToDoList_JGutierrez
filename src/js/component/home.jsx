import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [taskList, setTaskList] = useState(["cortar el pasto", "cocinar algo", "esperar al codespace mientras carga!!!"]);
	const [task, setTask] = useState("");

	console.log(taskList)


	const borrarTarea = (e, index) => {
		e.preventDefault();
		let listaFiltro = taskList.filter((task,id)=>{
			return (id!=index)
		})
		setTaskList(listaFiltro);
	}

	const agregarTarea = (e) => {
		e.preventDefault();
		if(task === "") {
			alert("La tarea está vacía")
		} else {

			setTaskList([...taskList, task])
			setTask("");
		}
	}

	const eventoEnter = (e) => {
		if(e.key === "Enter"){
			agregarTarea(e)
		}
	}


	return (
		<div className="container text-center">
			<h1>Lista de tareas</h1>
			<input onKeyDown={eventoEnter} placeholder="Añade una tarea" className="form-control" type="text" onChange={(e)=>setTask(e.target.value)} value={task} />
			<ul className="list-group">
				{taskList.map((currentTask, index)=>(
					<li key={index} className=" list-group-item">
						{currentTask} <i onClick={(e)=>{
							borrarTarea(e,index)
						}} className="text-danger cursor-pointer fa fa-trash float-end"></i>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;
