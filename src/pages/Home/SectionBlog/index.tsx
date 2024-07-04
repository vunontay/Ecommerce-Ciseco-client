import { Container } from "../../../components/shared";
import "./index.scss";
interface SectionBlogProps {
    title?: boolean;
    background?: boolean;
}
const SectionBlog = ({ title, background }: SectionBlogProps) => {
    return (
        <section className="blog">
            <Container>hi</Container>
        </section>
    );
};
export default SectionBlog;
