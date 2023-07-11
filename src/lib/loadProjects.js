import fsPromises from "fs/promises";
import path from "path";

export const loadProjects = async () => {
  const filePath = path.join(process.cwd(), "projects.json");
  return fsPromises
    .readFile(filePath)
    .then((fileContent) => JSON.parse(fileContent));
};
