export const truncateText = (text: string) => {
  if(text.length < 25) {
    return text;
  }

  const truncatedText=  text.substring(0, 25) ;
  return `${truncatedText}...`
}