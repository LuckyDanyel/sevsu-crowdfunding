import { IFileImage } from "@/src/types";

const getArrayBuffer = async (file: Blob): Promise<ArrayBuffer> => {
    return new Promise((res, rej) => {
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file);
        fileReader.onload = () => {
            res(fileReader.result as ArrayBuffer);
        }
    })
}

const getExtensionFile = (file: Blob): string => {
    // return `.${file.type.split('/')[1]}`;
    return '.jpg';
}

export default async function (urlImage: string): Promise<IFileImage> {
    const response = await fetch(urlImage);
    const file = await response.blob();
    const buffer = await getArrayBuffer(file);
    const extension = getExtensionFile(file);
    
    return {
        src: urlImage,
        buffer,
        extension,
    }

}