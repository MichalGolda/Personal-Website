import { promises as fs } from "fs";

export const fetchContent = (contentFileName: string) => 
    fs
        .readFile(`${process.env.contentFolderPath}/${contentFileName}`, "utf-8")
        .then((value) => JSON.parse(value));