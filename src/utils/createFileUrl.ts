export const createImgUrl = (imgName: string) =>
  import.meta.env.VITE_APP_API_URL + '/images/' + imgName;

export const createPdfUrl = (fileName: string) =>
  import.meta.env.VITE_APP_API_URL + '/pdf/' + fileName;
