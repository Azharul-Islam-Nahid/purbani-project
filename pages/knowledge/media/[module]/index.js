import React from 'react';

const index = () => {
    return (
        <div className='m-auto pt-20'>
            <div className='m-auto bg-white w-8/12 h-3/6  overflow-y-auto'>
                <div className='ml-40 flex flex-col'>
                    <div>pdf shows here</div>
                    <div>
                        <video controls src='https://youtu.be/1nFLGjg9RxU' style={{ width: "80%" }} />
                    </div>
                </div>
                <div className='ml-40 flex flex-col'>
                    <div>pdf shows here</div>
                    <div>
                        <video controls src='https://youtu.be/1nFLGjg9RxU' style={{ width: "80%" }} />
                    </div>
                </div>
                <div className='ml-40 flex flex-col'>
                    <div>pdf shows here</div>
                    <div>
                        <video controls src='https://youtu.be/1nFLGjg9RxU' style={{ width: "80%" }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;