import { H2 } from "./tittleStyles";

function Title({children}:{children:React.ReactNode}): JSX.Element {
  return <H2>{children}</H2>;
}

export default Title;
