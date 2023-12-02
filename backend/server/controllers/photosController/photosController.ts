import { Request, Response, NextFunction } from "express";
import { photos } from "../../serverData/photos/photos";
import { projects } from "../../serverData/projects/projects";

export const getAllPhotos = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        res.status(200).json({ photos });
    } catch (error: unknown) {
        console.error(error, "Unable to get all photos");
        res.status(500);
    }
};

export const getAllProjects = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        res.status(200).json({ projects });
    } catch (error: unknown) {
        console.error(error, "Unable to get Projects Data");
        res.status(500);
    }
};
