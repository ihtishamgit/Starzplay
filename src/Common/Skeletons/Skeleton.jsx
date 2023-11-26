import "./Skeleton.css";

const Skeleton = ({ classes }) => {
    console.log(classes,'classes');
  const classNames = `skeleton ${classes} animate-pulse`;
  return <div className={classNames}></div>;
};
export default Skeleton;
