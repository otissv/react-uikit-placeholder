
'use strict';

import React from 'react';
import uikit from 'react-uikit-base';


const Placeholder = (props) => {
  // CSS classes
  const cssClassNames = uikit.helpers.cleanClasses([
    'uk-placeholder',
    props.classes,
    props.lang,
    props.className
  ]);


  // Return Component
  return <div
    {...props}
    {...uikit.events(props)}
    className={cssClassNames}
    data-kitid={props.kitid}
  >
    {props.children}
  </div>;
};


Placeholder.propTypes = {
  children  : React.PropTypes.any,
  className : React.PropTypes.string,
  classes   : React.PropTypes.array,
  kitid     : React.PropTypes.string,
  lang      : React.PropTypes.string
};


export default uikit.base(Placeholder);
