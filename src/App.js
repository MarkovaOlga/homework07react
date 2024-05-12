import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTasks } from './reducers/tasksSlice';

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.entities);
  const loading = useSelector((state) => state.tasks.loading);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      <h1>Tasks List</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
