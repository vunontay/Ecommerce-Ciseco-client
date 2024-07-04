import { Container } from "../../../components/shared";
import { HowItWorkList } from "../../../utils/fakeData";
import "./index.scss";
const SectionHowItWork = () => {
    return (
        <section className="how-it-work">
            <Container>
                <div className="how-it-work__list">
                    {HowItWorkList.map((item, index) => (
                        <div key={index} className="how-it-work__item ">
                            <img
                                loading="lazy"
                                src={item.img}
                                alt=""
                                decoding="async"
                            />
                            <span
                                style={{
                                    backgroundColor: item.bg_color,
                                    color: item.color,
                                }}
                            >
                                {item.step}
                            </span>
                            <h1>{item.title}</h1>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default SectionHowItWork;
