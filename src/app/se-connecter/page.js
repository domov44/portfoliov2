'use client';

import LoginForm from '../components/ui/forms/allForms/LoginForm';
import Hero from '../components/ui/wrapper/Hero';
import FormContainer from '../components/ui/wrapper/FormContainer';
import Bento from '../components/ui/wrapper/Bento';
import { UserProvider } from '../contexts/UserContext.js';
import IconButton from '../components/ui/button/IconButton';

function Login() {
    return (
        <UserProvider>
            <Hero>
                <FormContainer>
                    <Bento width="450px" padding="40px"
                        responsive={{
                            mobilePadding: "20px"
                        }}>
                        <LoginForm />
                    </Bento>
                </FormContainer>
            </Hero>
            <IconButton variant={"danger"} href={"/"}>HOME</IconButton>
        </UserProvider>
    );
}

export default Login;