import { Container } from "../../components/shared";
import SectionAboutPromo from "./SectionAboutPromo";
import SectionBanner from "./SectionBanner";
import SectionBannerMiddle from "./SectionBannerMiddle";
import SectionBestSeller from "./SectionBestSeller";
// import SectionBlog from "./SectionBlog";
import SectionExploring from "./SectionExploring";
import SectionHero from "./SectionHero";
import SectionHowItWork from "./SectionHowItWork";
import SectionNewProducts from "./SectionNewProducts";
import SectionPromo from "./SectionPromo";

const Home = () => {
    return (
        <>
            <SectionHero />
            <SectionBanner />
            <SectionNewProducts />
            <SectionHowItWork />
            <SectionPromo />
            <SectionExploring />
            <SectionBestSeller />
            <SectionBannerMiddle />
            <Container>
                <SectionAboutPromo />
            </Container>
            {/* <SectionBlog /> */}
        </>
    );
};
export default Home;
