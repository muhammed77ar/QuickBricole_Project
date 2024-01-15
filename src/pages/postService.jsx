import { Container, InputContainer, Section1, Section2, Title } from "../styledComponent/postServiceStyle";

export default function PostService(){
    return <>
        <Container>
            <Title>Post a need</Title>
            <InputContainer>
                <form>
                    <div>
                    <Section1>
                        <label htmlFor="">Title of the need:</label>
                        <input type="text" name="" id="title" placeholder="Enter your need"/>
                        <label htmlFor="">Location:</label>
                        <select id="location">
                            <option value="Select your city">Select your location</option>
                        </select>
                        <label htmlFor="">Category:</label>
                        <select id="category">
                            <option value="Select a category">Select a Category</option>
                        </select>
                        <label htmlFor="">Price:</label>
                        <input type="text" name="" id="price" placeholder="Enter a price"/>
                        
                    </Section1>
                    <Section2> 
                        <label htmlFor="">Description:</label>
                        <textarea placeholder="Enter a description"></textarea>
                    </Section2>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </InputContainer>
        </Container>
    </>
}