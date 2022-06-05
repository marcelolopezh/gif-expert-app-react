export const getGifs = async ( category ) => {
  const api = "https://api.giphy.com/v1/gifs/search?";
  const api_key = "UiFpa3oLIZzsilyT1S5MuuOSkVQxHERZ";
  const limit = 10;
  const url = `${api}api_key=${api_key}&q=${category}&limit=${limit}`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });
  return gifs;
};
