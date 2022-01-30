interface IComponentProps {
  children?: JSX.Element | JSX.Element[];
  className?: string;
}
const Section = ({ children, className = 'my-8', ...rest }: IComponentProps) => (
  <section className={className} {...rest}>
    {children}
  </section>
);

export default Section;
