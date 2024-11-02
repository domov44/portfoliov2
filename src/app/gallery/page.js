import GalleriesList from "../components/pageElements/gallery/GalleriesList";
import MainContent from "../layouts/MainContent";

function Page() {

    return (
        <MainContent>
            <GalleriesList />
        </MainContent>
    );
}
export const dynamic = 'force-dynamic'

export default Page;