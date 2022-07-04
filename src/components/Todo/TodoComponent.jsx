import * as React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./todo.css";
import { todoService } from "../../services/todo.Service";

const TodoComponent = ({tasks}) => {
  
    const renderList = tasks.map((task) => {
        const deleteTask = () => {
            todoService.deleteTodo(task._id);
            window.location.reload(false);
        };
        const { _id, toDoName, toDoDescription, startDate, endDate } = task;
        return (
            <Card sx={{ maxWidth: 345 }} style={{backgroundColor:"gainsboro",marginLeft:"15px",marginTop:"15px"}} key={_id}>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Todo name : {toDoName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Description : {toDoDescription}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Begin : {startDate}
        </Typography>
        <Typography  variant="body2" color="text.secondary">
        End : {endDate}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" icon="pi pi-pencil" href={`/todo/update/${_id}`}>Update</Button>
        <Button size="small" icon="pi pi-trash" onClick={deleteTask}>Delete</Button>
      </CardActions>
    </Card>
        );
    });

    return renderList;
};
export default TodoComponent;