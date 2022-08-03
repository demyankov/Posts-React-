import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPost } from "../../api/addPost";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import { H2 } from "../../components/title/tittleStyles";
import { AppRoute } from "../../enums/router";
import {
  ButtonAddImage,
  ButtonImageWrapper,
  ButtonWrapper,
  FormWrapper,
  ImageWrapper,
  Wrapper,
} from "./addPostStyles";
import ImageUploading, {
  ImageListType,
  ImageUploadingPropsType,
} from "react-images-uploading";

function AddPost(): JSX.Element {
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [image, setImage] = useState<ImageListType>([]);
  const navigate = useNavigate();

  const onChange: ImageUploadingPropsType["onChange"] = (
    imageList,
    addUpdateIndex
  ) => {
    setImage(imageList);
  };

  return (
    <Wrapper>
      <H2>Add Post</H2>
      <FormWrapper>
        <Input
          label="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <Input
          label="Text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />

        <ImageUploading
          multiple={false}
          value={image}
          onChange={onChange}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            <div className="upload__image-wrapper">
              <ButtonAddImage
                isDragging={isDragging}
                onClick={onImageUpload}
                {...dragProps}
              >
                Select an image
              </ButtonAddImage>
              &nbsp;
              {imageList.map((image, index) => (
                <ImageWrapper key={index} className="image-item">
                  <img src={image["data_url"]} alt="" width="100" />
                  <ButtonImageWrapper className="image-item__btn-wrapper">
                    <ButtonAddImage onClick={() => onImageUpdate(index)}>
                      Update
                    </ButtonAddImage>
                    <ButtonAddImage onClick={() => onImageRemove(index)}>
                      Remove
                    </ButtonAddImage>
                  </ButtonImageWrapper>
                </ImageWrapper>
              ))}
            </div>
          )}
        </ImageUploading>
        <ButtonWrapper>
          <Button maxWidth="7rem" click={() => navigate(-1)}>
            Cancel
          </Button>
          <Button
            maxWidth="10rem"
            disabled={!title || !text || !image ? "disabled" : ""}
            click={() => {
              addPost({
                title: title,
                text: text,
                image: image[0].file,
                lesson_num: 15,
              }).catch((errors) => {
                {
                  return (
                    <div>
                      {errors.maxNumber && (
                        <span>Number of selected images exceed maxNumber</span>
                      )}
                      {errors.acceptType && (
                        <span>Your selected file type is not allow</span>
                      )}
                      {errors.maxFileSize && (
                        <span>Selected file size exceed maxFileSize</span>
                      )}
                      {errors.resolution && (
                        <span>
                          Selected file is not match your desired resolution
                        </span>
                      )}
                    </div>
                  );
                }
              });
            }}
            url={AppRoute.MyPostsPage}
          >
            Add Post
          </Button>
        </ButtonWrapper>
      </FormWrapper>
    </Wrapper>
  );
}

export default AddPost;
