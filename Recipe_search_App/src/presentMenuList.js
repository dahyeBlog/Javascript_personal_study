import fetchMenus from "./fetchMenus.js";
import displayMenus from "./displayMenus.js";
import setMenu from "./setMenu.js";

const presentMenuList = async (url) => {
  // fetch drinks
  const data = await fetchMenus(url);

  // display drinks
  const section = await displayMenus(data);
  if (section) {
    setMenu(section);
  }
};

export default presentMenuList;
