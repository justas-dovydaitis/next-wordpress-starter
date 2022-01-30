interface IComponentProps {
  children?: JSX.Element | JSX.Element[];
  className?: string;
}

const Container = ({ children, className = 'container mx-auto my-8 px-5' }: IComponentProps) => (
  <div className={className}>{children}</div>
);

export default Container;
