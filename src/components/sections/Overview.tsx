





 import bg from "../../assets/img/overview/genplan_backround.png"; // фон от дизайнера

 const beige = "#d7b68a";

 export default function Overview() {
     return (
         <section className="relative w-full min-h-[60vh] md:min-h-[70vh] lg:min-h-[75vh] overflow-hidden">
             {/* Фон */}
             <img
                 src={bg}
                 alt="Генплан"
                 className="absolute inset-0 h-full w-full object-cover"
                 draggable={false}
             />

             {/* Контент */}
             <div className="relative z-10 h-full flex">
                 <div className="px-8 md:px-16 lg:px-24 flex flex-col justify-start mt-8 md:mt-16 lg:mt-20">
                     <h2 className="uppercase font-extrabold leading-[1.1]">
            <span
                className="block text-[30px] md:text-[46px] lg:text-[54px]"
                style={{ color: beige }}
            >
              Клубный поселок
            </span>
                         <span className="block text-white text-[28px] md:text-[42px] lg:text-[50px]">
              Нового уровня
            </span>
                     </h2>


                 </div>
             </div>
         </section>
     );
 }


