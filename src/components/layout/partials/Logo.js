import React from 'react';
import classNames from 'classnames';
import Image from '../../elements/Image';

const Logo = ({
  className,
  showBrandName,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <a href="/" className="brand-container">
          <Image
            src={require('./../../../assets/images/logo.svg')}
            alt="Open"
            width={32}
            height={32} />
            {showBrandName && <span className="brand-name ml-8"> Cross Script</span>}
        </a>
      </h1>
    </div>
  );
}

export default Logo;