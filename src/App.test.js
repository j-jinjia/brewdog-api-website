import { render, screen } from '@testing-library/react';
import App from './App';

it("should match app snapshot ", ()=>{
  const {container} = render (<App/>)
  expect(container).toMatchSnapshot();

})
