import "./Introduce.scss"
import video from "../../img/intro-video/video-inro.mp4"
const Introduce=()=>{
    return(
        <div className="introduce mt-8">
            <div className="left-intro">
                <video src={video} width="534" height="300" controls/>
            </div>
            <div className="right-intro">
                <div className="title-intro">
                    The Next Big Move
                </div>
                <div className="author-intro">
                    Dw x nako yabuki
                </div>
                <div className="content-intro">
                    Introducing the nakoo yabuki edit
                </div>
                <div>Explore</div>
            </div>
        </div>
    )
}
export default Introduce;