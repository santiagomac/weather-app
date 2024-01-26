export const formatDate = (localtime?: string) => {
  let date;
  if (!localtime) {
    date = new Date();
  } else {
    date = new Date(localtime);
  }
  const dateOptions: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  };

  return date.toLocaleDateString('en-EN', dateOptions);
};
