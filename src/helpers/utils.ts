export const validateEmail = (value: string): boolean | string => {
  const emailRegex =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return emailRegex.test(value) || "This email is incorrect";
};

export const random = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
}

export const map = 
  (n: number, start1: number, end1: number, start2: number, end2: number): number => {
  return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
}

export const bytesToSize = (bytes: number, isNumberSize?: boolean): string | number => {
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  if (!bytes) {
    return '0 Byte'
  }

  const i = +Math.floor(Math.log(bytes) / Math.log(k))
  const size = Math.round(bytes / Math.pow(k, i))

  return !isNumberSize ? 
    size + ' ' + sizes[i] : 
    size;
}

export const validateCountFiles = (count: number, maxCount: number) => {
  return count > maxCount;
}

export const validateFileFormat = (file: File, formats: string[]) => {
  return !formats.some((format) => file.name.toLowerCase().endsWith(format.toLowerCase()));
}

export const validateFileSize = (file: File, maxSize: number) => {
  const fileSize = Math.round(file.size / 1024 / 1024);

  return fileSize > maxSize
}