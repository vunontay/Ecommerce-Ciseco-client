import { ListBenefit } from "../../../utils/fakeData";
import { Icon } from "@iconify/react";

const ProductDetails = () => (
    <div className="product-detail-frame__benefit">
        {ListBenefit.map((item, index) => (
            <div
                className="benefit-item"
                key={index}
                style={{ background: item.color }}
            >
                <Icon width={24} height={24} icon={item.icon} />
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
            </div>
        ))}
    </div>
);

export default ProductDetails;
