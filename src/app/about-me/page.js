import AboutMeHero from '../components/pageElements/about-me/AboutMeHero';
import AboutMeThirdSection from '../components/pageElements/about-me/AboutMeThirdSection';
import AboutMeFourthSectionServer from '../components/pageElements/about-me/server/AboutMeFourthSectionServer';
import AboutMeSecondSectionServer from '../components/pageElements/about-me/server/AboutMeSecondSectionServer';
import HomeSixthSectionServer from '../components/pageElements/home/serverSide/HomeSixthSection';
import MainContent from '../layouts/MainContent';

const Page = () => {


    return (
        <MainContent>
            <AboutMeHero />
            <AboutMeSecondSectionServer/>
            <AboutMeThirdSection/>
            <AboutMeFourthSectionServer/>
            <HomeSixthSectionServer/>
        </MainContent>
    );
}

export const dynamic = 'force-dynamic';

export default Page;