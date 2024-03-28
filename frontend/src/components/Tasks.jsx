import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Loader from './utils/Loader';
import Tooltip from './utils/Tooltip';

const Tasks = () => {

  const authState = useSelector(state => state.authReducer);
  const [tasks, setTasks] = useState([]);
  const [fetchData, { loading }] = useFetch();
  const [pagination, setPagination] = useState({
    page: 1,
    totalPages: 1,
    totalCount: 0
  });

  const [sortOption, setSortOption] = useState(''); // Add state for sorting option

// fetch task
  const fetchTasks = useCallback((page, limit, sortOption) => {
    let url = `/tasks?page=${page}&limit=${limit}&sort=${sortOption}`;
    if (sortOption === 'Completed') {
      url += '&completed=true'; // Sort by completed tasks
    } else if (sortOption ==! 'Completed') {
      url += '&completed=false'; // Sort by not completed tasks
    }
    
    const config = {
      url: url,
      method: "GET",
      headers: { Authorization: authState.token }
    };
  
    fetchData(config, { showSuccessToast: false }).then(data => {
      // Update state with the fetched tasks
      setTasks(data.tasks);
      // Optionally, update state with pagination metadata
      setPagination({
        page: data.page,
        totalPages: data.totalPages,
        totalCount: data.totalCount
      });
    }).catch(error => {
      console.error('Error fetching tasks:', error);
      // Handle error
    });
  }, [authState.token, fetchData]);
  
  useEffect(() => {
    if (!authState.isLoggedIn) return;
    fetchTasks();
  }, [authState.isLoggedIn, fetchTasks]);

// delete task

  const handleDelete = (id) => {
    const config = { url: `/tasks/${id}`, method: "delete", headers: { Authorization: authState.token } };
    fetchData(config).then(() => fetchTasks());
  }

  //  handle task
  const handleUpdate = (id, updatedFields) => {
    const config = {
      url: `/tasks/${id}`,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: authState.token
      },
      body: JSON.stringify(updatedFields)
    };
  
    fetchData(config)
      .then(() => fetchTasks())
      .catch((error) => {
        console.error("Error updating task:", error);
        // Handle update error
      });
  };

  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    setSortOption(selectedOption);
    fetchTasks(1, 4, selectedOption); // Fetch tasks with the selected sorting option
  };



  
  return (
    <>
      <div className="my-2 mx-auto max-w-[700px] py-4">
        
      <div className="flex justify-end mb-4">
          <select className="border rounded-md p-2" value={sortOption} onChange={handleSortChange}>
            <option value="">Sort by</option>
            <option value="createdAt">Completed</option>
            <option value="updatedAt">Incompleted</option>
          
          </select>
        </div>
        {tasks.length !== 0 && <h2 className='my-2 ml-2 md:ml-0 text-xl'>Your tasks ({tasks.length})</h2>}
        {loading ? (
          <Loader />
        ) : (
          <div>
            {tasks.length === 0 ? (

              <div className='w-[600px] h-[300px] flex items-center justify-center gap-4'>
                <span>No tasks found</span>
                <Link to="/tasks/add" className="bg-blue-500 text-white hover:bg-blue-600 font-medium rounded-md px-4 py-2">+ Add new task </Link>
              </div>

            ) : (
              // tasks.map((task, index) => (
              //   <div key={task._id} className='bg-white my-4 p-4 text-gray-600 rounded-md shadow-md'>
              //     <div className='flex'>

              //       <span className='font-medium'>Task #{index + 1}</span>

              //       <Tooltip text={"Edit this task"} position={"top"}>
              //         <Link to={`/tasks/${task._id}`} className='ml-auto mr-2 text-green-600 cursor-pointer'>
              //           <i className="fa-solid fa-pen"></i>
              //         </Link>
              //       </Tooltip>

              //       <Tooltip text={"Delete this task"} position={"top"}>
              //         <span className='text-red-500 cursor-pointer' onClick={() => handleDelete(task._id)}>
              //           <i className="fa-solid fa-trash"></i>
              //         </span>
              //       </Tooltip>

              //     </div>
              //     <div className='whitespace-pre'>{task.description}</div>
              //   </div>
              // ))
              tasks.map((task, index) => (
                <div key={task._id} className={`bg-white my-4 p-4 text-gray-600 rounded-md shadow-md ${task.completed ? 'bg-green-100' : ''}`}>
                  <div className='flex items-center'>
                    <span className='font-medium mr-2'>{task.completed ? 'Completed' : 'Task #' + (index + 1)}</span>
                    {!task.completed && (
                      <>
                        <Tooltip text={"Mark as completed"} position={"top"}>
                          <span className='text-teal-600 cursor-pointer' onClick={() => handleUpdate(task._id, { completed: true })}>
                            <i className="fa-solid fa-check-circle"></i>
                          </span>
                        </Tooltip>
                        <Tooltip text={"Edit this task"} position={"top"}>
                          <Link to={`/tasks/${task._id}`} className='ml-auto mr-2 text-blue-600 cursor-pointer'>
                            <i className="fa-solid fa-pen"></i>
                          </Link>
                        </Tooltip>
                        <Tooltip text={"Delete this task"} position={"top"}>
                          <span className='text-red-500 cursor-pointer' onClick={() => handleDelete(task._id)}>
                            <i className="fa-solid fa-trash"></i>
                          </span>
                        </Tooltip>
                      </>
                    )}
                  </div>
                  <div className='whitespace-pre'>{task.description}</div>
                </div>
              ))
              
            )}
            <div className="flex justify-center mt-4">
                  {pagination.page > 1 && (
                    <button className="bg-blue-500 text-white hover:bg-blue-600 font-medium rounded-md px-4 py-2" onClick={() => fetchTasks(pagination.page - 1, 4)}>Previous</button>
                  )}
                  <span className='px-4 py-2'>{pagination.page} of {pagination.totalPages}</span>
                  {pagination.page < pagination.totalPages && (
                    <button className="bg-blue-500 text-white hover:bg-blue-600 font-medium rounded-md px-4 py-2" onClick={() => fetchTasks(pagination.page + 1, 4)}>Next</button>
                  )}
                </div>
          </div>
        )}
      </div>
    </>
  )

}

export default Tasks