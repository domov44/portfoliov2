import ProjectsList from "../components/pageElements/work/ProjectsList";
import MainContent from "../layouts/MainContent";

function Page() {

    return (
        <MainContent>
            <ProjectsList />
        </MainContent>
    );
}
export const dynamic = 'force-dynamic'

export default Page;