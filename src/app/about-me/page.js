'use client';

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
            </Hero>
        </DefaultLayout>
    );
}

export default Page;