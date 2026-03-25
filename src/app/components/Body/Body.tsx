type BodyProps = {
  children: React.ReactNode;
};

const Body: React.FC<BodyProps> = ({ children }) => {
  return <body>{children}</body>;
};

export default Body;
