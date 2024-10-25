'use client';

import Title from './components/ui/textual/Title';
import Button from './components/ui/button/Button';
import Stack from './components/ui/wrapper/Stack';
import Text from './components/ui/textual/Text';
import Section from './components/ui/wrapper/Section';
import Container from './components/ui/wrapper/Container';
import Bento from './components/ui/wrapper/Bento';
import DefaultLayout from './layouts/DefaultLayout';
import HomeHero from './components/pageElements/home/HomeHero';
import HomeGrid from './components/pageElements/home/HomeGrid';
import HomeTravel from './components/pageElements/home/HomeTravel';
import MainContent from './layouts/MainContent';
import HomeSecondSection from './components/pageElements/home/HomeSecondSection';
import HomeFifthSection from './components/pageElements/home/HomeFifthSection';
import HomeSixthSection from './components/pageElements/home/HomeSixthSection';


const Page = () => {

    return (
        <MainContent>
            <HomeHero />
            <HomeSecondSection />
            <HomeGrid />
            <HomeTravel />
            <HomeFifthSection />
            <HomeSixthSection />
        </MainContent>
    );
}

export default Page;