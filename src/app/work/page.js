import ProjectsListServer from "../components/pageElements/work/serverSide/ProjectListServer";
import MainContent from "../layouts/MainContent";

function Page() {

    return (
        <MainContent>
            <ProjectsListServer />
        </MainContent>
    );
}
export const dynamic = 'force-dynamic'

export default Page;