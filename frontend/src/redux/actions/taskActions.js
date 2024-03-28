import api from "../../api/index"
import { MARK_TASK_COMPLETED_FAILURE, MARK_TASK_COMPLETED_REQUEST, MARK_TASK_COMPLETED_SUCCESS } from "./actionTypes"
// import { toast } from "react-toastify";



export const markTaskCompleted = (taskId) => async (dispatch, getState) => {
    try {
      dispatch({ type: MARK_TASK_COMPLETED_REQUEST });
      const { token } = getState().authReducer; // Assuming you store the token in your authReducer state
      const { data } = await api.put(`/tasks/${taskId}`, { completed: true }, { headers: { Authorization: token } });
      dispatch({
        type: MARK_TASK_COMPLETED_SUCCESS,
        payload: { taskId, data } // You may receive updated task data from the backend
      });
    } catch (error) {
      dispatch({
        type: MARK_TASK_COMPLETED_FAILURE,
        payload: { error }
      });
    }
  };
  