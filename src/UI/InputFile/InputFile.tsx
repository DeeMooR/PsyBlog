import React, { FC, useEffect, useState } from 'react'
import cn from 'classnames';
import { warningIcon } from 'src/assets';
import { changePreviewUrl } from './config';
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

  const customStyle = cn('inputFileBlock__custom input', {
    showDefault: !previewUrl,
    warning: error,
  });
  
  return (
    <div className='inputFileBlock' onDragOver={handleDragOver} onDrop={handleDrop}>
      <label htmlFor={id} className='inputFileBlock__label'>
        <input 
          id={id}
          type='file'
          className='inputFile'
          onChange={handleFileChange}
        />
        <div className={customStyle}>
          {previewUrl && <img className='inputFileBlock__previewImage' src={previewUrl} alt="preview" />}
        </div>
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
