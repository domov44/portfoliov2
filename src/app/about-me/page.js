import AboutMeHero from '../components/pageElements/about-me/AboutMeHero';
import AboutMeSecondSection from '../components/pageElements/about-me/AboutMeSecondSection';
import AboutMeThirdSection from '../components/pageElements/about-me/AboutMeThirdSection';
import MainContent from '../layouts/MainContent';

const Page = () => {


    return (
        <MainContent>
            <AboutMeHero />
            <AboutMeSecondSection/>
            <AboutMeThirdSection/>
        </MainContent>
    );
}

export default Page;