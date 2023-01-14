const HtmlWebpackPlugin = require('html-webpack-plugin');

const authorizationUser = 'authorization-user';
const unauthorizedUser = 'unauthorized-user';
const commonUser = 'common-user';
const admin = 'admin-user';

const desktopFolder = 'desktop';
const pagesPaths = './frontend/pages';
const desktopPaths = `${pagesPaths}/${desktopFolder}`;

const authorizationPath = `${desktopPaths}/user/authorization/`;
const commonUserPath = `${desktopPaths}/user/common`;
const adminPath = `${desktopPaths}/admin`;


const desktopPages = [
    {
        name: `${desktopFolder}__${authorizationUser}__create-project`,
        entry: `${authorizationPath}/createProject`,
        outPutFilename: `${desktopFolder}/${authorizationUser}/create-project.html`,
    },
    {
        name: `${desktopFolder}__${authorizationUser}__my-projects`,
        entry: `${authorizationPath}/myProjects`,
        outPutFilename: `${desktopFolder}/${authorizationUser}/my-projects.html`,
    },
    {
        name: `${desktopFolder}__${authorizationUser}__update-project`,
        entry: `${authorizationPath}/updateProject`,
        outPutFilename: `${desktopFolder}/${authorizationUser}/update-project.html`,
    },
    {
        name: `${desktopFolder}__${commonUser}__view-project`,
        entry: `${commonUserPath}/viewProject`,
        outPutFilename: `${desktopFolder}/${commonUser}/view-project.html`,
    },
    {
        name: `${desktopFolder}__${commonUser}__view-projects`,
        entry: `${commonUserPath}/viewProjects`,
        outPutFilename: `${desktopFolder}/${commonUser}/view-projects.html`,
    },
    {
        name: `${desktopFolder}__${admin}__approve-project`,
        entry: `${adminPath}/approveProject`,
        outPutFilename: `${desktopFolder}/${admin}/approve-project.html`,
    },
    {
        name: `${desktopFolder}__${admin}__control-panel`,
        entry: `${adminPath}/controlPanel`,
        outPutFilename: `${desktopFolder}/${admin}/control-panel.html`,
    },
];

const pages = [...desktopPages];

const entries = pages.reduce((acc, page) => {
    acc[page.name] = page.entry;
    return acc;
}, {})

const templates = (isProd) => pages.map((page) => new HtmlWebpackPlugin({
    template:  `${page.entry}/index.html`,
    filename: `templates/${page.outPutFilename}`,
    chunks: [page.name],
    minify: {
        collapseWhitespace: isProd
    }
}));

module.exports = {
    entries,
    templates,
};



