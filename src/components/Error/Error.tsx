import React from 'react';
import { Button, Result } from 'antd';

const Error: React.FC = () => (
  <Result
    status='500'
    subTitle='Sorry, something went wrong. Try to refresh the page.'
  />
);

export default Error;
