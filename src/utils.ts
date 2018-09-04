export const createUrl = (urlParams, city) => {

  let {url, keys} = urlParams;
  url += '?';
  keys.map(x => url += `${x.key}=${x.value}&`);
  url += `q=${city}`;

  return url;
};
