import React, { useMemo } from 'react';
import { observer } from 'mobx-react-lite';
// File pattern will be to separate internal components from package imports.
import { IDataStoreInfo } from '../../Interfaces';
import { renderComponentStates } from '../../RenderComponentStates/RenderComponentStates';
import { PhotosView } from './PhotosView';

export const Photos: React.FC<IDataStoreInfo> = observer(({ store }): JSX.Element => {
    const compInfoString = 'Photos';
    // We want to cache this because the props dont change as it is static, this will help load performance.
    useMemo(() => {
        store.getAllPhotos();
    }, []);

    return (
        <>
            {renderComponentStates(store.isLoading, store.hasError, <PhotosView {...store.photos} />, compInfoString)}
        </>
    );
});