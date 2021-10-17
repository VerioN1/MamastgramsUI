import { Formik } from "formik";
import * as yup from "yup";
import { Button, Form, Input } from "semantic-ui-react";
import styled from "styled-components";
import { useState } from "react";
import { useMutation } from "react-query";
import { IUserProps, RegisterUserRequest } from "../api/api";
import { toast } from 'react-toastify'
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { login } from "../../../app/Reducers/User/UserSlice";

const RegisterWrapper = styled.div`
display:flex;
flex-direction: column;
padding: 5rem 3rem;
flex: 1;
`;

const Register = () => {
  const [uploadFile, setUploadFile] = useState<FileList | null>();
  const history = useHistory()
  const dispatch = useDispatch()
  const createUser = useMutation((newUser: IUserProps) => RegisterUserRequest(newUser),{
    onError: (err) => (() => {toast.error("Error while Creating User - user name already taken")})(),
    onSuccess: (res : any) =>  {dispatch(login({
      userName: res.data.userName,
      avatar: `${process.env.REACT_APP_BACKEND_API}usersAvatars/${res.data.avatar}`,
      posts: res.data.posts,
      followers: res.data.followers,
      followings: res.data.followings,
      personalName: res.data.personalName,
      isAuth: true,
    }));
    (() => {toast.success("Welcome to MaMasInstagram!")})()
    history.push('/')},
  })
    return (
        <RegisterWrapper>
        <h1>Register</h1>
           <Formik
  initialValues={{
    userName: "",
    password: "",
    personalName: "",
  }}
  onSubmit={ async values => {
    await createUser.mutateAsync({userName: values.userName, password: values.password, avatar: uploadFile, personalName: values.personalName});
  }}
  validationSchema={yup.object().shape({
    userName: yup.string().required("This field is required"),
    password: yup.string().required().min(7),
    personalName: yup.string().required("This field is required"),
  })}
  render={({
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit
  }) => {
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <Input
          style={{direction: 'ltr'}}
          icon='user' iconPosition='left'
            placeholder="User Name"
            name="userName"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Field>
        {touched.userName && errors.userName && (
          <div style={{ color: 'red', marginBottom: '1rem' }}> {errors.userName}</div>
        )}
         <Form.Field>
          <Input
          style={{direction: 'ltr'}}
          icon='address card outline' iconPosition='left'
            placeholder="Full Name"
            name="personalName"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Field>
        {touched.personalName && errors.personalName && (
          <div style={{ color: 'red', marginBottom: '1rem' }}> {errors.personalName}</div>
        )}
        <Form.Field>
          <Input
          style={{direction: 'ltr'}}
          icon='key' iconPosition='left'
          type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Field>
        {touched.password && errors.password && (
          <div style={{ color: 'red', marginBottom: '1rem' }}> {errors.password}</div>
        )}
        <Input accept="image/*" style={{direction : 'ltr', marginBottom: '20px'}} icon='file image' iconPosition='left' type="file" onChange={(e) => setUploadFile(e.target.files)} />
        <Button type="submit" basic color='blue' loading={createUser.isLoading} >
          Register
        </Button>
      </Form>
    );
  }}
/>
    </RegisterWrapper>
    )
}

export default Register
