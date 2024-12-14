import bwinfoimg from "../../img/BWInfo Logo 2D.png"
import "../../css/index.css"

export default function Header()
{
    return(
        <>
        <div>
            <div className="centro">
                <a href="https://www.gwinfo.shop"><img className="img" src={bwinfoimg}/></a>
            </div>
        </div>
        </>
    )
}