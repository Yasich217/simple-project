import * as React from 'react';

interface IProps {
    show: boolean;
}

const Loading = (props: IProps) => {
    return (
      <div className="sk-three-bounce" style = { props.show ? { display: 'block'} : { display: 'none'}}>
        <div className="sk-child sk-bounce1"></div>
        <div className="sk-child sk-bounce2"></div>
        <div className="sk-child sk-bounce3"></div>
      </div>
    );
}


export default Loading;
