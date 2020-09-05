/* eslint-disable */
const API = '/api';

//simulation of logged in user
const fetchUser = async ()=> {
  const storage = window.localStorage;
  const userId = storage.getItem('userId'); 
  if(userId){
    try {
      return (await axios.get(`${API}/users/detail/${userId}`)).data;
    }
    catch(ex){
      storage.removeItem('userId');
      return fetchUser();
    }
  }
  const user = (await axios.get(`${API}/users/random`)).data;
  storage.setItem('userId', user.id);
  return  user;
};

import React from 'react';
import ReactDOM from 'react-dom';
import thunks from 'redux-thunk';
import { HashRouter, Link, Route } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import axios from 'axios';

//constants
const SET_AUTH = 'SET_AUTH';
const SET_NOTES = 'SET_NOTES';
const CREATE_NOTE = 'CREATE_NOTE';
const DESTROY_NOTE = 'DESTROY_NOTE';

//action creators
const setAuth = (auth)=> ({ type: SET_AUTH, auth });
const setNotes = (notes)=> ({ type: SET_NOTES, notes });
const _createNote = (note)=> ({ type: CREATE_NOTE, note });
const _destroyNote = (note)=> ({ type: DESTROY_NOTE, note });

//thunks
const getAuth = ()=> {
  return async(dispatch)=> {
    const auth = await fetchUser();
    await dispatch(setAuth(auth));
    return dispatch(getNotes());
  };
};

const getNotes = ()=> {
  return async(dispatch, getState)=> {
    const notes = (await axios.get(`${API}/users/${getState().auth.id}/notes`)).data;
    return dispatch(setNotes(notes));
  };
};

const createNote = (note)=> {
  return async(dispatch, getState)=> {
    const created = (await axios.post(`${API}/users/${getState().auth.id}/notes`, note)).data;
    return dispatch(_createNote(created));
  };
};

const destroyNote = (note)=> {
  return async(dispatch, getState)=> {
    await axios.delete(`${API}/users/${getState().auth.id}/notes/${note.id}`, note);
    return dispatch(_destroyNote(note));
  };
};

//store
const store = createStore(
  combineReducers({
    auth: (state = {}, action)=> {
      if(action.type === SET_AUTH){
        return action.auth;
      }
      return state;
    },
    notes: (state = [], action)=> {
      if(action.type === SET_NOTES){
        return action.notes;
      }
      if(action.type === CREATE_NOTE){
        return [...state, action.note];
      }
      if(action.type === DESTROY_NOTE){
        return state.filter( note => note.id !== action.note.id);
      }
      return state;
    }
  }), applyMiddleware(thunks)
);


const { render } = ReactDOM;
const { Component } = React;

class _Create extends Component{
  constructor(){
    super();
    this.state = {
      text: '',
      error: ''
    };
    this.create = this.create.bind(this);
  }
  async create(){
    try {
      await this.props.create(this.state)
    }
    catch(ex){
      this.setState({ error: ex.response.data.message });
    }
  }
  render(){
    const { text, error } = this.state;
    return (
      <div>
        { error && <div className='error'>{ error}</div> }
        <input value={ text } onChange={(ev)=> this.setState({ text: ev.target.value})} />
        <button disabled={ !text} onClick={ this.create }>Create Note</button>
      </div>
    );
  }
}

const Create = connect(null, (dispatch)=> {
  return {
    create: (note)=> dispatch(createNote(note))
  };
})(_Create);

const _Nav = ({ auth, notes })=> {
  return (
    <div>
      <nav>
        <Link to='/notes'>Notes ({ notes.length })</Link>
        <Link to='/notes/create'>Create</Link>
      </nav>
      <h1>Welcome { auth.fullName }</h1>
    </div>
  );
};

const Nav = connect(
  ({ auth, notes })=> {
    return {
      auth,
      notes
    };
  }
)(_Nav);

const _Notes = ({ notes, destroy })=> {
  return (
    <ul>
      {
        notes.map( note => {
          return (
            <li key={ note.id }>{ note.text } <button onClick={ ()=> destroy(note)}>x</button></li>
          );
        })
      }
    </ul>
  );
}

const Notes = connect((state)=> state, (dispatch)=> {
  return {
    destroy: (note)=> dispatch(destroyNote(note))
  }
})(_Notes); 

class _App extends Component{
  componentDidMount(){
    this.props.fetchUser()
  }
  render(){
    return (
      <HashRouter>
        <Route component={ Nav } />
        <Route path='/notes' component={ Notes } />
        <Route path='/notes/create' component={ Create } />
      </HashRouter>
    );
  }
}

const App = connect(({ auth })=> {
  return {
    auth
  };
}, (dispatch)=> {
  return {
    fetchUser: ()=> dispatch(getAuth())
  };
})(_App);

const root = document.querySelector('#root');
render(<Provider store={ store }><App /></Provider>, root);