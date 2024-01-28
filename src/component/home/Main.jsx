import {
  StyledMainContainer,
  StyledLeftSid,
  StyledRightSid,
  Numbers,
} from "../../styledComponent/home/StyledMain";
import manImg from "../../imgs/HandyManImg.png";
import IncrementOnScroll from "./IncrementOnScroll";
export default function Main() {
  return (
    <StyledMainContainer>
      <StyledLeftSid>
        <img src={manImg} alt="" />
        <Numbers>
          <div>
            <IncrementOnScroll num={1000} />
            <p>Service Posted</p>
          </div>
        </Numbers>
        <Numbers bottom={true}>
          <div>
            <IncrementOnScroll num={300} />
            <p>Professional</p>
          </div>
        </Numbers>
      </StyledLeftSid>
      <StyledRightSid>
        <div>
          <h1>
            Find The Best <span>Professional</span> Here
          </h1>
          <p>
            Discover unparalleled expertise with Quick Bricole, where you can
            effortlessly find the best professionals for your needs. Our
            platform streamlines the process, ensuring a seamless search
            experience that connects you with top-tier professionals swiftly and
            efficiently. Whether you're seeking skilled individuals or experts
            in a specific field, Quick Bricole is your gateway to excellence.
          </p>
        </div>
      </StyledRightSid>
    </StyledMainContainer>
  );
}
