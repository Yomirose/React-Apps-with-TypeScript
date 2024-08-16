import React, { FC } from 'react';

interface GreetingProps {
  name: string; 
}

const Greeting: FC<GreetingProps> = ({ name }) => {
  return <div className='name'>Hello, {name}!</div>;
};

export default Greeting;
