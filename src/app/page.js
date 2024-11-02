import HomeHero from './components/pageElements/home/HomeHero';
import HomeGrid from './components/pageElements/home/HomeGrid';
import MainContent from './layouts/MainContent';
import HomeSecondSection from './components/pageElements/home/HomeSecondSection';
import HomeFifthSection from './components/pageElements/home/HomeFifthSection';
import HomeSixthSection from './components/pageElements/home/HomeSixthSection';
import MatterShapes from './components/pageElements/home/MatterShapes';
import HomeTravelServer from './components/pageElements/home/serverSide/HomeTravelServer';


const Page = () => {

    return (
        <MainContent>
            <HomeHero />
            <HomeSecondSection />
            <MatterShapes />
            <HomeGrid /> 
            <HomeTravelServer />
            <HomeFifthSection />
            <HomeSixthSection />
        </MainContent>
    );
}
export const dynamic = 'force-dynamic'

export default Page;