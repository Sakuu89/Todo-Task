import { MARK_TASK_COMPLETED_FAILURE, MARK_TASK_COMPLETED_REQUEST, MARK_TASK_COMPLETED_SUCCESS } from "../actions/actionTypes";

const initialState = {
  tasks: [], // Assuming tasks are stored in an array
  loading: false,
  error: null
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case MARK_TASK_COMPLETED_REQUEST:
      return { ...state, loading: true, error: null };
    case MARK_TASK_COMPLETED_SUCCESS:
      const updatedTasks = state.tasks.map(task => 
        task.id === action.payload.taskId ? { ...task, completed: true } : task
      );
      return { ...state, tasks: updatedTasks, loading: false, error: null };
    case MARK_TASK_COMPLETED_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};

export default taskReducer;
