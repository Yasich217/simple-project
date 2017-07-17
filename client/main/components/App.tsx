import * as React from 'react';
import Typeahead from '../../todos/components/Typeahead';

class App extends React.Component<void, void> {
  render() {
    return (
      <div className="todoapp">
        <Typeahead />
      </div>
    );
  }
}

export default App;
