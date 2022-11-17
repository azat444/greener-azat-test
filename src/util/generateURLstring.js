export const generateURLstring = () => {
    const pathArray = window.location.href.split("?");
    pathArray.shift();
  
    let url = "";
    pathArray.forEach((item) => {
      url ? (url += `?${item}`) : (url += `/${item}`);
    });
    if (!url) {
      return "/heatenergy";
    }
  
    return url;
  };