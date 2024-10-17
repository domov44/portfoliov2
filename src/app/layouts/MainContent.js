'use client';
import Transition from '../components/ui/transition/Transition';
import TransitionOverlay from '../components/ui/transition/TransitionOverlay';
import Main from '../components/ui/main/Main';

export default function MainContent({ children }) {
    return (
        <>
            <Transition />
            <TransitionOverlay />
            <Main>{children}</Main>
        </>
    );
}
