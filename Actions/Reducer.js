import {createStore, applyMiddleware} from 'redux';
import {Image} from 'react-native';
import thunk from 'redux-thunk';
import {act} from 'react-test-renderer';

export const INCREASE_COUNTER = 'INCREASE_COUNTER';
export const DECREASE_COUNTER = 'DECREASE_COUNTER';
export const IMAGES_BLOCK = 'IMAGES_BLOCK';
export const SELECTED_IMAGE = 'SELECTED_IMAGE';
export const OPEN_ALBUM = 'OPEN_ALBUM';

const State = {
  counter: 0,
  arr: [
    {
      album: [
        'https://img.itinari.com/page/content/original/8afcc117-c56c-47a3-bcc1-b6c4fbf6fa80-istock-466453892.jpg?ch=DPR&dpr=1&w=994&s=7e0d3cd3ba8e71f3c001037ba9af2496',
        'https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg',
        'https://www.gettyimages.co.uk/gi-resources/images/500px/983801190.jpg',
      ],
      name: 'album1',
    },
    {
      album: [
        'https://static.toiimg.com/thumb/72975551.cms?width=680&height=512&imgsize=881753',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAU-JytjoV5CeBYJZi3apkhUOLg6gW4YXKjDL5THuvYdurKgbx&usqp=CAU',
        'https://www.w3schools.com/w3css/img_lights.jpg',
      ],
      name: 'album2',
    },
  ],
};

export const albums = (elem, index) => dispatch => {
  dispatch({
    type: OPEN_ALBUM,
    payload: {
      elem:elem,
      index:index
    }
  })
};


export const reducer = (state = State, action) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return {counter: state.counter + 1};
    case DECREASE_COUNTER:
      return {counter: state.counter - 1};
    case OPEN_ALBUM:
      return {
        arr: state.arr,
        ...state,
        selected: action.payload,
      };
  }

  return state;
};

export const store = createStore(reducer, applyMiddleware(thunk));
