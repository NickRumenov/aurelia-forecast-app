export const createUrl = (urlParams, city) => {

  let {url, keys} = urlParams;
  keys.map(x => url += `${x.key}=${x.value}&`);
  url += `q=${city}`;

  return url;
};
