import HomeHero from './components/pageElements/home/HomeHero';
import HomeGrid from './components/pageElements/home/HomeGrid';
import MainContent from './layouts/MainContent';
import HomeSecondSection from './components/pageElements/home/HomeSecondSection';
import HomeFifthSection from './components/pageElements/home/HomeFifthSection';
import HomeSixthSection from './components/pageElements/home/HomeSixthSection';
import HomeTravelServer from './components/pageElements/home/serverSide/HomeTravelServer';
import ColisionSkillsServer from './components/pageElements/home/serverSide/ColisionSkillsServer';
import HomeHeroServer from './components/pageElements/home/serverSide/HomeHeroServer';


const Page = () => {

    return (
        <MainContent>
            <HomeHeroServer/>
            <HomeSecondSection />
            <ColisionSkillsServer />
            <HomeGrid /> 
            <HomeTravelServer />
            <HomeFifthSection />
            <HomeSixthSection />
        </MainContent>
    );
}
export const dynamic = 'force-dynamic'

export default Page;