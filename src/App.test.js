import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App features={FEATURES} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
