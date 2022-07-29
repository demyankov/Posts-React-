import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPost } from "../../api/addPost";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import { H2 } from "../../components/title/tittleStyles";
import { AppRoute } from "../../enums/router";
import { ButtonWrapper, FormWrapper, Wrapper } from "./addPostStyles";

function AddPost():JSX.Element {
    const [title, setTitle] = useState <string>('')
    const [text, setText] = useState <string>('')
    const [image, setImage] = useState <string>('')

    const navigate = useNavigate()

    return (
      <Wrapper>
        <H2>Add Post</H2>
        <FormWrapper>
            <Input label = "Title" value={title} onChange= {(event)=>setTitle(event.target.value)}/>
            <Input label = "Text" value={text} onChange= {(event)=>setText(event.target.value)}/>
            <ButtonWrapper>
                <Button maxWidth="7rem" click={()=>navigate(-1)}>Cancel</Button> 
                <Button maxWidth="10rem"  disabled = {!title || !text ? "disabled": ""} 
                        click={()=>{addPost({title: title, text: text, image: "",lesson_num:15})}} url={AppRoute.MyPostsPage}>Add Post</Button> 
            </ButtonWrapper>
        </FormWrapper>       
      </Wrapper>
    );
  }
  
  export default AddPost;
  