import { Formik } from "formik";
import * as yup from "yup";
import { Button, Form, Input } from "semantic-ui-react";
import styled from "styled-components";
import { useMutation } from "react-query";
import { IUserProps, LoginUser } from "../api/api";
import { useDispatch } from "react-redux";
import { login } from "../../../app/Reducers/User/UserSlice";
import { useHistory } from "react-router";
import { toast } from 'react-toastify'

const LoginWrapper = styled.div`
display:flex;
flex-direction: column;
padding: 5rem 3rem;
flex:1;
`;
const Login = () => {
  const history = useHistory()
  const dispatch = useDispatch();
  
  const loginMut = useMutation((userData : IUserProps) => LoginUser(userData),{
    onError: (e) => (() => {toast.error("User password was incorrect")})(),
    onSuccess: (res : any) => {
      dispatch(login({
        userName: res.data.userName,
        avatar: `${process.env.REACT_APP_BACKEND_API}usersAvatars/${res.data.avatar}`,
        posts: res.data.posts,
        followers: res.data.followers,
        followings: res.data.followings,
        personalName: res.data.personalName,
        isAuth: true,
      }));
      (() => {toast.success("Welcome Back!")})()
      history.push('/')
    }
  })
    return (
        <LoginWrapper>
            <h1>Login</h1>
               <Formik
      initialValues={{
        userName: "",
        password: ""
      }}
      onSubmit={values => {
        loginMut.mutate({...values})
      }}
      validationSchema={yup.object().shape({
        userName: yup.string().required("This field is required"),
        password: yup.string().required()
      })}>
      {({
        values,
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
              <div style={{ color: 'red', marginBottom: '2rem' }}> {errors.userName}</div>
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
              <div style={{ color: 'red', marginBottom: '2rem' }}> {errors.password}</div>
            )}
                  <Button type="submit" basic color='green' loading={loginMut.isLoading}>
          Log In
        </Button>
          </Form>
        );
      }}
      </Formik>
        </LoginWrapper>
    )
}

export default Login
