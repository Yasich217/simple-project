import * as React from 'react';

interface IProps {
  handleOnChange: (string)=> void;
  query?: string;
}

const TextInput = (props: IProps) => { 
  return (
    <input
      className="new-todo"
      type="text"
      value={props.query}
      placeholder="Начните искать здесь..."
      onChange={props.handleOnChange }
    />
  );
}

export default TextInput;
