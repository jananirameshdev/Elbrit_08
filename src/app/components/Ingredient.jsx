import React from 'react';

function Ingredient() {
    return (
        <>
            <div className="ingredient">
                <div className="ingredient-box1">
                    <div className="ing">INGREDIENT</div>
                    <div className="bt-ing">Better Ingredients</div>
                    <div className="ing-text">
                        Only the best when you choose products offered on our platform - high-quality ingredients for high-quality products!
                    </div>
                </div>


                <div className="vitaminc">
                    <img
                        src="https://i.ibb.co/Bn1V8pf/5bb09cfba11a58d6ed328fdfb1d06a40.jpg"
                        alt="Vitamin C"
                        className="vitc"
                    />
                    <div className="vit-text">
                        <div className="vitc-text1">Vitamin C</div>
                        <div className="vitc-text2">Vitamin C as ascorbic acid</div>
                        <a href="#" className="link1">See More</a>
                    </div>
                </div>

                <div className="vitaminb3">
                    <img
                        src="https://i.ibb.co/6WzM4x6/bn2-2-jpg.png"
                        alt="Vitamin B3"
                        className="vitb3"
                    />
                    <div className="vit-text">
                        <div className="vitb3-text1">Vitamin B3</div>
                        <div className="vitb3-text2">Niacin for healthy gut and skin</div>
                        <a href="#" className="link2">See More</a>
                    </div>
                </div>
            </div>

            <div className="ing-box2">

                <div className="magnesium">
                    <img
                        src="https://i.ibb.co/Jq1wLZZ/c885e7ae-8417-43d0-ba60-b21ae81f1610.png"
                        alt="Magnesium"
                        className="mag"
                    />
                    <div className="vit-text">
                        <div className="mag-text1">Magnesium</div>
                        <div className="mag-text2">Boost energy and support muscle function</div>
                        <a href="#" className="link3">See More</a>
                    </div>
                </div>

                <div className="acid">
                    <img
                        src="https://i.ibb.co/2yZmqL3/6f735c1b-08e5-4015-869f-bbb240158aee.png"
                        alt="Hyaluronic Acid"
                        className="acd"
                    />
                    <div className="vit-text">
                        <div className="acid-text1">Hyaluronic Acid</div>
                        <div className="acid-text2">For smooth, supple, and soft skin!</div>
                        <a href="#" className="link4">See More</a>
                    </div>
                </div>

                <div className="lacto">
                    <img
                        src="https://i.ibb.co/GsVLgwq/b8a8a38b-c916-4441-aa20-53bd4f33cf23.png"
                        alt="Lactobacillus"
                        className="lac"
                    />
                    <div className="vit-text">
                        <div className="lac-text1">Lactobacillus</div>
                        <div className="lac-text2">Invigorate your gut microbiome</div>
                        <a href="#" className="link5">See More</a>
                    </div>
                </div>
                <img src="https://i.ibb.co/QXr2VSQ/div-elbzotech-banner-info-thumb.png" alt="div-elbzotech-banner-info-thumb" className='sqcir' />
            </div>
        </>
    );
}

export default Ingredient;
