import { useFetchContent } from "./useFetchContent";
import { Project } from "../_types/project";

export const useFetchProjects = (): Promise<Project[]> =>
  useFetchContent("projects.json");
