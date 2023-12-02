import React from 'react';
// File pattern will be to separate internal components from package imports.
import { TopLevelInfo } from '../TopLevelInfo/TopLevelInfo';
import { observer } from 'mobx-react-lite';
import { Photos } from '../Photos/Photos';
import { IDataStoreInfo } from '../../Interfaces';

// The Home component will serve as the base entry point for our application as we add more components.
export const Home: React.FC<IDataStoreInfo> = observer(({ store }): JSX.Element => {
    return (
        <>
            <TopLevelInfo />
            <br />
            <Photos store={store} />
        </>
    );
});
