
import { Navigate } from 'umi';
import React from 'react';

const withAuth = (Component: any) => () => {
    const isLogin = true;
    if (isLogin) {
        return <Component />;
    } else {
        return <Navigate to="/login" />;
    }
};
export default withAuth;
