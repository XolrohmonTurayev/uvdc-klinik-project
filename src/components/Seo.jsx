import React from 'react';
import { useTranslation } from 'react-i18next';


const Seo = ({ item }) => {
    const { i18n, t } = useTranslation();

    return (
        <section className="mt-16 flex justify-center items-center flex-col lg:flex-row gap-8" >
            <div className="bg-[#3f39cf80] max-w-[300px] md:max-w-[450px] w-full rounded-[30px] overflow-hidden border-main  border-[4px] border-solid ">
                <img src={item.img} className="w-full" alt="" />
            </div>
            <div>
                <div className="flex justify-center items-center gap-8 text-center flex-wrap lg:w-max mb-4">
                    <div className="w-32 h-28 p-1 rounded-lg flex justify-center items-center flex-col bg-main text-white">
                        <i className="fa-solid fa-trophy"></i>
                        <strong>{t(`${item.yearsOf}`)}</strong>
                        {t(`${item.experience}`)}
                    </div>
                    <div className="w-32 h-28 p-1 gap-2 rounded-lg flex justify-center items-center flex-col bg-main text-white">
                        <i className="fa-solid fa-user-nurse text-3xl"></i>
                        <span>{t(`${item.kasbi}`)}</span>
                    </div>
                    <div className="w-32 h-28 p-1 rounded-lg flex justify-center items-center flex-col bg-main text-white">
                        <i className="fa-solid fa-crown"></i>
                        {t(`${item.toifa}`)}
                    </div>
                </div>
                <div className="w-[350px] sh:w-[500px]">
                    <h2 className="text-[25px] mb-2 md:text-[30px] font-bold">{t(`${item.fio}`)}</h2>
                    <span className="text-lg">{t(`${item.kasbi}`)}</span>
                    <p className="text-[17px] mt-3 md:text-xl"><strong>{t(`${item.fi}`)}</strong> - {t(`${item.info}`)}</p>
                    <div className="text-lg font-semibold mt-3">{t(`${item.skills}`)}:</div>
                    <ul className="text-[16px] font-medium">
                        <li className="ml-4 my-3">{t(`${item.skill_1}`)}</li>
                        <li className="ml-4 my-3">{t(`${item.skill_2}`)}</li>
                    </ul>
                </div>
            </div>
        </section >
    )
}

export default Seo;