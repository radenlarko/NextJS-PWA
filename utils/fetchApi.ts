export const getAdvice = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const dataJson = await response.json();

  return dataJson;
};

export const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dataJson = await response.json();

  return dataJson.slice(0, 10);
};

export const getPostsId = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dataJson = await response.json();

  const newData = dataJson.map((item: any) => item.id).slice(0, 10);

  return newData;
};

export const getPostDetails = async (id: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const dataJson = await response.json();

  return dataJson;
};
