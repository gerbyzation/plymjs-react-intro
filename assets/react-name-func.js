import React from 'react';
import ReactDOM from 'react-dom';

const composeIntroSentence = (names) => {
  return names.reduce((prev, next, index) => {
    let sentence = prev;

    if (index === 1) sentence = `Hi! My name is \
      ${names[0]}`;
    sentence = `${sentence}, or ${next}`;
    if (index === names.length-1) sentence += '.';
    return sentence;
  });
};

const Introduction = (props) => {
  const names = ['Gerrit', 'Gerben', 'Garreth', 'Gerby', 'Gerb', 'G', 'The Flying Dutchman'];
  return (
    <div>
      <h1 className='big-header'>Hi!</h1>
      <p>{composeIntroSentence(names)}</p>
    </div>
  );
}

ReactDOM.render(<Introduction />, document.getElementById('root'));

export default Introduction;
