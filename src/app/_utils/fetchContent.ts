import { promises as fs } from "fs";
import { Project } from "@/app/_types/project";
import path from "path";

export const fetchContent = (contentFileName: string) => 
    fs
        .readFile(`${path.resolve("content")}/${contentFileName}`, "utf-8")
        .then((value) => JSON.parse(value));

export const fetchProjects = (): Promise<Project[]> => fetchContent("projects.json");