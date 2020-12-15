import React, { useEffect } from 'react';
import { Redirect, connect } from 'umi';
const Auth = ({ children, auth, authLoading }) => {
  useEffect(() => {
    auth();
  }, []);

  return <div>{children}</div>;
};

const mapDispatchProps = dispatch => {
  return {
    auth: () => {
      dispatch({ type: 'Auth/auth' });
    },
  };
};
const mapStateProps = ({ loading }) => {
  return {};
};
export default connect(mapStateProps, mapDispatchProps)(Auth);
