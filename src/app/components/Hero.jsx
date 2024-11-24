
import '../styles/globals.css';
function Hero() {
    return (
        <div className="hero">
            <div className="ess_vit">
                <p className='ess'>Essential Vitamins</p>
            </div>
            <div className="box">
                <div className="box1">
                    <div className="box-text1">
                        Online Medical Supplies
                    </div>
                    <div className="box-text2">
                        Get Your Vitamins
                        & Minerals
                    </div>
                    <div className="box-button">
                        <button><div className="btn-text">Explore</div></button>
                    </div>
                </div>
                <div className="box2">
                    <img src="https://i.ibb.co/zbQ56QP/f73aa0189cad884f47381dd92205b7c0.png" alt="f73aa0189cad884f47381dd92205b7c0" className='prob-image' />
                </div>
                <div className="box3">
                    <div className="box3-text1">
                        <div className="box3-img">
                            <img src="https://i.ibb.co/WzhGMf0/470ec862c44115964979f90b5cb3a94e.png" alt="470ec862c44115964979f90b5cb3a94e" className='box3-img1' />
                        </div>
                        <div className="box3-head-text">
                            <div className="box3-head">
                                Vitamins
                            </div>
                            <div className="box3-text">
                                Increased Vitamins and
                                minerals in your diet
                            </div>
                        </div>
                    </div>
                    <div className="box3-text2">
                        <div className="box3-img">
                            <img src="https://i.ibb.co/WfvGCJY/9917c0af12dcc49a9c0130d3e68e04b1.png" alt="470ec862c44115964979f90b5cb3a94e" className='box3-img1' />
                        </div>
                        <div className="box3-head-text">
                            <div className="box3-head">
                                Weight Loss
                            </div>
                            <div className="box3-text">
                                Weight Loss
                                Find scientifically proven solutions
                            </div>
                        </div>
                    </div>
                    <div className="box3-text3">
                        <div className="box3-img">
                            <img src="https://i.ibb.co/jLtfMgq/2116d12f8d75befd05e66d41425cb402.png" alt="470ec862c44115964979f90b5cb3a94e" className='box3-img1' />
                        </div>
                        <div className="box3-head-text">
                            <div className="box3-head">
                                Functional Foods
                            </div>
                            <div className="box3-text">
                                Functional Foods
                                From protein powers to baby formula
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="circle">
                <div className="circle1"></div>
                <div className="circle1"></div>
            </div>
        </div>
    )
}
export default Hero;