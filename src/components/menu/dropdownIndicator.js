import React, { type ElementConfig } from 'react';
import { components } from 'react-select';

const DropdownIndicator = (
    props: ElementConfig<typeof components.DropdownIndicator>
  ) => {
  return (
    <components.DropdownIndicator {...props}>
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.67861 1.8337L5.77064 5.68539C5.34503 6.10487 4.65497 6.10487 4.22936 5.68539L0.321394 1.8337C-0.365172 1.15702 0.121082 -8.36609e-08 1.09203 0L8.90797 6.7345e-07C9.87892 7.57111e-07 10.3652 1.15702 9.67861 1.8337Z" fill="white" fillOpacity="0.3"/>
        </svg>
    </components.DropdownIndicator>
  );
};

export default DropdownIndicator;