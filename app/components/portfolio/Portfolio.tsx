import Card from "./card/Card"
import Card2 from "./card2/Card2"


const Portfolio = () => {

    return (
        <div id="product" className="px-[5%] py-8 grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-7">
            <div className="col-span-1 flex justify-center">
                <Card
                    img="/images/Evstand.png"
                    name="Vidyutva AC 3.3KW"
                    design1="Max current up to 32A/40A/48A"
                    design2="Max power up to 3.3KWh"
                    design3="Variants: IP54"
                    connectivity1="OCPP 1.6J"
                    connectivity2="Ethernet/WIFI/4G/Bluetooth Opt 1:Basic Opt 2:wifi+IC Card"
                    connectivity3="Three-phase input power supply of 415 VAC and 15 A"
                    connectivity4="Three outputs of 230 VAC, 15 A each"
                />
            </div>
            <div className="col-span-1 flex justify-center">
                <Card
                    img="/images/Evstand7.png"
                    name="Vidyutva AC 7.2KW"
                    design1="Constant power output voltage (V) DC300-1000V"
                    design2="Max power up to 7.2KWh"
                    design3="Variants: IP54"
                    connectivity1="Compatible with Open Charge Point Protocol (OCPP)"
                    connectivity2="Ethernet/WIFI/4G/Bluetooth Opt 1:Basic Opt 2:wifi+IC Card"
                    connectivity3="Input - 3 Phase 5 Wires(A+B+C+N+PE)"
                    connectivity4="Output current 32A"
                />
            </div>
            <div className="col-span-1 flex justify-center">
                <Card
                    img="/images/Evstand30.jpg"
                    name="Vidyutva DC 30KW"
                    design1="Max output current(A) up to ,DC400A"
                    design2="Output power up to 30KWh"
                    design3="Variants: IP54"
                    connectivity1="OCPP 1.6J"
                    connectivity2="Ethernet/WIFI/4G/Bluetooth Opt 1:Basic Opt 2:wifi+IC Card"
                    connectivity3="Input - 3 Phase 5 Wires(A+B+C+N+PE)"
                    connectivity4="Output voltage is 300-1000Vdc, constant 30kW will output"
                />
            </div>

        </div>
    )
}

export default Portfolio