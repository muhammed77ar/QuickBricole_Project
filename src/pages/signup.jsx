import { Link } from "react-router-dom";
import { Container, Description, InnerContent, Section, Section2, SectionsContainer, Title } from "../styledComponent/signupStyled";


export default function Signup() {
  return (<>
  <Container>
    <Title>Welcome to our <span><span className="quickStyle">Quick</span>Bricole Platform</span></Title>
    <Description>
        Select how you want to proceed with the platform.
        <span>Choose between <span className="CHStyle">Customer</span> and <span className="CHStyle">Handyman</span>.</span>
    </Description>
          <SectionsContainer>
            <Link to={"/clientsignUp"} style={{textDecoration:"none"}}>
              <Section>
                <InnerContent>
                  <h1>
                      <span>Sign Up</span>
                      <span>As Customer</span>
                  </h1>
                </InnerContent>
              </Section>
            </Link>
            <Link to={"/bricoleurSignUp"} style={{textDecoration:"none"}}>
              <Section2>
                <InnerContent>
                  <h1><span>Sign Up</span><span>As Handyman</span></h1>
                </InnerContent>
              </Section2>
            </Link>
          </SectionsContainer>
  </Container>
  </>
  )
}
