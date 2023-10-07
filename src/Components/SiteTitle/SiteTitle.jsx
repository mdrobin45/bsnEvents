const SiteTitle = ({ children }) => {
   return <div>{(document.title = children)}</div>;
};

export default SiteTitle;
