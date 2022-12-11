import React from 'react';
import '../css/app.css';
import config from "../config"

const RenderLinks=()=>{
    var Items=[];
    for (const e in config.Edit) {
        if(Array.isArray(config.Edit[e])){
            Items.push(<button className="btn" onClick={()=>document.location.href = config.Edit[e][1]}>{config.Edit[e][0]}</button>)
        } else {
            Items.push(<div className='prose'><h3>{config.Edit[e]}</h3></div>)
        } 
    }
    return Items
}

const RenderIcons=()=>{
    var Items=[];
    for (const e in config.ProfileIcons) {
        if(Array.isArray(config.ProfileIcons[e])){
            Items.push(<h2 onClick={()=>document.location.href = config.ProfileIcons[e][1]}><i className={`fa-brands fa-${config.ProfileIcons[e][0]} hover:opacity-75 hover:cursor-pointer`}></i></h2>)
        }
    }
    return Items
}

const Home = () => {
    return (
        <div className='h-screen w-screen flex items-center justify-center'>
            <div className="md:h-full md:w-full md:rounded-xl md:shadow-xl w-screen bg-base-200 ">
                <div className="flex md:flex-row md:h-max flex-col gap-3 p-5 place-items-center">
                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="grid h-full card bg-base-300 rounded-box place-items-center">
                            <div className="flex flex-col place-items-center mt-4">
                                <div className='avatar'>
                                    <div className="w-20 rounded-full">
                                        <img alt='Profil' src={config.ProfileUrl} />
                                    </div>
                                </div>
                                <p className='prose mt-1'>
                                    <h2>{config.Name}</h2>
                                </p>
                                <div className='flex flex-row prose gap-3 pt-3'>
                                    {RenderIcons()}
                                </div>
                            </div>
                        </div>
                        <div className="divider">Liste des liens</div>
                        <div className="grid h-full gap-3 p-5 card bg-base-300 rounded-box place-items-center">
                            {RenderLinks()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;