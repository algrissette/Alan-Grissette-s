import { Progress } from "antd";
import { useEffect, useState } from "react";

const Languages = () => {
    const [english, setEnglish] = useState(100);
    const [korean, setKorean] = useState(50);
    const [mandarin, setMandarin] = useState(30);

    return (
        <div className="flex flex-col space-y-1 pt-6">
            <div className="flex flex-col gap-y-4">
                <span className='text-Snow text-xs font-bold'>Languages</span>
                <div className="flex overflow-x-auto space-x-6">
               
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={english} size={75} />
                        <span className='text-xs font-bold text-Snow'>English</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={korean} size={75} />
                        <span className='text-xs font-bold text-Snow'>Korean</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={mandarin} size={75} />
                        <span className='text-xs font-bold text-Snow'>Mandarin</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Languages;
