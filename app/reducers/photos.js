const initialState = [
  {
    id: 1,
    collection_id: 1,
    url: 'https://c2.staticflickr.com/6/5545/9558700370_f2967f344a_q.jpg',
    large_url: 'https://c2.staticflickr.com/6/5545/9558700370_f2967f344a_b.jpg'
  }, {
    id: 2,
    collection_id: 2,
    url: 'https://c2.staticflickr.com/4/3677/9555930451_5fcf9fd608_q.jpg',
    large_url: 'https://c2.staticflickr.com/4/3677/9555930451_5fcf9fd608_b.jpg',
  }
];

const store = function(state = initialState, action) {
  return state;
};

export default store;
