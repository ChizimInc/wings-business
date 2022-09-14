import { useState } from 'react'

import { SaleModalWindow } from "./SaleModalWindow"

type IProps = {
    btnTitle: string;
}

export const SaleModalButton = (props: IProps) => {
    const [buttonHandler, setButtonHandler] = useState(false);

    const styles = {
        textarea: {
            border: '2px solid #25723e', 
            margin: '20px 42px', 
            width: '82%',
            minHeight: '115px',
            paddingLeft: '5px'
        }
    }

    return (
        <>
            <div className="flex justify-center mt-8">
                <div 
                    className="cursor-pointer px-5 py-3 rounded bg-[#25723e] text-white text-base font-medium"
                    onClick={ () => setButtonHandler(true) }
                >
                    {props.btnTitle}
                </div>
            </div>
            <div 
                className={`
                    ${buttonHandler ? 'flex' : 'hidden'} z-50
                    items-center justify-center top-0 left-0 fixed overflow-auto w-full h-full
                `}
                style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
                >
                <div className='w-[500px] h-[500px] rounded p-3 bg-[#fefefe] text-base'>
                    <div className='mt-5'>
                        <div className='flex justify-center'>Fill out the application form and we will contact you</div>
                        <div className='flex justify-evenly mt-7'>
                            <input type="text" placeholder='First name' style={{ borderBottom: '2px solid #25723e' }} />
                            <input type="text" placeholder='Last name' style={{ borderBottom: '2px solid #25723e' }} />
                        </div>

                        <div className='flex justify-evenly mt-7'>
                            <input type="tel" placeholder='Phone' style={{ borderBottom: '2px solid #25723e' }} />
                            <input type="email" placeholder='Email' style={{ borderBottom: '2px solid #25723e' }} />
                        </div>

                        <div className='mt-5'>
                            <textarea style={styles.textarea} placeholder="Message here..."></textarea>
                        </div>
                    </div>
                    <div className='mt-5 flex justify-center'>
                        <div 
                            className="cursor-pointer px-5 py-3 rounded bg-[#25723e] text-white text-base font-medium"
                            onClick={ () => console.log('Send form') }
                        >
                            Submit
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}