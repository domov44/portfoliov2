import AboutMeFourthSection from '../components/pageElements/about-me/AboutMeFourth';
import AboutMeHero from '../components/pageElements/about-me/AboutMeHero';
import AboutMeSecondSection from '../components/pageElements/about-me/AboutMeSecondSection';
import AboutMeThirdSection from '../components/pageElements/about-me/AboutMeThirdSection';
import HomeSixthSection from '../components/pageElements/home/HomeSixthSection';
import MainContent from '../layouts/MainContent';

const Page = () => {


    return (
        <MainContent>
            <AboutMeHero />
            <AboutMeSecondSection/>
            <AboutMeThirdSection/>
            <AboutMeFourthSection/>
            <HomeSixthSection/>
        </MainContent>
    );
}

export default Page;