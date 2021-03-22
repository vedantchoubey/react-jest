import { render, screen, cleanup } from '@testing-library/react';
import Todo from '../../components/todo'


test('should render todo component', () => {
    const todo = { id: 1, title:'to learn', complete: false, };
    render(<Todo todo={todo}/>);
    const todoElement = screen.getByTestId('todo-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('to');
})