import { Formik } from "formik";
import * as yup from "yup";
import { Button, Form, Image, Input, TextArea } from "semantic-ui-react";
import styled from "styled-components";
import { useState } from "react";
import { useMutation } from "react-query";
import { toast } from 'react-toastify'
import { useHistory } from "react-router";
import { CreatePostRequest, IPostData } from "./api/api";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const NewPostWrapper = styled.div`
display:flex;
flex-direction: column;
padding: 5rem 3rem;
align-items: center;
width:100%;
flex: 1;
`;
const UploadImageSection = styled(Form.Field)`
display: flex;
    flex-direction: column;
    align-items: center;
`;
const PrevImage = styled(Image)`
max-height: 500px;
max-width: 500px;
padding: 1rem;
border: 1px solid #dadada;
margin-bottom: 2rem;
border-radius: 10px;`;

const CreatePost = () => {
    const userData = useSelector((state: RootState) => state.userData);
    const [uploadFile, setUploadFile] = useState<FileList | null>();
    const history = useHistory()
    const createPostMut = useMutation((newPost: IPostData) => CreatePostRequest(newPost) ,{
      onError: (err : any) => (() => {toast.error(err.message)})(),
      onSuccess: (res : any) =>  {
      (() => {toast.success("Post Uploaded!")})()
      history.push('/')},
    })
  
      return (
          <div className="main-layout">
          <NewPostWrapper>
          <h1>Create New Post</h1>
             <Formik
    initialValues={{
        OPCaption: "",
      image: FileList
    }}
    onSubmit={ async values => {
        if(uploadFile !== undefined && uploadFile != null ){
            await createPostMut.mutateAsync({
                OPCaption: values.OPCaption,
                image: uploadFile,
                OPAvatar: userData.avatar,
                OPName: userData.userName
            });
        }
        else
        (() => {toast.error("you must upload an image to conitnue")})()
    }}
    validationSchema={yup.object().shape({
        OPCaption: yup.string().required("This field is required").max(200, 'Must be less then 200 chars'),
    //   password: yup.string().required().min(7)
    })}
    render={({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit
    }) => {
      return (
        <Form onSubmit={handleSubmit} style={{width: '70%'}}>
                  <UploadImageSection>
               <PrevImage src={uploadFile != null && uploadFile !== undefined  ? URL.createObjectURL(uploadFile[0]) : ''}
               />
            <Input
            style={{direction: 'ltr'}}
            icon='image' iconPosition='left'
              placeholder="Full Name"
              accept="image/*"
              name="image"
              type="file" 
              onChange={(e) => setUploadFile(e.target.files)}
              onBlur={handleBlur}
            />
          </UploadImageSection>
          {touched.image && errors.image && (
            <div style={{ color: 'red', marginBottom: '1rem' }}> {errors.image}</div>
          )}
          <Form.Field>
            <TextArea
            style={{direction: 'ltr'}}
            icon='pencil' iconPosition='left'
              placeholder="Write Something About This Post "
              name="OPCaption"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Field>
          {touched.OPCaption && errors.OPCaption && (
            <div style={{ color: 'red', marginBottom: '1rem' }}> {errors.OPCaption}</div>
          )}
          <Button type="submit" basic color='blue' loading={createPostMut.isLoading} >
            Create Post!
          </Button>
        </Form>
      );
    }}
  />
      </NewPostWrapper>
      </div>
      )
}

export default CreatePost
