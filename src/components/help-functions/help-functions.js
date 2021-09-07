export const clickOutsideHandler = (target, active, setActive) => {
  const clickedOutSideSelectComponent = !target.closest(".select");
  if (active && clickedOutSideSelectComponent) {
    setActive(false);
  }
};

export const toggleActive = (toggleFunction, active) => {
  toggleFunction(!active);
};
export const searchCountry = (term, items) => {
  if (!term) {
    return items;
  }
  return items.filter((item) =>
    item.name.toLowerCase().includes(term.toLowerCase())
  );
};
