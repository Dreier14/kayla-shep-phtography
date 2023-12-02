import axios from "axios";
import { action, makeObservable, observable } from "mobx";
import {
    IPhotos,
    IPhotosDictionary,
    // IProjects,
    // IProjectsDictionary,
} from "../Interfaces/index";

export const BASE_URL = {
    apiPath: import.meta.env.VITE_BASE_URL,
};

export class DataStore {
    @observable isLoading: boolean = true;
    @observable hasError: boolean = false;
    @observable photos: IPhotosDictionary | undefined = undefined;
    // @observable projects: IProjectsDictionary | undefined = undefined;

    constructor() {
        makeObservable(this);
    }

    @action
    setIsLoading(isLoading: boolean): void {
        this.isLoading = isLoading;
    }

    @action
    setError(hasError: boolean): void {
        this.hasError = hasError;
    }

    @action
    setPhotos(photos: IPhotosDictionary | undefined): void {
        this.photos = photos;
    }

    // @action
    // setProjects(projects: IProjectsDictionary | undefined): void {
    //     this.projects = projects;
    // }

    @action
    async getAllPhotos(): Promise<void> {
        try {
            this.setIsLoading(true);
            // We could create a helper function to also get the endpoint and configure it depending on the environment.
            const response: IPhotos = await axios.get(
                `${BASE_URL.apiPath}/api/getAllPhotos`
            );

            console.log(response);

            this.setPhotos(response.data.photos);
        } catch (e: unknown) {
            // We want to have an error to the console for the developers if the API has an issue.
            console.error(e);
            this.setError(true);
        } finally {
            this.setIsLoading(false);
        }
    }

    // @action
    // async getAllProjects(): Promise<void> {
    //     try {
    //         this.setIsLoading(true);
    //         // We could create a helper function to also get the endpoint and configure it depending on the environment.
    //         const response: IProjects = await axios.get(`/api/getProjects`);
    //         this.setProjects(response.data.projects);
    //     } catch (e: any) {
    //         // We want to have an error to the console for the developers if the API has an issue.
    //         console.error(e);
    //         this.setError(true);
    //     } finally {
    //         this.setIsLoading(false);
    //     }
    // }
}
