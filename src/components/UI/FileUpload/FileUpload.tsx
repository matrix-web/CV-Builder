import { FC, DragEvent, useState, useRef, ChangeEvent } from "react";
import { Paragraph } from "@/components/UI";
import { v4 as uuidv4 } from "uuid";
import {
  validateCountFiles,
  validateFileFormat,
  validateFileSize
} from "@/helpers/utils";
import {
  StyledDropZone,
  StyledDropZoneWrapper,
  StyledInputFile,
  StyledProgressWrapper,
  StyledProgress,
  StyledProgressBar
} from "./FileUpload.style";

interface FileUploadProps {
  isMultiple?: boolean;
  isDisabled?: boolean;
  maxSize?: number;
  maxCount?: number;
  formats?: string[];
  onUpload?: (files: File[]) => void;
}

enum ErrorTypes {
  INVALID_FORMAT = "invalid_format",
  INVALID_SIZE = "invalid_size",
  INVALID_COUNT = "invalid_count"
}

interface IError {
  id: string;
  text: string;
  type: ErrorTypes;
}

export const FileUpload: FC<FileUploadProps> = (props): JSX.Element => {
  const { 
    isMultiple = false,
    isDisabled = false,
    maxSize = 10,
    maxCount = 5,
    formats = [".png", ".jpg", ".jpeg", ".gif", ".webp", ".avif"],
    onUpload
  } = props;
  const fileReader = new FileReader();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadSuccess, setIsLoadSuccess] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [errors, setErrors] = useState([] as IError[]);

  const formatsStr = 
    formats.map(format => format.substring(1).toUpperCase()).join(", ");

  const createError = (text: string, type: ErrorTypes) => ({
    id: uuidv4(),
    text,
    type
  });

  const validate = (file: File, files?: File[]) => {
    setErrors([]);
    if (validateFileFormat(file, formats)) {
      setErrors((errors) => [...errors, createError("Format not supported!", ErrorTypes.INVALID_FORMAT)]);
    } else if (validateFileSize(file, maxSize)) {
      setErrors((errors) => [...errors, createError(`The maximum file size should be ${maxSize}MB`, ErrorTypes.INVALID_SIZE)])
    } else if (isMultiple && files && validateCountFiles(files.length, maxCount)) {
      setErrors((errors) => [...errors, createError(`Maximum number of files ${maxCount}`, ErrorTypes.INVALID_COUNT)]);
    }
  }

  const cancelEventDefault = (event: Event | DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
  }

  const handleClick = () => {
    setIsLoadSuccess(false);
    inputRef.current?.click();
  }

  const handleLoadStart = () => setIsLoading(true);

  const handleProgress = (event: ProgressEvent<FileReader>) => {
    if (event.lengthComputable) {
      setProgress((event.loaded * 100) / event.total);
    }
  }

  const handleLoad = () => {
    setIsLoading(false);

    if (!fileReader.error) {
      setIsLoadSuccess(true);
    }
  }

  const handleUploadFiles = (files: FileList) => {
    const filesList: File[] = [...files];
    filesList.forEach(file => {
      fileReader.readAsArrayBuffer(file);
      validate(file, filesList);
    });

    if (!fileReader.error && !errors.length && onUpload) {
      onUpload(filesList);
    }
    
    fileReader.addEventListener("loadstart", handleLoadStart);
    fileReader.addEventListener("progress", handleProgress);
    fileReader.addEventListener("load", handleLoad);
  }

  const handleDragEnter = (event: DragEvent<HTMLDivElement>) => {
    cancelEventDefault(event);
    setIsDragging(true);
    setIsLoadSuccess(false);
  }

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    cancelEventDefault(event);
    setIsDragging(false);
  }

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    cancelEventDefault(event);
  }

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    cancelEventDefault(event);

    const files = event.dataTransfer.files;
    if (files) handleUploadFiles(files);
    setIsDragging(false);
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files) handleUploadFiles(files);
  }

  return (
    <StyledDropZone
      isDisabled={isDisabled}
      isDragging={isDragging}
      isSuccess={isLoadSuccess}
      isError={!!errors.length}
      onClick={handleClick}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <StyledInputFile 
        ref={inputRef}
        type="file"
        disabled={isDisabled}
        multiple={isMultiple}
        accept={formats.join(",")}
        onChange={handleChange}
      />
      <StyledDropZoneWrapper>
        {(isDragging || isLoadSuccess) && !errors.length ? 
          <Paragraph tag="p" size={14} weight={400} color="black">
            {(isDragging && !isLoadSuccess)
              ? "Drop file to begin uploading..." 
              : "File upload complete!"}
          </Paragraph> 
        : errors.length ? <>
          { errors.map(error => 
            <Paragraph 
              tag="p" 
              key={error.id}
              color="black"
              size={14}
              weight={400}
            >{ error.text }</Paragraph>) 
          }
        </> :
          isLoading ? 
          <StyledProgressWrapper>
            <Paragraph tag="p" size={14} weight={400} color="black">{`${progress}% Uploaded...`}</Paragraph>
            <StyledProgress>
              <StyledProgressBar
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: `${progress}%` }}
              />
            </StyledProgress>
          </StyledProgressWrapper> : <>
          <Paragraph size={14} weight={400} color="black">
            <Paragraph tag="span" size={14} weight={600} color="primary500">Upload a file</Paragraph> or grag and drop
          </Paragraph>
          <Paragraph size={12} weight={400} color="gray500">{ formatsStr } up to {maxSize}MB</Paragraph>
        </>}
      </StyledDropZoneWrapper>
    </StyledDropZone>
  )
}