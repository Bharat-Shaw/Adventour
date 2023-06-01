import {legacy_createStore} from 'redux'
import { reducer } from './reducer';


const store=legacy_createStore(reducer);

store.subscribe(()=>{
    console.log(store.getState());
})

export {store}