import { IFileImage } from '@/components/project/modification';


export const uploadImages = async (images: IFileImage[], links: string[]): Promise<void> => {
    const promisisesImages = links.map( async (imageLink, index): Promise<string> => new Promise( async (res, rej) => {
        try {
            const buffer = images[index].buffer;
            const response = await fetch(imageLink, {
                method: 'PUT',
                body: buffer,
            })
            const data = await response.json();
            res(data);   
        } catch (error) {
            rej(error);
        }
    }));

    const response = await Promise.all(promisisesImages);
}
