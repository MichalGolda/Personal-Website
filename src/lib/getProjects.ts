import { Project } from "@/types";
import fsPromises from "fs/promises";
import path from "path";

export const getProjects = async (): Promise<Project[]> => {
  const filePath = path.join(process.cwd(), "projects.json");
  return fsPromises
    .readFile(filePath)
    .then((fileContent) => JSON.parse(fileContent.toString()));
};
