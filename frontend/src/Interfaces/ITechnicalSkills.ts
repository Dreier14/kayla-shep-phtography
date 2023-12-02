export interface IPhotos {
    data: { photos: IPhotosDictionary };
}

export interface IPhotosDictionary {
    [key: string]: Array<string>;
}
