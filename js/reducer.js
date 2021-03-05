let state

const initialState = {count: 0}

function reducer(state = initialState, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1};
    default:
      return state;
  }
} 

function dispatch(action){
    state = reducer(state, action);
    render();
}

function render(){
    let container = document.getElementById('container');
    container.textContent = state.count;
}

dispatch({type: '@@init'})

let button = document.getElementById('button');

button.addEventListener('click', () => {
  dispatch({type: 'INCREASE_COUNT'})
}) 