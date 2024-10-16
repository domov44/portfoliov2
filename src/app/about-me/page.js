'use client';

import Button from '../components/ui/button/Button';
import Title from '../components/ui/textual/Title';
import Hero from '../components/ui/wrapper/Hero';
import DefaultLayout from '../layouts/DefaultLayout';

const Page = () => {


    return (
        <DefaultLayout>
            <Hero>
                <Title>
                    About me
                </Title>
                <Button className={"step-1"} variant={"primary"} href="/" transition>back to home</Button>
            </Hero>
        </DefaultLayout>
    );
}

export default Page;