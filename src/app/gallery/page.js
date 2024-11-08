import GalleriesGridServer from "../components/pageElements/gallery/serverSide/GalleriesGridServer";
import MainContent from "../layouts/MainContent";

function Page() {

    return (
        <MainContent>
            <GalleriesGridServer />
        </MainContent>
    );
}
export const dynamic = 'force-dynamic'

export default Page;