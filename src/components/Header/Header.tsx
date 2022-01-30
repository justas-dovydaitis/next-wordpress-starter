interface IComponentProps {
  children?: JSX.Element | JSX.Element[];
  className?: string;
}

const Header = ({ children, className }: IComponentProps) => {
  return <header className={className}>{children}</header>;
};

export default Header;
