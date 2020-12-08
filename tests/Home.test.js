import React from 'react';
import Home from '../src/Pages/Home.js';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils"

// test('test the homepage loads with Title and Welcome', () => {
//   render(<Home />);
//   expect(screen.getByText('Catch Me')).toBeInTheDocument();
// });

// let container = null;
// beforeEach(() => {
//   // setup a DOM element as a render target
//   container = document.createElement("h1");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   // cleanup on exiting
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

// it("renders title", () => {
//   act(() => {
//     render(<Home />, h1);
//   });
//   expect(container.textContent).toBe("Catch Me");
// });
describe('<Home />', () => {
  it('renders h1', () => {
    const wrapper = mount(<Home variant="h1" />);
    const elem = wrapper.find('h1');
    expect(elem.length).toBe(1);
  });
});