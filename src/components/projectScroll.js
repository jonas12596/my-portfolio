export default function ProjectScroll({setIsLgWidth}) {
  const lgWidth = window.matchMedia("(min-width: 1024px)");
  const updateIsLgWidth = () => setIsLgWidth(lgWidth.matches);
  updateIsLgWidth();

  lgWidth.addEventListener("change", updateIsLgWidth);

  return () => {
    lgWidth.removeEventListener("change", updateIsLgWidth);
  };
}
