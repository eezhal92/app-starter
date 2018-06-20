// @flow

import React from 'react';

type TextProps = {
  message: string,
};

const Text = (props: TextProps) => <div>{props.message}</div>;

export default Text;
