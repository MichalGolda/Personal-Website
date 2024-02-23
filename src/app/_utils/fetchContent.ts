import { promises as fs } from "fs";
import path from "path";

export const fetchContent = (contentFileName: string) => 
    fs
        .readFile(`${path.resolve("content")}/${contentFileName}`, "utf-8")
        .then((value) => JSON.parse(value));