import { createStore } from 'vuex'
import imgs from './images';
const APIKEY = 'YOUR API KEY';
const host = 'https://api.openweathermap.org';
const lat = 41.30108557176432;
const lon = 69.26905977506551;
import * as connect from '../assets/js/fopen';
let cities = localStorage.getItem('cities') ? JSON.parse(localStorage.getItem('cities')) : []
export default createStore({
  state: {
      data: {},
      dataPage: {},
      showHello: true,
      indexImg: 0,
      undef: false,
      foundCities: cities,
      search: '',
      APIKEY: APIKEY,
      host: host
  },
  mutations: {
    getMainWeather(state, payload) {
      if(payload.page == 'main') state.data = payload;
      else state.dataPage = payload;
    },
    setHello(state, bool) {
      state.showHello = bool;
    }, 
    setIndexImg(state, idx) {
      state.indexImg = idx;
    },
    setUndef(state, bool) {
      state.undef = bool;
    },
    setFounds(state, city) {
      state.foundCities.push(city);
      localStorage.setItem('cities', JSON.stringify(state.foundCities));
    },
    setSearch(state, val) {
      state.search = val;
    } 
  },
  actions: {
      getMainWeather({state, commit}, links) {
        let url = `${host}/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&lang=ru&APPID=${APIKEY}`;
        let url2 = `${host}/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=5&lang=ru&units=metric&appid=${APIKEY}`;
          connect.weatherData(links.url || url, links.url2 || url2).then(res => {
              const page = links.url ? 'other' : 'main';
              commit('getMainWeather', {...res, page});
              console.log(res);
              commit('setHello', false);
              let index = state.imgs.imgs.findIndex(item => item.main == res.daily.weather[0].main.toLowerCase());
              commit('setIndexImg', index);
          })
          .catch(e => {
            console.log(e);
            commit('setHello', false)
          })
      },
      searchResult({state, commit}, val) {
        let url3 = `${host}/geo/1.0/direct?q=${val}&appid=${APIKEY}`;
        connect.fOPen(url3).then(res => {
          const length = state.foundCities.length;
          const id = length > 0 ? state.foundCities[state.foundCities.length - 1].id+1 : 1;
          if(res.length > 0) {
            const obj = {id, lat: res[0].lat, lon: res[0].lon, text: res[0].name};
            if(state.foundCities.length > 0) {
                if(state.foundCities.every(item => item.text.toLowerCase() != res[0].name.toLowerCase() ? item : false)) {
                  commit('setFounds', obj);
                }
            }
            else {
              commit('setFounds', obj)
            }
            commit('setUndef', false);
            commit('setSearch', '');
          }
          else {
            commit('setUndef', true);
          }
        })
      }

  },
  modules: {
    imgs
  }
})
