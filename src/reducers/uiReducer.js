const zoomVal = 10;
const initialState = {
  zoom: zoomVal * 2,
};

const uiReducer = (state, action) => {
  if (!state) {
    return initialState;
  }

  switch (action.type) {
    case 'ZOOM_IN': {
      return {
        ...state,
        zoom: state.zoom + zoomVal,
      };
    }

    case 'ZOOM_OUT': {
      return {
        ...state,
        zoom: state.zoom - zoomVal,
      };
    }

    default: {
      return state;
    }
  }
};

export default uiReducer;
