import * as React from 'react';
import { IOResult } from '../model';

//Интерфейс для свойств
interface IProps {
  result: IOResult[];
  handleOnClick: (string)=> void;
};

const Result = (props: IProps) => {
  return (
    <section className="main">
      <ul className="todo-list">
        {props.result.map(item => {
          return (
            <li key={item.id}>
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label title =  {item.location} onClick={ props.handleOnClick }>
                  {item.name}
                </label>
                <button className="destroy" title = "Кнопка не используется" />
              </div>
            </li>
            );
          })
        }
      </ul>
    </section>
  );
}

export default Result;
