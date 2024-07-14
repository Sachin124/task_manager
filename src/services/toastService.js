import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const toastService = {
  success: (message, options = {}) => {
    toast.success(message, {
      position: options.position || 'top-right',
      autoClose: options.autoClose || 3000,
      hideProgressBar: options.hideProgressBar !== undefined ? options.hideProgressBar : false,
      closeOnClick: options.closeOnClick !== undefined ? options.closeOnClick : true,
      pauseOnHover: options.pauseOnHover !== undefined ? options.pauseOnHover : true,
      draggable: options.draggable !== undefined ? options.draggable : true,
    });
  },

  error: (message, options = {}) => {
    toast.error(message, {
      position: options.position || 'top-right',
      autoClose: options.autoClose || 3000,
      hideProgressBar: options.hideProgressBar !== undefined ? options.hideProgressBar : false,
      closeOnClick: options.closeOnClick !== undefined ? options.closeOnClick : true,
      pauseOnHover: options.pauseOnHover !== undefined ? options.pauseOnHover : true,
      draggable: options.draggable !== undefined ? options.draggable : true,
    });
  },

  warning: (message, options = {}) => {
    toast.warning(message, {
      position: options.position || 'top-right',
      autoClose: options.autoClose || 3000,
      hideProgressBar: options.hideProgressBar !== undefined ? options.hideProgressBar : false,
      closeOnClick: options.closeOnClick !== undefined ? options.closeOnClick : true,
      pauseOnHover: options.pauseOnHover !== undefined ? options.pauseOnHover : true,
      draggable: options.draggable !== undefined ? options.draggable : true,
    });
  },

  info: (message, options = {}) => {
    toast.info(message, {
      position: options.position || 'top-right',
      autoClose: options.autoClose || 3000,
      hideProgressBar: options.hideProgressBar !== undefined ? options.hideProgressBar : false,
      closeOnClick: options.closeOnClick !== undefined ? options.closeOnClick : true,
      pauseOnHover: options.pauseOnHover !== undefined ? options.pauseOnHover : true,
      draggable: options.draggable !== undefined ? options.draggable : true,
    });
  },
};

export default toastService;
