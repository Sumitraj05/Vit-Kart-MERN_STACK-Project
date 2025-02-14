import { useAuth } from "../store/auth";

export const Service = () => {
    const { services } = useAuth();
    console.log(services);
    return (
        <section className="section-services">
            <div className="container">
                <h1 className="main-heading">Services</h1>
            </div>
            <div className="container grid grid-three-cols">
                {services.map((curElem, index) => {
                    const { price, description, provider, service } = curElem;

                    return (
                        <div className="card" key={index}>
                            <div className="card-img">
                                <img src="/images/design.png" alt="our service info" width="200" />
                            </div>
                            <div className="card-details">
                                <div className="grid grid-two-cols">
                                    <p>{provider}</p>
                                    <p>{price}</p>
                                </div>
                                <div>
                                    <h2>{service}</h2>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
