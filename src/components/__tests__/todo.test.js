import { render, screen, cleanup } from '@testing-library/react';
import Todo from '../todo';
import renderer from 'react-test-renderer';



// cleans up render after each test.
afterEach(() => {
    cleanup();
})

test('should render non-completed todo', () => {
    //basic render test

    const todo = {id: 1, title: 'wash dishes', completed: false}
    render(<Todo todo={todo}/>);

    // grab element from screen and test by unique id.
    const todoElement = screen.getByTestId('todo-1');

    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('wash dishes');
    expect(todoElement).not.toContainHTML('<strike>');
   
})


test('should render completed todo', () => {
    //basic render test

    const todo = {id: 2, title: 'make dinner', completed: true}
    render(<Todo todo={todo}/>);

    // grab element from screen and test by unique id.
    const todoElement = screen.getByTestId('todo-2');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('make dinner');
    expect(todoElement).toContainHTML('strike');
})


// use snapshots

test('matches snapshot', () => {
    const todo = {id: 1, title: 'wash dishes', completed: false}
    const tree = renderer.create(<Todo todo= {todo }/>).toJSON();
    console.log(tree);
    expect(tree).toMatchSnapshot();
})
