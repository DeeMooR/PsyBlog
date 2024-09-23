interface IGetPreviewUrl {
  file: File | null,
  imageLink: string | null,
  setPreviewUrl: (value: string | null) => void
  setError?: (value: string) => void
}

export const changePreviewUrl = ({file, imageLink, setPreviewUrl, setError}: IGetPreviewUrl) => {
  if (file) {
    if (setError) setError('');
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  } else {
    setPreviewUrl(imageLink);
  }
}