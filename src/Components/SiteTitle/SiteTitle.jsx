const SiteTitle = ({ children }) => {
   console.log(children);
   return <div>{(document.title = children)}</div>;
};

export default SiteTitle;
