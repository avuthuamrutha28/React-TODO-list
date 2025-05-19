import React from 'react';
import './App.css';
import './index.css';
import TaskTable,  {type Task} from './components/TaskTable';

const taskList: Task[] = [
  {
    id: '1',
    title: 'React',
    description: 'Complete Basics',
    dueDate: '2024-07-02',
    priority: 'MEDIUM',
    status: 'IN_PROGRESS',
    archived: false,
  },
  {
    id: '2',
    title: 'TypeScript',
    description: 'Complete full TS course',
    dueDate: '2024-07-03',
    priority: 'HIGH',
    status: 'COMPLETED',
    archived: false,
  },
  {
    id: '3',
    title: 'HTML',
    description: 'Complete HTML colors',
    dueDate: '2024-07-04',
    priority: 'LOW',
    status: 'PENDING',
    archived: false,
  },
  {
    id: '4',
    title: 'CSS',
    description: 'Master CSS',
    dueDate: '2024-07-05',
    priority: 'MEDIUM',
    status: 'IN_PROGRESS',
    archived: false,
  },
  {
    id: '5',
    title: 'SQL',
    description: 'complete joins',
    dueDate: '2024-07-06',
    priority: 'HIGH',
    status: 'COMPLETED',
    archived: false,
  },
];

const App: React.FC = () => {
  return (
    <div className="App">
      <TaskTable tasks={taskList} />
    </div>
  );
};

export default App;
