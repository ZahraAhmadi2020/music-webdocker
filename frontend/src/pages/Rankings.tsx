    import { motion } from 'framer-motion';

   const Rankings: React.FC = () => {
     const rankings = [
       { id: 1, artist: 'Дима Билан', song: 'Ночной хулиган', rank: 1 },
       { id: 2, artist: 'Земфира', song: 'Искала', rank: 2 },
       { id: 3, artist: 'Сергей Лазарев', song: 'Я не боюсь', rank: 3 },
       { id: 4, artist: 'Полина Гагарина', song: 'Драмы больше нет', rank: 4 },
     ];

     return (
       <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.5 }}
         className="container mx-auto px-4 py-8"
       >
         <h1 className="text-3xl font-bold text-risa-blue mb-6">Рейтинги</h1>
         <div className="grid gap-4">
           {rankings.map((item) => (
             <div
               key={item.id}
               className="animated-card bg-risa-dark/50 backdrop-blur-md p-4 rounded-lg flex items-center space-x-4"
             >
               <span className="text-2xl font-bold text-risa-blue">{item.rank}</span>
               <div>
                 <p className="text-lg text-gray-200">{item.song}</p>
                 <p className="text-sm text-gray-400">{item.artist}</p>
               </div>
             </div>
           ))}
         </div>
       </motion.div>
     );
   };

   export default Rankings;
