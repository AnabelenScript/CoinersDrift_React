import React from 'react';

// Modificamos el componente usando React.forwardRef
const Image = React.forwardRef(({ src, alt, ...props }, ref) => (
  <img ref={ref} src={src} alt={alt} {...props} />
));

export default Image;
