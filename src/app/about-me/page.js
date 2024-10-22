'use client';

import Button from '../components/ui/button/Button';
import Text from '../components/ui/textual/Text';
import Title from '../components/ui/textual/Title';
import Hero from '../components/ui/wrapper/Hero';
import DefaultLayout from '../layouts/DefaultLayout';
import MainContent from '../layouts/MainContent';

const Page = () => {


    return (
        <MainContent>
            <Hero>
                <Title>
                    About me
                </Title>
                <Text>test base url : {process.env.BASE_URL}</Text>
                <Button className={"step-1"} variant={"primary"} href="/" transition>back to home</Button>
            </Hero>
        </MainContent>
    );
}

export default Page;