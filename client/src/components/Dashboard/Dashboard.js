import React, { useState, useEffect, useRef } from "react";
import useStyles from "../../custom-hooks/useStyles";
import style from "../../assets/style";
import { Header, TodoList,ListBoard} from "../index";
import { fetchAPI, postAPI, updateAPI } from "../../services/api";
import { getDimensions } from "../../services/utils";
let idCounter = 0;

const Dashboard = (props) => {
  // const [openTask, setOpenTask] = useState(false);
  // const [id, setId] = useState(null);
  // //const user = JSON.parse(sessionStorage.getItem("userData"));
  // const [taskList, setTaskList] = useState([]);
  // let listData = useRef([]);
   const classes = useStyles(style)();
  // useEffect(() => {
  //   fetchAPI(`/todos`)
  //     .then((res, index) => {
  //       const dimensions = JSON.parse(sessionStorage.getItem(user._id)) || [];
  //       const task = res.data.map((list, index) =>{
  //         return getDimensions(list, ++idCounter, dimensions[index])}
  //       );
  //       setTaskList(task);
  //     })
  //     .catch((err) => console.log(err));
  // }, [user._id]);

  return (
    <div className={classes.body}>
      <ListBoard />
      {/* <Header
        logoutSession={props.logoutSession}
        user={user}
        setOpenTask={setOpenTask}
      />
      <div className={classes.bodyDiv}>
        <div className={classes.todoList}>
          <TodoList
            userId={user._id}
            taskList={taskList}
            setOpenTask={openTaskEditModal}
          />
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
