import React, { FC, useEffect, useState } from 'react'
import { warningIcon } from 'src/assets';
import { changePreviewUrl } from './config';
import { InputFileBackground } from 'src/styled';
import { imageUploadIcon } from 'src/assets'
import './InputFile.scss'

interface IInputFile {
  id: string,
  imageLink: string | null,
  file: File | null,
  error?: string,
  setFile: (value: File) => void,
  setError?: (value: string) => void
}

export const InputFile:FC<IInputFile> = ({id, imageLink, file, error, setFile, setError}) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const background = !previewUrl ? imageUploadIcon : '';

  useEffect(() => {
    changePreviewUrl({file, imageLink, setPreviewUrl, setError});
  }, [file, imageLink]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList) setFile(fileList[0]);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const fileList = event.dataTransfer.files;
    if (fileList) setFile(fileList[0]);
  };
  
  return (
    <div className='inputFileBlock' onDragOver={handleDragOver} onDrop={handleDrop}>
      <label htmlFor={id} className='inputFileBlock__label'>
        <input 
          id={id}
          type='file'
          className='inputFile'
          onChange={handleFileChange}
        />
        <InputFileBackground imageUpload={background} warning={!!error} className='input'>
          {previewUrl && <img src={previewUrl} alt="preview" />}
        </InputFileBackground>
      </label>
      {error &&
        <p className='error'>
          <img src={warningIcon} alt="warning" />
          <span>{error}</span>
        </p>
      }
    </div>
  )
}
