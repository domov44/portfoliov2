import MainContent from './layouts/MainContent';
import HomeTravelServer from './components/pageElements/home/serverSide/HomeTravelServer';
import ColisionSkillsServer from './components/pageElements/home/serverSide/ColisionSkillsServer';
import HomeHeroServer from './components/pageElements/home/serverSide/HomeHeroServer';
import HomeGridServer from './components/pageElements/home/serverSide/HomeGridServer';
import HomeSecondSectionServer from './components/pageElements/home/serverSide/HomeSecondSectionServer';
import HomeFifthSectionServer from './components/pageElements/home/serverSide/HomeFifthSectionServer';
import HomeSixthSectionServer from './components/pageElements/home/serverSide/HomeSixthSection';


const Page = () => {

    return (
        <MainContent>
            <HomeHeroServer/>
            <HomeSecondSectionServer />
            <ColisionSkillsServer />
            <HomeGridServer /> 
            <HomeTravelServer />
            <HomeFifthSectionServer />
            <HomeSixthSectionServer />
        </MainContent>
    );
}
export const dynamic = 'force-dynamic'

export default Page;