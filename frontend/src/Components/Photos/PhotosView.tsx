import { Container, Spinner } from "react-bootstrap";
import ModalImage from "react-modal-image";

import { IPhotosDictionary } from "../../Interfaces";

import "../../App.scss";
import "./PhotosView.scss";

const Loading = (
    <div className="center">
        <Spinner />
        <>...Loading Photos</>
    </div>
)

export const PhotosView: React.FC<IPhotosDictionary> = (photoData: IPhotosDictionary): JSX.Element => {
    const centered = "centered-content";
    const renderPhotosView = (photosData: IPhotosDictionary) => {
        return (
            Object.entries(photosData)
                .map(([key, value]) =>
                    <>
                        <div className={`${centered} photo-flex`} key={key}>
                            {
                                value.map((e, i) => {
                                    console.log(e)
                                    const className = key === "Portraits" ? "portrait-photos" : "landscape-photos";
                                    return (
                                        photoData ? <ModalImage
                                            key={i}
                                            className={className}
                                            small={e}
                                            large={e}
                                        /> : Loading
                                    );
                                })
                            }
                        </div>
                    </>
                ));
    };

    return (
        <>
            <h1 className={`${centered} custom-font`}>Portfolio</h1>
            <Container >
                {renderPhotosView(photoData)}
            </Container>
        </>
    );
}