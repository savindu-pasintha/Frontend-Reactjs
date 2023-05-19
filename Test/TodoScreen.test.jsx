import { describe, it, expect } from 'vitest';
import { render,screen } from '@testing-library/react';
import Todo from '../src/pages/todo/Todo';

test('TodoScreen should render todos and allow adding new todos', () => {
    // Render the TodoScreen component
    const { getByTestId, getByText, getByPlaceholderText } = render(<Todo />);
    const todoList = getByTestId('todo-list');
    expect(todoList).toBeInTheDocument();
    expect(todoList.children.length).toBe(3); // Assuming you have 3 initial todos
  
    // Add a new todo
    const newTodoInput = getByPlaceholderText('Add a new todo');
    const addButton = getByText('Add');
    fireEvent.change(newTodoInput, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);
  
    // Assert that the new todo is added
    expect(todoList.children.length).toBe(4);
    expect(todoList.lastChild).toHaveTextContent('New Todo');
  });