import ProjectModelCard from '@src/models/project/projectModelCard';

export const filterByCategories = (idsCategories: string[], projects: ProjectModelCard[]): ProjectModelCard[] => {
    if(!idsCategories.length) return projects;
    return projects.filter((project) => {
        return project.categories.find((category) => {
            return idsCategories.includes(category.id);
        });
    });
}