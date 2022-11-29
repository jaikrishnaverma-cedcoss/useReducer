import React, { useState } from 'react'
import Modal from './Modal';

const Main = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({})
    const data = [
        { title: "Title", starish: true, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
        { title: "Description", starish: false, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui recusandae in quisquam animi nemo repellendus autem perferendis quia vitae." },
        { title: "Handling Time", starish: true, desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam ad rerum itaque." },
        { title: "Amazon Parent Sku", starish: false, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
        { title: "Add Amazon Category", starish: false, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    ]
    const formHandler = (e) => {
        e.preventDefault();
        var data = new FormData(e.target);
        let formObject = Object.fromEntries(data.entries());
        setIsOpen(true)
        setFormData({ ...formObject })
        console.log(formObject);
    }
    return (
        <>
            {isOpen && <Modal setIsOpen={setIsOpen} formData={formData} />}
            <form className="w80" onSubmit={formHandler}>
                {
                    data.map(x => <div className="row full linebottom flexAIC flexSB p3 hp0">
                        <div className="col w30">
                            <h2>{x.title} {(x.starish) ? <span style={{ color: "red" }}>*</span> : ""} </h2>
                            <p className='langline'>{x.desc}</p>
                        </div>
                        <div className="col w70">
                            <div className="full brd line">
                                <input type="text" name={x.title} className="m2 p1 line wfill" />
                            </div>
                        </div>
                    </div>)

                }
                <div className="row full linebottom flexAIC flexSB p3 hp0">
                    <div className="col w30">
                        <h2>Barcode/GTIN Exemption</h2>
                        <p className='langline'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis recusandae laborum fugit magnam, vitae quam?</p>
                    </div>
                    <div className="col w70 line brd">
                        <div className="row flexAIC ">
                            <input type="checkbox" name="Barcode/GTIN Exemption" className="m2 p1 line " /><label className='w80' htmlFor="">Barcode/GTIN Exemption</label></div>
                    </div>
                </div>
                <div className="row full linebottom flexAIC flexSB p3 hp0">
                    <div className="col w30">
                        <h2>Image Selection</h2>
                        <p className='langline'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, ab totam? Aspernatur eius, aliquam natus libero eaque facere officia exercitationem impedit cupiditate.</p>
                    </div>
                    <div className="col w70 line brd">
                        <div className="row flexAIC "><input type="radio" checked name="Image Selection" className="m2 p1 line " value="Set product Image As shown on shopify" /><label className='w80' htmlFor="">Set product Image As shown on shopify</label></div>
                        <div className="row flexAIC "><input type="radio" name="Image Selection" className="m2 p1 line " value="Set custom Amazon images" /><label className="w80" htmlFor="">Set custom Amazon images</label></div>
                    </div>
                </div>
                <div className="row full  flexJCC  p3 hp0">
                    <button type='submit' className='p3 vp1 line brd'>SUBMIT</button>
                </div>
            </form>
        </>

    )
}

export default Main

