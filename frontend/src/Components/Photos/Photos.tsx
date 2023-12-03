import React from 'react';
// File pattern will be to separate internal components from package imports.
import { IDataStoreInfo } from '../../Interfaces';
import { PhotosView } from './PhotosView';
import Sammie from '../../Portraits/Sammie.jpg';
import Photo1 from '../../Portraits/Photo1.jpg';
import Photo2 from '../../Portraits/Photo2.jpg';
import Photo3 from '../../Portraits/Photo3.jpg';
import Photo4 from '../../Portraits/Photo4.jpg';
import Photo5 from '../../Portraits/Photo5.jpg';
import Photo6 from '../../Portraits/Photo6.jpg';
import Photo7 from '../../Portraits/Photo7.jpg';
import Photo8 from '../../Portraits/Photo8.jpg';
import Photo9 from '../../Portraits/Photo9.jpg';
import Photo1L from '../../Landscapes/Photo1.jpg';

const PhotosObj = {
    Portraits: [Sammie, Photo1, Photo2, Photo3, Photo4, Photo5, Photo6, Photo7, Photo8, Photo9],
    Landscapes: [Photo1L]
}

export const Photos: React.FC<IDataStoreInfo> = (): JSX.Element => {
    // We want to cache this because the props dont change as it is static, this will help load performance.
    return (
        <>
            <PhotosView  {...PhotosObj} />
        </>
    );
};