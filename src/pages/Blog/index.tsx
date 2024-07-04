import { Container } from "../../components/shared";
import "./index.scss";
import Blog1 from "../../assets/images/blog1.webp";
import SectionAboutPromo from "../Home/SectionAboutPromo";

const Blog = () => {
    return (
        <>
            <div className="blog">
                <Container>
                    <div className="blog__main">
                        <div className="blog__main--left">
                            <img src={Blog1} alt="" loading="lazy" />
                            <div className="blog__main--left-item">
                                <h2>
                                    turpis cursus in hac habitasse platea
                                    dictumst quisque sagittis purus
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Obcaecati vero
                                    perspiciatis ullam ea? Nihil accusamus
                                    similique debitis tempore mollitia? Aperiam.
                                </p>
                                <div className="item-info">
                                    <img
                                        loading="lazy"
                                        alt=""
                                        src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FImage-1.e0d669ee.png&w=128&q=75"
                                    />
                                    <span>Nevaeh Henry</span>
                                    <span>·</span>
                                    <span>May 20, 2021</span>
                                </div>
                            </div>
                        </div>
                        <div className="blog__main--right">
                            <div className="blog__main--right-card">
                                <div className="card-left">
                                    <h2>
                                        in mollis nunc sed id semper risus in
                                        hendrerit gravida
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Obcaecati vero
                                        perspiciatis ullam ea? Nihil accusamus
                                        similique debitis tempore mollitia?
                                        Aperiam.
                                    </p>
                                    <div className="card-info">
                                        <div className="item-info">
                                            <img
                                                loading="lazy"
                                                alt=""
                                                src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FImage-1.e0d669ee.png&w=128&q=75"
                                            />
                                            <span>Nevaeh Henry</span>
                                            <span>·</span>
                                            <span>May 20, 2021</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-right">
                                    <img
                                        loading="lazy"
                                        alt=""
                                        src="https://ciseco-nextjs.vercel.app/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F7655908%2Fpexels-photo-7655908.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26w%3D1600%26lazy%3Dload&w=750&q=75"
                                    />
                                </div>
                            </div>
                            <div className="blog__main--right-card">
                                <div className="card-left">
                                    <h2>
                                        Adipiscing bibendum est ultricies
                                        integer quis auctor elit sed vulputate
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Obcaecati vero
                                        perspiciatis ullam ea? Nihil accusamus
                                        similique debitis tempore mollitia?
                                        Aperiam.
                                    </p>
                                    <div className="card-info">
                                        <div className="item-info">
                                            <img
                                                loading="lazy"
                                                alt=""
                                                src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FImage-1.e0d669ee.png&w=128&q=75"
                                            />
                                            <span>Nevaeh Henry</span>
                                            <span>·</span>
                                            <span>May 20, 2021</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-right">
                                    <img
                                        loading="lazy"
                                        alt=""
                                        src="https://ciseco-nextjs.vercel.app/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F10343244%2Fpexels-photo-10343244.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26w%3D600%26lazy%3Dload&w=750&q=75"
                                    />
                                </div>
                            </div>
                            <div className="blog__main--right-card">
                                <div className="card-left">
                                    <h2>
                                        in mollis nunc sed id semper risus in
                                        hendrerit gravida
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Obcaecati vero
                                        perspiciatis ullam ea? Nihil accusamus
                                        similique debitis tempore mollitia?
                                        Aperiam.
                                    </p>
                                    <div className="card-info">
                                        <div className="item-info">
                                            <img
                                                loading="lazy"
                                                alt=""
                                                src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FImage-1.e0d669ee.png&w=128&q=75"
                                            />
                                            <span>Nevaeh Henry</span>
                                            <span>·</span>
                                            <span>May 20, 2021</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-right">
                                    <img
                                        loading="lazy"
                                        alt=""
                                        src="https://ciseco-nextjs.vercel.app/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F13270364%2Fpexels-photo-13270364.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26w%3D1600%26lazy%3Dload&w=750&q=75"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog__ads">
                        <img
                            src="https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fads.d7dd081d.png&w=1920&q=75"
                            loading="lazy"
                            alt=""
                        />
                    </div>
                    <SectionAboutPromo />
                </Container>
            </div>
        </>
    );
};

export default Blog;
