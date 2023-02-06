export const getAdvice = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const dataJson = await response.json();

  return dataJson;
};
